# Docs as Code

Docs as Code is an approach where documentation is managed using the same workflows and tools software engineers use to manage code, instead of a separate wiki, shared doc, or CMS disconnected from the product.

In practice, that means documentation is:

- **Version-controlled**: every change has a history and an author.
- **Reviewed**: changes go through pull requests, not silent edits.
- **Tested**: links, code samples, and formatting can be checked automatically.
- **Deployed like software**: a merge can trigger a build and publish, not a manual copy-paste to a CMS.

## My workflow

- **Git**: for version history and branching.
- **GitHub**: for hosting, issues, and collaboration.
- **Branches**: one per change, mirroring how engineers ship features.
- **Pull requests**: for proposing and discussing documentation changes.
- **Reviews**: technical and editorial review before merging.
- **Automated checks**: catching broken links, formatting issues, and build errors before they reach production.
- **Documentation deployment**: publishing docs the same way the product itself gets deployed.

## A typical Docs as Code toolchain

Beyond my own workflow above, Docs as Code as a discipline usually leans on a few categories of tooling:

- **Linting**: style and prose checks (e.g. Vale, markdownlint) to catch inconsistent terminology or formatting before review.
- **Link checking**: automated validation that internal and external links resolve, so docs don't quietly rot.
- **Reference generation**: API docs generated from a source of truth like an OpenAPI spec, so the reference stays in sync with the actual API.
- **Static site generators**: tools like Docusaurus, Mintlify, or ReadMe that turn versioned Markdown/MDX into a browsable, searchable site.
- **CI/CD**: pipelines (e.g. GitHub Actions) that run the checks above and deploy docs automatically on merge.

## Why it matters

Treating docs as code keeps them close to the product they describe. When docs live next to the codebase and go through the same review process, they're more likely to get updated when the product changes, instead of drifting out of date in a separate system nobody remembers to check.

This site is a small example of that in practice: it's a [Docusaurus](https://docusaurus.io/) project, built and versioned like any other piece of software. See [Technical Stack](/docs/technical-stack) for the tools behind it.
