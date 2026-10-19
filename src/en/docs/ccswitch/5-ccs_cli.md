---
title: CC Switch CLI Guide
icon: tdesign:ai-terminal-filled
order: 5
---

::: tip
CC Switch CLI is designed for servers, SSH sessions, terminal enthusiasts, and automation workflows. If you prefer a desktop app, use the GUI CC-Switch guide instead.
:::

<div align="center">

# CC-Switch CLI

[![Version](https://img.shields.io/github/v/release/saladday/cc-switch-cli?label=version)](https://github.com/saladday/cc-switch-cli/releases/latest)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)](https://github.com/saladday/cc-switch-cli/releases)
[![Built with Rust](https://img.shields.io/badge/built%20with-Rust-orange.svg)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/saladday/cc-switch-cli/blob/main/LICENSE)

**Command-line Management Tool for Claude Code, Codex, OpenCode, and OpenClaw**

Unified management of provider profiles across AI coding CLIs with support for MCP, Skills, prompts, local proxies, and environment validation.

::: warning Gemini CLI Notice
Gemini CLI setup is no longer covered due to upstream deprecation and stability issues. Refer to [Gemini FAQ](/en/docs/faq/Gemini.html) for alternative clients.
:::

</div>

![](/assets/image/CC-Switch/018.webp)

## What is CC-Switch CLI?

CC-Switch CLI is the command-line counterpart of CC-Switch, ideal for headless servers, remote SSH machines, and automated scripts.

It provides two working modes:

- **Full Command-Line Interface (CLI)**: List, switch, inspect providers, check environment variables, synchronize MCP servers, and manage skills directly via shell commands.
- **Interactive Terminal UI (TUI)**: Run `cc-switch` to launch a rich terminal interface to configure providers, apply templates, and enter API Keys.

If this is your first time setting up PackyAPI, start with the TUI. For daily switching and automated tasks, CLI subcommands provide instant execution.

## Installation

On macOS and Linux, install with the one-line installer script:

```bash
curl -fsSL https://github.com/SaladDay/cc-switch-cli/releases/latest/download/install.sh | bash
```

The binary will be installed to `~/.local/bin`. If the command is not recognized, make sure `~/.local/bin` is in your `PATH`.

::: details Manual Installation

### macOS

```bash
curl -LO https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-darwin-universal.tar.gz
tar -xzf cc-switch-cli-darwin-universal.tar.gz
chmod +x cc-switch
sudo mv cc-switch /usr/local/bin/

# If macOS displays an unverified developer warning
xattr -cr /usr/local/bin/cc-switch
```

### Linux x64

```bash
curl -LO https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-linux-x64-musl.tar.gz
tar -xzf cc-switch-cli-linux-x64-musl.tar.gz
chmod +x cc-switch
sudo mv cc-switch /usr/local/bin/
```

### Linux ARM64

```bash
curl -LO https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-linux-arm64-musl.tar.gz
tar -xzf cc-switch-cli-linux-arm64-musl.tar.gz
chmod +x cc-switch
sudo mv cc-switch /usr/local/bin/
```

### Windows

Download `cc-switch-cli-windows-x64.zip` from [GitHub Releases](https://github.com/saladday/cc-switch-cli/releases/latest), extract `cc-switch.exe` to a directory in your PATH, or execute in PowerShell:

```powershell
.\cc-switch.exe
```

:::

## Usage Modes

### Interactive TUI Mode

```bash
cc-switch
```

Specify a target application directly:

```bash
cc-switch --app claude
cc-switch --app codex
```

### Direct CLI Commands

```bash
cc-switch provider list
cc-switch provider current
cc-switch provider switch <id>
cc-switch env tools
cc-switch env check
```

`claude` is the default app. Use `--app` to manage other CLI tools:

```bash
cc-switch --app codex provider list
cc-switch --app codex provider current
```

## Configuring PackyAPI

For first-time setup, the TUI is recommended:

::: tip
The following steps demonstrate Claude Code. For Codex, simply use `--app codex`.
:::

1. Launch the interactive interface:

```bash
cc-switch
```

2. Select `Providers` on the left menu, then choose Add Provider.

![](/assets/image/CC-Switch/019.webp)

3. Select `* PackyCode` under Preset Templates.

![](/assets/image/CC-Switch/020.webp)

4. Paste your PackyAPI token in the `API Key` field and save.

![](/assets/image/CC-Switch/021.webp)

5. Return to the list and confirm the newly added PackyCode provider is enabled.

![](/assets/image/CC-Switch/022.webp)

6. For Claude Code, go to `Settings` and confirm `Skip Claude Code First-time Installation Prompt` is enabled.

![](/assets/image/CC-Switch/023.png)

7. Launch your CLI to test:

```bash
claude
# or for codex:
codex
```

## Common Commands Reference

```bash
cc-switch                         # Launch interactive TUI
cc-switch env tools               # Inspect local CLI installations
cc-switch env check               # Inspect conflicting environment variables

cc-switch provider list           # List Claude providers
cc-switch provider current        # View active Claude provider
cc-switch provider switch <id>    # Switch active Claude provider

cc-switch --app codex provider list

cc-switch provider stream-check <id> # Validate streaming response
cc-switch provider fetch-models <id> # Fetch available remote models
cc-switch update                     # Self-update CC-Switch CLI
```

## Advanced: Delegating to AI Coding Assistants

When working inside Claude Code or Codex, you can prompt your AI assistant to manage CC-Switch CLI on your behalf:

```text
Run `cc-switch provider list` to see all configured Claude providers.
```

```text
Run `cc-switch --app codex provider current` to verify if PackyCode is currently active for Codex.
```

```text
Run `cc-switch env check --app claude` to verify no overriding environment variables exist.
```

## Troubleshooting

### Configuration changes not taking effect

Make sure the CLI configuration directory has been initialized by running:

```bash
claude --help
codex --help
```

Then switch providers once again in CC-Switch.

### Environment variables overriding settings

If system environment variables such as `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` are defined in your shell profile (`~/.zshrc`, `~/.bashrc`), they will take precedence over local configuration files.

Run diagnostic checks:

```bash
cc-switch env check --app claude
cc-switch env check --app codex
```
