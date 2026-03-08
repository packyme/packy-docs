---
title: 快速开始
index: false
icon: fa-solid fa-star-of-david
category:
  - 使用指南
date: 2025-11-23
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isDark = ref(false)

const updateTheme = () => {
  const scheme = localStorage.getItem('vuepress-theme-hope-scheme')
  if (scheme === 'dark') {
    isDark.value = true
  } else if (scheme === 'light') {
    isDark.value = false
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

onMounted(() => {
  updateTheme()
  window.addEventListener('storage', updateTheme)
  const observer = new MutationObserver(() => updateTheme())
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
</script>

<div :class="['important-notice', { dark: isDark }]">
  <div class="notice-glow"></div>
  <div class="notice-header">
    <div class="header-bg-pattern"></div>
    <div class="notice-badge">
      <span class="badge-icon">⚠️</span>
    </div>
    <div class="header-text">
      <span class="notice-label">IMPORTANT</span>
      <span class="notice-title">给阅读者的忠告！</span>
    </div>
    <div class="header-decoration">
      <span class="deco-dot"></span>
      <span class="deco-dot"></span>
      <span class="deco-dot"></span>
    </div>
  </div>
  <div class="notice-content">
    <div class="notice-item" style="--delay: 0s">
      <div class="item-number">01</div>
      <div class="item-body">
        <div class="item-icon-wrap"><span class="item-icon">📖</span></div>
        <span>请你在部署使用前一定去看看 <strong class="highlight-red">模型分组介绍</strong> 与 <strong class="highlight-red">常见问题</strong> 板块，如果有时间最好阅读全文</span>
      </div>
    </div>
    <div class="notice-item" style="--delay: 0.1s">
      <div class="item-number">02</div>
      <div class="item-body">
        <div class="item-icon-wrap"><span class="item-icon">💡</span></div>
        <span>我们一直提倡 <strong class="highlight-blue">"授人以鱼，不如授人以渔"</strong></span>
      </div>
    </div>
    <div class="notice-item" style="--delay: 0.2s">
      <div class="item-number">03</div>
      <div class="item-body">
        <div class="item-icon-wrap"><span class="item-icon">✅</span></div>
        <span>这两个板块不仅能提升你的使用体验，也能解答你今后会在群里提问的 <strong class="highlight-gold">90%</strong> 的问题</span>
      </div>
    </div>
  </div>
  <div class="notice-footer">
    <span class="footer-text">请务必认真阅读以上内容</span>
    <div class="footer-line"></div>
  </div>
</div>

<style>
.important-notice {
  position: relative;
  margin: 32px 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  animation: float 3s ease-in-out infinite;
}

.important-notice.dark {
  background: rgba(40, 40, 45, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.2);
}

.notice-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 40%);
  pointer-events: none;
  animation: glow-rotate 12s linear infinite;
}

.important-notice.dark .notice-glow {
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 40%);
}

@keyframes glow-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.notice-header {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 245, 250, 0.9) 100%);
  backdrop-filter: blur(12px);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.important-notice.dark .notice-header {
  background: linear-gradient(135deg, rgba(55, 55, 60, 0.9) 0%, rgba(45, 45, 50, 0.9) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.header-bg-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 25%),
    radial-gradient(circle at 80% 50%, rgba(0, 0, 0, 0.015) 0%, transparent 20%);
  pointer-events: none;
}

.important-notice.dark .header-bg-pattern {
  background-image:
    radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 25%),
    radial-gradient(circle at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 20%);
}

.notice-badge {
  width: 52px;
  height: 52px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  animation: badge-pulse 2s ease-in-out infinite;
}

.important-notice.dark .notice-badge {
  background: rgba(80, 80, 85, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@keyframes badge-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.badge-icon {
  font-size: 28px;
  animation: shake 1s ease-in-out infinite;
}

@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  10%, 30%, 50%, 70%, 90% { transform: rotate(-8deg); }
  20%, 40%, 60%, 80% { transform: rotate(8deg); }
}

.header-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.notice-label {
  font-size: 11px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.important-notice.dark .notice-label {
  color: rgba(255, 255, 255, 0.6);
}

.notice-title {
  font-size: 22px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.85);
}

.important-notice.dark .notice-title {
  color: rgba(255, 255, 255, 0.95);
}

.header-decoration {
  display: flex;
  gap: 6px;
}

.deco-dot {
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  animation: dot-blink 1.5s ease-in-out infinite;
}

.important-notice.dark .deco-dot {
  background: rgba(255, 255, 255, 0.3);
}

.deco-dot:nth-child(2) { animation-delay: 0.2s; }
.deco-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes dot-blink {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
}

.notice-content {
  background: transparent;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.notice-item {
  display: flex;
  align-items: stretch;
  gap: 0;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slide-in 0.5s ease-out backwards;
  animation-delay: var(--delay);
}

.important-notice.dark .notice-item {
  background: rgba(60, 60, 65, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.notice-item:hover {
  transform: translateX(8px) scale(1.01);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.7);
}

.important-notice.dark .notice-item:hover {
  background: rgba(70, 70, 75, 0.6);
}

.item-number {
  min-width: 48px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 250, 0.95) 100%);
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', monospace;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
}

.important-notice.dark .item-number {
  background: linear-gradient(180deg, rgba(60, 60, 65, 0.9) 0%, rgba(50, 50, 55, 0.9) 100%);
  color: rgba(255, 255, 255, 0.7);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.item-body {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  font-size: 15px;
  line-height: 1.7;
}

.item-icon-wrap {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.important-notice.dark .item-icon-wrap {
  background: rgba(80, 80, 85, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.item-icon {
  font-size: 18px;
}

.highlight-red {
  color: #ff4757;
  font-weight: 700;
  padding: 3px 8px;
  background: linear-gradient(135deg, rgba(255, 71, 87, 0.15) 0%, rgba(255, 71, 87, 0.08) 100%);
  border-radius: 6px;
  border: 1px solid rgba(255, 71, 87, 0.2);
  transition: all 0.2s ease;
}

.highlight-red:hover {
  background: linear-gradient(135deg, rgba(255, 71, 87, 0.25) 0%, rgba(255, 71, 87, 0.15) 100%);
  transform: scale(1.02);
}

.highlight-blue {
  color: #37B4FA;
  font-weight: 700;
  padding: 3px 8px;
  background: linear-gradient(135deg, rgba(55, 180, 250, 0.15) 0%, rgba(55, 180, 250, 0.08) 100%);
  border-radius: 6px;
  border: 1px solid rgba(55, 180, 250, 0.2);
  transition: all 0.2s ease;
}

.highlight-blue:hover {
  background: linear-gradient(135deg, rgba(55, 180, 250, 0.25) 0%, rgba(55, 180, 250, 0.15) 100%);
  transform: scale(1.02);
}

.highlight-gold {
  color: #10b981;
  font-weight: 800;
  font-size: 1.25em;
  padding: 3px 10px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
  border-radius: 6px;
  border: 1px solid rgba(16, 185, 129, 0.25);
  animation: highlight-glow 2s ease-in-out infinite;
}

@keyframes highlight-glow {
  0%, 100% { box-shadow: 0 0 8px rgba(16, 185, 129, 0.2); }
  50% { box-shadow: 0 0 16px rgba(16, 185, 129, 0.35); }
}

.notice-footer {
  background: linear-gradient(90deg, transparent, rgba(100, 100, 110, 0.1), transparent);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.footer-text {
  font-size: 12px;
  color: rgba(80, 80, 90, 0.8);
  font-weight: 600;
  letter-spacing: 1px;
}

.important-notice.dark .footer-text {
  color: rgba(200, 200, 210, 0.6);
}

.footer-line {
  flex: 1;
  max-width: 100px;
  height: 2px;
  background: linear-gradient(90deg, rgba(100, 100, 110, 0.4), transparent);
  border-radius: 1px;
}

.important-notice.dark .footer-line {
  background: linear-gradient(90deg, rgba(150, 150, 160, 0.3), transparent);
}
</style>

::: info 让我们从这里开始吧！
从 0 开始的 PackyApi 使用之旅~ 

一步步来，准没问题！
:::

## 第一步：注册账号

- 注册入口：<https://www.packyapi.com/register>

![](/assets/image/QuickStart/001.webp)

- **方式一（推荐）Google 账号：**
  1) 点击 “使用 Google 继续”
  2) 在弹窗中选择 Google 账号并授权
  3) 授权后自动创建账号并登录（无需设置密码）

- **方式二 邮箱注册：**
  1) 点击 “使用用户名注册”
  2) 填写邮箱（接收验证与通知）、用户名、密码（建议字母/数字/特殊字符组合）
  3) 提交完成注册

:::warning
温馨提示：妥善保管登录凭证，避免账号被盗用。
:::

## 第二步：登录账号

- 登录入口：<https://www.packyapi.com/login>

![](/assets/image/QuickStart/002.webp)

- **使用 Google 登录：**
    - 点击 “使用 Google 继续” → 选择注册用的 Google 账号 → 授权即登录。

- **使用邮箱/用户名登录：**
    - 点击 “使用邮箱或用户名登录” → 输入邮箱/用户名与密码 → 登录。

::: info 设备登录说明
浏览器会保持登录状态；在新设备需重复登录流程。
:::


## 第三步：购买额度
![](/assets/image/QuickStart/005.webp)

- 登录控制台后，在“钱包管理”页面在线充值。
- 目前充值比例为“1:1”，即**一元人民币 同等于 一美元**

## 第四步：创建 API 令牌

登录后进入控制台面板

![](/assets/image/QuickStart/003.webp)

### 进入令牌管理
1) 登录控制台主页  
2) 左侧选择“令牌管理”，点击“添加令牌按钮”
3) 进入令牌管理页面

![](/assets/image/QuickStart/004.webp)

### 创建新令牌

1) 填写信息：  
   - 令牌名称：便于识别（如生产/测试） 

   - 令牌分组：**十分重要，一定要选择正确的令牌分组，不然使用一定会出问题！！！**

   ::: warning 提示
    令牌分组一定要根据你使用的服务，选择相应的分组，如果你不知道每个分组是做什么的，请看此部分内容：[PackyApi各分组介绍](/docs/token/)
   :::

   - 过期时间（可选）：不填则永久  

   - 额度设置（可选）：限制最大调用额度  

   - 访问限制（可选）：限制可访问模型  

2) 点击右下角“提交”按钮，完成创建

## 第五步：配置 CLI 工具

PackyAPI 支持在命令行中使用 Claude Code、Codex、Gemini CLI

::: important 推荐配置
为了让配置过程进行轻便简单，我们**极力推荐**使用Github开源项目 [CC-Switch](https://github.com/farion1231/cc-switch)来对我们的使用环境进行配置。

[CC-Switch配置CC、Codex、Gemini教程](/docs/ccswitch/)

如果你是老鸟，或者不愿意使用此工具，可以参考以下CLI配置教程文档，**但我们还是极力推荐使用此工具，能省很多时间！**
:::

::: info CLI 手动配置教程传送门

注意：不管你是使用哪个CLI，请一定先检查你的环境 [如何检查运行环境](/docs/cli/1-env.html)

[Claude Code配置教程](/docs/cli/2-claude.html)

[Codex配置教程](/docs/cli/3-codex.html)

[Gemini配置教程](/docs/cli/4-gemini.html)
:::