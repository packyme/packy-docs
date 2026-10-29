---
title: Check Your Environment
icon: mdi:tools
order: 5
---

Before configuring Claude Code, Codex, or Grok Build, make sure Node.js is installed correctly.

## Check Node.js

Run this command in a Windows, macOS, or Linux terminal:

```bash
npm list -g --depth=0
```

If the command runs successfully, Node.js and npm are available. It is fine if no global packages are listed.

If the terminal reports that the command cannot be found, install Node.js or fix the system environment variables, then run the check again.

::: warning Complete this check first
CLI tools depend on Node.js and npm. An incomplete environment can cause Claude Code, Codex, or other tools to fail during installation.
:::

Continue with [CLI configuration](/en/docs/register/).
