---
title: Codex FAQ
icon: hugeicons:chat-gpt
order: 2
---

### ::ic:round-whatshot:: Why do other models appear in my billing when I selected a specific model?

**Short answer: This is normal behavior and not an error or account breach.**

Codex performs several lightweight background operations:
- Generating titles for historical sessions in `/resume`.
- Compacting conversation context (`/compact`).
- Generating code review summaries (`/review`).
- Organizing web search results.

During these tasks, Codex automatically delegates to a smaller, more cost-effective model rather than the primary model specified in `/model` or `config.toml`.

::: tip When to Be Concerned
- Small amounts (cents or minor fractions): completely normal background operations.
- Significant unexpected charges: check your token consumption logs and contact support.
:::

**How to verify:**
1. Sign in to <https://www.packyapi.ai/login>.
2. Go to **Consumption Logs** in the console.
3. Review exact timestamps, token counts, and billed models.

### ::ic:round-whatshot:: Tips for Getting the Best Results with Codex

1. **Task Decomposition:** Avoid submitting vague, monolithic prompts (e.g. "Write me an entire backend management system"). Codex excels at structured, modular development.
2. **Predictable Scope:** Before triggering a task, assess which files and functions will be modified. Keep AI within a clear, verifiable boundary.

::: info Some Thoughts on AI
The AI era makes many tasks easier, but your domain knowledge determines the upper bound of what AI can achieve. AI is a copilot, and how it performs depends heavily on user orchestration.
:::

3. **Minimize Context Compaction:** In most cases, well-structured tasks solve within 60% of the context window. If a task exceeds 60% and requires `/compact`, break your task down into smaller sub-tasks. An experienced Vibe Coding engineer rarely needs context compaction!

### Smooth Windows Usage with Codex

> [!important]
> Resolves file read/write issues, character garbling, high token consumption, and workspace memory loss.

1. Ensure your `Codex CLI` and `VSCode Codex` extension are functional.
2. Press `Win + R`, enter `%userprofile%\.codex`, and press Enter.
3. Open and edit `config.toml`:

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

4. Create or edit `AGENTS.md`:

```markdown
# Codex Global Instructions

## Response Style:
 - Structure long answers, plans, and task breakdowns into clean Markdown tables.
```

5. Restart VSCode and start using the Codex extension.

### Common Codex Commands

| Command | Description |
| --- | --- |
| `/model` | Switch the active model |
| `/approvals` | Configure session execution permissions |
| `/review` | Review workspace changes |
| `/resume` | Resume a previous session from history |
| `/new` | Start a fresh conversation thread |
| `/init` | Generate an `AGENTS.md` template in the current directory |
| `/compact` | Summarize conversation to free context space |
| `/undo` | Undo the last action taken by Codex |
| `/diff` | Inspect current git diff (including untracked files) |
| `/mention` | Add specific files or directories to context |
| `/status` | View session configuration and token count |
| `/mcp` | List available MCP tools |
| `/exit` | Exit Codex CLI |

### Windows UTF-8 / Garbled Text Fix

1. Press `Win + R`, enter `intl.cpl`, and press Enter.

![](/assets/image/FAQ/command.webp)

2. Go to **Administrative** tab → click **Change system locale**.

![](/assets/image/FAQ/Codex/001.webp)

3. Check **Beta: Use Unicode UTF-8 for worldwide language support**, click OK, and restart your computer.

![](/assets/image/FAQ/Codex/002.webp)

### Update VSCode Codex Extension Model List

::: tabs

@tab Windows

1. Press `Win + R`, enter the path below, and press Enter:

```bash
%userprofile%\.vscode\extensions
```

![](/assets/image/FAQ/command.webp)

@tab MacOS

1. In Finder, press `Command + Shift + G`, enter the path below, and press Enter:

```bash
~/.vscode/extensions
```

![](/assets/image/FAQ/Codex/009.webp)

:::

2. Locate the folder starting with `openai.chatgpt-...` (select the latest version if multiple exist).

![](/assets/image/FAQ/Codex/003.webp)

3. Navigate to `webview\assets` to view the JS files.

![](/assets/image/FAQ/Codex/004.webp)

4. Download the **replacement patch script** below, extract it, and copy the JS file into the `webview\assets` folder:

<div class="codex-download-card" v-cloak>
  <div class="codex-download-card__header">
    <div>
      <div class="codex-download-card__title">Download Model Patch</div>
      <p class="codex-download-card__desc">Auto-fetches the latest version for instant download</p>
    </div>
    <span class="codex-download-card__badge" :class="{'is-loading': loading}">
      {{ loading ? 'Loading…' : (version ? 'Supported Extension v' + version : 'Pending') }}
    </span>
  </div>

  <div v-if="description" class="codex-download-card__notice">
    {{ description }}
  </div>

  <div class="codex-download-card__info">
    <div class="codex-download-card__row">
      <span class="codex-download-card__mono">
        {{ loading ? 'Filename' : (fileName || 'Filename') }}
      </span>
      <button
        class="codex-download-card__btn"
        :disabled="!downloadUrl || loading"
        @click="handleDownload"
      >
        Download Now
      </button>
    </div>
  </div>

  <p v-if="error" class="codex-download-card__error">Error: {{ error }}</p>
</div>

5. Restart VSCode to view the updated model list.

### Configure Global System Prompts in Codex

1. Refer to [Codex CLI Setup](/en/docs/cli/3-codex.html).
2. The `AGENTS.md` file in `~/.codex` sets global instructions for Codex. Create the file if missing and save your prompts.
3. Restart Codex or VSCode to apply the instructions.

### Enable Built-in Web Search in Codex

1. Refer to [Codex CLI Setup](/en/docs/cli/3-codex.html).
2. In `~/.codex/config.toml`, add:

```toml
[features]
web_search_request = true
```

3. Run Codex to test web search.

![](/assets/image/FAQ/Codex/010.webp)

### Network Issues in Containers or TUN Mode (MTU 1500)

> When running Codex in a CLI sandbox or TUN mode proxy, network timeouts while other tools work are typically caused by MTU misconfiguration.

**Solution:**
- Set MTU to 1500 in your proxy client (e.g. Clash Verge).
- For Linux setups, see: <https://linux.do/t/topic/1220328>

### "Connection failed" Errors

Error example:
```txt
Connection failed: error sending request for url (https://www.packycode.com/v1/responses)
```

**Troubleshooting steps:**
1. Check internet connectivity.
2. If using VPN or system proxies that intercept local loopback traffic, adjust bypass rules.
3. Run `codex` directly in terminal to isolate whether the issue is specific to the VSCode plugin.

### HTTP 401 Unauthorized Error

Error example:
```txt
exceeded retry limit, last status: 401 Unauthorized, request id: xxxxxx
```

1. Check for conflicting environment variables:

::: tabs

@tab Windows

```bash
cmd /c "echo ================= OPENAI ENV CHECK ================= & ^
if defined OPENAI_API_KEY (echo OPENAI_API_KEY  = OK) else (echo OPENAI_API_KEY  = MISSING) & ^
if defined OPENAI_BASE_URL (echo OPENAI_BASE_URL = OK) else (echo OPENAI_BASE_URL = MISSING) & ^
echo ========================================================="
```

If it prints `MISSING`, proceed to Step 2. If present, clear with:
```bash
cmd /c "setx OPENAI_API_KEY \"\" & setx OPENAI_BASE_URL \"\""
```

@tab macOS

```bash
echo "================= OPENAI ENV CHECK ================="
if [ -z "$OPENAI_API_KEY" ]; then
  echo "OPENAI_API_KEY  = MISSING"
else
  echo "OPENAI_API_KEY  = OK"
fi

if [ -z "$OPENAI_BASE_URL" ]; then
  echo "OPENAI_BASE_URL = MISSING"
else
  echo "OPENAI_BASE_URL = OK"
fi
echo "========================================================"
```

If present, clear with:
```bash
unset OPENAI_API_KEY OPENAI_BASE_URL
```

:::

2. Refer to the [Codex CLI Setup](/en/docs/cli/3-codex.html) chapter.

::: important You Need To:
1. Verify that `OPENAI_API_KEY` in `~/.codex/auth.json` is configured correctly.
2. Verify that `base_url` in `~/.codex/config.toml` is set to `https://cf.api.fan/v1`.
:::

### HTTP 403 Forbidden Error

Error example:
```txt
unexpected status 403 Forbidden: {"error":{"message":"Usage not included in your
plan","type":"usage_not_included","param":null,"code":null,"plan_type":"basic"}}
```

This indicates a temporary upstream pool rotation event.
1. Press `Ctrl + C` (or click Stop in VSCode) to cancel the prompt.
2. Send the message again to route to an active pool node.

<script setup>
import { computed, onMounted, ref } from 'vue'

const VERSION_URL = 'https://cdn.xf233.io/project/Packy-docs/FAQ/Codex/version.txt'
const BASE_URL = 'https://cdn.xf233.io/project/Packy-docs/FAQ/Codex/'

const version = ref('')
const fileName = ref('')
const description = ref('')
const loading = ref(false)
const error = ref('')

const downloadUrl = computed(() =>
  fileName.value ? `${BASE_URL}${fileName.value}` : ''
)

const parseVersionText = (text) => {
  const lines = text.trim().split(/\r?\n/)
  return {
    version: lines[0]?.trim() || '',
    fileName: lines[1]?.trim() || '',
    description: lines[2]?.trim() || '',
  }
}

const loadVersion = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch(VERSION_URL, {
      cache: 'no-store',
      mode: 'cors',
      credentials: 'omit',
    })
    if (!res.ok) throw new Error(`Network error (${res.status})`)
    const text = await res.text()
    const parsed = parseVersionText(text)
    if (!parsed.version || !parsed.fileName)
      throw new Error('Invalid version file format')
    version.value = parsed.version
    fileName.value = parsed.fileName
    description.value = parsed.description
  } catch (err) {
    error.value = err?.message || 'Failed to fetch version info'
  } finally {
    loading.value = false
  }
}

const handleDownload = () => {
  if (!downloadUrl.value) return
  window.open(downloadUrl.value, '_blank', 'noopener,noreferrer')
}

onMounted(loadVersion)
</script>

<style scoped>
[v-cloak] {
  display: none;
}
.codex-download-card {
  background: radial-gradient(circle at 20% 20%, #1f8bff22, #ffffff 55%),
    linear-gradient(135deg, #f5f7ff, #ffffff);
  border: 1px solid #e5e8f0;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 10px 30px #1f8bff14;
  color: #1d2b3a;
}
.codex-download-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.codex-download-card__title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}
.codex-download-card__desc {
  margin: 4px 0 0;
  color: #526072;
  font-size: 13px;
}
.codex-download-card__badge {
  padding: 6px 10px;
  border-radius: 10px;
  background: #e6f2ff;
  color: #1f8bff;
  font-weight: 600;
  font-size: 13px;
}
.codex-download-card__badge.is-loading {
  background: #fff6e5;
  color: #f59e0b;
}
.codex-download-card__notice {
  margin: 12px 0 0;
  padding: 10px 14px;
  background: linear-gradient(90deg, #fff7ed, #fef3c7);
  border-left: 4px solid #f59e0b;
  border-radius: 6px;
  color: #92400e;
  font-size: 14px;
  font-weight: 500;
}
.codex-download-card__info {
  margin: 16px 0;
  border: 1px dashed #d7dce6;
  border-radius: 10px;
  padding: 12px 14px;
  background: #f9fbff;
}
.codex-download-card__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  gap: 12px;
  font-size: 14px;
}
.codex-download-card__mono {
  font-family: 'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono',
    Menlo, monospace;
  color: #1d2b3a;
}
.codex-download-card__btn {
  border: none;
  background: linear-gradient(135deg, #1f8bff, #5ac8fa);
  color: #ffffff;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0 6px 16px #1f8bff33;
  transition: transform 0.1s ease, box-shadow 0.2s ease;
}
.codex-download-card__btn:hover:enabled {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px #1f8bff33;
}
.codex-download-card__btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
.codex-download-card__error {
  margin: 12px 0 0;
  color: #d14343;
  font-size: 13px;
}
</style>
