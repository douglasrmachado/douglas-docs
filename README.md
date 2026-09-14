# Douglas Machado: Personal Portfolio

Personal portfolio site for Douglas Machado, Technical Writer, built with [Docusaurus](https://docusaurus.io/).

The site documents who I am, the kind of technical writing and Docs as Code work I do, and the stack I use, as a small, versioned Docs as Code project in its own right.

## Local development

```bash
npm install
npm run start
```

Starts a local dev server at `http://localhost:3000` with live reload.

## Build

```bash
npm run build
```

Generates a static build in the `build/` directory.

## Deployment

This repo isn't wired to a specific host yet. Once it is, update `url`, `baseUrl`, `organizationName`, and `projectName` in [docusaurus.config.ts](docusaurus.config.ts) to match, then use:

```bash
npm run deploy
```

(For GitHub Pages, set `GIT_USER=<github-username>` or `USE_SSH=true`. See the [Docusaurus deployment docs](https://docusaurus.io/docs/deployment).)
