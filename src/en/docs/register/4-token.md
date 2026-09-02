---
title: Create API Token
icon: mdi:key-variant
order: 4
---

After signing in, open the dashboard and select **Token Management** from the left menu.

![](/assets/image/QuickStart/004.webp)

### Open Token Management

1. Click **Token Management** in the left menu.
2. Click **Add Token** at the top of the page.

### Create a Token

Fill in the token details in the dialog:

![](/assets/image/QuickStart/005.webp)

- **Token Name:** Identify the purpose, such as `Claude Code`, `Codex`, or `Gemini`.
- **Token Group:** Required. This determines which models the token can use.
- **Expiration:** Defaults to "Never Expires"; set a date when needed.
- **Quantity:** Usually keep this set to `1`.
- **Quota Settings:** Enabling "Unlimited Quota" still caps usage to your available account balance.
- **Access Restrictions:** Keep the defaults unless you need specific IP allowlists.

::: warning Choose the Correct Token Group
The token group directly controls available models. For example, choose **CC** for Claude Code, **Codex** for Codex, and **Gemini** or **Gemini-slb** for Gemini-based tools (Cline / Roo Code). Choosing the wrong group will cause "Model does not exist" or routing errors.

If you are unsure which group to choose, please review the [Token Group Guide](/en/docs/token/).
:::

Click **Submit** in the lower right to finish creating the token.

### View Available Models for Groups

You can check which models are supported by each token group in the **Model Marketplace**.

![](/assets/image/QuickStart/008.webp)

1. Click **Model Marketplace** in the top right of the page.
2. Select a group in the left panel under "Available Token Groups".
3. The model cards on the right will display available models, prices, and discount multipliers.

![](/assets/image/QuickStart/007.webp)

To learn more about multiplier discounts, click "Discount Guide" in the top right of the Model Marketplace.
