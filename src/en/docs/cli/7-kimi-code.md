---
title: Kimi Code Setup
icon: material-symbols:terminal
order: 7
---

Kimi Code is Moonshot AI's terminal coding assistant. This tutorial covers basic installation, configuration, and testing with PackyAPI endpoints.

::: info Official Documentation
For advanced features like MCP, Skills, and Plugins, refer to the official documentation:
- [MCP](https://www.kimi.com/code/docs/kimi-code-cli/customization/mcp.html)
- [Agent Skills](https://www.kimi.com/code/docs/kimi-code-cli/customization/skills.html)
- [Plugins](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html)
:::

::: warning Do Not Expose API Keys
Replace placeholders like `sk-xxx` with your own API tokens. Never commit API keys to version control.
:::

## Installing Kimi Code

Kimi Code supports installation via shell script or npm. We recommend npm:

1. Verify Node.js `22.19.0`+ is installed:

```bash
node --version
```

2. Install Kimi Code globally via npm:

```bash
npm install -g @moonshot-ai/kimi-code@latest
```

![Installing Kimi Code via npm](/assets/image/Kimi-Code/001.jpg)

3. Verify installation:

```bash
kimi --version
```

## Preparing Tokens and Models

1. Check supported protocols in the [Model Marketplace](/en/docs/token/1-intro.html).
2. Create an API token matching your desired model in [Create API Token](/en/docs/register/4-token.html).
3. Choose one of the three protocols below (do not combine all three simultaneously).

::: important Token Group Compatibility
`CC` and `claude-sale` groups cannot be used for third-party CLI tools. Use open third-party groups like `kimi-officially` or `kimi-sale`.
:::

![Model endpoint compatibility in Model Marketplace](/assets/image/Kimi-Code/002.jpg)

## Open Configuration File

Kimi Code uses `config.toml`. Run `kimi` once to generate default directories, or create them manually:

::: tabs

@tab Windows

Press `Win + R` and enter:

```text
%USERPROFILE%\.kimi-code
```

Open or create `config.toml`.

@tab macOS / Linux / WSL

The configuration file is located at:

```text
~/.kimi-code/config.toml
```

If the folder is missing, create it:

```bash
mkdir -p ~/.kimi-code
```

:::

## Configuring PackyAPI Gateway

Choose one of the following three protocols:

### Method 1: OpenAI Chat Completions

For models supporting OpenAI Chat Completions (`/v1/chat/completions`):

```toml
default_model = "packy_chat"

[providers.packy_chat]
type = "openai"
base_url = "https://cf.api.fan/v1"
api_key = "sk-xxx"

[models.packy_chat]
provider = "packy_chat"
model = "kimi-k1.5"
max_context_size = 200000
```

`base_url` must end in `/v1`. Do not append `/chat/completions`.

![Kimi Code OpenAI Chat Completions configuration](/assets/image/Kimi-Code/003.jpg)

Test conversation in terminal:

![Testing Kimi Code with OpenAI Chat Completions](/assets/image/Kimi-Code/004.jpg)

### Method 2: OpenAI Responses

For models supporting OpenAI Responses API (`/v1/responses`):

```toml
default_model = "packy_responses"

[providers.packy_responses]
type = "openai_responses"
base_url = "https://cf.api.fan/v1"
api_key = "sk-xxx"

[models.packy_responses]
provider = "packy_responses"
model = "kimi-k1.5"
max_context_size = 200000
```

`type` must be `openai_responses` (with an underscore).

![Kimi Code OpenAI Responses configuration](/assets/image/Kimi-Code/005.jpg)

Test conversation:

![Testing Kimi Code with OpenAI Responses](/assets/image/Kimi-Code/006.jpg)

### Method 3: Anthropic Messages

For models supporting Anthropic Messages (`/v1/messages`):

```toml
default_model = "packy_anthropic"

[providers.packy_anthropic]
type = "anthropic"
base_url = "https://cf.api.fan"
api_key = "sk-xxx"

[models.packy_anthropic]
provider = "packy_anthropic"
model = "claude-3-5-sonnet-20241022"
max_context_size = 200000
```

Do NOT add `/v1` to Anthropic `base_url`.

![Kimi Code Anthropic Messages configuration](/assets/image/Kimi-Code/007.jpg)

Test conversation:

![Testing Kimi Code with Anthropic Messages](/assets/image/Kimi-Code/008.jpg)

## Troubleshooting Checklist

1. `default_model` matches `[models.<name>]`.
2. `[models.<name>].provider` matches `[providers.<name>]`.
3. Model ID is available within your token group.
4. OpenAI endpoints end in `/v1`.
5. Anthropic endpoints do not contain `/v1`.

## Official References

- [Kimi Code Getting Started](https://www.kimi.com/code/docs/kimi-code-cli/guides/getting-started.html)
- [Providers and Models](https://www.kimi.com/code/docs/kimi-code-cli/configuration/providers.html)
- [Configuration Files](https://www.kimi.com/code/docs/kimi-code-cli/configuration/config-files.html)
- [Environment Variables](https://www.kimi.com/code/docs/kimi-code-cli/configuration/env-vars.html)
- [Configuration Overrides](https://www.kimi.com/code/docs/kimi-code-cli/configuration/overrides.html)
