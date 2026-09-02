---
title: Token Group Details
icon: ic:baseline-generating-tokens
order: 2
---

### ::ri:ai-generate-3d-fill:: Default Group

<ClientOnly>
  <GroupCard
    group="default"
    description="The default general group without specialized model categorization. Contains test models, uncategorized models, and experimental models. Generally not needed for standard CLI workflows."
    :thirdParty="false"
    warning="If you are using Claude Code or Codex, this group is NOT for you. Do not select this group when creating tokens for those CLI tools!"
  />
</ClientOnly>

### ::skill-icons:aws-light:: ::material-icon-theme:claude:: Aws-Q Group

<ClientOnly>
  <GroupCard
    group="aws-q"
    description="Claude models from AWS Q channels converted for API usage. Highly economical pricing with a 200K context window and reasoning capabilities. Suitable for daily coding assistance, task planning, and translation."
    :cli="['Claude Code']"
    :thirdParty="true"
    warning="May occasionally encounter HTTP 422 errors under heavy Claude Code workloads. Stability is lower than dedicated CC and AWS groups."
  />
</ClientOnly>

### ::devicon:azure:: ::hugeicons:chat-gpt:: Azure-officially Group

<ClientOnly>
  <GroupCard
    group="azure-officially"
    description="Official Microsoft Azure channel providing enterprise OpenAI GPT models. Compatible with third-party tools like OpenCode and general chat applications."
    :thirdParty="true"
  />
</ClientOnly>

### ::simple-icons:alibabacloud:: Bailian Group

<ClientOnly>
  <GroupCard
    group="bailian"
    description="Alibaba Cloud Bailian official channel with tiered pricing models."
    :cli="['Claude Code']"
    :thirdParty="true"
  />
</ClientOnly>

### ::material-icon-theme:claude:: CC Group

<ClientOnly>
  <GroupCard
    group="cc"
    description="Dedicated primary group for Claude Code CLI! Strictly reserved for native Claude Code. Do not connect to third-party clients (such as chat GUIs) — doing so will trigger security checks and account suspension to protect pooled quota stability."
    :cli="['Claude Code']"
    :thirdParty="false"
  />
</ClientOnly>

### ::material-icon-theme:claude:: CC-expensive Group

<ClientOnly>
  <GroupCard
    group="cc-expensive"
    description="Premium Claude Code group with high rate limits and third-party compatibility. Some experimental clients like OpenClaw may have partial compatibility."
    :cli="['Claude Code']"
    :thirdParty="true"
  />
</ClientOnly>

### ::material-icon-theme:claude:: CC-sale Group

<ClientOnly>
  <GroupCard
    group="cc-sale"
    description="Cost-effective Claude Code group providing economical Claude models with near-official quality. Compatible with OpenClaw and other third-party agent tools."
    :cli="['Claude Code']"
    :thirdParty="true"
    warning="Prompt cache hit rates may vary compared to standard CC groups."
  />
</ClientOnly>

### ::material-icon-theme:claude:: claude-officially Group

<ClientOnly>
  <GroupCard
    group="claude-officially"
    description="Hybrid of official Anthropic direct keys and enterprise AWS Bedrock channels. Direct official pricing tier, ideal for mission-critical tasks and fallback usage."
    :cli="['Claude Code']"
    :thirdParty="true"
  />
</ClientOnly>

### ::material-icon-theme:claude:: claude-sale Group

<ClientOnly>
  <GroupCard
    group="claude-sale"
    description="Economical Claude models suitable for backup and secondary workloads. Exclusively for Claude Code CLI; third-party integrations not supported."
    :cli="['Claude Code']"
    :thirdParty="false"
  />
</ClientOnly>

### ::hugeicons:chat-gpt:: Codex Group

<ClientOnly>
  <GroupCard
    group="codex"
    description="Primary group for OpenAI Codex CLI and programming workflows. Supports third-party IDE tools. Models in this group are specialized for code generation and engineering tasks."
    :cli="['Codex']"
    :thirdParty="true"
  />
</ClientOnly>

### ::simple-icons:deepseek:: DeepSeek-officially Group

<ClientOnly>
  <GroupCard
    group="deepseek-officially"
    description="Direct official DeepSeek upstream providing DeepSeek-V3 and DeepSeek-R1 models with full native capabilities and low latency."
    :thirdParty="true"
  />
</ClientOnly>

### ::vscode-icons:file-type-gemini:: Gemini-officially Group

<ClientOnly>
  <GroupCard
    group="gemini-officially"
    description="Direct official Google Cloud Gemini API channels. Enterprise-grade stability. Recommended for use with Cline, Roo Code, and OpenAI-compatible tools rather than Gemini CLI."
    :thirdParty="true"
  />
</ClientOnly>

### ::vscode-icons:file-type-gemini:: Gemini-slb Group

<ClientOnly>
  <GroupCard
    group="gemini-slb"
    description="Gemini Enterprise Load-Balanced pool offering superior stability and high concurrency for Gemini-3 Pro/Flash. Recommended for Cline / Roo Code coding workflows."
    :thirdParty="true"
  />
</ClientOnly>

### ::simple-icons:openaigym:: GLM-sale Group

<ClientOnly>
  <GroupCard
    group="glm-sale"
    description="Discounted GLM group providing economical Zhipu AI GLM models with Claude Code compatibility."
    :cli="['Claude Code']"
    :thirdParty="true"
  />
</ClientOnly>

### ::simple-icons:x:: Grok-officially Group

<ClientOnly>
  <GroupCard
    group="grok-officially"
    description="Official xAI channel providing Grok-3 and Grok-2 reasoning and coding models."
    :thirdParty="true"
  />
</ClientOnly>

### ::simple-icons:x:: Grok-sale Group

<ClientOnly>
  <GroupCard
    group="grok-sale"
    description="Discounted Grok group offering high-speed, cost-effective Grok endpoints."
    :thirdParty="true"
  />
</ClientOnly>

### ::hugeicons:chat-gpt:: Hunyuan-officially Group

<ClientOnly>
  <GroupCard
    group="hunyuan-officially"
    description="Official Tencent Hunyuan channel providing Hunyuan-Large and related models."
    :thirdParty="true"
  />
</ClientOnly>

### ::material-symbols:image-outline:: Image Group

<ClientOnly>
  <GroupCard
    group="image"
    description="Aggregated image generation group providing Nano Banana 2 Pro, GPT-Image-2, Midjourney, and FLUX. See the Image Generation section for integration details."
    :thirdParty="true"
  />
</ClientOnly>

### ::hugeicons:chat-gpt:: Kimi-officially Group

<ClientOnly>
  <GroupCard
    group="kimi-officially"
    description="Official Moonshot AI channel providing Kimi K1.5, Kimi K0.5, and long-context models."
    :thirdParty="true"
  />
</ClientOnly>

### ::hugeicons:chat-gpt:: Kimi-sale Group

<ClientOnly>
  <GroupCard
    group="kimi-sale"
    description="Discounted Kimi group providing cost-effective Moonshot AI endpoints."
    :thirdParty="true"
  />
</ClientOnly>

### ::simple-icons:xiaomi:: Mimo-officially Group

<ClientOnly>
  <GroupCard
    group="mimo-officially"
    description="Xiaomi MiMo official channel models."
    :thirdParty="true"
  />
</ClientOnly>

### ::material-symbols:token:: Minimax-officially Group

<ClientOnly>
  <GroupCard
    group="minimax-officially"
    description="Official MiniMax channel offering MiniMax-01 and abab-series high-speed chat and reasoning models."
    :cli="['Claude Code']"
    :thirdParty="true"
  />
</ClientOnly>

### ::material-symbols:movie-outline:: Sora Group

<ClientOnly>
  <GroupCard
    group="sora"
    description="Specialized group for OpenAI Sora video generation endpoints."
    :thirdParty="true"
  />
</ClientOnly>

### ::simple-icons:openaigym:: zai-officially Group

<ClientOnly>
  <GroupCard
    group="zai-officially"
    description="Official Zhipu AI GLM flagship channel. Excellent for Claude Code integration and daily developer tasks."
    :cli="['Claude Code']"
    :thirdParty="true"
  />
</ClientOnly>

<script setup>
import { onMounted, ref, defineComponent, h, computed, watch } from "vue";

// Theme detection
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

// Shared state
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
        throw new Error(text || `Request failed: ${res.status}`);
      }
      const data = await res.json();
      pricingState.data.value = data;
    } catch (err) {
      pricingState.error.value = err?.message || "Request failed, please try again later";
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
          h("div", { class: "model-card__title" }, `Models · ${props.group}`),
          h("div", { class: "model-card__subtitle" }, groupDesc.value || "Live models available in this group"),
        ]),
      ]);

    const body = () => {
      if (error.value) return h("div", { class: "error-text" }, error.value);
      if (loading.value || !data.value)
        return h("div", { class: "spinner", "aria-hidden": "true" });

      if (!models.value.length)
        return h("div", { class: "empty" }, "No models currently available");

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
              h("span", { class: "meta-chip" }, `Group Rate: ${groupRatio.value ?? "—"}`),
              item.model_price != null
                ? h("span", { class: "meta-chip" }, `Unit Price: ${item.model_price}`)
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
    cli: { type: Array, default: () => [] },
    thirdParty: { type: Boolean, default: false },
    warning: { type: String, default: "" },
  },
  setup(props) {
    return () =>
      h("div", { class: ["group-card", { dark: isDark.value }] }, [
        // Description
        h("div", { class: "group-card__desc" }, [
          h("div", { class: "group-card__desc-bar" }),
          h("div", { class: "group-card__desc-body" }, [
            h("div", { class: "group-card__desc-label" }, "Group Description"),
            h("div", { class: "group-card__desc-text" }, props.description),
          ]),
        ]),
        // Warning
        props.warning
          ? h("div", { class: "group-card__warning" }, [
              h("span", { class: "group-card__warning-icon" }, "⚠️"),
              h("span", null, props.warning),
            ])
          : null,
        // Summary
        h("div", { class: "group-card__summary" }, [
          h("div", { class: "group-card__summary-item" }, [
            h("span", { class: "group-card__summary-label" }, "CLI Support"),
            props.cli.length
              ? h("div", { class: "group-card__tag-chips" },
                  props.cli.map((c) => h("span", { class: "group-card__cli-chip", key: c }, c))
                )
              : h("span", { class: "group-card__summary-value group-card__summary-value--muted" }, "None"),
          ]),
          h("div", { class: "group-card__summary-divider" }),
          h("div", { class: "group-card__summary-item" }, [
            h("span", { class: "group-card__summary-label" }, "Third-Party Access"),
            h("span", {
              class: ["group-card__summary-badge", props.thirdParty ? "group-card__summary-badge--yes" : "group-card__summary-badge--no"]
            }, props.thirdParty ? "✓ Supported" : "✗ Not Supported"),
          ]),
        ]),
        // Models
        h("div", { class: "group-card__models" }, [
          h(ModelList, { group: props.group }),
        ]),
      ]);
  },
});
</script>

<style>
/* ===== GroupCard Styles ===== */
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

/* ===== ModelList Styles ===== */
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
