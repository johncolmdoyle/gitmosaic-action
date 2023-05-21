# Git Mosaic

Have commits on the repository count on gitmosaic.com, th emore commits, the more of the repo owner's avatar will be displayed.

## Example usage

```yaml
on: [push]

jobs:
  mosaic:
    runs-on: ubuntu-latest
    name: GitMosaic Commit
    steps:
      - name: GitMosaic Log
        uses: johncolmdoyle/gitmosaic-action@v1.3
```
