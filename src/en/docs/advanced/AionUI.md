---
title: AionUI
icon: ri:ai-generate-2
---

## Introduction to AionUI

<div align="center">

<img src="/assets/image/Advanced/AionUI/aionui-banner-1%20copy.webp" alt="AionUi - Cowork with Your CLI AI Agent" style="width: 100%;" />

<h3>Cowork with Your CLI AI Agent</h3>

[![Version](https://img.shields.io/github/v/release/iOfficeAI/AionUi?style=flat-square&color=32CD32)](https://github.com/iOfficeAI/AionUi/releases)
[![License](https://img.shields.io/badge/license-Apache--2.0-32CD32?style=flat-square&logo=apache&logoColor=white)](https://github.com/iOfficeAI/AionUi/blob/main/LICENSE)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-6C757D?style=flat-square&logo=linux&logoColor=white)](https://github.com/iOfficeAI/AionUi/releases)

<a href="https://trendshift.io/repositories/15423" target="_blank"><img src="https://trendshift.io/api/badge/repositories/15423" alt="iOfficeAI%2FAionUi | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

<strong>🚀 Cowork with your AI agents: Gemini CLI, Claude Code, Codex, Qwen Code, Goose CLI, Auggie, and more</strong><br>
**User-friendly | Rich visual GUI | Multi-model support | Local data privacy**

<a href="https://github.com/iOfficeAI/AionUi/releases">
  <img src="https://img.shields.io/badge/⬇️%20Download-Latest_Release-32CD32?style=for-the-badge&logo=github&logoColor=white" alt="Download Latest Release" height="30">
</a>

</div>

**With AionUI, you get:**

- ✅ **Unified GUI** - Automatically detects local CLI tools to provide a unified graphical interface → [Multi-Agent Setup Guide](https://github.com/iOfficeAI/AionUi/wiki/ACP-Setup-Chinese)
- ✅ **Multi-session Concurrency** - Open multiple conversations simultaneously with isolated context.
- ✅ **Local Data Security** - Conversations and files are stored in a local SQLite database on your device.
- ✅ **9+ Format Previews** - Real-time previews for PDF, Word, Excel, PPT, Code, Markdown, Images, HTML, and Diffs.
- ✅ **Smart File Management** - AI-powered file organization and batch renaming → [File Management Guide](https://github.com/iOfficeAI/AionUi/wiki/file-management)
- ✅ **AI Image Generation** - Supports multiple image generation models → [Image Generation Tool Guide](https://github.com/iOfficeAI/AionUi/wiki/AionUi-Image-Generation-Tool-Model-Configuration-Guide-Chinese)
- ✅ **WebUI Remote Access** - Access from any device or mobile browser → [WebUI Setup Guide](https://github.com/iOfficeAI/AionUi/wiki/WebUI-Configuration-Guide-Chinese)
- ✅ **Flexible Model Switching** - Toggle freely between Gemini, Claude, OpenAI, Qwen, Ollama, and more.
- ✅ **Free & Open Source** - Apache-2.0 license.

<div align="center">

<img src="/assets/image/Advanced/AionUI/webui%20banner.webp" alt="AionUI multi-device synchronization" width="800">
<em>AionUI WebUI Demo</em>

</div>

---

## Download & Installation

::: tabs

@tab Windows
1. Visit the [GitHub Releases](https://github.com/iOfficeAI/AionUi/releases) page.
2. Download the Windows installer (`.exe` file).
3. Run the installer and complete the setup.

@tab MacOS
#### Method 1: Via Homebrew (Recommended)

```bash
brew install aionui
```

#### Method 2: Manual Package Download
1. Visit [GitHub Releases](https://github.com/iOfficeAI/AionUi/releases).
2. Download the `.dmg` or `.zip` file for macOS (supports both Intel and Apple Silicon).
3. Follow the standard installation prompts.

@tab Linux
```bash
# Download .deb package (replace x.x.x with actual version)
wget https://github.com/iOfficeAI/AionUi/releases/latest/download/AionUi-x.x.x-linux-amd64.deb

# Install
sudo dpkg -i AionUi-x.x.x-linux-amd64.deb
```

Visit the [GitHub Releases](https://github.com/iOfficeAI/AionUi/releases) page to download `.AppImage` or `.deb` packages for other Linux distributions.

---
:::

## Configuration

### 1. Get API Key

Refer to [Create API Token](https://www.packyapi.ai/) to create an API token for your desired group:

- **Gemini** → Create token under the **Gemini** or **Gemini-slb** group.
- **Claude** → Create token under the **CC** group.
- **Codex** → Create token under the **Codex** group.

### 2. Configure LLM in AionUI

1. Open AionUI, go to **Settings → LLM Configuration → Add Model**.

<p align="center">
  <img src="/assets/image/Advanced/AionUI/Setting_LLM.webp" alt="AionUI LLM Settings" width="800">
</p>

2. Select Platform: **Custom**.

<p align="center">
  <img src="/assets/image/Advanced/AionUI/customizellm1.webp" alt="AionUI Custom Platform" width="800">
</p>

3. Enter the API Key, Endpoint, and model name according to the configurations below:

<p align="center">
  <img src="/assets/image/Advanced/AionUI/inputinfo2.webp" alt="AionUI Configuration Input" width="800">
</p>

4. Save and return to the chat view to start using your models.

<p align="center">
  <img src="/assets/image/Advanced/AionUI/newchat.webp" alt="AionUI Chat Interface" width="800">
</p>

---

## Model Profiles

::: tabs

@tab Gemini
Use your **Gemini** group API Key:

- **API Key**: Token from PackyAPI
- **Endpoint**: `https://cf.api.fan`
- **Model**: PackyAPI Gemini model ID

@tab Claude
Use your **CC** group API Key:

- **API Key**: Token from PackyAPI
- **Endpoint**: `https://cf.api.fan`
- **Model**: PackyAPI Claude model ID

@tab Codex
Use your **Codex** group API Key:

- **API Key**: Token from PackyAPI
- **Endpoint**: `https://cf.api.fan/v1`
- **Model**: PackyAPI Codex model ID

:::

---

## FAQ & References
- [❓ FAQ & Troubleshooting](https://github.com/iOfficeAI/AionUi/wiki/FAQ-Chinese)
- [🔧 Configuration Guides](https://github.com/iOfficeAI/AionUi/wiki/Configuration-Guides-Chinese)
