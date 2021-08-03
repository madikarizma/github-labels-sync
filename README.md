# GitHub Labels Sync

Managing default repository labels via GitHub is time-consuming and inefficient. This project accomplishes 2 things:

1. Define labels for single or groups of repositories in one place.
2. Run a single command to sync changes with each target repository.

## Getting started

### Generate a new GitHub access token

1. You must [generate a GitHub access token](https://github.com/settings/tokens) to access the repositories targeted by this project.
2. You must have permission to make changes to any repositories you reference in your `config.json`.

### Create a `.env` file

Add the following line to your `.env` file and replace `xxxxx` with your generated GitHub access token.

```
GITHUB_ACCESS_TOKEN="xxxxx"
```

Please note: while `.env` is already included in the `.gitignore` file, it important to remember this file should never be committed. Since your GitHub access token is considered sensitive information, committing it would create a security vulnerability for the company.

### Install dependencies

```
yarn
```

### Configure labels

With `config.json` you can as many collections of labels as you'd like and have them sync with as many repositories as you'd like.

#### Example `config.json`

```JSON
[
  {
    "repos": [
      "winstonproject/repository-1",
      "winstonproject/repository-2",
      "winstonproject/repository-3"
    ],
    "labels": [
      {
        "name": "status: ready",
        "description": "Ready for development",
        "color": "15803D",
        "aliases": []
      },
      {
        "name": "status: in progress",
        "description": "Development has started",
        "color": "4F46E5",
        "aliases": []
      },
      {
        "name": "status: blocked",
        "description": "Blocked on some issue",
        "color": "DC2626",
        "aliases": []
      },
      {
        "name": "status: released",
        "description": "Released to production",
        "color": "2563EB",
        "aliases": []
      }
    ]
  },
  {
    "repos": [
      "winstonproject/repository-4"
    ],
    "labels": [
      {
        "name": "status: todo",
        "description": "Waiting to start",
        "color": "15803D",
        "aliases": []
      },
      {
        "name": "status: in progress",
        "description": "Work has begun",
        "color": "4F46E5",
        "aliases": []
      },
      {
        "name": "status: done",
        "description": "Work is done",
        "color": "2563EB",
        "aliases": []
      }
    ]
  }
]
```

### Sync labels

```
yarn sync
```
