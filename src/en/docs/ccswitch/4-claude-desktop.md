---
title: Claude Desktop Setup
icon: material-icon-theme:claude
order: 4
---

::: tip Distinct from Claude Code Configuration
Claude Desktop (the GUI desktop client) and Claude Code (the CLI/VSCode extension) have separate configuration profiles in CC-Switch. Their configuration files are independent and must be configured individually. This page covers the desktop client.
:::

## Step 1: Switch to Claude Desktop in CC-Switch

Open CC-Switch, and select **Claude Desktop** in the left application navigation.

If you don't see this option, check `Settings → General → App Visibility` to ensure it is not hidden.

## Step 2: Import or Add Providers

### Option 1 (Recommended): One-Click Import from Claude Code

If you have already configured [Claude Code Setup](/en/docs/ccswitch/2-claude.html) in CC-Switch, when you first open the Claude Desktop panel, click **"Import Existing Providers from Claude Code"**. This brings over your settings without needing to re-enter API endpoints and keys.

::: important Verify Settings After Import
- Existing providers with identical IDs will not be overwritten.
- Providers where model mapping cannot be inferred will be skipped and must be manually configured.
- After importing, review model mappings for each provider, especially non-Claude models (such as Kimi, DeepSeek, etc.).
:::

### Option 2: Manual Addition

Click the `+` button in the top right to add PackyAPI as a provider:

1. **Provider Name**: Enter any name (e.g., `PackyCode`).
2. **API Endpoint**: Enter `https://cf.api.fan`.
3. **API Key**: Enter your PackyAPI **CC** group token (refer to [Create API Token](/en/docs/register/4-token.html)).
4. Keep "Requires Model Mapping" turned off for standard use.

## Step 3: Enable and Restart

Click **Enable** on the provider card.

::: warning Completely Restart Claude Desktop
Claude Desktop **does not hot-reload configurations**. After switching providers in CC-Switch, you must completely quit Claude Desktop (quit the application from the dock/tray, not just closing the window) and reopen it for changes to take effect.
:::

## Ignore "Test Connection"

::: danger Do Not Click Test Connection
PackyAPI's CC group operates via gateway proxy mode and does not match Anthropic's proprietary login validation tests. Clicking connection tests in CC-Switch will report failure, but actual chat requests will work perfectly.

**Conclusion: Skip the test button and use the application directly.**
:::

## Dialog Warnings on Startup: Ignore and Start Chatting

After fully restarting Claude Desktop, two warning banners may appear in the conversation view:

- A warning about configuration verification.
- A warning regarding network/connection status.

These are typical false alarms triggered by the local gateway forwarding. As long as your messages send and receive replies normally, your configuration is working as intended.

::: tip Verification Standard
**Can you send a prompt and receive a response?** If yes, the setup is successful. If not, follow the checklist below.
:::

Troubleshooting checklist if no reply is received:
- Ensure CC-Switch is actively running.
- Verify API Key and Endpoint URLs are entered correctly.
- Ensure model mapping is not left empty.
- Confirm you fully quit and restarted Claude Desktop.

## Additional Notes

- Linux support for injecting third-party configs into Claude Desktop is currently not available.
- Configuration files are managed automatically by CC-Switch; manual editing is discouraged.
- To switch back to official Anthropic login, enable `Claude Desktop Official` in CC-Switch (no API Key required).
