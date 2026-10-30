---
title: 令牌分组介绍
icon: ic:baseline-generating-tokens
order: 2
# 分组卡片的标题是组件运行时渲染的 h3，默认的「此页内容」只取 #markdown-content 直接子级标题，收不到；这里改成取全部后代标题
toc:
  selector: "#markdown-content h1, #markdown-content h2, #markdown-content h3, #markdown-content h4, #markdown-content h5, #markdown-content h6, [vp-content] > h2"
---

<!-- 「请求格式」由组件按 /api/pricing 实时汇总：分组内每个模型先看 model_group_endpoints 的覆盖，再看自身 supported_endpoint_types，取并集；旧分组已查不到模型，这一栏显示 — -->

## Claude 系列

<GroupCards groups="cc-sale, cc, cc-expensive, claude-officially, aws-q" />

## GPT / Codex 系列

<GroupCards groups="codex-sale, codex, azure-officially" />

## Gemini

<GroupCards groups="gemini-slb, gemini-officially" />

## DeepSeek

<GroupCards groups="deepseek-sale, deepseek-officially" />

## GLM / 智谱

<GroupCards groups="glm-sale, zai-officially" />

## Grok

<GroupCards groups="grok-sale, grok-officially" />

## Kimi 系列

<GroupCards groups="kimi-sale, kimi-officially" />

## 小米 MiMo

<GroupCards groups="mimo-officially" />

## MiniMax

<GroupCards groups="minimax-officially" />

## 阿里百炼

<GroupCards groups="bailian" />

## TypeSafe

<GroupCards groups="typesafe-officially" />

## Meta Muse

<GroupCards groups="muse-officially" />

## 绘图模型

<GroupCards groups="image" />

## 视频模型

<GroupCards groups="video" />

## 旧分组（备查）

以下 4 个分组在定价接口中已查不到，保留原文备查。

### ::ri:ai-generate-3d-fill:: Default分组

<ClientOnly>
  <GroupCard
    group="default"
    description="一个默认的分组，没有对模型进行特定区分，一些测试模型，或无需分类的模型，以及其他一些乱七八糟的模型放在这个分组中，一般用不上，了解即可"
    :thirdParty="false"
    warning="你要用 CC 或者 Codex 的话，这个分组与你无关，生成令牌的时候不要选这个分组！！！"
  />
</ClientOnly>

### ::material-icon-theme:claude:: claude-sale分组

<ClientOnly>
  <GroupCard
    group="claude-sale"
    description="逆向出来的Claude模型，贵一些，类似官渠，适合应急时候使用，仅支持Claude Code使用，不支持接入第三方"
    :thirdParty="false"
  />
</ClientOnly>

### ::hugeicons:chat-gpt:: Hunyuan-officially分组

<ClientOnly>
  <GroupCard
    group="hunyuan-officially"
    description="腾讯混元官方渠道，提供混元相关模型"
    :thirdParty="true"
  />
</ClientOnly>

### ::material-symbols:movie-outline:: Sora分组

<ClientOnly>
  <GroupCard
    group="sora"
    description="Sora视频生成模型专用分组"
    :thirdParty="true"
  />
</ClientOnly>


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

    onMounted(fetchPricing);

    const header = () =>
      h("div", { class: "model-card__header" }, [
        h("div", { class: "model-card__title-row" }, [
          h("div", { class: "model-card__title" }, `模型列表 · ${props.group}`),
          h("div", { class: "model-card__subtitle" }, groupDesc.value || "实时查询展示该分组可用模型"),
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

    return () => h("div", { class: ["model-card", { dark: isDark.value }] }, [
      header(),
      body()
    ]);
  },
});

const GroupCard = defineComponent({
  name: "GroupCard",
  props: {
    group: { type: String, required: true },
    description: { type: String, default: "" },
    thirdParty: { type: Boolean, default: false },
    warning: { type: String, default: "" },
  },
  setup(props) {
    onMounted(fetchPricing);

    // 请求格式：分组内每个模型实际可用的端点（优先 model_group_endpoints 覆盖，其次模型自身 supported_endpoint_types）
    const endpoints = computed(() => {
      const payload = pricingState.data.value;
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

    return () =>
      h("div", { class: ["group-card", { dark: isDark.value }] }, [
        // 分组介绍
        h("div", { class: "group-card__desc" }, [
          h("div", { class: "group-card__desc-bar" }),
          h("div", { class: "group-card__desc-body" }, [
            h("div", { class: "group-card__desc-label" }, "分组介绍"),
            h("div", { class: "group-card__desc-text" }, props.description),
          ]),
        ]),
        // 警告
        props.warning
          ? h("div", { class: "group-card__warning" }, [
              h("span", { class: "group-card__warning-icon" }, "⚠️"),
              h("span", null, props.warning),
            ])
          : null,
        // 摘要栏：请求格式 + 第三方
        h("div", { class: "group-card__summary" }, [
          h("div", { class: "group-card__summary-item" }, [
            h("span", { class: "group-card__summary-label" }, "请求格式"),
            endpoints.value === null
              ? h("span", { class: "group-card__summary-value group-card__summary-value--muted" }, "加载中…")
              : endpoints.value.length
                ? h("div", { class: "group-card__tag-chips" },
                    endpoints.value.map((c) => h("span", { class: "group-card__cli-chip", key: c }, c))
                  )
                : h("span", { class: "group-card__summary-value group-card__summary-value--muted" }, "—"),
          ]),
          h("div", { class: "group-card__summary-divider" }),
          h("div", { class: "group-card__summary-item" }, [
            h("span", { class: "group-card__summary-label" }, "第三方接入"),
            h("span", {
              class: ["group-card__summary-badge", props.thirdParty ? "group-card__summary-badge--yes" : "group-card__summary-badge--no"]
            }, props.thirdParty ? "✓ 支持" : "✗ 不支持"),
          ]),
        ]),
        // 模型列表
        h("div", { class: "group-card__models" }, [
          h(ModelList, { group: props.group }),
        ]),
      ]);
  },
});
// 分组文案：静态内容，改文案改这里；节内顺序与请求格式由接口实时决定
const GROUP_META = {
  "cc-sale": { icons: ["material-icon-theme:claude"], name: "CC-sale分组", desc: "便宜的Claude Code分组，提供较为廉价的Claude模型，跟官渠效果差不多，可以接入OpenClaw等第三方使用（养龙虾）", thirdParty: true, warning: "此分组缓存可能会有异常" },
  "cc": { icons: ["material-icon-theme:claude"], name: "CC分组", desc: "使用Claude Code需要选择此分组！主要分组之一，专门用于Claude Code使用，不能接入任何第三方，如果触发PackyApi的环境审查，会封停你的PackyApi账号，并进入退款流程。这样做是因为有些人向Claude询问一些NSFW问题，会触发道德审查，导致账号被封且无法退款，为了号池稳定，请勿接入任何第三方", thirdParty: false },
  "cc-expensive": { icons: ["material-icon-theme:claude"], name: "CC-expensive分组", desc: "昂贵的 Claude Code 分组，支持第三方。但openclaw等可能会出现不可接入", thirdParty: true },
  "claude-officially": { icons: ["material-icon-theme:claude"], name: "claude-officially分组", desc: "Claude 官方key渠道与 AWS 渠道混合，价格基本对标官方价，适合应急使用", thirdParty: true },
  "aws-q": { icons: ["skill-icons:aws-light", "material-icon-theme:claude"], name: "Aws-Q分组", desc: "逆向Kiro的AWSQ的Claude模型，转换为API使用形式。此模型渠道特殊，使用了一系列手法，价格极其低廉。此分组模型相较于Claude官方的模型，上下文为200K，可进行思考，适合拿来日常使用，或做任务规划，翻译等。支持 Claude Code。当前该分组暂时没有可用资源。", thirdParty: true, warning: "注意，此分组在ClaudeCode使用的时候容易出现422错误等问题，稳定性不如cc分组" },
  "codex-sale": { icons: ["hugeicons:chat-gpt"], name: "Codex-sale分组", desc: "Codex 分组的优惠版本，可用模型与 Codex 分组一致，价格更低，但不支持接入第三方", thirdParty: false },
  "codex": { icons: ["hugeicons:chat-gpt"], name: "Codex分组", desc: "使用 Codex 需要选择此分组！主要分组之一，专门用于 Codex 使用，不能接入第三方。这个分组的模型都是对编程特化的，适合写代码、改代码这类任务。", thirdParty: false },
  "azure-officially": { icons: ["devicon:azure", "hugeicons:chat-gpt"], name: "Azure-officially分组", desc: "Azure官方渠道，提供GPT相关模型，可以使用在OpenCode等第三方工具中，也可以拿来聊天", thirdParty: true },
  "gemini-slb": { icons: ["vscode-icons:file-type-gemini"], name: "Gemini-slb分组", desc: "Gemini企业号池，更加稳定一些，不过价格稍贵，用 Gemini 系列一般接入这个分组的号池，体验很不错。推荐通过 Cline / Roo Code 等工具接入，不推荐 Gemini CLI", thirdParty: true },
  "gemini-officially": { icons: ["vscode-icons:file-type-gemini"], name: "Gemini-officially分组", desc: "完全接的官方渠道的Gemini API，价格对标官方，适合企业用户。推荐通过 Cline / Roo Code 等工具接入，不推荐 Gemini CLI", thirdParty: true },
  "deepseek-sale": { icons: ["simple-icons:deepseek"], name: "DeepSeek-sale分组", desc: "DeepSeek 优惠渠道，倍率 0.5，比 DeepSeek-officially 便宜一半。同样适用高峰时段 2 倍计价（工作日 09:00-12:00、14:00-18:00，北京时间）", thirdParty: true },
  "deepseek-officially": { icons: ["simple-icons:deepseek"], name: "DeepSeek-officially分组", desc: "DeepSeek官方渠道，提供DeepSeek相关模型。这些模型在工作日 09:00-12:00、14:00-18:00（北京时间）按高峰时段 2 倍计价", thirdParty: true },
  "glm-sale": { icons: ["simple-icons:openaigym"], name: "GLM-sale分组", desc: "GLM模型的优惠分组，提供价格较低的GLM相关模型", thirdParty: true },
  "zai-officially": { icons: ["simple-icons:openaigym"], name: "zai-officially分组", desc: "智谱清言GLM官方渠道，适合接入Claude Code使用，或作为日常对话使用", thirdParty: true },
  "grok-sale": { icons: ["simple-icons:x"], name: "Grok-sale分组", desc: "Grok模型的优惠分组，提供价格较低的Grok相关模型", thirdParty: true },
  "grok-officially": { icons: ["simple-icons:x"], name: "Grok-officially分组", desc: "xAI Grok官方渠道，提供Grok相关模型", thirdParty: true },
  "kimi-sale": { icons: ["simple-icons:moonshotai"], name: "Kimi-sale分组", desc: "Kimi模型的优惠分组，提供价格较低的Kimi相关模型", thirdParty: true },
  "kimi-officially": { icons: ["simple-icons:moonshotai"], name: "Kimi-officially分组", desc: "Kimi官方渠道，提供Kimi相关模型", thirdParty: true },
  "mimo-officially": { icons: ["simple-icons:xiaomi"], name: "Mimo-officially分组", desc: "小米MiMo官方版本渠道", thirdParty: true },
  "minimax-officially": { icons: ["material-symbols:token"], name: "Minimax-officially分组", desc: "minimax官方渠道，提供较为廉价的minimax模型", thirdParty: true },
  "bailian": { icons: ["simple-icons:alibabacloud"], name: "Bailian分组", desc: "阿里百炼官方版本渠道，此分组模型使用会按阶梯计价", thirdParty: true },
  "typesafe-officially": { icons: ["material-symbols:shield-outline"], name: "typesafe-officially分组", desc: "TypeSafe 官方渠道，提供 jev 系列模型。该分组的接口类型只有 systemone（/v1/systemone），不是 Anthropic / OpenAI 协议，普通 CLI 工具接不了", thirdParty: true },
  "muse-officially": { icons: ["simple-icons:meta"], name: "muse-officially分组", desc: "Meta Muse 官方渠道，提供 Muse 系列模型，可用 openai 与 openai-response 两种协议调用", thirdParty: true },
  "image": { icons: ["material-symbols:image-outline"], name: "Image分组", desc: "官方稳定的Image绘图模型聚合分组，具体使用方法可参考「绘图模型教程」章节", thirdParty: true },
  "video": { icons: ["material-symbols:movie-outline"], name: "video分组", desc: "视频生成专用渠道，提供 MiniMax H3 系列视频模型，走 /v2/video_generation 与 /v2/video_regeneration 两个接口", thirdParty: true },
};

// 按小节渲染分组卡片：membership 写在 markdown 的 groups 属性里，节内顺序取接口 group_ratio
const GroupCards = defineComponent({
  name: "GroupCards",
  props: {
    groups: { type: String, required: true },
  },
  setup(props) {
    const ordered = computed(() => {
      const ratios = pricingState.data.value?.group_ratio || {};
      return props.groups
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .sort((a, b) => {
          const ra = ratios[a];
          const rb = ratios[b];
          if (ra == null && rb == null) return 0;
          if (ra == null) return 1;
          if (rb == null) return -1;
          return ra - rb;
        });
    });

    const heading = (group) => {
      const meta = GROUP_META[group] || {};
      const icons = meta.icons || [];
      const anchor = `${group}分组`;
      return h("h3", { id: anchor, tabindex: "-1" }, [
        h("a", { class: "header-anchor", href: `#${anchor}` }, [
          h("span", null, [
            ...icons.map((icon) =>
              h("iconify-icon", { class: "vp-icon", icon, sizing: "height", height: "1em", key: icon })
            ),
            `${icons.length ? " " : ""}${meta.name || group}`,
          ]),
        ]),
      ]);
    };

    return () =>
      h("div", { class: "group-cards" },
        ordered.value.map((group) => {
          const meta = GROUP_META[group] || {};
          return h("div", { class: "group-cards__item", key: group }, [
            heading(group),
            h(GroupCard, {
              group,
              description: meta.desc || "",
              thirdParty: !!meta.thirdParty,
              warning: meta.warning || "",
            }),
          ]);
        })
      );
  },
});
</script>

<style>
/* ===== GroupCard 样式 ===== */
.group-card {
  border: 1px solid var(--vp-c-divider, #e5e7eb);
  border-radius: 16px;
  padding: 22px;
  background: linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%);
  box-shadow: 0 8px 24px rgb(15 23 42 / 6%);
  margin-top: 12px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.group-card.dark {
  background: linear-gradient(135deg, rgba(28, 30, 38, 0.95) 0%, rgba(22, 24, 32, 0.95) 100%);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 24px rgb(0 0 0 / 25%);
}

/* 顶部摘要栏 */
.group-card__summary {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 18px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(64, 158, 255, 0.1);
  border-radius: 12px;
}
.group-card.dark .group-card__summary {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.07);
}

.group-card__summary-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.group-card__summary-label {
  font-size: 12px;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}
.group-card.dark .group-card__summary-label {
  color: rgba(255, 255, 255, 0.35);
}

.group-card__summary-value--muted {
  font-size: 13px;
  font-weight: 600;
  color: #94a3b8;
}
.group-card.dark .group-card__summary-value--muted {
  color: rgba(255, 255, 255, 0.3);
}

.group-card__summary-divider {
  width: 1px;
  height: 24px;
  background: #e2e8f0;
  flex-shrink: 0;
}
.group-card.dark .group-card__summary-divider {
  background: rgba(255, 255, 255, 0.1);
}

.group-card__summary-badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid;
}
.group-card__summary-badge--yes {
  background: rgba(5, 150, 105, 0.1);
  color: #059669;
  border-color: rgba(5, 150, 105, 0.2);
}
.group-card.dark .group-card__summary-badge--yes {
  background: rgba(52, 211, 153, 0.15);
  color: #34d399;
  border-color: rgba(52, 211, 153, 0.25);
}
.group-card__summary-badge--no {
  background: rgba(148, 163, 184, 0.1);
  color: #94a3b8;
  border-color: rgba(148, 163, 184, 0.2);
}
.group-card.dark .group-card__summary-badge--no {
  background: rgba(148, 163, 184, 0.1);
  color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.08);
}

.group-card__tag-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.group-card__cli-chip {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: rgba(64, 158, 255, 0.1);
  color: #2563eb;
  border: 1px solid rgba(64, 158, 255, 0.2);
}
.group-card.dark .group-card__cli-chip {
  background: rgba(96, 165, 250, 0.15);
  color: #60a5fa;
  border-color: rgba(96, 165, 250, 0.25);
}

/* 警告 */
.group-card__warning {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 14px;
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
  border: 1px solid #fcd34d;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #92400e;
  line-height: 1.6;
}
.group-card.dark .group-card__warning {
  background: linear-gradient(135deg, rgba(146, 64, 14, 0.2) 0%, rgba(120, 53, 15, 0.25) 100%);
  border-color: rgba(251, 191, 36, 0.4);
  color: #fbbf24;
}

.group-card__warning-icon {
  flex-shrink: 0;
  font-size: 15px;
  margin-top: 1px;
}

/* 分组介绍 */
.group-card__desc {
  display: flex;
  gap: 0;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(64, 158, 255, 0.08);
}
.group-card.dark .group-card__desc {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.06);
}

.group-card__desc-bar {
  width: 4px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #3b82f6 0%, #6366f1 100%);
  border-radius: 4px 0 0 4px;
}
.group-card.dark .group-card__desc-bar {
  background: linear-gradient(180deg, #60a5fa 0%, #818cf8 100%);
}

.group-card__desc-body {
  padding: 14px 16px;
  flex: 1;
  min-width: 0;
}

.group-card__desc-label {
  font-size: 11px;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}
.group-card.dark .group-card__desc-label {
  color: rgba(255, 255, 255, 0.35);
}

.group-card__desc-text {
  font-size: 15.5px;
  line-height: 1.75;
  color: #334155;
}
.group-card.dark .group-card__desc-text {
  color: rgba(255, 255, 255, 0.8);
}

.group-card__models {
  margin-top: 4px;
}

/* ===== ModelList 样式 ===== */
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
