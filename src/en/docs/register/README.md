---
title: Quick Start
index: false
icon: fa-solid fa-star-of-david
category:
  - User Guide
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
      <span class="notice-title">Essential Advice for Readers!</span>
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
        <span>Before deploying and using, please review the <strong class="highlight-red">Model Groups</strong> and <strong class="highlight-red">FAQ</strong> sections. Reading through all sections is strongly encouraged.</span>
      </div>
    </div>
    <div class="notice-item" style="--delay: 0.1s">
      <div class="item-number">02</div>
      <div class="item-body">
        <div class="item-icon-wrap"><span class="item-icon">💡</span></div>
        <span>We believe in: <strong class="highlight-blue">"Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime."</strong></span>
      </div>
    </div>
    <div class="notice-item" style="--delay: 0.2s">
      <div class="item-number">03</div>
      <div class="item-body">
        <div class="item-icon-wrap"><span class="item-icon">✅</span></div>
        <span>These sections will greatly improve your workflow and resolve over <strong class="highlight-gold">90%</strong> of common questions in advance.</span>
      </div>
    </div>
  </div>
  <div class="notice-footer">
    <span class="footer-text">Please read the above carefully before proceeding</span>
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
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.notice-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slide-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateX(-10px);
}

.important-notice.dark .notice-item {
  background: rgba(50, 50, 55, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.notice-item:hover {
  transform: translateX(4px);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.important-notice.dark .notice-item:hover {
  background: rgba(60, 60, 65, 0.8);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.item-number {
  font-size: 14px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.3);
  font-family: monospace;
}

.important-notice.dark .item-number {
  color: rgba(255, 255, 255, 0.3);
}

.item-body {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.8);
}

.important-notice.dark .item-body {
  color: rgba(255, 255, 255, 0.85);
}

.item-icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.important-notice.dark .item-icon-wrap {
  background: rgba(255, 255, 255, 0.06);
}

.item-icon {
  font-size: 16px;
}

.highlight-red {
  color: #e53e3e;
  font-weight: 700;
}

.highlight-blue {
  color: #3182ce;
  font-weight: 700;
}

.highlight-gold {
  color: #d69e2e;
  font-weight: 700;
}

.important-notice.dark .highlight-red { color: #fc8181; }
.important-notice.dark .highlight-blue { color: #63b3ed; }
.important-notice.dark .highlight-gold { color: #f6e05e; }

.notice-footer {
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.02);
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  gap: 12px;
}

.important-notice.dark .notice-footer {
  background: rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.footer-text {
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  letter-spacing: 0.5px;
}

.important-notice.dark .footer-text {
  color: rgba(255, 255, 255, 0.4);
}

.footer-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
}

.important-notice.dark .footer-line {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
}
</style>

## Step 1: Register Account

- Registration page: <https://www.packyapi.ai/register>

![](/assets/image/QuickStart/003.webp)

**Method 1: Register with Google (Recommended)**

1. Click "Continue with Google".
2. Select your Google account and grant authorization.
3. Once authorized, your account is automatically created and logged in.

Registering with Google does not require setting a password. You can simply continue using the same Google account for subsequent logins.

**Method 2: Register with Email**

1. Click "Sign up with username".
2. Fill in your email address, username, and password.
3. Submit according to the page prompts to complete registration.

:::warning
Your email will be used for verification and notifications. We recommend using a strong password with letters, numbers, and symbols. Keep your credentials secure.
:::

## Step 2: Log in to Account

- Login page: <https://www.packyapi.ai/login>

![](/assets/image/QuickStart/001.webp)

**Log in with Google**

1. Click "Continue with Google".
2. Select the bound Google account.
3. Authorization will log you in automatically.

**Log in with Email / Username**

1. Enter your email address or username.
2. Enter your password.
3. Click "Continue" to log in.

::: info Device Sessions
Your browser keeps your login session active. You will need to log in again on new devices.
:::

If clicking "Continue with Google" shows "Error: OIDC Token retrieval failed, please check settings!", this is typically caused by browser cache or cookies.

![](/assets/image/QuickStart/002.webp)

Try clearing your browser cache first:

- Windows / Linux Chrome: Press `Ctrl + Shift + Delete` to open Clear Browsing Data.
- macOS Chrome: Press `Command + Shift + Delete` to open Clear Browsing Data.

If clearing cache does not help, manually delete cookies related to `packyapi.ai`:

1. On the login page, press `F12` to open Developer Tools.
2. Go to the "Application" tab.
3. Under "Storage" → "Cookies", select `https://www.packyapi.ai`.
4. Delete `session`, `TDC_itoken`, and other site cookies, then refresh and log in again.

![](/assets/image/QuickStart/006.webp)

## Step 3: Purchase Quota

After logging in to the console, go to "Wallet" on the left menu to purchase quota.

1. Select a fixed recharge amount under "Select Top-up Amount", or enter a custom amount under "Custom Amount".
2. Check the "Pay Amount" at the bottom and click "Pay Now".

::: info Payment Details
The current exchange rate is `1:1` (1 CNY equals 1 USD quota). If Alipay or WeChat Pay popups fail to appear, disable any VPN or proxy and try again.
:::

::: warning Notice: Invoice Policy
- Individual orders currently only support overseas Invoices.
- Invoices for corporate public accounts remain supported.
:::

## Step 4: Create API Token

After logging in, navigate to "Token Management" in the left sidebar.

![](/assets/image/QuickStart/004.webp)

### Access Token Management

1. Click "Token Management" in the left sidebar.
2. Click "Add Token" at the top of the page.

### Create New Token

Fill in the token details in the modal:

![](/assets/image/QuickStart/005.webp)

- **Token Name**: Used to distinguish purposes, e.g., `Claude Code`, `Codex`, `Gemini`.
- **Token Group**: Required. The group determines which models this token can access.
- **Expiration**: Default is "Never Expires", or set a specific date if needed.
- **Quantity**: Usually keep as `1`.
- **Quota**: When "Unlimited" is selected, actual usage remains capped by your account balance.
- **Access Restrictions**: Keep default unless specific model or IP allowlists are needed.

::: warning Select the Correct Token Group
The token group directly dictates model availability. For example, select **CC** for Claude Code, **Codex** for Codex CLI, and **Gemini** or **Gemini-slb** for Gemini models (Cline / Roo Code). Choosing the wrong group will result in "model not found" or authentication failures.

If you are unsure which group fits your use case, read [PackyAPI Model Groups](/en/docs/token/).
:::

Click "Submit" in the lower right corner to complete token creation.

### View Available Models by Group

Check available models in the "Model Marketplace":

![](/assets/image/QuickStart/008.webp)

1. Click "Model Marketplace" in the top right.
2. Select a group under "Available Token Groups" on the left.
3. The model cards on the right will show all supported models, prices, and discount rates.

![](/assets/image/QuickStart/007.webp)

## Step 5: Environment Check

Before configuring Claude Code, Codex, or Grok Build, make sure Node.js is installed on your machine.

In Windows, macOS, or Linux terminal, run:

```bash
npm list -g --depth-0
```

If this command executes successfully, Node.js and npm are properly available.

If you see "command not found", Node.js is not yet installed or not added to your system PATH. Please complete Node.js installation before continuing.

::: warning Complete Environment Check First
CLI tools depend on Node.js and npm. Without a proper environment, installing Claude Code, Codex, etc., will fail.
:::

## Step 6: Configure CLI Tools

PackyAPI supports CLI tools including Claude Code, Codex, and Grok Build.

::: warning No Gemini CLI Guide
Google's official **Gemini CLI** (`@google/gemini-cli`) suffers from persistent stability issues. We **no longer provide** Gemini CLI tutorials. For Gemini models, please refer to [Gemini FAQ](/en/docs/faq/Gemini.html).
:::

### Prerequisites

Before configuring CLI tools:

1. Complete the [Environment Check](/en/docs/register/5-env.html) to ensure Node.js and npm work.
2. [Install the CLI tool](/en/docs/cli/1-env.html#_2-install-cli) (Claude Code, Codex, or Grok Build).

### API Endpoints

In the console dashboard, you can view your available API Endpoints.

![](/assets/image/QuickStart/009.webp)

- **Main Endpoint**: `https://cf.api.fan` (stable, suitable for production).

::: warning Append `/v1` for OpenAI-Compatible Endpoints
For OpenAI-compatible clients and tools (e.g., Codex, OpenAI SDK, Cherry Studio), append `/v1` to the API URL:

```bash
https://cf.api.fan/v1
```

For Claude Code and other dedicated tools, use the specific format described in each guide.
:::

::: important Recommended Configuration
To make configuration as seamless as possible, we **strongly recommend** using the open-source tool [CC-Switch](https://github.com/farion1231/cc-switch).

[CC-Switch Setup Guide for Claude Code & Codex](/en/docs/ccswitch/)

If you prefer manual setup, refer to the individual CLI guides below:
:::

::: info Manual CLI Setup Guides

[Claude Code Setup Guide](/en/docs/cli/2-claude.html)

[Codex Setup Guide](/en/docs/cli/3-codex.html)

[Grok Build Setup Guide](/en/docs/cli/6-grok-build.html)
:::
