---
home: true
icon: house
title: Home
heroImage: /logo.webp
heroText: PackyAPI Documentation
tagline: A practical guide to using PackyAPI with Claude Code, Codex, Grok Build, and other AI tools.
actions:
  - text: Getting Started
    icon: lightbulb
    link: /en/docs/register/
    type: primary
  - text: 中文文档
    icon: language
    link: /
highlights:
  - header: Packy API at a Glance
    features:
      - title: One API entry point
        icon: mdi:flash-outline
        details: Connect to multiple AI model providers through one endpoint and API key.
      - title: Observable and secure
        icon: mdi:chart-timeline-variant-shimmer
        details: Monitor usage, errors, and costs while applying rate limits and security policies.
      - title: Flexible and cost-effective
        icon: mdi:cloud-outline
        details: Use multiple quotas, smart routing, and task scheduling to control costs.
      - title: Developer-friendly
        icon: mdi:developer-board
        details: Integrate easily with OpenAI-compatible APIs, SDKs, examples, and the Web Playground.
copyright: false
---

<script setup>
import { onBeforeUnmount, ref } from 'vue';

const noticeText = ref('');
const activeCard = ref('');
let noticeTimer;

const copyQQ = async () => {
  const groupNumber = '698258286';
  try {
    await navigator.clipboard.writeText(groupNumber);
    noticeText.value = 'Copied';
  } catch {
    noticeText.value = groupNumber;
  }
  activeCard.value = 'qq';
  if (noticeTimer) clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => {
    activeCard.value = '';
    noticeText.value = '';
  }, 2400);
};

onBeforeUnmount(() => {
  if (noticeTimer) clearTimeout(noticeTimer);
});
</script>

<ClientOnly>
  <div class="qq-groups">
    <div
      class="qq-card"
      role="button"
      tabindex="0"
      aria-label="Copy PackyAPI support QQ group number"
      @click="copyQQ"
      @keydown.enter.prevent="copyQQ"
      @keydown.space.prevent="copyQQ"
    >
      <div class="card-bg"></div>
      <div class="card-content">
        <div class="logo-wrapper">
          <img class="qq-logo" src="/assets/image/logo/qq.webp" alt="QQ support group" />
          <div class="logo-glow"></div>
        </div>
        <div class="qq-meta">
          <p class="qq-label">PackyAPI Support Group</p>
          <p class="qq-number">698258286</p>
        </div>
        <div class="card-shine"></div>
      </div>
      <div v-if="activeCard === 'qq'" class="inline-notice">
        <span class="notice-pill">{{ noticeText }}</span>
      </div>
    </div>
  </div>
</ClientOnly>

<div class="notice-card">
  <div class="notice-icon-wrapper">⚠️</div>
  <div class="notice-content">
    <p class="notice-text">Please follow the tutorial step by step. Correct configuration should prevent most issues.</p>
    <p class="notice-text">If you run into a problem, share the relevant screenshot and error message in the support group.</p>
  </div>
</div>

<style scoped>
.qq-groups { display: flex; justify-content: center; margin: 20px 0 32px; }
.qq-card { position: relative; width: min(100%, 420px); overflow: hidden; cursor: pointer; border: 1px solid rgba(255,255,255,.5); border-radius: 24px; background: rgba(255,255,255,.7); box-shadow: 0 10px 30px -10px rgba(14,165,233,.35); transition: transform .4s cubic-bezier(.175,.885,.32,1.275), box-shadow .4s ease; }
.qq-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 40px -10px rgba(14,165,233,.5); }
.card-bg { position: absolute; inset: 0; background: linear-gradient(135deg,#e0f2fe,#bae6fd); opacity: .8; }
.card-content { position: relative; z-index: 1; display: flex; align-items: center; gap: 20px; padding: 20px 24px; }
.logo-wrapper { position: relative; width: 52px; height: 52px; }
.qq-logo { position: relative; z-index: 2; width: 100%; height: 100%; border-radius: 14px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,.1); transition: transform .4s cubic-bezier(.34,1.56,.64,1); }
.qq-card:hover .qq-logo { transform: rotate(12deg) scale(1.15); }
.logo-glow { position: absolute; inset: -4px; border-radius: 18px; background: #b5e9ff; filter: blur(8px); opacity: .6; }
.qq-label { margin: 0; color: #0369a1; font-weight: 700; }
.qq-number { margin: 5px 0 0; color: #075985; font-size: 22px; font-weight: 800; letter-spacing: 1px; }
.card-shine { position: absolute; inset: 0; background: linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent); transform: translateX(-100%); transition: transform .8s ease; }
.qq-card:hover .card-shine { transform: translateX(100%); }
.inline-notice { position: absolute; right: 16px; bottom: 12px; z-index: 2; }
.notice-pill { padding: 5px 12px; border: 1px solid rgba(34,197,94,.2); border-radius: 999px; background: rgba(34,197,94,.15); color: #15803d; font-size: 13px; font-weight: 700; }
.notice-card { position: relative; display: flex; align-items: center; gap: 16px; margin: 20px 0 32px; padding: 20px 24px; overflow: hidden; border: 1px solid rgba(251,191,36,.25); border-radius: 16px; background: linear-gradient(135deg,#fff7ed,#ffedd5); box-shadow: 0 10px 30px -12px rgba(234,88,12,.3); transition: transform .4s ease, box-shadow .4s ease; }
.notice-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -12px rgba(234,88,12,.4); }
.notice-icon-wrapper { display: grid; width: 44px; height: 44px; flex: 0 0 44px; place-items: center; border-radius: 14px; background: rgba(251,191,36,.18); font-size: 25px; animation: pulse 2s ease-in-out infinite; }
.notice-content { z-index: 1; }
.notice-text { margin: 0; color: #9a3412; font-size: 15px; font-weight: 600; line-height: 1.7; }
.notice-text + .notice-text { margin-top: 8px; }
@keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
</style>
