---
title: Claude Code Cache Optimization Proxy
icon: material-symbols:cached
order: 5
---

## Summary

[claude-code-cache-fix](https://github.com/cnighswonger/claude-code-cache-fix) is an **open-source utility** designed to help Claude Code **save quota by maximizing prompt cache hits**.

In simple terms: it acts as a local proxy between your machine and Claude endpoints, formatting every request so that Claude can easily **reuse prior conversation context (cache hit)**, thereby saving token expenses.

> It does not make the AI smarter; it makes your quota last significantly longer.

## Why is it Needed?

As your Claude Code sessions progress, you may notice:

- Quota depletes faster than expected;
- Resuming an old session (`--resume`) feels like paying for the entire context from scratch;
- Enabling MCP, Skills, and Hooks increases token consumption unpredictably.

These occurrences are usually not bugs, but rather minor variations in Claude Code's request structure that cause the upstream server not to recognize identical context prefixes.

`claude-code-cache-fix` standardizes request payloads, orders tools and MCP definitions consistently, and injects proper `cache_control` headers so upstream servers immediately identify cached blocks.

| What It Does | Benefit to You |
| --- | --- |
| Fixes request structure on resumed sessions | `--resume` hits cache rather than billing from scratch |
| Strips unstable version markers | Cache remains valid across minor CLI updates |
| Orders tool and MCP definitions stably | Consistent request shapes ensure reliable cache matching |
| Injects `cache_control` markers | Explicitly tells upstream servers to cache large prefix blocks |
| Logs hit rates and quota status | Simplifies troubleshooting via files in `~/.claude/quota-status/` |
| No `NODE_OPTIONS` dependency | Fully compatible with modern Bun-based Claude Code |

## Who Should Use It?

- ✅ Heavy Claude Code users sensitive to token usage
- ✅ Users frequently resuming long sessions with multiple MCP servers / Skills
- ✅ Users comfortable with command-line tools
- ❌ Users looking for simple out-of-the-box CLI setup without background daemons

::: warning It Does Not Solve All Quota Issues
This tool only optimizes local request serialization and prompt caching. Model pricing, extended context windows, upstream quota adjustments, model selection, and frequent large file reads still require independent attention.
:::

::: danger Not Suitable for Native Windows CMD / PowerShell
`claude-code-cache-fix` is **not recommended for native Windows CMD / PowerShell**.

Windows users should run the complete toolchain (Node.js, Claude Code, PackyAPI, and `claude-code-cache-fix`) inside **WSL (Linux environment)**. Do not mix native Windows Claude Code with WSL proxy ports.
:::

::: warning Third-Party Tool Notice
`claude-code-cache-fix` is an independent third-party tool. Review its source code, dependencies, and configurations prior to installation.
:::

## Recommended AI-Assisted Setup Prompt

Because this tool involves local proxy daemons, environment variables, and background services, you can prompt your AI assistant:

```text
Please configure the Claude Code cache optimization proxy on my system based on https://github.com/cnighswonger/claude-code-cache-fix.
Requirements:
1. I use PackyAPI with upstream: https://cf.api.fan
2. Claude Code's ANTHROPIC_BASE_URL should point to http://127.0.0.1:9801
3. Keep ANTHROPIC_AUTH_TOKEN pointing to my PackyAPI CC group token
4. On Windows, use WSL Linux environment rather than native CMD/PowerShell
5. Provide commands to verify proxy health and Claude Code responses
6. Provide instructions for running it as a background service (systemd/launchd)
```

## Quick Verification Flow

Run in Linux / macOS / WSL:

```bash
npm install -g claude-code-cache-fix
CACHE_FIX_PROXY_UPSTREAM=https://cf.api.fan cache-fix-proxy server
```

## Configure Claude Code

In another terminal, update Claude Code's `settings.json`:

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "http://127.0.0.1:9801",
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

## Verify Proxy Health

In another terminal, test the proxy health endpoint:

```bash
curl http://127.0.0.1:9801/health
```

If it returns `{"status":"ok"}`, run `claude` in terminal and test conversations.

## Long-Term Usage

Manual foreground execution is intended for testing. For daily usage, configure a background service via `systemd` (Linux/WSL) or `launchd` (macOS).
