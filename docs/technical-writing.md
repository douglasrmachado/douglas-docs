# Technical Writing

My work involves creating and maintaining technical documentation for developers and other technical users: the kind of documentation people reach for when they're trying to get something working, not when they're browsing casually.

## Areas I work with

- **APIs**: reference documentation, endpoint descriptions, authentication flows, and error handling.
- **SDKs**: installation guides, usage examples, and code samples in the languages a library supports.
- **SaaS products**: user-facing and developer-facing documentation for products that ship continuously.
- **Developer documentation**: quickstarts, guides, and conceptual docs that help developers build a mental model, not just copy-paste code.
- **Documentation reviews**: checking docs for technical accuracy, structure, and clarity, whether they're mine or a teammate's.
- **Documentation automation**: reducing manual work in how docs are written, checked, and published (linting, link checking, generated reference docs, CI checks).

## The kind of docs I write

Different readers show up with different questions. I try to match the format to the task instead of writing one long page for everything:

| Type | Audience | Goal |
| --- | --- | --- |
| API reference | Developers integrating an API | Look up an endpoint, parameter, or response fast |
| Quickstart | New developers | Get from zero to a working request in minutes |
| SDK guide | Developers using a client library | Install, authenticate, and use the core methods |
| Conceptual guide | Developers evaluating or architecting a solution | Understand how the system behaves, not just how to call it |
| Release notes / changelog | Existing users | Know what changed and what to check before upgrading |

## What I care about

Good technical writing isn't about volume, it's about whether the reader can stop reading and start doing. I try to:

- Write for the specific reader's task, not for completeness on its own.
- Keep a consistent structure so docs are scannable, not just readable.
- Verify examples actually run before they ship.
- Treat documentation issues, like a wrong parameter or a broken link, with the same seriousness as a code bug.

This site is itself built and maintained the way I approach documentation work. See [Docs as Code](/docs/docs-as-code).
