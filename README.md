# Deno + Lit + Typescript Starter

Starter for using Deno & lit in Typescript with Monorepo software development strategy

## Technologies used

### Lit [\*](https://github.com/lit/lit)

a simple library for building fast, lightweight web components.

### Deno [\*](https://github.com/denoland/deno)

a modern runtime for JavaScript and TypeScript.

### Oak [\*](https://github.com/oakserver/oak)

a middleware framework for handling HTTP with Deno

### Yarn [\*](https://github.com/yarnpkg/yarn)

a package manager for JavaScript

### Lerna [\*](https://github.com/lerna/lerna)

a tool for managing JavaScript projects with multiple packages.

## Use template

[Template documention](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## Personalization

### package.json

Personalization package.json & package/server/package.json & package/client/package.json<br />

### lerna.json

Change version field in lerna.json<br />

### README.md

Change README.md & package/server/README.md & package/client/README.md<br />

### Commit changes

```bash
git add .
git commit -m 'chore: personalization starter

Source https://github.com/njfamirm/deno-lit-typescript-starter.git
'
```

## Update

First checkout ot new branch and pull starter to them

```bash
git checkout -b starter
git remote add starter https://github.com/njfamirm/deno-lit-typescript-starter.git
git pull starter main --allow-unrelated-histories
```

Second resolve conflicts [\*](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)

```bash
git checkout YOUR_BRANCH
git merge starter
git branch -d starter
```

## Hint

see A specification for adding human and machine readable meaning to commit messages on [Conventional Commits](https://www.conventionalcommits.org/en/about/)

---

### Todo

#### Feature

- [ ] Config eslint in Deno
- [ ] Add CONTRIBUTING.md file

#### Code

Please run `TODO-Highlight: List highlighted annotations` in command palette
