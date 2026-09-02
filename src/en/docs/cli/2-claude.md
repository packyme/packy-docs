---
title: Claude Code Setup
icon: material-icon-theme:claude
order: 2
---

::: tabs

@tab Windows

1. Press `Win + R` on your keyboard, paste the path below, and press Enter to open the Claude Code configuration directory:

```bash
%userprofile%\.claude
```

![](/assets/image/Cli/013.webp)

2. If `settings.json` does not exist in this directory, create it manually:

- **settings.json**: The primary configuration file for Claude Code, used to define API endpoints, auth tokens, hooks, and plugins.

![](/assets/image/Cli/014.webp)

3. Write the following configuration into `settings.json`:

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

4. As covered in [Create API Token](/en/docs/register/4-token.html), create a token in the **CC** group on PackyAPI and replace `"xxx"` with your token.

![](/assets/image/Cli/025.webp)

5. Run `claude` in your Windows terminal. When the conversation interface appears and responds to queries, your configuration is successful.

![](/assets/image/Cli/016.webp)

@tab MacOS

1. In Finder, press `Command + Shift + G`, enter the path below, and press Enter:

```bash
~/.claude
```

![](/assets/image/Cli/017.webp)

2. If `settings.json` is missing, create it manually:

- **settings.json**: Claude Code's core configuration file for API proxy URL, token, hooks, and plugins.

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

4. Create an API token under the **CC** group on PackyAPI and replace `"xxx"` with your token.

![](/assets/image/Cli/025.webp)

5. Open Terminal and run `claude`. If you see the prompt and receive a reply, the setup is successful.

![](/assets/image/Cli/016.webp)

@tab Linux

1. Create and open the `.claude` configuration directory:

```bash
mkdir -p ~/.claude
nano ~/.claude/settings.json
```

2. Paste the following JSON configuration:

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

3. Replace `"xxx"` with your PackyAPI **CC** group token.

4. Run `claude` in your terminal to start coding.

:::

## Configuration Parameters Reference

### Required Settings

| Setting | Description |
| --- | --- |
| `ANTHROPIC_BASE_URL` | Proxy endpoint URL, fixed to `https://cf.api.fan` |
| `ANTHROPIC_AUTH_TOKEN` | PackyAPI **CC** group API token, replacing `xxx` |

### Complete `env` Settings

| Environment Variable | Recommended Value | Purpose |
| --- | --- | --- |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | `"1"` | Disables non-essential network calls, reducing abnormal traffic |
| `CLAUDE_CODE_DISABLE_TERMINAL_TITLE` | `"1"` | Prevents mutating terminal window titles |
| `CLAUDE_CODE_NEW_INIT` | `"1"` | Enables updated onboarding initialization |
| `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` | `"1"` | Enables experimental agent teams |
| `DISABLE_AUTOUPDATER` | `"1"` | Disables auto-updater pings to official Anthropic channels |
| `DISABLE_TELEMETRY` | `"1"` | Disables telemetry data reporting |
| `DISABLE_BUG_COMMAND` | `"1"` | Disables built-in bug reporting tool |
| `DISABLE_ERROR_REPORTING` | `"1"` | Disables automatic error logging to Anthropic |
| `ENABLE_TOOL_SEARCH` | `"false"` | Disables dynamic tool searching |
| `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` | `"1"` | Disables experimental beta features for maximum stability |
| `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS` | `"1"` | Prevents dynamic git status injection to preserve prompt caching |

### Other Top-Level Settings

| Setting | Recommended Value | Purpose |
| --- | --- | --- |
| `includeCoAuthoredBy` | `false` | Prevents appending Claude co-author tags to git commits |
| `language` | `"English"` | Sets interface language preference |

::: tip Minimal Viable Configuration
To start quickly, only `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN` are strictly required; the remaining settings optimize stability and cost.
:::

::: important Login Errors
If Claude Code continues to report login or connection errors after configuration, see:
[Claude Code Cannot Connect to Anthropic Services](/en/docs/faq/CC.html#claude-code-cannot-connect-to-anthropic-services)
:::
