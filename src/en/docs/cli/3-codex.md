---
title: Codex Setup
icon: hugeicons:chat-gpt
order: 3
---

::: tabs

@tab Windows

1. Press `Win + R` on your keyboard, enter the path below, and press Enter to open your Codex configuration directory:

```bash
%userprofile%\.codex
```

![](/assets/image/Cli/006.webp)

2. Your directory may contain several files. Only three matter, and only two need configuration:

![](/assets/image/Cli/007.webp)

  - **config.toml**: Codex's **core configuration** file for API endpoints, models, and MCP.
  - **auth.json**: Stores the API Key obtained from PackyAPI.
  - **AGENTS.md**: Sets global system prompts for Codex.

> [!important]
> If these files do not exist yet, you can create them manually.

3. **Configure `config.toml`**:

Copy the configuration below into `config.toml`:

```toml
disable_response_storage = true
model = "gpt-5.5"
model_provider = "packycode"
model_reasoning_effort = "xhigh"
model_verbosity = "high"

[features]
web_search_request = true

[model_providers.packycode]
base_url = "https://cf.api.fan/v1"
name = "packycode"
requires_openai_auth = true
wire_api = "responses"
```

> [!important]
> Fill in `model` according to the live model IDs available in the [Codex Group](/en/docs/token/2-group.html#codex-group).

4. **Configure API Key (`auth.json`)**:

Paste the following JSON into `auth.json`:

```json
{
  "OPENAI_API_KEY": "xxx"
}
```

![](/assets/image/Cli/008.webp)

As covered in [Create API Token](/en/docs/register/4-token.html), create a token in the **Codex** group on PackyAPI and replace `"xxx"` with your token.

![](/assets/image/Cli/009.webp)

5. **Test Conversation**:

In terminal, run:

```bash
codex
```

![](/assets/image/Cli/010.webp)

@tab MacOS

1. In Finder, press `Command + Shift + G`, enter the path below, and press Enter:

```bash
~/.codex
```

![](/assets/image/Cli/011.webp)

2. Three files are used in this directory:

![](/assets/image/Cli/012.webp)

  - **config.toml**: Core configuration for endpoints and models.
  - **auth.json**: Stores your API Key.
  - **AGENTS.md**: Global prompt definition.

3. **Configure `config.toml`**:

```toml
disable_response_storage = true
model = "gpt-5.5"
model_provider = "packycode"
model_reasoning_effort = "xhigh"
model_verbosity = "high"

[features]
web_search_request = true

[model_providers.packycode]
base_url = "https://cf.api.fan/v1"
name = "packycode"
requires_openai_auth = true
wire_api = "responses"
```

4. **Configure `auth.json`**:

```json
{
  "OPENAI_API_KEY": "xxx"
}
```

![](/assets/image/Cli/008.webp)

Create a token in the **Codex** group on PackyAPI and replace `"xxx"` with your token.

![](/assets/image/Cli/009.webp)

5. **Test Conversation**:

```bash
codex
```

![](/assets/image/Cli/010.webp)

@tab Linux

1. Create the configuration directory:

```bash
mkdir -p ~/.codex
```

2. Create `~/.codex/config.toml`:

```toml
disable_response_storage = true
model = "gpt-5.5"
model_provider = "packycode"
model_reasoning_effort = "xhigh"
model_verbosity = "high"

[features]
web_search_request = true

[model_providers.packycode]
base_url = "https://cf.api.fan/v1"
name = "packycode"
requires_openai_auth = true
wire_api = "responses"
```

3. Create `~/.codex/auth.json`:

```json
{
  "OPENAI_API_KEY": "xxx"
}
```

Replace `"xxx"` with your PackyAPI **Codex** group token.

4. Run `codex` to verify.

:::
