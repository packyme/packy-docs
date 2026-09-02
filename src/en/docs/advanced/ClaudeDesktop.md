---
title: Claude Desktop
icon: material-icon-theme:claude
---

## Download

1. Visit the [Claude Desktop Download Page](https://claude.com/download).

![](/assets/image/Advanced/ClaudeDesktop/01.webp)

2. Under the Desktop section, download the installer for your operating system.

## Installation

::: tabs

@tab Windows

1. Installing on Windows requires contacting Anthropic servers. If you encounter network errors:

![](/assets/image/Advanced/ClaudeDesktop/02.webp)

2. Open `cmd` in the folder where the installer is located.

3. Determine your local proxy port (e.g. `7897` for Clash Verge):

![](/assets/image/Advanced/ClaudeDesktop/03.webp)

4. Run the installer through proxy variables:

```bash
set HTTP_PROXY=http://127.0.0.1:7897
set HTTPS_PROXY=http://127.0.0.1:7897
"Claude Setup.exe"
```

![](/assets/image/Advanced/ClaudeDesktop/04.webp)

![](/assets/image/Advanced/ClaudeDesktop/05.webp)

@tab MacOS

1. On macOS, run the standard installer directly.

![](/assets/image/Advanced/ClaudeDesktop/06.webp)

:::

## Bypass Login & Enable Developer Mode

::: tip Prefer Automatic Configuration?
If you have [CC Switch](/en/docs/ccswitch/README.html) installed, you can use its built-in Claude Desktop panel to configure endpoints and import keys automatically (see [CC Switch Claude Desktop Setup](/en/docs/ccswitch/4-claude-desktop.html)).
:::

1. Open Claude Desktop to the initial sign-in page:

![](/assets/image/Advanced/ClaudeDesktop/07.webp)

2. Enable Developer Mode:

::: tabs

@tab Windows

1. Click the email input field to focus, use Tab to highlight the top menu, and press Enter through `Help → Troubleshooting → Enable developer mode`.

![](/assets/image/Advanced/ClaudeDesktop/08.webp)

2. Toggle `Enable developer mode` ON.

![](/assets/image/Advanced/ClaudeDesktop/09.webp)

@tab MacOS

1. In the top application menu bar, navigate to `Help → Troubleshooting → Enable developer mode`.

![](/assets/image/Advanced/ClaudeDesktop/10.webp)

2. Toggle `Enable developer mode` ON.

![](/assets/image/Advanced/ClaudeDesktop/09.webp)

3. Wait for the app to restart.

:::

## Configuring Third-Party Gateway

1. Open the menu again and navigate to `Developer → Configure third-party inference`.

![](/assets/image/Advanced/ClaudeDesktop/11.webp)

2. In **Gateway base URL**, enter `https://cf.api.fan`.
3. Change **Gateway auth scheme** to `x-api-key`.
4. In **Gateway API key**, enter your PackyAPI **CC** group API Key.
5. Check the **Skip login-mode chooser** option at the bottom.

![](/assets/image/Advanced/ClaudeDesktop/12.webp)

6. Click the **Apply locally** button in the lower right.
7. Start chatting!

::: warning Don't Rely on the "Test Connection" Button
This configuration operates in third-party gateway mode rather than official Anthropic account auth. There is no need to wait for a "connection test passed" alert. After clicking `Apply locally`, send a test prompt directly; if you receive a reply, the configuration is working.
:::

::: tip Note
When creating a new conversation and sending the first message, a small background call may generate a title for the session (see [Claude Code FAQ](/en/docs/faq/CC.html)).
:::

![](/assets/image/Advanced/ClaudeDesktop/13.webp)
