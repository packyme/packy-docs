---
title: 分组介绍
index: false
icon: fa-solid fa-star-of-david
category:
  - 模型分组
date: 2026-06-10
---

## 如何查看最新分组

你可以在“模型广场”查看每个令牌分组下支持哪些模型。入口在控制台页面的右上角：

![](/assets/image/QuickStart/007.webp)

也可以在浏览器里直接打开 <https://www.packyapi.ai/pricing>。

进入模型广场后：

1. 在左侧“可用令牌分组”中点击要使用的分组，右侧就只剩这个分组可用的模型。
2. 模型卡片右上角会标出所属分组，卡片里能看到模型 ID、输入 / 输出 / 缓存读取价格，以及实时的吞吐和延迟。
3. 需要按请求协议筛选时用左侧的“端点类型”；想一次看完全部模型的价格，点右上角的“表格视图”。

![](/assets/image/Model/002.webp)

- **可用令牌分组**：左侧栏红框处。分组名后的 `x0.5` 是这个分组的计费倍率，点「展开更多」能看到其它分组。
- **模型卡片**：右上角的蓝色小字是模型所属分组（如 `azure-officially`、`codex-sale`、`image`），下面是模型 ID 与输入 / 输出 / 缓存读取价格。
- **折扣与计费方式**：模型名后面的「7.2折」是当前折扣，卡片上的「按量计费」「按次计费」「阶梯计费」是计费方式，规则可点搜索框右侧的「计费说明」查看。
- **吞吐 / 延迟**：卡片底部是平台实测的吞吐、延迟和成功率，后面跟着采样时间，挑分组时可以一并参考。
- **端点类型**：左侧栏底部，按请求协议筛选模型（`anthropic`、`openai`、`openai-response` 等）。

### 倍率怎么算

左侧分组名后会带一个倍率，例如 `cc x2.5`、`cc-sale x0.8`：

- 选择不同令牌分组可以享受不同的计费倍率
- 倍率 < 1 享折扣：0.8倍 = 8折，0.5倍 = 5折
- 倍率 > 1 需加价：1.5倍 = 额外支付50%费用

::: warning 为什么要教你这一步？
授人以鱼不如授人以渔，很多人只知道去看分组名，其实压根不知道这个分组下有哪些模型，稀里糊涂配置以后，使用就会提示“模型不存在”。

**为了杜绝这种情况发生，我们直接教你怎么去查看每个分组的详细信息。**
:::

::: tip 还没有创建令牌？
创建令牌时怎么选分组、选完怎么核对模型，完整步骤在 [创建 API 令牌 · 查看分组可用模型](/docs/register/4-token.html#%E6%9F%A5%E7%9C%8B%E5%88%86%E7%BB%84%E5%8F%AF%E7%94%A8%E6%A8%A1%E5%9E%8B) 一节。
:::

## Claude 系列

### ::material-icon-theme:claude:: CC-sale分组
::: info 详情卡片
- **分组介绍：**
    - 便宜的Claude Code分组，提供较为廉价的Claude模型，跟官渠效果差不多，可以接入OpenClaw等第三方使用（养龙虾）

> [!important]
> **此分组缓存可能会有异常**

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="cc-sale" />
</ClientOnly>
:::

### ::material-icon-theme:claude:: CC分组
::: info 详情卡片
- **分组介绍：**
    - 使用Claude Code需要选择此分组！主要分组之一，专门用于Claude Code使用，不能接入任何第三方，如果触发PackyApi的环境审查，会封停你的PackyApi账号，并进入退款流程。这样做是因为有些人向Claude询问一些NSFW问题，会触发道德审查，导致账号被封且无法退款，为了号池稳定，请勿接入任何第三方

- **是否支持接入第三方：**
    - ×不支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="cc" />
</ClientOnly>
:::

### ::material-icon-theme:claude:: CC-expensive分组
::: info 详情卡片
- **分组介绍：**
    - 昂贵的 Claude Code 分组，可用于第三方

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="cc-expensive" />
</ClientOnly>
:::

### ::material-icon-theme:claude:: claude-officially分组
::: info 详情卡片
- **分组介绍：**
    - Claude 官方key渠道与 AWS 渠道混合，价格基本对标官方价，适合应急使用

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="claude-officially" />
</ClientOnly>
:::

### ::skill-icons:aws-light:: ::material-icon-theme:claude:: Aws-Q分组
::: info 详情卡片
- **分组介绍：**
    - 逆向Kiro的AWSQ的Claude模型，转换为API使用形式。此模型渠道特殊，使用了一系列手法，价格极其低廉。此分组模型相较于Claude官方的模型，上下文为200K，可进行思考，适合拿来日常使用，或做任务规划，翻译等。支持 Claude Code。当前该分组暂时没有可用资源。

> [!important]
> **注意，此分组在ClaudeCode使用的时候容易出现422错误等问题，稳定性不如cc分组**

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="aws-q" />
</ClientOnly>
:::

## GPT / Codex 系列

### ::hugeicons:chat-gpt:: Codex-sale分组
::: info 详情卡片
- **分组介绍：**
    - Codex 分组的优惠版本，可用模型与 Codex 分组一致，价格更低，但不支持接入第三方

- **是否支持接入第三方：**
    - ×不支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="codex-sale" />
</ClientOnly>
:::

### ::hugeicons:chat-gpt:: Codex分组
::: info 详情卡片
- **分组介绍：**
    - 使用 Codex 需要选择此分组！主要分组之一，专门用于 Codex 使用，不能接入第三方。这个分组的模型都是对编程特化的，适合写代码、改代码这类任务。

- **是否支持接入第三方：**
    - ×不支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="codex" />
</ClientOnly>
:::

### ::devicon:azure:: ::hugeicons:chat-gpt:: Azure-officially分组
::: info 详情卡片
- **分组介绍：**
    - Azure官方渠道，提供GPT相关模型，可以使用在OpenCode等第三方工具中，也可以拿来聊天

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="azure-officially" />
</ClientOnly>
:::

## Gemini

### ::vscode-icons:file-type-gemini:: Gemini-slb分组
::: info 详情卡片
- **分组介绍：**
    - Gemini企业号池，更加稳定一些，不过价格稍贵，用 Gemini 系列一般接入这个分组的号池，体验很不错

- **推荐接入方式：**
    - Cline / Roo Code 等工具（**不推荐 Gemini CLI**）

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="gemini-slb" />
</ClientOnly>
:::

### ::vscode-icons:file-type-gemini:: Gemini-officially分组
::: info 详情卡片
- **分组介绍：**
    - 完全接的官方渠道的Gemini API，价格对标官方，适合企业用户。

- **推荐接入方式：**
    - Cline / Roo Code 等工具（**不推荐 Gemini CLI**）

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="gemini-officially" />
</ClientOnly>
:::

## DeepSeek

### ::simple-icons:deepseek:: DeepSeek-sale分组
::: info 详情卡片
- **分组介绍：**
    - DeepSeek 优惠渠道，倍率 0.5，比 DeepSeek-officially 便宜一半。同样适用高峰时段 2 倍计价（工作日 09:00-12:00、14:00-18:00，北京时间）

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="deepseek-sale" />
</ClientOnly>
:::

### ::simple-icons:deepseek:: DeepSeek-officially分组
::: info 详情卡片
- **分组介绍：**
    - DeepSeek官方渠道，提供DeepSeek相关模型。这些模型在工作日 09:00-12:00、14:00-18:00（北京时间）按高峰时段 2 倍计价

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="deepseek-officially" />
</ClientOnly>
:::

## GLM / 智谱

### ::simple-icons:openaigym:: GLM-sale分组
::: info 详情卡片
- **分组介绍：**
    - GLM模型的优惠分组，提供价格较低的GLM相关模型

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="glm-sale" />
</ClientOnly>
:::

### ::simple-icons:openaigym:: zai-officially分组
::: info 详情卡片
- **分组介绍：**
    - 智谱清言GLM官方渠道，适合接入Claude Code使用，或作为日常对话使用

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="zai-officially" />
</ClientOnly>
:::

## Grok

### ::simple-icons:x:: Grok-sale分组
::: info 详情卡片
- **分组介绍：**
    - Grok模型的优惠分组，倍率 0.3，是当前最便宜的一档

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="grok-sale" />
</ClientOnly>
:::

### ::simple-icons:x:: Grok-officially分组
::: info 详情卡片
- **分组介绍：**
    - xAI Grok官方渠道，提供Grok相关模型

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="grok-officially" />
</ClientOnly>
:::

## Kimi 系列

### ::simple-icons:moonshotai:: Kimi-sale分组
::: info 详情卡片
- **分组介绍：**
    - Kimi模型的优惠分组，提供价格较低的Kimi相关模型

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="kimi-sale" />
</ClientOnly>
:::

### ::simple-icons:moonshotai:: Kimi-officially分组
::: info 详情卡片
- **分组介绍：**
    - Kimi官方渠道，提供Kimi相关模型

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="kimi-officially" />
</ClientOnly>
:::

## 小米 MiMo

### ::simple-icons:xiaomi:: Mimo-officially分组
::: info 详情卡片
- **分组介绍：**
    - 小米MiMo官方版本渠道

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="mimo-officially" />
</ClientOnly>
:::

## MiniMax

### ::material-symbols:token:: Minimax-officially分组
::: info 详情卡片
- **分组介绍：**
    - minimax官方渠道，提供较为廉价的minimax模型

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="minimax-officially" />
</ClientOnly>
:::

## 阿里百炼

### ::simple-icons:alibabacloud:: Bailian分组
::: info 详情卡片
- **分组介绍：**
    - 阿里百炼官方版本渠道，此分组模型使用会按阶梯计价

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="bailian" />
</ClientOnly>
:::

## TypeSafe

### ::material-symbols:shield-outline:: typesafe-officially分组
::: info 详情卡片
- **分组介绍：**
    - TypeSafe 官方渠道，提供 jev 系列模型。该分组的接口类型只有 systemone（`/v1/systemone`），不是 Anthropic / OpenAI 协议，普通 CLI 工具接不了

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="typesafe-officially" />
</ClientOnly>
:::

## Meta Muse

### ::simple-icons:meta:: muse-officially分组
::: info 详情卡片
- **分组介绍：**
    - Meta Muse 官方渠道，提供 Muse 系列模型，可用 openai 与 openai-response 两种协议调用

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="muse-officially" />
</ClientOnly>
:::

## 绘图模型

### ::material-symbols:image-outline:: Image分组
::: info 详情卡片
- **分组介绍：**
    - 官方稳定的Image绘图模型聚合分组，具体使用方法可参考「绘图模型教程」章节

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="image" />
</ClientOnly>
:::

## 视频模型

### ::material-symbols:movie-outline:: video分组
::: info 详情卡片
- **分组介绍：**
    - 视频生成专用渠道，提供 MiniMax H3 系列视频模型，走 `/v2/video_generation` 与 `/v2/video_regeneration` 两个接口

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="video" />
</ClientOnly>
:::

## 旧分组（备查）

以下 4 个分组在定价接口中已查不到，保留原文备查。

### ::ri:ai-generate-3d-fill:: Default分组
::: info 详情卡片
- **分组介绍：**
    - 一个默认的分组，没有对模型进行特定区分，一些测试模型，或无需分类的模型，以及其他一些乱七八糟的模型放在这个分组中，一般用不上，了解即可

> [!important]
> **你要用 CC 或者 Codex 的话，这个分组与你无关，生成令牌的时候不要选这个分组！！！**

- **支持的CLI：**
    - 无

- **是否支持接入第三方：**
    - ×不支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="default" />
</ClientOnly>
:::

### ::material-icon-theme:claude:: claude-sale分组
::: info 详情卡片
- **分组介绍：**
    - 逆向出来的Claude模型，贵一些，类似官渠，适合应急时候使用，仅支持Claude Code使用，不支持接入第三方

- **支持的CLI：**
    - Claude Code

- **是否支持接入第三方：**
    - ×不支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="claude-sale" />
</ClientOnly>
:::

### ::hugeicons:chat-gpt:: Hunyuan-officially分组
::: info 详情卡片
- **分组介绍：**
    - 腾讯混元官方渠道，提供混元相关模型

- **支持的CLI：**
    - 无

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="hunyuan-officially" />
</ClientOnly>
:::

### ::material-symbols:movie-outline:: Sora分组
::: info 详情卡片
- **分组介绍：**
    - Sora视频生成模型专用分组

- **支持的CLI：**
    - 无

- **是否支持接入第三方：**
    - √支持

- **模型列表（实时查询）：**

<ClientOnly>
  <ModelList group="sora" />
</ClientOnly>
:::

<script setup>
import { onMounted, ref, defineComponent, h, computed, watch } from "vue";

// 主题检测
const isDark = ref(false);
const updateTheme = () => {
  const scheme = localStorage.getItem('vuepress-theme-hope-scheme');
  if (scheme === 'dark') isDark.value = true;
  else if (scheme === 'light') isDark.value = false;
  else isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
};
onMounted(() => {
  updateTheme();
  window.addEventListener('storage', updateTheme);
  new MutationObserver(updateTheme).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
});

const API_ENDPOINT_DEV = "/packyapi/api/pricing";
const API_ENDPOINT_PROD = "https://www.packyapi.ai/api/pricing";
const API_ENDPOINT = import.meta.env.DEV ? API_ENDPOINT_DEV : API_ENDPOINT_PROD;

// 共享状态，避免多个组件重复请求
const pricingState = {
  data: ref(null),
  loading: ref(false),
  error: ref(""),
};

let fetchOncePromise = null;

const fetchPricing = async () => {
  if (fetchOncePromise) return fetchOncePromise;

  pricingState.loading.value = true;
  pricingState.error.value = "";

  fetchOncePromise = (async () => {
    try {
      const res = await fetch(API_ENDPOINT);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `请求失败：${res.status}`);
      }
      const data = await res.json();
      pricingState.data.value = data;
    } catch (err) {
      pricingState.error.value = err?.message || "请求失败，请稍后重试";
    } finally {
      pricingState.loading.value = false;
    }
  })();

  return fetchOncePromise;
};

const ModelList = defineComponent({
  name: "ModelList",
  props: {
    group: {
      type: String,
      default: "default",
    },
  },
  setup(props) {
    const loading = computed(() => pricingState.loading.value);
    const error = computed(() => pricingState.error.value);
    const data = computed(() => pricingState.data.value);

    const models = computed(() => {
      const all = data.value?.data || [];
      return all.filter((item) => (item.enable_groups || []).includes(props.group));
    });

    const groupRatio = computed(() => data.value?.group_ratio?.[props.group]);
    const groupDesc = computed(() => data.value?.usable_group?.[props.group] || "");

    // 请求格式：分组内每个模型先看 model_group_endpoints 覆盖，再看自身 supported_endpoint_types
    const endpoints = computed(() => {
      const payload = data.value;
      if (!payload) return null;
      const overrides = payload.model_group_endpoints?.[props.group] || {};
      const set = new Set();
      for (const item of payload.data || []) {
        if (!(item.enable_groups || []).includes(props.group)) continue;
        const list = overrides[item.model_name] || item.supported_endpoint_types || [];
        for (const ep of list) set.add(ep);
      }
      return Array.from(set).sort();
    });

    onMounted(fetchPricing);

    const header = () =>
      h("div", { class: "model-card__header" }, [
        h("div", { class: "model-card__title-row" }, [
          h("div", { class: "model-card__title" }, `模型列表 · ${props.group}`),
          h("div", { class: "model-card__subtitle" }, groupDesc.value || "实时查询展示该分组可用模型"),
        ]),
        h("div", { class: "model-card__title-row" }, [
          h("span", { class: "endpoint-count" }, "请求格式："),
          endpoints.value === null
            ? h("span", { class: "endpoint-count" }, "加载中…")
            : endpoints.value.length
              ? h("div", { class: "endpoint-tags" }, endpoints.value.map((ep) => h("span", { class: "endpoint-tag", key: ep }, ep)))
              : h("span", { class: "endpoint-count" }, "—"),
        ]),
      ]);

    const body = () => {
      if (error.value) return h("div", { class: "error-text" }, error.value);
      if (loading.value || !data.value)
        return h("div", { class: "spinner", "aria-hidden": "true" });

      if (!models.value.length)
        return h("div", { class: "empty" }, "暂无模型数据");

      return h(
        "div",
        { class: "model-grid" },
        models.value.map((item) =>
          h("div", { class: "model-item", key: item.model_name }, [
            h("div", { class: "model-item__header" }, [
              h("div", { class: "model-id" }, item.model_name),
              h("div", { class: "endpoint-count" }, `${(item.supported_endpoint_types || []).length} endpoints`),
            ]),
            h(
              "div",
              { class: "endpoint-tags" },
              (item.supported_endpoint_types || []).map((ep) =>
                h("span", { class: "endpoint-tag", key: `${item.model_name}-${ep}` }, ep)
              )
            ),
            h("div", { class: "meta" }, [
              h("span", { class: "meta-chip" }, `分组倍率：${groupRatio.value ?? "—"}`),
              item.model_price != null
                ? h("span", { class: "meta-chip" }, `模型单价：${item.model_price}`)
                : null,
            ]),
          ])
        )
      );
    };

    const isUnavailable = computed(() => !loading.value && data.value && !models.value.length);

    return () => h("div", { class: ["model-card", { dark: isDark.value, unavailable: isUnavailable.value }] }, [
      isUnavailable.value ? h("div", { class: "unavailable-ribbon" }, "渠道已下架") : null,
      header(),
      body()
    ]);
  },
});
</script>

<style>
.model-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider, #e5e7eb);
  border-radius: 14px;
  padding: 18px;
  background: #f7fbff;
  box-shadow: 0 12px 28px rgb(15 23 42 / 6%);
  margin-top: 10px;
  backdrop-filter: blur(4px);
  max-width: 1100px;
}
.model-card.dark {
  background: rgba(30, 32, 38, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 12px 28px rgb(0 0 0 / 20%);
}

.model-card.unavailable {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe4e4 100%);
  border-color: #f87171;
}
.model-card.dark.unavailable {
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.4) 0%, rgba(80, 20, 20, 0.5) 100%);
  border-color: #dc2626;
}

.unavailable-ribbon {
  position: absolute;
  top: 18px;
  right: -35px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: #fff;
  padding: 6px 40px;
  font-size: 12px;
  font-weight: 700;
  transform: rotate(45deg);
  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4);
  z-index: 10;
}

.model-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.model-card__title {
  font-weight: 700;
  font-size: 17px;
  color: #0f172a;
}
.model-card.dark .model-card__title {
  color: rgba(255, 255, 255, 0.9);
}

.model-card__title-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.model-card__subtitle {
  font-size: 12px;
  color: var(--text-color, #4b5563);
  margin-top: 2px;
  padding: 6px 10px;
  background: #eef2ff;
  border: 1px solid #e0e7ff;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  letter-spacing: 0.1px;
}
.model-card.dark .model-card__subtitle {
  background: rgba(60, 65, 80, 0.6);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

.error-text {
  color: #e11d48;
  font-size: 13px;
  margin: 8px 0;
}

.spinner {
  width: 42px;
  height: 42px;
  border: 3px solid rgba(31, 45, 61, 0.15);
  border-top-color: var(--accent-color, #409eff);
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
  margin: 12px auto;
}
.model-card.dark .spinner {
  border-color: rgba(255, 255, 255, 0.15);
  border-top-color: #409eff;
}

.model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
  margin-top: 14px;
  align-items: start;
}

.model-item {
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider, #e5e7eb);
  border-radius: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
  box-shadow: 0 6px 16px rgb(15 23 42 / 8%);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}
.model-card.dark .model-item {
  background: linear-gradient(180deg, rgba(45, 48, 55, 0.9) 0%, rgba(35, 38, 45, 0.9) 100%);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 6px 16px rgb(0 0 0 / 15%);
}

.model-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgb(15 23 42 / 12%);
  border-color: rgba(64, 158, 255, 0.45);
}
.model-card.dark .model-item:hover {
  box-shadow: 0 10px 22px rgb(0 0 0 / 25%);
}

.model-item__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

.model-id {
  font-weight: 600;
  font-size: 15px;
  color: #0f172a;
  word-break: break-all;
}
.model-card.dark .model-id {
  color: rgba(255, 255, 255, 0.9);
}

.endpoint-count {
  font-size: 12px;
  color: #64748b;
}
.model-card.dark .endpoint-count {
  color: rgba(255, 255, 255, 0.5);
}

.endpoint-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
}

.endpoint-tag {
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(64, 158, 255, 0.12);
  color: #2563eb;
  font-size: 12px;
  border: 1px solid rgba(64, 158, 255, 0.22);
  letter-spacing: 0.3px;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, rgba(64, 158, 255, 0.16), rgba(64, 158, 255, 0.08));
}
.model-card.dark .endpoint-tag {
  background: linear-gradient(180deg, rgba(64, 158, 255, 0.25), rgba(64, 158, 255, 0.15));
  border-color: rgba(64, 158, 255, 0.35);
  color: #60a5fa;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  align-items: center;
  color: #4b5563;
  font-size: 12px;
}

.meta-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 10px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  color: #334155;
  font-weight: 600;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.04);
}
.model-card.dark .meta-chip {
  background: rgba(55, 58, 65, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.75);
}

.tips {
  margin-top: 10px;
  font-size: 12px;
  color: #4b5563;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
