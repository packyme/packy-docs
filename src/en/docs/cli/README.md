---
title: CLI Configuration Guide
index: false
icon: fa-solid fa-star-of-david
category:
  - CLI
date: 2025-11-23
---

## Environment Check (General Steps)

### (1) Confirm Node.js Environment is Installed

1. In Windows or macOS terminal, enter the following command:

```bash
npm list -g --depth-0
```

Normally you should see output similar to below (it is completely fine if it lists nothing). If it displays "command not found", it means Node.js is not installed. Follow the [Node.js Installation Guide](https://www.runoob.com/nodejs/nodejs-install-setup.html) to install the environment required for Claude Code, Codex, and other CLI tools.

![](/assets/image/Cli/001.webp)

2. If you just finished installing Node.js, re-run the above command to confirm it executes without "command not found".

### (2) Install CLI Tools

1. Run the following command in Windows or macOS terminal to install Claude Code and Codex:

```bash
npm i -g @anthropic-ai/claude-code@latest
npm i -g @openai/codex@latest
```

![](/assets/image/Cli/002.webp)

### (3) Test Installation

> [!important]
> **This step is crucial. Please execute the commands to test, as this step will automatically generate the user configuration directories for each CLI!**

::: tabs

@tab Claude Code

Run in terminal. If you see the screen shown below or are prompted to select options, Claude Code is installed successfully:

```bash
claude
```

![](/assets/image/Cli/003.webp)

> [!important]
> **Step two is very important. Please click the link to configure:**

2. Click [Claude Code Cannot Connect to Anthropic Services](/en/docs/faq/CC.html#claude-code-cannot-connect-to-anthropic-services), run the fix command, and then proceed with CLI-specific configuration.

@tab Codex

Run in terminal. If you see the screen shown below, Codex is installed successfully:

```bash
codex
```

![](/assets/image/Cli/004.webp)

:::

## ::material-icon-theme:claude:: Claude Code Setup

::: tabs

@tab Windows

1. Press `Win + R` on your keyboard, paste the path below, and press Enter to open the Claude Code configuration directory:

```bash
%userprofile%\.claude
```

![](/assets/image/Cli/013.webp)

2. If `settings.json` does not exist, create it manually:

- **settings.json**: Claude's primary configuration file for upstream proxy endpoints, API Keys, hooks, plugins, etc.

![](/assets/image/Cli/014.webp)

3. Write the following content into `settings.json`:

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://cf.api.fan",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1",
    "CLAUDE_CODE_NEW_INIT": "1",
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1",
    "DISABLE_AUTOUPDATER": "1",
    "DISABLE_TELEMETRY": "1",
    "DISABLE_BUG_COMMAND": "1",
    "DISABLE_ERROR_REPORTING": "1",
    "ENABLE_TOOL_SEARCH": "false",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1",
    "CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS": "1"
  },
  "includeCoAuthoredBy": false,
  "language": "English"
}
```

![](/assets/image/Cli/015.webp)

4. Refer to [Create API Token](/en/docs/register/4-token.html) to create a token under the **CC** group on PackyAPI and replace `"xxx"` above.

![](/assets/image/Cli/025.webp)

5. Run `claude` in your Windows terminal. Send a prompt to verify that you receive a response.

![](/assets/image/Cli/016.webp)

@tab MacOS

1. In Finder, press `Command + Shift + G`, enter the path below, and press Enter:

```bash
~/.claude
```

![](/assets/image/Cli/017.webp)

2. If `settings.json` is missing, create it manually:

- **settings.json**: Primary configuration file for proxy endpoint, API Key, hooks, and plugins.

![](/assets/image/Cli/018.webp)

3. Write the following content into `settings.json`:

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://cf.api.fan",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1",
    "CLAUDE_CODE_NEW_INIT": "1",
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1",
    "DISABLE_AUTOUPDATER": "1",
    "DISABLE_TELEMETRY": "1",
    "DISABLE_BUG_COMMAND": "1",
    "DISABLE_ERROR_REPORTING": "1",
    "ENABLE_TOOL_SEARCH": "false",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1",
    "CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS": "1"
  },
  "includeCoAuthoredBy": false,
  "language": "English"
}
```

![](/assets/image/Cli/015.webp)

4. Create an API token under the **CC** group on PackyAPI and replace `"xxx"`.

![](/assets/image/Cli/025.webp)

5. Run `claude` in Terminal to start conversing.

![](/assets/image/Cli/016.webp)

:::

::: important
If you encounter login errors after configuration, see:
[Claude Code Cannot Connect to Anthropic Services](/en/docs/faq/CC.html#claude-code-cannot-connect-to-anthropic-services)
:::

## ::hugeicons:chat-gpt:: Codex Setup

::: tabs

@tab Windows

1. Press `Win + R`, enter `%userprofile%\.codex`, and press Enter.

![](/assets/image/Cli/006.webp)

2. Directory overview:

![](/assets/image/Cli/007.webp)

  - **config.toml**: Codex's **core configuration** file.
  - **auth.json**: Stores your PackyAPI Key.
  - **AGENTS.md**: Global prompt definition for Codex.

> [!important]
> **If these three files do not exist yet, you will need to create them manually and write the configuration into them.**

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

> [!important]
> `gpt-5.3-codex` and older versions have been deprecated. Please fill in `model` according to the live available model IDs in the [Codex Group](/en/docs/token/2-group.html).

4. **Configure `auth.json`**:

```json
{
  "OPENAI_API_KEY": "xxx"
}
```

![](/assets/image/Cli/008.webp)

Refer to [Create API Token](/en/docs/register/4-token.html) to create a token under the **Codex** group and replace `"xxx"`.

![](/assets/image/Cli/009.webp)

5. **Test Conversation**:

```bash
codex
```

![](/assets/image/Cli/010.webp)

@tab MacOS

1. In Finder, press `Command + Shift + G` and enter `~/.codex`.

![](/assets/image/Cli/011.webp)

2. Directory contents:

![](/assets/image/Cli/012.webp)

  - **config.toml**: Codex's core configuration file.
  - **auth.json**: Stores your API Key.
  - **AGENTS.md**: Global prompt configuration.

> [!important]
> **If these three files were not generated upon initial installation, please create them manually.**

3. **Configure `config.toml`**:

```toml
model_provider = "packycode"
model = "gpt-5.5"
model_reasoning_effort = "high"
network_access = "enabled"
disable_response_storage = true
windows_wsl_setup_acknowledged = true
model_verbosity = "high"

[model_providers.packycode]
name = "packycode"
base_url = "https://cf.api.fan/v1"
wire_api = "responses"
requires_openai_auth = true
```

4. **Configure `auth.json`**:

```json
{
  "OPENAI_API_KEY": "xxx"
}
```

![](/assets/image/Cli/008.webp)

Create a token under the **Codex** group and replace `"xxx"`.

![](/assets/image/Cli/009.webp)

5. **Test Conversation**:

```bash
codex
```

![](/assets/image/Cli/010.webp)

:::
