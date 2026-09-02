---
title: ChatGPT & Codex App Integration
icon: hugeicons:chat-gpt
order: 6
---

After completing [Codex Setup](/en/docs/ccswitch/3-codex.html), the ChatGPT desktop application can directly reuse the Codex CLI provider settings.

## Reusing Existing Settings

1. Verify that Codex CLI has been switched to PackyCode via CC-Switch and is responding normally in your terminal.

2. Install and launch ChatGPT. When the application detects the existing Codex CLI configuration, you can start chatting immediately.

![](/assets/image/CC-Switch/guide/023.jpg)

## Login Screen on First Launch

If the application still displays **Sign in to ChatGPT**, close the app, verify Codex CLI is functional, and relaunch ChatGPT.

If the login screen persists, follow these steps:

1. Click **Sign in with another method**.

![](/assets/image/CC-Switch/guide/024.jpg)

2. Paste your PackyAPI **Codex group API Key** into the `OpenAI API Key` field and click **Continue**.

![](/assets/image/CC-Switch/guide/025.jpg)

3. Send a test message in the application to confirm it responds properly.

![](/assets/image/CC-Switch/guide/026.jpg)

## Fully Restart After Switching Providers

When switching configurations in CC-Switch, you must completely exit and restart ChatGPT (closing just the window leaves background processes running).

Select **File → Quit ChatGPT** from the menu bar or press `Ctrl + Q` / `Cmd + Q`, then restart the application.

![](/assets/image/CC-Switch/guide/027.jpg)
