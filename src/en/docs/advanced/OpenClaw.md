---
title: OpenClaw
icon: noto:lobster
---

::: tip
**This tutorial is intended for Linux servers and macOS users.**
:::

## Installation & Initialization

1. Connect to your server via SSH or open Terminal in macOS, run the one-line installer, and wait for the process to complete. When prompted, select `yes` and press Enter:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

![](/assets/image/Advanced/OpenClaw/01.webp)

2. Select `QuickStart` and press Enter.

![](/assets/image/Advanced/OpenClaw/02.webp)

3. Under provider setup, select `Skip for now` to skip initial provider setup.

![](/assets/image/Advanced/OpenClaw/03.webp)

4. Under adapter selection, choose `anthropic`.

![](/assets/image/Advanced/OpenClaw/04.webp)

5. Under model selection, select `opus-4.5`.

![](/assets/image/Advanced/OpenClaw/05.webp)

6. Select your chat/IM adapter (e.g. `Telegram` for testing).

![](/assets/image/Advanced/OpenClaw/06.webp)

7. Enter your Bot Token and press Enter.

8. Under Skills installation, select skip for now (you can install skills later via the web dashboard).

![](/assets/image/Advanced/OpenClaw/07.webp)

9. Select Hooks using Spacebar to select all, then press Enter. Wait for Gateway installation to finish.

![](/assets/image/Advanced/OpenClaw/08.webp)

10. For launch mode, select skip.

![](/assets/image/Advanced/OpenClaw/09.webp)

11. Choose `yes` to install shell completions to finish setup.

![](/assets/image/Advanced/OpenClaw/10.webp)

## Provider & Model Configuration

::: tip OpenClaw Configurator
Packy provides a helper script: [openclaw-configurator](https://github.com/packyme/openclaw-configurator) to quickly configure PackyAPI in OpenClaw.
:::

1. In SSH or macOS terminal, run the configurator:

```bash
curl -fsSL https://github.com/packyme/openclaw-configurator/releases/latest/download/index.js -o /tmp/openclaw-config.js && node /tmp/openclaw-config.js
```

2. Select `Add Provider` and choose `PackyCode`.

![](/assets/image/Advanced/OpenClaw/11.webp)

3. Taking Opus as an example, select `Claude Opus 4.5` from available models:

![](/assets/image/Advanced/OpenClaw/12.webp)

4. Enter the API token created in [Create API Token](/en/docs/register/4-token.html):

::: tip Recommended Groups for OpenClaw
- **GPT:** [Codex Group](/en/docs/token/2-group.html#codex-group), [gpt-officially Group](/en/docs/token/2-group.html#gpt-officially-group)
- **Claude:** [aws-q Group](/en/docs/token/2-group.html#aws-q-group), [aws Group](/en/docs/token/2-group.html#aws-group), [claude-officially Group](/en/docs/token/2-group.html#claude-officially-group)
- **Gemini:** [gemini-slb Group](/en/docs/token/2-group.html#gemini-slb-group)
:::

![](/assets/image/Advanced/OpenClaw/13.webp)

5. Choose `Select Model`, pick the configured model, and press Enter:

![](/assets/image/Advanced/OpenClaw/14.webp)

6. Select `Exit` to return to your console.

7. Restart the Gateway:

```bash
openclaw gateway restart
```

![](/assets/image/Advanced/OpenClaw/15.webp)

8. Open the TUI to test model responses. When satisfied, enter `/quit` to exit:

```bash
openclaw tui
```

![](/assets/image/Advanced/OpenClaw/16.webp)

## Browser Dashboard Access

1. In console, obtain the `Dashboard URL` for browser access:

::: tip Server Deployments
If running on a remote server, use Nginx or a reverse proxy with an SSL certificate.

Add the following to `gateway` in `~/.openclaw/openclaw.json`:

```json
"controlUi": {
    "allowInsecureAuth": true
}
```

![](/assets/image/Advanced/OpenClaw/17.webp)

Restart gateway afterwards:
```bash
openclaw gateway restart
```
:::

2. Open the dashboard URL with token in your browser:

![](/assets/image/Advanced/OpenClaw/18.webp)

## Configure Telegram Bot Access

1. Open your conversation with `@BotFather`, open your bot link, and start a chat.
2. The bot will return a `Pairing code`:

![](/assets/image/Advanced/OpenClaw/19.webp)

3. In your terminal, approve the pairing code:

```bash
openclaw pairing approve telegram <YOUR_PAIRING_CODE>
```

![](/assets/image/Advanced/OpenClaw/20.webp)
