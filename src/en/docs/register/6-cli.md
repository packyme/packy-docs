---
title: Configure CLI Tools
icon: mdi:console
order: 6
---

PackyAPI supports using Claude Code, Codex, and Grok Build from the command line.

::: warning No Gemini CLI Guide
Google's official **Gemini CLI** currently suffers from stability issues and is practically unusable. This documentation **no longer provides** Gemini CLI installation and configuration tutorials.

If you need to use Gemini models, please switch to tools supporting OpenAI-compatible APIs such as Cline, Roo Code, or OpenCode. See [Gemini FAQ](/en/docs/faq/Gemini.html).
:::

## Prerequisites

Before configuring CLI tools, please complete the following steps:

1. Complete the [Environment Check](/en/docs/register/5-env.html) to ensure Node.js and npm are functioning properly.
2. Complete [Installing CLI Tools](/en/docs/cli/1-env.html#_2-install-cli) to install Claude Code, Codex, or Grok Build.

## API Endpoints

After logging in to the console, you can view currently available API Endpoints on the right side of the dashboard.

![](/assets/image/QuickStart/009.webp)

- Primary Endpoint: `https://cf.api.fan` (highly stable and recommended for production).

::: warning Append `/v1` for OpenAI-Compatible Endpoints
If you are using OpenAI-compatible clients or tools (such as Codex, OpenAI SDK, Cherry Studio OpenAI-compatible provider), add `/v1` to the API address:

```bash
https://cf.api.fan/v1
```

For Claude Code and other dedicated tools, use the exact format indicated in their respective tutorials.
:::

::: important Recommended Configuration
To make configuration fast and effortless, we **strongly recommend** using the open-source project [CC-Switch](https://github.com/farion1231/cc-switch).

[CC-Switch Setup Guide for Claude Code & Codex](/en/docs/ccswitch/)

If you are an advanced user or prefer manual configuration, refer to the manual guides below. **However, we still strongly recommend CC-Switch to save significant time!**
:::

::: info Manual CLI Setup Quick Links

Please ensure prerequisites above are met before starting.

[Claude Code Setup Guide](/en/docs/cli/2-claude.html)

[Codex Setup Guide](/en/docs/cli/3-codex.html)

[Grok Build Setup Guide](/en/docs/cli/6-grok-build.html)
:::
