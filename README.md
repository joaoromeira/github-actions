# GitHub Actions

## How it works

Run the pipeline only when needed!

Example: any update on source [apps/microservices/ms-users](https://github.com/joaoromeira/github-actions/tree/main/apps/microservices/ms-users) activates the [ms-users-tests](https://github.com/joaoromeira/github-actions/blob/main/.github/workflows/ms-users-tests.yaml) pipeline.

_If i change two sources?_

When you change one more source, the respective pipeline runs! Example:

[apps/microservices/ms-users](https://github.com/joaoromeira/github-actions/tree/main/apps/microservices/ms-users) **changed**, run [ms-users-tests](https://github.com/joaoromeira/github-actions/blob/main/.github/workflows/ms-users-tests.yaml)

[apps/microservices/ms-sales](https://github.com/joaoromeira/github-actions/tree/main/apps/microservices/ms-sales) **changed**, run [ms-sales-tests](https://github.com/joaoromeira/github-actions/blob/main/.github/workflows/ms-sales-tests.yaml)

[apps/web/shop](https://github.com/joaoromeira/github-actions/tree/main/apps/web/shop) **changed**, run [web-shop-tests](https://github.com/joaoromeira/github-actions/blob/main/.github/workflows/web-shop-tests.yaml)
