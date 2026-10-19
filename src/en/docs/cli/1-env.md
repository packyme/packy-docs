---
title: Environment Check (General Steps)
icon: mdi:tools
order: 1
---

### (1) Confirm Node.js Environment is Installed

1. In Windows or macOS terminal, enter the following command:

```bash
npm list -g --depth-0
```

Normally you should see output similar to below (it is completely fine if it lists nothing). If it displays "command not found", it means Node.js is not installed. Follow the [Node.js Installation Guide](https://www.runoob.com/nodejs/nodejs-install-setup.html) to install the environment required for Claude Code, Codex, and other CLI tools.

![](/assets/image/Cli/001.webp)

2. If you just finished installing Node.js, re-run the above command to confirm it executes without "command not found".

### (2) Install CLI Tools

1. Run the following command in Windows or macOS terminal to install Claude Code and Codex:

```bash
npm i -g @anthropic-ai/claude-code@latest
npm i -g @openai/codex@latest
```

![](/assets/image/Cli/002.webp)

2. If you also need Grok Build, run the official installer for your operating system:

::: tabs

@tab Windows

```powershell
irm https://x.ai/cli/install.ps1 | iex
```

@tab MacOS / Linux / WSL

```bash
curl -fsSL https://x.ai/cli/install.sh | bash
```

:::

### (3) Test Installation

> [!important]
> **This step is crucial. Please execute the commands to test, as this step will automatically generate the user configuration directories for each CLI!**

::: tabs

@tab Claude Code

1. Run in terminal. If you see the screen shown below or are prompted to select options, Claude Code is installed successfully:

```bash
claude
```

![](/assets/image/Cli/003.webp)

> [!important]
> **Step two is very important. Please click the link to configure:**

2. Click [Claude Code Cannot Connect to Anthropic Services](/en/docs/faq/CC.html#claude-code-cannot-connect-to-anthropic-services), run the fix command, and then proceed with CLI-specific configuration.

@tab Codex

Run in terminal. If you see the screen shown below, Codex is installed successfully:

```bash
codex
```

![](/assets/image/Cli/004.webp)

@tab Grok Build

Run in terminal. If it outputs the version number, Grok Build is installed successfully:

```bash
grok --version
```

:::
