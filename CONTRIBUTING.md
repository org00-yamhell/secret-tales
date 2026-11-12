# Contributing to Secret Tales

## Branches
- `main`: production code, protected
- `release/*`: release branches, protected (PR + 1 review)
- Team branches: `release/<team>/<version>`, e.g. `release/web/1.5.0`
- Anything else: free naming, e.g. `feature/<topic>`, `fix/<topic>`

## Pull requests
- One approval from `@platform-engineering` or `@web-developers`
- CI (`ci.yml`) must pass

## Deploy
- `deploy.yml` runs on the `production` environment, triggered manually
