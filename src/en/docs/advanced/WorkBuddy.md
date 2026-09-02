---
title: WorkBuddy
icon: /assets/icon/workbuddy.png
category:
  - Third-party Integrations
date: 2026-07-24
---

## Product Overview

[WorkBuddy](https://www.codebuddy.cn/work/) is Tencent's full-scenario AI workspace platform. Users can issue tasks in natural language, and the AI agent automatically breaks down workflows, executes tools, and delivers documents, spreadsheets, presentations, and code.

Key features:
- Cross-scenario collaboration across operations, design, data analysis, and engineering.
- Available on Desktop, IM, and mini-programs.
- Full support for MCP servers and custom skills.
- Direct graphical setup for custom OpenAI-compatible API providers.

For more details, see the [WorkBuddy Official Documentation](https://www.workbuddy.cn/docs/workbuddy/Overview) and [Model Configuration Guide](https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Model).

## Configuring PackyAPI

### Prerequisites

1. Install and sign in to WorkBuddy.
2. Refer to [Create API Token](/en/docs/register/4-token.html) to create an API token.
3. Choose a group that supports third-party integrations:
   - `cc-sale`
   - `deepseek-officially`
   - `gemini-officially`
   - `grok-officially`
   - `mimo-officially`
   - `minimax-officially`
   - `zai-officially`
   - `hunyuan-officially`
   - `bailian`

::: important Model Group Matching
The token group determines available models. The model name configured in WorkBuddy must match the exact model ID from the group in the [Model Marketplace](/en/docs/token/1-intro.html).

Keep your API keys confidential; never share unmasked keys in screenshots or recordings.
:::

### Setup Steps

1. In WorkBuddy, click your account in the lower left and select **Settings**.

![](/assets/image/Advanced/WorkBuddy/01.jpg)

2. Select **Models** from the left navigation.

![](/assets/image/Advanced/WorkBuddy/02.jpg)

3. Under Custom Models, click **Add Model** in the top right.

![](/assets/image/Advanced/WorkBuddy/03.jpg)

4. Under Provider, select **Custom**.

![](/assets/image/Advanced/WorkBuddy/04.jpg)

5. Fill in the parameters:
   - **Endpoint URL**: `https://cf.api.fan/v1`
   - **API Key**: Your PackyAPI key.
   - **Model Name**: Model ID from your token group (e.g. `claude-opus-4-8` or `deepseek-v3`).
   - **Advanced Capabilities**: Enable tool calling, thinking mode, and thought toggling if supported by the model.
   - Click **Save**. Settings are written locally to `~/.workbuddy/models.json`.

![](/assets/image/Advanced/WorkBuddy/05.jpg)

6. Select the model in the chat interface and start conversing.

![](/assets/image/Advanced/WorkBuddy/06.jpg)
