---
title: CC-Switch Guide
index: false
icon: fluent:table-switch-16-filled
category:
  - CC-Switch
date: 2025-11-23
---

## Common Steps

### Introduction to CC-Switch

<div align="center">

<h3>All-in-One Management Platform for Claude Code & Codex</h3>

[![Version](https://img.shields.io/badge/version-3.7.1-blue.svg)](https://github.com/farion1231/cc-switch/releases)
[![Trending](https://img.shields.io/badge/🔥_TypeScript_Trending-Daily%20%7C%20Weekly%20%7C%20Monthly-ff6b6b.svg)](https://github.com/trending/typescript)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)](https://github.com/farion1231/cc-switch/releases)
[![Built with Tauri](https://img.shields.io/badge/built%20with-Tauri%202-orange.svg)](https://tauri.app/)
[![Downloads](https://img.shields.io/endpoint?url=https://api.pinstudios.net/api/badges/downloads/farion1231/cc-switch/total)](https://github.com/farion1231/cc-switch/releases/latest)

<a href="https://trendshift.io/repositories/15372" target="_blank"><img src="https://trendshift.io/api/badge/repositories/15372" alt="farion1231%2Fcc-switch | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

[::mdi:clipboard-text-history::Changelog](https://github.com/farion1231/cc-switch/blob/main/CHANGELOG.md) | [::fa-solid:cloud-download-alt::Download Releases](https://github.com/farion1231/cc-switch/releases/latest)

**From Provider Switcher to Complete AI CLI Management Platform**

**Unified management of provider configurations, MCP servers, Skills extensions, and system prompts for Claude Code, Codex, and other CLI tools.**
</div>

With CC-Switch, you can:
- ✅ **One-click API Switch** - Swiftly toggle between multiple API providers.
- ✅ **Visual Configuration Management** - Manage all configurations effortlessly through an intuitive GUI.
- ✅ **Built-in PackyAPI Preset** - Pre-configured PackyAPI connection templates out of the box.
- ✅ **MCP Server Management** - Inspect and manage Model Context Protocol servers.
- ✅ **System Tray Quick Access** - Fast switching from the OS menu bar or tray.

::: tip Built-in Preset
CC-Switch has built-in PackyAPI configuration presets. No manual configuration file editing is required!
:::

### Download & Installation

::: tabs

@tab Windows
1. Visit the [GitHub Releases](https://github.com/farion1231/cc-switch/releases/latest) page.

2. Scroll down to `Assets` and select the installer for your system. We recommend downloading the standard `.msi` package.

![](/assets/image/CC-Switch/guide/001.jpg)

![](/assets/image/CC-Switch/guide/002.jpg)

3. After installation, launch CC-Switch to see the main dashboard:

![](/assets/image/CC-Switch/guide/003.jpg)

@tab MacOS
- Homebrew is the recommended installation method on macOS.

- Open your terminal and execute:
```bash
# Add the tap repository
brew tap farion1231/ccswitch

# Install CC-Switch
brew install --cask cc-switch
```

- After installation completes, launch CC-Switch from Launchpad or Applications.

![](/assets/image/CC-Switch/guide/003.jpg)

@tab Linux
> [!important]
> Replace placeholder version numbers `x.x.x` with the actual latest version from [GitHub Releases](https://github.com/farion1231/cc-switch/releases/latest).

Debian / Ubuntu:
```bash
# Download .deb package
wget https://github.com/farion1231/cc-switch/releases/latest/download/cc-switch_x.x.x_amd64.deb

# Install
sudo dpkg -i cc-switch_x.x.x_amd64.deb
```

:::

### Environment Check

::: warning
**We strongly recommend running this environment check step!**
If you already have experience and can confirm your Node.js environment, Claude Code/Codex CLI installations, and configuration folders exist, you can proceed directly to the CC-Switch setup below.

See [Environment Check Guide](/en/docs/cli/1-env.html).
:::

::: warning No Gemini CLI Tutorial
We no longer provide Gemini CLI tutorials due to upstream stability issues. If CC-Switch shows a Gemini icon, you can safely ignore it. For Gemini models, use Cline / Roo Code (see [Gemini FAQ](/en/docs/faq/Gemini.html)).
:::

## ::material-icon-theme:claude:: Claude Code Setup

1. Launch CC-Switch to view the initial screen:

![](/assets/image/CC-Switch/guide/003.jpg)

2. Select **Claude Code** in the top application switcher.

![](/assets/image/CC-Switch/guide/004.jpg)

![](/assets/image/CC-Switch/guide/005.jpg)

3. Click `+` in the top right corner and select **PackyCode**.

![](/assets/image/CC-Switch/guide/006.jpg)

4. As covered in [Create API Token](/en/docs/register/4-token.html), create a token in the **CC** group on PackyAPI and copy the API Key.

![](/assets/image/CC-Switch/guide/007.jpg)

5. Paste your API Key into the `API Key` field and click **Add**.

![](/assets/image/CC-Switch/guide/008.jpg)

6. Return to the list and click **Enable** on PackyCode. The status will show **In Use**.

![](/assets/image/CC-Switch/guide/009.jpg)

7. Open Settings in the top left, go to General, and make sure `Skip Claude Code First-time Installation Prompt` is enabled.

![](/assets/image/CC-Switch/guide/010.jpg)

8. Run `claude` in your terminal to begin chatting.

![](/assets/image/CC-Switch/guide/011.jpg)

## ::hugeicons:chat-gpt:: Codex Setup

1. Launch CC-Switch.

![](/assets/image/CC-Switch/guide/003.jpg)

2. Select **Codex** in the top application switcher.

![](/assets/image/CC-Switch/guide/012.jpg)

3. Click `+` and choose **PackyCode**.

![](/assets/image/CC-Switch/guide/013.jpg)

4. Create a token in the **Codex** group on PackyAPI and copy the API Key.

![](/assets/image/CC-Switch/guide/014.jpg)

5. Paste your API Key and click **Add**.

![](/assets/image/CC-Switch/guide/015.jpg)

6. Click **Enable** on the newly created PackyCode card.

![](/assets/image/CC-Switch/guide/016.jpg)

7. Run `codex` in your terminal to start coding.

![](/assets/image/CC-Switch/guide/017.jpg)

## Usage Query Setup

CC-Switch can display live consumed quota and remaining balance. See [Usage Query Setup](/en/docs/ccswitch/4-usage-query.html).

## ::material-icon-theme:claude:: Claude Desktop Setup

::: tip Independent from Claude Code
Claude Desktop (the GUI app) and Claude Code (the CLI/extension) are configured separately in CC-Switch.
:::

1. Select **Claude Desktop** in the left navigation.
2. Click **Import Existing Providers from Claude Code** to migrate settings with one click, or add manually using `https://cf.api.fan` and your **CC** group token.
3. Click **Enable**, then **fully restart** Claude Desktop.

See the dedicated guide: [Claude Desktop Setup](/en/docs/ccswitch/4-claude-desktop.html).

## ChatGPT & Codex App Integration

To use your Codex setup with ChatGPT desktop, see [ChatGPT Integration](/en/docs/ccswitch/6-codex-app.html).

## DeepSeek with Codex

To connect DeepSeek models into Codex CLI or ChatGPT, see [DeepSeek in Codex](/en/docs/advanced/DeepSeekCodex.html).

## CC-Switch CLI Guide

For headless servers, SSH sessions, or automating workflows via AI coding agents:

Read the full guide: [CC-Switch CLI Guide](/en/docs/ccswitch/5-ccs_cli.html).
