---
title: Hermes
icon: game-icons:caduceus
category:
  - Third-party Integrations
  - Open Source Projects
date: 2026-06-10
---

## Project Overview

- **Overview**: [Hermes Agent](https://github.com/NousResearch/hermes-agent) is a full-featured open-source AI Agent developed by Nous Research, capable of terminal conversations and continuous background operation for Telegram, Discord, Slack, and WhatsApp.
- **Highlights**:
  - Full CLI chat experience with integrated tool calling, memory, and skills systems.
  - Supports multiple providers and any OpenAI / Anthropic-compatible API endpoint like PackyAPI.
  - One-command gateway to deploy as a social bot: `hermes gateway`.
  - All local data saved to `~/.hermes/` without telemetry.
  - Supports local terminal, Docker, and remote SSH execution backends.
- **Platforms**: Linux, macOS, WSL2 (native Windows is experimental; WSL2 recommended).

## Installation & Setup

1. Run the installation script:

::: tabs

@tab Linux / MacOS / WSL2

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

@tab Windows (PowerShell, Experimental)

```powershell
iex (irm https://hermes-agent.nousresearch.com/install.ps1)
```

:::

2. Reload your shell and verify installation:

```bash
source ~/.bashrc   # For zsh: source ~/.zshrc
hermes
```

3. Skip initial provider onboarding to configure with CC-Switch below.

## Configure with CC-Switch

1. Open **CC-Switch** (see [CC-Switch Guide](/en/docs/ccswitch/1-common.html)).
2. Switch to `Hermes` and click **Add Provider**.

![](/assets/image/Advanced/Hermes/01.webp)

3. Configure provider parameters:
   - **Preset Provider**: Select `PackyCode`.
   - **Provider ID**: E.g. `packycode` (lowercase letters, numbers, and dashes).
   - **API Mode**: `Anthropic Messages`.
   - **API Endpoint**: `https://cf.api.fan`.
   - **API Key**: Enter your PackyAPI key.

::: important Supported Groups for Hermes
- **Claude**: [Aws-Q Group](/en/docs/token/2-group.html#aws-q-group), [CC-sale Group](/en/docs/token/2-group.html#cc-sale-group), [Claude-officially Group](/en/docs/token/2-group.html#claude-officially-group), `cc-expensive`.
:::

   - **Model List**: Set default model (e.g. `claude-opus-4-8`) and display name (e.g. `Claude Opus 4.8`).
   - Click **Add**.

![](/assets/image/Advanced/Hermes/02.webp)

![](/assets/image/Advanced/Hermes/03.webp)

4. Click **Enable** on the newly created PackyCode card.

![](/assets/image/Advanced/Hermes/04.webp)

::: tip Local Configuration Files
CC-Switch writes configurations directly to `~/.hermes/.env` and `~/.hermes/config.yaml`. Experienced users can also edit these files manually.
:::

## Verification

1. Open a new terminal and run:

```bash
hermes
```

2. Run `/model` to select your configured PackyAPI model.

![](/assets/image/Advanced/Hermes/05.webp)

3. Send a prompt to verify your setup.

![](/assets/image/Advanced/Hermes/06.webp)

::: tip Common Commands Reference
| Command | Description |
| --- | --- |
| `hermes` | Launch interactive CLI |
| `hermes model` | Interactively select provider / model |
| `hermes dashboard` | Launch Web UI |
| `hermes config set KEY VALUE` | Set configuration (keys saved to `.env`) |
| `hermes gateway setup` | Configure Telegram / Discord bots |
| `hermes doctor` | Diagnose environment issues |
| `hermes update` | Update Hermes to the latest version |
:::
