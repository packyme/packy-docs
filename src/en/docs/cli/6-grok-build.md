---
title: Grok Build Setup
icon: simple-icons:x
order: 6
---

Grok Build is xAI's terminal coding assistant. According to the official documentation, its primary configuration file is `~/.grok/config.toml`, which can be routed to PackyAPI's OpenAI-compatible endpoint.

::: warning Do Not Share API Keys
The `xxx` strings in examples below are placeholders. Replace them with API keys created in your PackyAPI console.
:::

## Installing Grok Build

::: tabs

@tab Windows

1. Open PowerShell and run the official installer:

```powershell
irm https://x.ai/cli/install.ps1 | iex
```

2. Open a new terminal and verify:

```bash
grok --version
```

@tab MacOS / Linux / WSL

1. Open terminal and run the official installer:

```bash
curl -fsSL https://x.ai/cli/install.sh | bash
```

2. Open a new terminal and verify:

```bash
grok --version
```

:::

## Configuring PackyAPI Gateway

::: tabs

@tab Windows

1. Press `Win + R`, enter `%userprofile%\.grok`, and press Enter.
2. If `config.toml` does not exist, create it manually.
3. Write the following into `config.toml`:

```toml
[models]
default = "grok-4.6"
web_search = "grok-4.6"

[endpoints]
models_base_url = "https://cf.api.fan/v1"

[model."grok-4.6"]
model = "grok-4.6"
name = "Grok 4.6"
description = "Grok 4.6 via PackyAPI"
api_key = "xxx"
api_backend = "responses"
context_window = 500000
supports_reasoning_effort = true   # Enables /effort command
supports_backend_search = false    # Disables backend search to avoid endpoint errors
```

4. Create an API token on PackyAPI and replace `"xxx"`.

@tab MacOS / Linux / WSL

1. Create the configuration directory:

```bash
mkdir -p ~/.grok
```

2. Create or edit the configuration file:

```bash
nano ~/.grok/config.toml
```

3. Write the following into `config.toml`:

```toml
[models]
default = "grok-4.6"
web_search = "grok-4.6"

[endpoints]
models_base_url = "https://cf.api.fan/v1"

[model."grok-4.6"]
model = "grok-4.6"
name = "Grok 4.6"
description = "Grok 4.6 via PackyAPI"
api_key = "xxx"
api_backend = "responses"
context_window = 500000
supports_reasoning_effort = true   # Enables /effort command
supports_backend_search = false    # Disables backend search to avoid endpoint errors
```

4. Create an API token on PackyAPI and replace `"xxx"`.

:::

## Configuration Parameters

- `[models] default`: Default model for new sessions.
- `[models] web_search`: Model used by Grok Build's built-in web_search tool.
- `[endpoints] models_base_url`: PackyAPI's OpenAI-compatible endpoint `https://cf.api.fan/v1`.
- `[model."grok-4.6"] api_key`: Your PackyAPI token.
- `api_backend = "responses"`: Uses Responses API for Grok 4.6.
- `supports_reasoning_effort = true`: Enables `/effort` and `--effort` options.
- `supports_backend_search = false`: Disables backend search to prevent automatic query injection errors.
- `[workflows] enabled = false`: Disables Grok workflow features (required when adding non-Grok models).

::: tip Using Environment Variables
Instead of saving keys in `config.toml`, you can use `env_key = "PACKY_API_KEY"` and export `PACKY_API_KEY` in your shell profile.
:::

## Adding Third-Party Models (e.g. Kimi-K3)

To use non-Grok models such as Kimi-K3, disable workflows:

```toml
[workflows]
enabled = false

[model."kimi-k3"]
model = "kimi-k3"
name = "Kimi K3"
description = "Kimi K3 via PackyAPI"
api_key = "xxx"
api_backend = "chat_completions"
context_window = 262144
supports_backend_search = false
```

## Adjusting Reasoning Effort

With `supports_reasoning_effort = true`, you can adjust reasoning effort dynamically:

- In interactive TUI sessions, use `/effort`:

```text
/effort low       # Fast response
/effort medium
/effort high
/effort xhigh     # Deep reasoning
```

- In headless print mode (`-p`), use `--effort`:

```bash
grok -p "Reply with ok only" -m grok-4.6 --effort high
```

## Testing Configuration

1. Inspect configuration parsing:

```bash
grok inspect
```

2. Run a minimal test prompt:

```bash
grok -p "Reply with ok only" -m grok-4.6
```

If it prints `ok`, the configuration is working. For troubleshooting, see [Grok Build FAQ](/en/docs/faq/GrokBuild.html).
