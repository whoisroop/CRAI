# CR(AI) — Baby Cry Detection and Classification

CR(AI) detects baby-cry audio and classifies each sample into one of five categories.
The model training uses the open Donate-a-Cry corpus: https://github.com/gveres/donateacry-corpus

This repository contains a Flask backend that serves model predictions and a React frontend for the demo UI.

Adding UI snapshots
-------------------
1. Start the application:
<img width="1862" height="930" alt="image" src="https://github.com/user-attachments/assets/d5eab34f-e700-4831-aea1-ebdbc0ccc6ad" />
2. Open UI:
<img width="1862" height="845" alt="image" src="https://github.com/user-attachments/assets/049ccaa8-fe84-4c6a-a878-050beefbb755" />
3. Select & upload audio file, click on analyze:
<img width="1866" height="848" alt="image" src="https://github.com/user-attachments/assets/92636fa5-0c99-45de-863b-4670996a1e86" />

Directories
-----------
- `react project/backend/` — Flask backend, preprocessing scripts and model artifacts
- `react project/frontend/` — React single-page application

Quickstart
----------
1. Backend

	 - Create and activate a Python virtualenv (Python 3.8+ recommended).
	 - Install dependencies:

		 ```bash
		 pip install -r "react project/backend/requirements.txt"
		 ```

	 - Export the model path (default: `react project/backend/models/production/model.pkl`).

		 ```bash
		 export MODEL_PATH="react project/backend/models/production/model.pkl"
		 python "react project/backend/app.py"
		 ```

	 The backend exposes:
	 - `GET /health` — health check
	 - `GET /predict` — demo prediction flow (uses helper scripts included)
	 - `POST /predict` — send audio file upload (multipart/form-data `file`) to get a JSON prediction

2. Frontend

	 - Install dependencies and run the dev server:

		 ```bash
		 cd "react project/frontend"
		 npm install
		 npm start
		 ```

Training and dataset
--------------------
- Dataset: Donate-a-Cry corpus — https://github.com/gveres/donateacry-corpus
- Typical flow:
	1. Download dataset into `react project/backend/data/raw/`.
	2. Run preprocessing and dataset split with `split.py` and `cleanup.py`.
	3. Train using the notebook or training script (suggested: `react project/backend/notebooks/train.ipynb`).
	4. Export model to `react project/backend/models/production/` and set `MODEL_PATH` accordingly.

License
-------
This project follows the repository `LICENSE` file.

Contact
-------
If you have questions about training, dataset licensing, or deployment, open an issue.
