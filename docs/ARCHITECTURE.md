# Architecture

This document explains the high-level architecture and data flow for CR(AI).

Components

- Backend (Flask) — serves inference endpoints and contains preprocessing scripts. It loads
  a production model artifact and exposes `/predict` for online inference.
- Frontend (React) — a single-page app used for demo and visualization of predictions.
- Dataset — Donate-a-Cry corpus (external). Preprocessing scripts convert raw audio into
  features (MFCC / spectrogram) stored under `backend/data/processed/`.

Data flow

1. Raw audio is downloaded/placed in `backend/data/raw/`.
2. Preprocessing scripts (`split.py`, `cleanup.py`) produce snippets and features in
   `backend/data/processed/`.
3. Training code (not included here) consumes processed features and saves checkpoints.
4. An exported production model is saved to `backend/models/production/` and referenced by
   `MODEL_PATH` in the backend.
5. The backend loads the model and serves predictions via `/predict`.

Retraining checklist

- Verify dataset licensing and attribution.
- Run data validation (class balance, corrupted files).
- Train on a dedicated machine (GPU recommended). Track metrics and save versioned exports.
- Update `MODEL_PATH` and restart the backend.
