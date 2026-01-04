from flask import Flask, render_template, request, jsonify
import pickle
import logging
import os
import time
import tempfile
from pathlib import Path

# project helper modules (may exist in repository)
import firesetup
import split
import cleanup

# NOTE: some projects include a `model` module; we will attempt to import it
try:
    import model as local_model_module
except Exception:
    local_model_module = None

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)


class ModelWrapper:
    """Wrapper that attempts to load a model from either a `model` module
    or a pickle file provided by the MODEL_PATH environment variable.

    The wrapper exposes `predict_from_file(path)` which will try several
    common interfaces and fall back to a safe dummy result if nothing is
    available. This allows the app to start even when the model artifact
    isn't present yet.
    """

    def __init__(self, model_path: str | None = None):
        self.model = None
        self.model_path = model_path or os.environ.get("MODEL_PATH", "models/production/model.pkl")
        self._load()

    def _load(self):
        # Prefer an imported module first
        if local_model_module is not None:
            logging.info("Using imported `model` module from repository.")
            self.model = local_model_module
            return

        p = Path(self.model_path)
        if p.exists():
            try:
                with open(p, "rb") as fh:
                    self.model = pickle.load(fh)
                logging.info("Loaded model from pickle: %s", str(p))
            except Exception as e:
                logging.exception("Failed to load pickled model: %s", e)
        else:
            logging.warning("No model found at %s; predictions will return placeholder output.", self.model_path)

    def predict_from_file(self, filepath: str) -> dict:
        """Predict using available model interfaces.

        Returns a dict with keys: predicted_label and class_probabilities (list).
        """
        start = time.time()
        # If the model exposes a convenience method, try it:
        try:
            if self.model is None:
                raise RuntimeError("no model loaded")

            # Common custom interfaces
            if hasattr(self.model, "predict_from_file"):
                res = self.model.predict_from_file(filepath)
                # Expect either dict or (label, probs)
                if isinstance(res, dict):
                    res["processing_time_ms"] = int((time.time() - start) * 1000)
                    return res
                if isinstance(res, (list, tuple)) and len(res) >= 2:
                    return {
                        "predicted_label": res[0],
                        "class_probabilities": res[1],
                        "processing_time_ms": int((time.time() - start) * 1000),
                    }

            # Generic scikit-learn-like objects may expose predict / predict_proba
            if hasattr(self.model, "predict"):
                # Some models accept raw path, some accept features; try to call with path
                try:
                    preds = self.model.predict(filepath)
                    probs = None
                    if hasattr(self.model, "predict_proba"):
                        probs = self.model.predict_proba(filepath)
                    return {
                        "predicted_label": preds,
                        "class_probabilities": probs if probs is not None else [],
                        "processing_time_ms": int((time.time() - start) * 1000),
                    }
                except Exception:
                    # fallback to calling predict on an array-like -- we can't guess features here
                    logging.exception("Model `predict` call failed when passed file path; no further fallback.")

        except Exception:
            logging.exception("Prediction failed")

        # Fallback: return neutral placeholder
        return {
            "predicted_label": "unknown",
            "class_probabilities": [0.0, 0.0, 0.0, 0.0, 0.0],
            "processing_time_ms": int((time.time() - start) * 1000),
        }


model_wrapper = ModelWrapper()


@app.route("/")
def hello_world():
    return "<p>CR(AI) backend. See /health and POST /predict</p>"


@app.route("/health", methods=["GET"])
def health():
    """Basic health check including model availability."""
    model_loaded = model_wrapper.model is not None
    return jsonify({
        "status": "ok",
        "model_loaded": model_loaded,
        "model_path": model_wrapper.model_path,
    })


@app.route("/predict", methods=["GET", "POST"])
def predict():
    """Demo and API endpoint.

    - GET: runs the repository demo flow (cleanup, download, split) and then calls
      the model predict function if available.
    - POST: accepts a file upload under 'file' (multipart/form-data) and returns
      a JSON prediction.
    """
    try:
        if request.method == "GET":
            # existing demo flow preserved
            try:
                cleanup.clean()         # delete saved files if any
            except Exception:
                logging.exception("cleanup.clean() failed")
            try:
                firesetup.download()    # download the audio file used in demo
            except Exception:
                logging.exception("firesetup.download() failed")
            try:
                split.snippet()         # split the audio file into snippet for prediction
            except Exception:
                logging.exception("split.snippet() failed")

            # The old code called model.predict() without args — attempt to call that
            try:
                if hasattr(model_wrapper.model, "predict"):
                    pval = model_wrapper.model.predict()
                    return jsonify({"value": str(pval)})
            except Exception:
                logging.exception("model.predict() demo call failed")

            # fallback
            return jsonify({"value": "no-demo-prediction-available"})

        # POST handling: accept file upload
        if "file" not in request.files:
            return jsonify({"error": "no file provided"}), 400

        f = request.files["file"]
        # Save to a temporary file and run prediction
        with tempfile.NamedTemporaryFile(delete=True, suffix=".wav") as tmp:
            f.save(tmp.name)
            res = model_wrapper.predict_from_file(tmp.name)
            return jsonify(res)

    except Exception:
        logging.exception("Unhandled error in /predict")
        return jsonify({"error": "internal error"}), 500


@app.route("/api", methods=["GET"])
def api():
    logging.info("Fetch: API")
    return jsonify({
        "id": 0,
        "name": "Roop"
    })


if __name__ == '__main__':
    # Production servers should use gunicorn/uvicorn; this is for local development only.
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=True)