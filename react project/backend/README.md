# Backend — CR(AI)

This folder contains the Flask backend and supporting scripts used for preprocessing,
data split and (optionally) demo UI.

Key files
- `app.py` — Flask app that exposes `/health`, `GET|POST /predict` and a small demo flow.
- `split.py`, `cleanup.py`, `firesetup.py` — helper scripts referenced by the demo flow.
- `models/` — place exported production model artifacts here. Default path used by `app.py` is
  `models/production/model.pkl` (change via `MODEL_PATH` env var).

Running locally

1. Create and activate a virtualenv (Python 3.8+ recommended).
2. Install dependencies:

```bash
pip install -r "react project/backend/requirements.txt"
```

3. Start the app:

```bash
export MODEL_PATH="react project/backend/models/production/model.pkl"
python "react project/backend/app.py"
```

API
- `GET /health` — returns {status: ok, model_loaded: bool, model_path: string}
- `GET /predict` — runs the repository demo flow (cleanup, download, split) and attempts to call
  the model's demo predict method if present.
- `POST /predict` — accepts an audio file under the multipart field `file` and returns a JSON
  payload with `predicted_label`, `class_probabilities` and `processing_time_ms`.

Model deployment

Place your trained/exported model in `models/production/` and set the `MODEL_PATH` environment
variable to point to the file. `app.py` will try to import an in-repo `model` module first, then
fall back to loading the specified pickle file.

Notes
- The app is intentionally defensive: it will start even if no model is present and return a
  placeholder prediction. Replace the placeholder or add a `model` module that exposes a
  `predict_from_file(path)` or `predict()` function to integrate your trained model.
