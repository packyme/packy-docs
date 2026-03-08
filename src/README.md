---
home: true
icon: house
title: 主页
heroImage: /logo.webp
bgImageStyle:
  background-attachment: fixed
heroText: PackyApi文档站
tagline: 详细介绍PackyApi中转服务在Claude Code、Codex、Gemini等主流Cli中的详细使用方法。
actions:
  - text: 使用指南
    icon: lightbulb
    link: /docs/register/
    type: primary

  - text: 监控站
    icon: material-symbols:monitoring-rounded
    link: https://check.linux.do/group/Packy

highlights:
  - header: Packy API 核心优势
    features:
      - title: 统一入口，极速连通
        icon: mdi:flash-outline
        details: 以单一域名和密钥连接全部大模型供应商，智能容灾切换保障业务不中断。
      - title: 全栈可观测与风控
        icon: mdi:chart-timeline-variant-shimmer
        details: 实时监控调用量、错误率与费用，一键配置限流、告警与安全策略。
      - title: 按需扩容与成本优化
        icon: mdi:cloud-outline
        details: 多渠道配额、智能路由与任务调度，灵活控制成本与扩展能力。
      - title: 开发者友好体验
        icon: mdi:developer-board
        details: 兼容 OpenAI 接口协议，提供 SDK、示例与 Web Playground，轻松接入上线。

copyright: false
---

<script setup>
import { onBeforeUnmount, ref } from 'vue';

const noticeText = ref('');
const activeCard = ref('');
let noticeTimer;

const showNotice = (cardKey, message) => {
  noticeText.value = message;
  activeCard.value = cardKey;
  if (noticeTimer) clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => {
    activeCard.value = '';
    noticeText.value = '';
  }, 2400);
};

const notify = (cardKey, message) => {
  if (typeof window === 'undefined') return;
  showNotice(cardKey, message);
};

const copyQQ = async (num, cardKey) => {
  const text = String(num);
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      throw new Error('clipboard unsupported');
    }
  } catch (error) {
    if (typeof document !== 'undefined') {
      const input = document.createElement('textarea');
      input.value = text;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
  } finally {
    notify(cardKey, '已复制群号');
  }
};

onBeforeUnmount(() => {
  if (noticeTimer) clearTimeout(noticeTimer);
});
</script>

<ClientOnly>
  <div class="qq-groups">
    <div
      class="qq-card blue-card"
      role="button"
      tabindex="0"
      aria-label="复制售后QQ群一"
      @click="copyQQ('963839449', 'qq1')"
      @keydown.enter.prevent="copyQQ('963839449', 'qq1')"
      @keydown.space.prevent="copyQQ('963839449', 'qq1')"
    >
      <div class="card-bg"></div>
      <div class="card-content">
        <div class="logo-wrapper">
          <img
            class="qq-logo"
            src="/assets/image/logo/qq.webp"
            alt="售后QQ群一"
          />
          <div class="logo-glow"></div>
        </div>
        <div class="qq-meta">
          <p class="qq-label">售后QQ群一</p>
          <p class="qq-number">963839449</p>
        </div>
        <div class="card-shine"></div>
      </div>
      <div v-if="activeCard === 'qq1'" class="inline-notice">
        <span class="notice-pill">{{ noticeText }}</span>
      </div>
    </div>
    <div
      class="qq-card purple-card"
      role="button"
      tabindex="0"
      aria-label="复制售后QQ群二"
      @click="copyQQ('1059686390', 'qq2')"
      @keydown.enter.prevent="copyQQ('1059686390', 'qq2')"
      @keydown.space.prevent="copyQQ('1059686390', 'qq2')"
    >
      <div class="card-bg"></div>
      <div class="card-content">
        <div class="logo-wrapper">
          <img
            class="qq-logo"
            src="/assets/image/logo/qq.webp"
            alt="售后QQ群二"
          />
          <div class="logo-glow"></div>
        </div>
        <div class="qq-meta">
          <p class="qq-label">售后QQ群二</p>
          <p class="qq-number">1059686390</p>
        </div>
        <div class="card-shine"></div>
      </div>
      <div v-if="activeCard === 'qq2'" class="inline-notice">
        <span class="notice-pill">{{ noticeText }}</span>
      </div>
    </div>
  </div>
</ClientOnly>

<div class="notice-card">
  <div class="notice-icon-wrapper">
    <svg class="notice-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 8V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div class="notice-content">
    <p class="notice-text">仔细看教程，一步步按照教程的指导走，配置跟使用基本不会出现问题。</p>
    <p class="notice-text">如果你跟着文档步骤出现问题，请你截图你目前在文档中所到的步骤跟报错信息到QQ群，客服看见就会解答。</p>
  </div>
</div>

<style scoped>
/* QQ Groups Styles */
.qq-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0 32px;
}

.qq-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.qq-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.card-bg {
  position: absolute;
  inset: 0;
  transition: opacity 0.4s ease;
}

.blue-card .card-bg {
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  opacity: 0.8;
}

.purple-card .card-bg {
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
  opacity: 0.8;
}

.qq-card:hover .card-bg {
  opacity: 1;
}

/* 装饰性背景光晕 */
.qq-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.6;
  z-index: 0;
}

.blue-card::before {
  background: radial-gradient(circle, rgba(56, 189, 248, 0.4), transparent);
}

.purple-card::before {
  background: radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent);
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 24px;
}

/* Logo Styles */
.logo-wrapper {
  position: relative;
  width: 52px;
  height: 52px;
}

.qq-logo {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.qq-card:hover .qq-logo {
  transform: rotate(12deg) scale(1.15);
}

.logo-glow {
  position: absolute;
  inset: -4px;
  border-radius: 18px;
  z-index: 1;
  filter: blur(8px);
  opacity: 0.6;
  transition: opacity 0.4s ease;
}

.blue-card .logo-glow {
  background: #b5e9ffff;
}

.purple-card .logo-glow {
  background: #ead6ffff;
}

.qq-card:hover .logo-glow {
  opacity: 0.9;
  animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 0.9; }
}

/* Meta Info Styles */
.qq-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.qq-label {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  opacity: 0.8;
  transition: transform 0.3s ease;
}

.blue-card .qq-label { color: #0369a1; }
.purple-card .qq-label { color: #7e22ce; }

.qq-number {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
}

.blue-card .qq-number {
  background-image: linear-gradient(135deg, #0284c7, #0ea5e9);
}

.purple-card .qq-number {
  background-image: linear-gradient(135deg, #9333ea, #c084fc);
}

.qq-card:hover .qq-label {
  transform: translateX(4px);
}

/* 流光效果 */
.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  transform: skewX(-25deg);
  pointer-events: none;
  z-index: 2;
  transition: 0s;
}

.qq-card:hover .card-shine {
  left: 200%;
  transition: 0.8s ease-in-out;
}

.inline-notice {
  position: absolute;
  right: 16px;
  top: 14px;
  pointer-events: none;
}

.notice-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: linear-gradient(135deg, #ecfdf3, #dcfce7);
  color: #166534;
  border: 1px solid rgba(22, 101, 52, 0.18);
  border-radius: 12px;
  box-shadow: 0 10px 24px -12px rgba(21, 128, 61, 0.25),
              0 3px 8px -5px rgba(22, 101, 52, 0.15);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1px;
  backdrop-filter: blur(6px);
}

/* 阴影效果 */
.blue-card {
  box-shadow: 0 10px 30px -10px rgba(14, 165, 233, 0.15),
              inset 0 0 0 1px rgba(255, 255, 255, 0.6);
}

.purple-card {
  box-shadow: 0 10px 30px -10px rgba(168, 85, 247, 0.15),
              inset 0 0 0 1px rgba(255, 255, 255, 0.6);
}

.blue-card:hover {
  box-shadow: 0 20px 40px -10px rgba(14, 165, 233, 0.3),
              inset 0 0 0 1px rgba(255, 255, 255, 0.8);
}

.purple-card:hover {
  box-shadow: 0 20px 40px -10px rgba(168, 85, 247, 0.3),
              inset 0 0 0 1px rgba(255, 255, 255, 0.8);
}

@media (max-width: 540px) {
  .qq-groups {
    grid-template-columns: 1fr;
  }
}

/* Notice Card Styles (Keep existing) */
.notice-card {
  margin: 24px 0;
  padding: 24px 28px;
  background: linear-gradient(135deg, #fffbf0, #fff4e6);
  border: 1px solid rgba(246, 173, 85, 0.2);
  border-radius: 20px;
  box-shadow: 0 10px 30px -10px rgba(237, 137, 54, 0.15),
              0 4px 12px -4px rgba(237, 137, 54, 0.1);
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.notice-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 20px 40px -10px rgba(237, 137, 54, 0.25),
              0 8px 16px -4px rgba(237, 137, 54, 0.15);
  border-color: rgba(246, 173, 85, 0.4);
}

.notice-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transform: skewX(-25deg);
  transition: 0.5s;
  pointer-events: none;
}

.notice-card:hover::after {
  left: 200%;
  transition: 0.8s ease-in-out;
}

.notice-icon-wrapper {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #ffedd5, #fed7aa);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ea580c;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6),
              0 8px 16px -4px rgba(234, 88, 12, 0.2);
  position: relative;
  z-index: 1;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.notice-icon {
  width: 32px;
  height: 32px;
  filter: drop-shadow(0 2px 4px rgba(234, 88, 12, 0.2));
  transition: transform 0.4s ease;
}

.notice-card:hover .notice-icon {
  transform: rotate(15deg) scale(1.1);
}

.notice-icon-wrapper::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 20px;
  border: 2px solid rgba(249, 115, 22, 0.1);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  opacity: 0;
  z-index: -1;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(1.5); opacity: 0; }
}

.notice-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
}

.notice-text {
  margin: 0;
  line-height: 1.7;
  color: #9a3412;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
}

.notice-text + .notice-text {
  margin-top: 8px;
}

/* Dark Mode */
html[data-theme="dark"] .blue-card .card-bg {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(14, 165, 233, 0.12) 100%);
}

html[data-theme="dark"] .purple-card .card-bg {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(147, 51, 234, 0.12) 100%);
}

html[data-theme="dark"] .blue-card::before {
  background: radial-gradient(circle, rgba(56, 189, 248, 0.15), transparent);
}

html[data-theme="dark"] .purple-card::before {
  background: radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent);
}

html[data-theme="dark"] .qq-card {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(30, 30, 35, 0.6);
}

html[data-theme="dark"] .blue-card .qq-label { color: #93c5fd; }
html[data-theme="dark"] .purple-card .qq-label { color: #c4b5fd; }

html[data-theme="dark"] .blue-card .qq-number {
  background-image: linear-gradient(135deg, #60a5fa, #93c5fd);
}

html[data-theme="dark"] .purple-card .qq-number {
  background-image: linear-gradient(135deg, #a78bfa, #c4b5fd);
}

html[data-theme="dark"] .blue-card .logo-glow {
  background: rgba(96, 165, 250, 0.25);
}

html[data-theme="dark"] .purple-card .logo-glow {
  background: rgba(167, 139, 250, 0.25);
}

html[data-theme="dark"] .card-shine {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
}

html[data-theme="dark"] .blue-card {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5),
              inset 0 0 0 1px rgba(96, 165, 250, 0.15);
}

html[data-theme="dark"] .purple-card {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5),
              inset 0 0 0 1px rgba(167, 139, 250, 0.15);
}

html[data-theme="dark"] .blue-card:hover {
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6),
              inset 0 0 0 1px rgba(96, 165, 250, 0.3);
}

html[data-theme="dark"] .purple-card:hover {
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6),
              inset 0 0 0 1px rgba(167, 139, 250, 0.3);
}

html[data-theme="dark"] .notice-pill {
  background: rgba(34, 197, 94, 0.15);
  color: #86efac;
  border-color: rgba(134, 239, 172, 0.2);
}

html[data-theme="dark"] .notice-card {
  background: rgba(30, 30, 35, 0.6);
  border-color: rgba(251, 191, 36, 0.15);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5),
              inset 0 0 0 1px rgba(251, 191, 36, 0.1);
}

html[data-theme="dark"] .notice-card:hover {
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6),
              inset 0 0 0 1px rgba(251, 191, 36, 0.2);
  border-color: rgba(251, 191, 36, 0.25);
}

html[data-theme="dark"] .notice-card::after {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
}

html[data-theme="dark"] .notice-icon-wrapper {
  background: rgba(251, 191, 36, 0.12);
  color: #fcd34d;
  box-shadow: inset 0 0 0 1px rgba(251, 191, 36, 0.2);
}

html[data-theme="dark"] .notice-text {
  color: rgba(255, 255, 255, 0.85);
  text-shadow: none;
}
</style>
