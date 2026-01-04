# Contributing

Thanks for contributing to CR(AI)! Please follow these guidelines:

Code style
- Python: use `black` and `isort`.
- JavaScript/React: use `prettier` and follow the existing conventions in `react project/frontend`.

Branching and commits
- Use topic branches: `feature/`, `fix/`, `docs/`.
- Write meaningful commit messages and reference issue numbers where appropriate.

Tests and CI
- Add unit tests for Python utilities in `react project/backend/tests/` and React tests in
  `react project/frontend/src/__tests__/`.
- The provided GitHub Actions workflow runs basic checks; expand it as needed.

Secrets
- Do not commit secrets or `.env` files. Use environment variables and CI secrets for deployment.

Pull requests
- Ensure the PR includes a description of changes, and update documentation when behavior changes.
