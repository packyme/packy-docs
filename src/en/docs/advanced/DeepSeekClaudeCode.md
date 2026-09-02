---
title: DeepSeek in Claude Code
icon: simple-icons:deepseek
---

## Prerequisites

This guide explains how to connect PackyAPI's **deepseek-officially** group into **Claude Code**. Ensure Claude Code is installed locally first (see [Claude Code Setup](/en/docs/cli/2-claude.html)).

## Create DeepSeek Token

1. Refer to [Create API Token](/en/docs/register/4-token.html) to create a new token.
2. Set token name to `deepseek-officially`, choose the **`deepseek-officially`** group, and copy the API Key.

![](/assets/image/Advanced/DeepSeekClaudeCode/01.webp)

## Setup via CC Switch (Recommended)

::: tip Recommended
If you are unfamiliar with editing Claude Code's `settings.json`, use CC Switch.
:::

1. In CC Switch, under Claude Code, click `Add Provider`.
2. Configure provider details:
   - **Provider Name:** `PackyCode`
   - **Website:** `https://www.packyapi.ai`
   - **API Key:** Your `deepseek-officially` API Key.
   - **Endpoint:** `https://cf.api.fan`
   - **API Format:** `Anthropic Messages (Native)`
   - **Primary Model:** `deepseek-v4-pro` (or `deepseek-v4-pro[1m]` for 1M context)
   - **Thinking Model:** `deepseek-v4-pro` (or `deepseek-v4-pro[1m]`)
   - **Haiku Model:** `deepseek-v4-flash` (or `deepseek-v4-flash[1m]`)
   - **Sonnet Model:** `deepseek-v4-pro` (or `deepseek-v4-pro[1m]`)
   - **Opus Model:** `deepseek-v4-pro` (or `deepseek-v4-pro[1m]`)

![](/assets/image/Advanced/DeepSeekClaudeCode/02.webp)

::: important Model Suffix Notes
By default, do not append `[1m]`; simply use `deepseek-v4-pro` or `deepseek-v4-flash`. Only append `[1m]` if you explicitly want 1M context.
:::

## Manual Setup via `settings.json`

::: tabs

@tab Windows

The file is located at:

```bash
%userprofile%\.claude\settings.json
```

@tab MacOS

The file is located at:

```bash
~/.claude/settings.json
```

:::

Write the following into `settings.json`, replacing `{{NEW_TOKEN}}` with your API Key:

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://cf.api.fan",
    "ANTHROPIC_AUTH_TOKEN": "{{NEW_TOKEN}}",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash",
    "ANTHROPIC_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_REASONING_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro"
  }
}
```

::: warning
Ensure model IDs match supported models in your token group.
:::

## Verification

1. Open a new terminal and run `claude`.
2. Confirm the model indicator on the left shows `deepseek-v4-pro`.
3. Send a test prompt to verify normal response.

![](/assets/image/Advanced/DeepSeekClaudeCode/03.webp)

::: warning Usage Reminder
Verify functionality through direct prompts within Claude Code rather than CC Switch's connection test button.
:::
