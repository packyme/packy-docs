---
title: OpenCode
icon: mynaui:code-hexagon-solid
---

## Introduction

![](/assets/image/Advanced/OpenCode/01.webp)

- **Overview**: An open-source AI programming assistant operable via CLI, TUI, IDE, or desktop.
- **Key Features**:
  - Native terminal and TUI interface.
  - Automatic Language Server Protocol (LSP) integration.
  - Multi-session concurrency with sharable session links.
  - Broad support for 75+ model providers.
- **Platforms**: CLI, desktop application (Beta), and IDE extensions.

## Configuration

1. Install OpenCode globally via npm:

```bash
npm install -g opencode-ai
```

2. Verify installation:

```bash
opencode
```

![](/assets/image/Advanced/OpenCode/02.webp)

3. Open **CC-Switch** (see [CC-Switch Guide](/en/docs/ccswitch/1-common.html)).

4. In the top application selector, choose `OpenCode` and click **Add Provider**.

![](/assets/image/Advanced/OpenCode/03.webp)

5. Configure provider parameters:
   - **Preset Provider**: Select `PackyCode`.
   - **Provider ID**: E.g., `PackyAPI-Codex`.
   - **Protocol Format**:
     - Claude models: `Anthropic`
     - Codex / GPT models: `OpenAI`
     - Gemini models: `Google (Gemini)`
   - **API Key**: Enter your PackyAPI key.

::: important Supported Groups for OpenCode
- **GPT**: [Codex Group](/en/docs/token/2-group.html#codex-group)
- **Claude**: [Aws-Q Group](/en/docs/token/2-group.html#aws-q-group), [Claude-officially Group](/en/docs/token/2-group.html#claude-officially-group)
- **Gemini**: [Gemini-slb Group](/en/docs/token/2-group.html#gemini-slb-group)
:::

   - **Extra Options**: Set `{"setCacheKey":true}`.
   - **Models**: Configure model names matching your chosen token group (e.g. `gpt-5.5`).
   - Click **Add**.

![](/assets/image/Advanced/OpenCode/04.webp)

6. Select the newly configured provider and click Enable.

![](/assets/image/Advanced/OpenCode/05.webp)

## Verification

1. In terminal, run:

```bash
opencode
```

2. Enter `/models` to confirm the PackyAPI channel is listed:

![](/assets/image/Advanced/OpenCode/06.webp)

3. Start your coding session!

![](/assets/image/Advanced/OpenCode/07.webp)
