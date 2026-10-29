---
title: Common Steps
icon: fluent:table-switch-16-filled
order: 1
---

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
