---
title: GPT in Claude Code
icon: hugeicons:chat-gpt
---

::: danger Important Warning
We do not recommend routing GPT models into Claude Code. The standard, supported approach is using GPT models in Codex and Claude models in Claude Code.

This tutorial responds to experimental testing requests from advanced users. It relies on the `codex` token group and CC-Switch's local proxy router. Cache behaviors, tool parameter mapping, and MCP/Skills compatibility may exhibit unexpected issues. PackyAPI makes no uptime guarantees and assumes no liability for token consumption or configuration abnormalities resulting from this configuration.

Attempt this setup only if you understand the risks and are comfortable troubleshooting locally.
:::

## Prerequisites

This guide explains how to connect GPT models from the **codex** group into **Claude Code**. Ensure Claude Code is installed locally first (see [Claude Code Setup](/en/docs/cli/2-claude.html)).

Ensure CC-Switch is installed and running locally. This setup strictly requires CC-Switch's local proxy router capabilities.

## Create Codex Token

1. Refer to [Create API Token](/en/docs/register/4-token.html) to create a new token.
2. Set token name to `codex`, select the **`codex`** group, and copy the generated API Key.

![](/assets/image/Advanced/ChatGPTClaudeCode/01.webp)

## Setup via CC Switch

::: warning Confirm Before Proceeding
This is not a standard configuration for Claude Code. Verify results across Claude Code responses, CC-Switch request logs, and PackyAPI consumption logs.
:::

### 1. Add Provider

1. Open CC Switch, and under Claude Code, click `Add Provider`.
2. Select `PackyCode` template and enter:
   - **Website Link**: `https://www.packyapi.ai`
   - **API Key**: Your `codex` group API Key.
   - **Endpoint URL**: `https://cf.api.fan`
   - **API Format**: `OpenAI Responses API (Requires Router)`
   - **Primary Model**: E.g. `gpt-5.5`
   - **Haiku Model**: E.g. `gpt-5.4-mini`
   - **Sonnet Model**: E.g. `gpt-5.5`
   - **Opus Model**: E.g. `gpt-5.5`

![](/assets/image/Advanced/ChatGPTClaudeCode/02.webp)

::: important Model Suffix Notes
Model names above are examples; use actual model IDs from the [Codex Group](/en/docs/token/2-group.html#codex-group) available when creating your token.
:::

### 2. Enable Local Router

1. Return to the main CC-Switch interface and click the Settings gear icon in the top left.

![](/assets/image/Advanced/ChatGPTClaudeCode/03.webp)

2. Under Settings, navigate to `Router` → `Local Router`.

![](/assets/image/Advanced/ChatGPTClaudeCode/04.webp)

3. Enable `Global Router Switch`, and under `Enable Routing`, check **Claude** only (do not enable for Codex or Gemini).

![](/assets/image/Advanced/ChatGPTClaudeCode/05.webp)

4. Return to the main screen, confirm the Local Router toggle is ON, and ensure the newly added `PackyCode-codex` provider is selected.

![](/assets/image/Advanced/ChatGPTClaudeCode/06.webp)

To revert, toggle off the Local Router switch on the main screen or disable the Global Router Switch in Settings.

## Verification

1. Inspect Claude Code's `settings.json`. With the local router active, `ANTHROPIC_BASE_URL` will point to the local proxy, and `ANTHROPIC_AUTH_TOKEN` is managed by CC-Switch.

![](/assets/image/Advanced/ChatGPTClaudeCode/07.webp)

2. Open terminal, run `claude`, and send a test prompt to verify responses.

![](/assets/image/Advanced/ChatGPTClaudeCode/08.webp)

3. In CC Switch, open `Usage Stats` → `Request Logs`. It will show mapped models like `claude-opus-4-7`.

![](/assets/image/Advanced/ChatGPTClaudeCode/09.webp)

4. Check consumption logs on the PackyAPI console. If correctly routed, it will reflect the `codex` group and bill the actual GPT model (e.g. `gpt-5.5`).

![](/assets/image/Advanced/ChatGPTClaudeCode/10.webp)

## Usage Risks

::: danger Final Advisory
This experimental configuration may break at any time due to upstream CLI, routing, or endpoint format updates.

PackyAPI does not recommend running GPT models inside Claude Code for production workloads. Use it strictly for testing and protocol inspection.
:::
