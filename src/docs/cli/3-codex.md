---
title: Codex配置
icon: hugeicons:chat-gpt
order: 3
---

## 安装 Codex

::: warning 先完成环境确认
Codex 要求 Node.js ≥ 16，但如果你同时要用 Claude Code 或 Kimi Code，需要按更高那条要求准备环境。还没确认 Node.js 与 npm，先看 [环境确认（Node.js 与 npm）](/docs/cli/1-env.html)。
:::

1. 在 Windows 或 MacOS 终端执行，全局安装最新版：

```bash
npm install -g @openai/codex@latest
```

2. 确认安装成功，能打印出版本号即可（下图为 `codex-cli 0.163.0`）：

```bash
codex --version
```

![](/assets/image/Cli/029.webp)

3. 首次运行一次 `codex`，让程序在你的用户目录下生成 `.codex` 配置目录（下一步要往这个目录里写配置）：

```bash
codex
```

![](/assets/image/Cli/004.webp)

出现登录方式选择界面，说明安装成功，按 `Ctrl+C` 退出这次运行即可。

## 写入配置

::: tabs

@tab Windows

1. 键盘按下“Win+R”键，输入以下内容后回车，打开你的codex配置目录

```bash
%userprofile%\.codex
```

![](/assets/image/Cli/006.webp)

2. 目录里大多是 Codex 自己生成的会话、日志与数据库文件，我们只需要其中两个

![](/assets/image/Cli/007.webp)

  - **config.toml**：Codex的**核心配置**文件，中转服务与MCP等都在此文件配置

  - **auth.json**：用来配置你在中转站获取的ApiKey秘钥

  - **`AGENTS.md`**：用来设置codex全局工作的提示词，不接入中转服务也可以先不建

> [!important]
> 上图里只有 `config.toml` 是 Codex 自己生成的，`auth.json` 与 `AGENTS.md` 都可能不存在，没有就手动新建文件再写入内容。

@tab MacOS

1. 在访达界面按下 “Command+Shift+G”，输入以下路径并回车，打开 Codex 配置目录

```bash
~/.codex
```

![](/assets/image/Cli/011.webp)

2. 目录中可能会存在以下文件，其它文件可忽略

![](/assets/image/Cli/012.webp)

  - **config.toml**：Codex 的核心配置文件，中转服务与 MCP 等都在此文件配置

  - **auth.json**：存放中转站获取的 ApiKey 秘钥

  - **`AGENTS.md`**：Codex 全局工作的提示词，不接入中转服务也可以先不建

> [!important]
> 初次安装若未自动生成，需要手动创建上述文件并写入内容

:::

打开配置目录后的 3–6 步，Windows 与 MacOS 完全一致；`config.toml` 里的 `[windows]` 段只对 Windows 生效，macOS 可以不写。

3. 将以下内容写入 `config.toml`

```toml
disable_response_storage = true
model = "gpt-6-astra"
model_provider = "packycode"
model_reasoning_effort = "xhigh"
model_verbosity = "high"

[features]
web_search_request = true

[model_providers.packycode]
base_url = "https://cf.api.fan/v1"
model_catalog_url = "https://cf.api.fan/v1/models"
name = "packycode"
requires_openai_auth = true
wire_api = "responses"
experimental_bearer_token = "sk-xxx"

[tui]
screen_reader_detection_done = true

[windows]
sandbox = "elevated"
```

![](/assets/image/Cli/038.webp)

> [!important]
> 必须保留 `requires_openai_auth = true`，并按第 4 步写好 `auth.json`。`experimental_bearer_token` 必须和 `auth.json` 中的 `OPENAI_API_KEY` 相同，写配置时把这两处填成同一把 Packy API 密钥；示例里的 `sk-xxx` 换成你复制到的密钥。

> [!important]
> `model` 要填 [Codex分组](/docs/token/2-group.html) 里实时展示的可用模型 ID，`gpt-5.3-codex` 及其以下版本已被官方删除。上图填的 `gpt-6-astra` 是当时 Codex 分组在售的模型，实际以该页面的实时列表为准。

> [!note]
> **Windows 沙盒装不上时可以换一档**
>
> `[windows] sandbox` 共有三种实现：`mxc`、`elevated`、`unelevated`。截图里用的是 `elevated`，它需要管理员授权完成一次初始化；如果你的电脑 UAC 被拒、或者公司电脑不允许新建本地用户、改防火墙与组策略，改成 `unelevated` 一样能跑，只是网络隔离比 `elevated` 弱一些。
>
> Windows 11 24H2（build 26100.9278）及以上可以改用 `mxc`：`elevated` 那行保持不动，在 `[features]` 里加一行 `prefer_mxc = true`，设备支持时会自动选用 MXC。
>
> 细节见官方文档 [Windows sandbox](https://developers.openai.com/codex/windows/windows-sandbox)。

4. 将以下内容写入 `auth.json`

```json
{
  "auth_mode": "apikey",
  "OPENAI_API_KEY": "xxx"
}
```

> [!important]
> `auth_mode` 用于按 API 密钥登录，值必须写成小写 `apikey`。

5. 回顾 [创建API令牌](/docs/register/4-token.html) 这一步教程，我们需要在PackyApi中创建 **Codex** 分组的令牌，提交后在弹窗里复制完整密钥（只显示一次，关掉就看不到了）

![](/assets/image/QuickStart/010.webp)

把复制到的 key 填进上方 `xxx` 的位置后保存

![](/assets/image/Cli/009.webp)

6. 测试对话

在终端输入以下命令，出现图示内容，进行对话测试，如果有回复，则配置成功，开始你的Codex使用之旅~

```bash
codex
```

![](/assets/image/Cli/010.webp)

## 开启自动审核（可选）

默认情况下，Codex 执行命令、改文件前会停下来等你点确认。开启自动审核后，这类审批交给一个审核模型判断，由它直接给出放行或拒绝，不再每个操作都打断你。

> [!note]
> 自动审核只决定「谁来审批」，不改沙盒与权限范围，高风险操作照样会被拒。

1. 选分组、主模型与审核模型，下载模型目录文件，放进 `.codex` 目录（和 `config.toml` 同级）

<ClientOnly>
  <div class="codex-cat">
    <div class="codex-cat__bar">
      <label class="codex-cat__label" for="codex-cat-group">分组</label>
      <select id="codex-cat-group" class="codex-cat__select" v-model="group" :disabled="!groups.length || loading">
        <option value="" disabled>{{ loading ? "正在读取分组…" : error ? "读取失败" : "请选择分组" }}</option>
        <option v-for="item in groups" :key="item.name" :value="item.name">{{ item.name }} · {{ item.models.length }} 个模型</option>
      </select>
      <button class="codex-cat__btn codex-cat__btn--ghost" :disabled="loading" @click="load">{{ loading ? "读取中…" : "重新获取" }}</button>
    </div>
    <p v-if="error" class="codex-cat__hint codex-cat__hint--error">没读到可用的分组与模型（{{ error }}），可以先下 <a href="/assets/codex/codex-model-catalog.json">示例文件</a>，手动改里面第一条的 <code>slug</code> 与 <code>auto_review_model_override</code>。</p>
    <p v-else-if="group" class="codex-cat__hint">{{ groupHint }}</p>
    <div class="codex-cat__grid">
      <section class="codex-cat__card">
        <h4 class="codex-cat__card-title">主模型</h4>
        <select class="codex-cat__select" v-model="mainModel" :disabled="!mainOptions.length">
          <option v-for="name in mainOptions" :key="name" :value="name">{{ name }}</option>
        </select>
        <p class="codex-cat__card-note">填进 <code>config.toml</code> 的 <code>model</code></p>
      </section>
      <section class="codex-cat__card">
        <h4 class="codex-cat__card-title">审核模型</h4>
        <select class="codex-cat__select" v-model="reviewModel" :disabled="!modelOptions.length">
          <option v-for="name in modelOptions" :key="name" :value="name">{{ name }}</option>
        </select>
        <p class="codex-cat__card-note">审批交给它判断</p>
      </section>
    </div>
    <div class="codex-cat__list">
      <div class="codex-cat__list-head">目录里会写入该分组的 {{ modelOptions.length }} 个模型，在 Codex 里用 <code>/model</code> 就能直接切，换模型不用重新下载</div>
      <div class="codex-cat__rows">
        <div class="codex-cat__row" v-for="name in modelOptions" :key="name">
          <span class="codex-cat__name">{{ name }}</span>
          <span class="codex-cat__tag" v-if="name === mainModel">主模型</span>
          <span class="codex-cat__tag" v-if="name === reviewModel">审核模型</span>
          <input class="codex-cat__input" type="number" min="0" step="1000" v-model.number="contexts[name]" placeholder="留空则不写" aria-label="上下文长度" />
          <span class="codex-cat__unit">tokens</span>
        </div>
      </div>
    </div>
    <p v-if="reviewModel && reviewModel === mainModel" class="codex-cat__hint">主模型与审核模型相同：这条模型的条目会带上审核策略，自己审自己。</p>
    <p v-else-if="reviewModel" class="codex-cat__hint">每个模型条目都会写 <code>auto_review_model_override = "{{ reviewModel }}"</code>，切换模型后审核仍交给它。</p>
    <div class="codex-cat__out">
      <div class="codex-cat__out-head">最终 <code>config.toml</code> 里这四行要对得上</div>
      <pre class="codex-cat__pre">{{ configPreview }}</pre>
      <button class="codex-cat__btn" :disabled="!mainModel || !reviewModel || busy" @click="download">{{ busy ? "生成中…" : "下载目录文件" }}</button>
    </div>
  </div>
</ClientOnly>

> [!important]
> `model_catalog_json` 指向的目录会**整体替换** Codex 内置的模型目录：`/model` 里只会出现这个文件里写了的模型。所以页面把该分组支持 `openai-response` 的模型全部写进去，其中审核模型那条额外带上审核策略与提示词。

2. 在 `config.toml` 最上方补三行，其余内容不动

```toml
approval_policy = "on-request"
approvals_reviewer = "auto_review"
model_catalog_json = "codex-model-catalog.json"
```

3. 彻底退出 `codex` 再重新打开。之后遇到需要审批的操作，会由审核模型直接判断，不再每次都停下来等你点

想关掉时，把上面三行删掉、重启 `codex` 即可。

::: details 为什么审核模型要自己填、这份文件是怎么来的
- **分组与模型**：页面实时从 `/api/pricing` 取；「支持 `openai-response` 的分组」判定与 [令牌分组](/docs/token/2-group.html) 页一致——先看 `model_group_endpoints` 对分组的覆盖，再看模型自身的 `supported_endpoint_types`。
- **为什么要写 `auto_review_model_override`**：Codex 选审核模型的顺序是（`codex-rs/ext/guardian-reviewer/src/model.rs`）：先读主模型条目里的 `auto_review_model_override`；没写才用服务端默认值，而这个默认值分登录方式（`codex-rs/model-provider/src/provider.rs`）——API Key 登录是 `gpt-5.6-luna`，ChatGPT 登录是 `codex-auto-review`；默认值对应的模型不在自定义目录里时，退回主模型自己审。中转站走的是 API Key 登录，所以目录里只放一条 `codex-auto-review` 并不会被选中，页面直接把 `auto_review_model_override` 写成你选的审核模型。以上按 Codex 当前开源代码整理，本机 `codex-cli 0.161.0` 实测可用，版本更新后可能变。
- **审核条目**：审核模型那条用 `codex-auto-review` 的原型（审核策略与提示词都在里面），只把 `slug`、`display_name` 换成你选的审核模型；其余模型用普通模型原型。
- **为什么要写全部模型**：Codex 的 `/model` 只能选目录文件里有的模型，只写两条就没法切换。并且 `auto_review_model_override` 是挂在每个模型条目上的字段，页面给**每一条**都写上，切换模型后审核设置才不会丢。
- **上下文长度**：`/api/pricing` 没有返回上下文长度，每个模型下面填的是目录模板自带的值（`272000`），按模型实际长度改；留空则整个字段不写。
- **目录内容**：CC Switch 自动生成的原始文件约 100 KB（两个模型），这里按分组模型数增长（codex 分组 5 个模型约 120 KB）。只删了三类内容，审核策略与系统提示词原文没有改动：
  - 每个模型里 `base_instructions` 与 `model_messages.instructions_template` 是同一份系统提示词，原文件写了两遍，这里只保留后面那一个
  - 值为 `null` 的字段，以及没有内容的 `service_tiers`、`additional_speed_tiers` 两个空列表
  - `model_messages.token_budget`：这一段 `enabled = false`，本来就不生效
:::

<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";

// 和其它页面一致：本地 dev 走 vite 代理（config.ts 里的 /packyapi），线上直连接口
const PRICING_API_DEV = "/packyapi/api/pricing";
const PRICING_API_PROD = "https://www.packyapi.ai/api/pricing";
const PRICING_API = import.meta.env.DEV ? PRICING_API_DEV : PRICING_API_PROD;
const CATALOG_TEMPLATE = "/assets/codex/codex-model-catalog.json";
// 目录里第二条（审核条目）的源模型：审核策略与提示词都在它身上
const REVIEW_MODEL = "codex-auto-review";
// 只有支持这个端点的模型才能给 Codex 用（/v1/responses）
const RESPONSES_ENDPOINT = "openai-response";
// 目录模板自带的上下文长度，接口没有这个字段，所以这里是默认值、可手改
const DEFAULT_CONTEXT = 272000;

const groups = ref([]);
const group = ref("");
const mainModel = ref("");
const reviewModel = ref("");
const contexts = reactive({});
const loading = ref(true);
const busy = ref(false);
const error = ref("");

const currentGroup = computed(() => groups.value.find((item) => item.name === group.value) || null);
const modelOptions = computed(() => currentGroup.value?.models || []);
const mainOptions = computed(() => modelOptions.value.filter((name) => name !== REVIEW_MODEL));
const groupHint = computed(() => {
  const item = currentGroup.value;
  if (!item) return "";
  const parts = [];
  if (item.desc) parts.push(item.desc);
  if (item.ratio !== undefined && item.ratio !== null) parts.push(`分组倍率 ${item.ratio}`);
  parts.push(item.models.includes(REVIEW_MODEL) ? `含审核模型 ${REVIEW_MODEL}` : "该分组没有 codex-auto-review，审核模型选同组任意模型即可");
  return parts.join(" · ");
});
const configPreview = computed(() =>
  [
    `model = "${mainModel.value || "…"}"`,
    'approval_policy = "on-request"',
    'approvals_reviewer = "auto_review"',
    'model_catalog_json = "codex-model-catalog.json"',
  ].join("\n")
);

const applyGroupDefaults = () => {
  const list = modelOptions.value;
  for (const key of Object.keys(contexts)) delete contexts[key];
  if (!list.length) {
    mainModel.value = "";
    reviewModel.value = "";
    return;
  }
  for (const name of list) contexts[name] = DEFAULT_CONTEXT;
  // 审核模型默认取该分组第一个模型；主模型优先 gpt-6-astra（与本页第 3 步示例一致）
  reviewModel.value = list[0];
  mainModel.value = list.includes("gpt-6-astra") ? "gpt-6-astra" : list.find((name) => name !== list[0]) || list[0];
};

// 默认分组：codex → codex-sale → 第一个带审核模型的分组 → 第一个
const pickGroup = (list) => {
  for (const name of ["codex", "codex-sale"]) {
    if (list.some((item) => item.name === name)) return name;
  }
  const withReview = list.find((item) => item.models.includes(REVIEW_MODEL));
  return (withReview || list[0]).name;
};

const load = async () => {
  loading.value = true;
  error.value = "";
  try {
    const res = await fetch(PRICING_API);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const payload = await res.json();
    const overrides = payload?.model_group_endpoints || {};
    const usable = payload?.usable_group || {};
    const ratio = payload?.group_ratio || {};
    const inactive = new Set(payload?.inactive_groups || []);
    // 与「令牌分组」页同一口径：先看分组覆盖，再看模型自身的端点类型
    const endpointsOf = (name, item) => overrides?.[name]?.[item.model_name] || item.supported_endpoint_types || [];
    const next = [];
    for (const name of Object.keys(usable)) {
      if (inactive.has(name)) continue;
      const models = (payload?.data || [])
        .filter((item) => (item.enable_groups || []).includes(name) && endpointsOf(name, item).includes(RESPONSES_ENDPOINT))
        .map((item) => item.model_name)
        .filter(Boolean);
      const unique = [...new Set(models)];
      if (!unique.length) continue;
      next.push({ name, desc: usable[name] || "", ratio: ratio[name], models: unique });
    }
    // 带 codex-auto-review 的分组排前面，其余按名字排
    next.sort((a, b) => {
      const rank = (item) => (item.models.includes(REVIEW_MODEL) ? 0 : 1);
      return rank(a) - rank(b) || a.name.localeCompare(b.name);
    });
    groups.value = next;
    if (!next.length) {
      error.value = "接口这次没返回支持 openai-response 的分组";
      return;
    }
    group.value = pickGroup(next);
    applyGroupDefaults();
  } catch (err) {
    error.value = err?.message || "请求失败";
  } finally {
    loading.value = false;
  }
};

watch(group, applyGroupDefaults);

const buildCatalog = (template) => {
  const mainProto = template?.models?.[0];
  const reviewProto = template?.models?.[1];
  if (!mainProto || !reviewProto) throw new Error("目录模板格式不对");
  const clone = (value) => JSON.parse(JSON.stringify(value));
  // 不填上下文就整个字段都不写，交给 Codex 用默认值
  const applyContext = (entry, ctx) => {
    const value = Number(ctx);
    if (Number.isFinite(value) && value > 0) {
      entry.context_window = value;
      entry.max_context_window = value;
    } else {
      delete entry.context_window;
      delete entry.max_context_window;
    }
  };
  // 分组里每个模型都写一条，`/model` 才能随时切换；审核模型那条换成带审核策略的原型
  const models = modelOptions.value.map((name, index) => {
    const entry = clone(name === reviewModel.value ? reviewProto : mainProto);
    entry.slug = name;
    entry.display_name = name;
    // 审核设置挂在模型条目上，每条都要写，否则切换模型后就丢了
    entry.auto_review_model_override = reviewModel.value;
    // priority 升序即 picker 顺序，保持与该分组模型列表一致
    entry.priority = 1000 + index;
    applyContext(entry, contexts[name]);
    return entry;
  });
  return { ...clone(template), models };
};

const download = async () => {
  if (!mainModel.value || !reviewModel.value) return;
  busy.value = true;
  try {
    const res = await fetch(CATALOG_TEMPLATE);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const catalog = buildCatalog(await res.json());
    const blob = new Blob([`${JSON.stringify(catalog, null, 2)}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "codex-model-catalog.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  } catch (err) {
    error.value = err?.message || "生成失败";
  } finally {
    busy.value = false;
  }
};

onMounted(load);
</script>

<style>
.codex-cat {
  border: 1px solid var(--vp-c-divider, #e5e7eb);
  border-radius: 12px;
  padding: 14px 16px;
  margin: 12px 0;
  max-width: 760px;
  background: var(--vp-c-bg-soft, #f8fafc);
}

.codex-cat__bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.codex-cat__label {
  font-weight: 600;
}

.codex-cat__select {
  flex: 1 1 220px;
  min-width: 180px;
  width: 100%;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider, #d1d5db);
  border-radius: 8px;
  background: var(--vp-c-bg, #fff);
  color: inherit;
  font-size: 14px;
}

.codex-cat__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.codex-cat__card {
  border: 1px solid var(--vp-c-divider, #e5e7eb);
  border-radius: 10px;
  padding: 10px 12px 12px;
  background: var(--vp-c-bg, #fff);
}

.codex-cat__card-title {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--vp-c-text-mute, #4b5563);
}

.codex-cat__card-note {
  margin: 8px 0 0;
  font-size: 12px;
  color: var(--vp-c-text-mute, #6b7280);
}

.codex-cat__list {
  margin-top: 12px;
}

.codex-cat__list-head {
  font-size: 13px;
  color: var(--vp-c-text-mute, #4b5563);
  margin-bottom: 8px;
}

.codex-cat__rows {
  border: 1px solid var(--vp-c-divider, #e5e7eb);
  border-radius: 10px;
  background: var(--vp-c-bg, #fff);
  max-height: 280px;
  overflow-y: auto;
}

.codex-cat__row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  font-size: 13px;
}

.codex-cat__row + .codex-cat__row {
  border-top: 1px solid var(--vp-c-divider, #e5e7eb);
}

.codex-cat__name {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--vp-font-family-mono, ui-monospace, SFMono-Regular, monospace);
  font-size: 12.5px;
}

.codex-cat__tag {
  flex: none;
  padding: 1px 7px;
  border-radius: 999px;
  font-size: 11px;
  color: var(--vp-c-accent, #2563eb);
  background: var(--vp-c-accent-soft, rgba(37, 99, 235, 0.12));
}

.codex-cat__row .codex-cat__input {
  flex: 0 0 120px;
  min-width: 90px;
  text-align: right;
}

.codex-cat__input {
  flex: 1 1 110px;
  min-width: 90px;
  padding: 5px 8px;
  border: 1px solid var(--vp-c-divider, #d1d5db);
  border-radius: 8px;
  background: var(--vp-c-bg, #fff);
  color: inherit;
  font-size: 13px;
}

.codex-cat__unit {
  font-size: 12px;
  opacity: 0.7;
}

.codex-cat__btn {
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  background: var(--vp-c-accent-bg, #3b82f6);
  color: var(--vp-c-white, #fff);
  font-size: 14px;
  cursor: pointer;
}

.codex-cat__btn--ghost {
  background: transparent;
  border: 1px solid var(--vp-c-divider, #d1d5db);
  color: inherit;
}

.codex-cat__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.codex-cat__hint {
  margin: 10px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-mute, #6b7280);
}

.codex-cat__hint--error {
  color: var(--vp-c-danger, #dc2626);
}

.codex-cat__out {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed var(--vp-c-divider, #e5e7eb);
}

.codex-cat__out-head {
  font-size: 13px;
  color: var(--vp-c-text-mute, #4b5563);
  margin-bottom: 8px;
}

.codex-cat__pre {
  margin: 0 0 10px;
  padding: 10px 12px;
  border-radius: 8px;
  background: var(--vp-c-bg-alt, #f3f4f6);
  font-size: 12.5px;
  line-height: 1.6;
  overflow-x: auto;
}
</style>

> [!tip]
> **遇到其他配置问题**
>
> 连不上服务、沙盒初始化失败、令牌分组选错等，都可以优先查看 [Codex 相关问题](/docs/faq/Codex.html) 页面，常见报错的处理方法都在里面。
