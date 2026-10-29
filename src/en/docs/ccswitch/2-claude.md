---
title: Claude Code Setup
icon: material-icon-theme:claude
order: 2
---

1. Open CC-Switch to view the home screen:

![](/assets/image/CC-Switch/guide/003.jpg)

2. In the top application switcher, select **Claude Code**.

![](/assets/image/CC-Switch/guide/004.jpg)

![](/assets/image/CC-Switch/guide/005.jpg)

3. Click `+` in the top-right corner and select **PackyCode** from preset providers.

![](/assets/image/CC-Switch/guide/006.jpg)

4. As detailed in [Create API Token](/en/docs/register/4-token.html), create a token in the **CC** group on PackyAPI and copy your API Key.

![](/assets/image/CC-Switch/guide/007.jpg)

5. In provider settings, paste the API Key into the `API Key` field, then click **Add** in the lower right.

![](/assets/image/CC-Switch/guide/008.jpg)

6. Once added, find PackyCode in the list and click **Enable**. The status will change to **In Use**.

![](/assets/image/CC-Switch/guide/009.jpg)

7. Click **Settings** in the top-left, go to General, and make sure to turn on `Skip Claude Code First-time Installation Prompt`.

![](/assets/image/CC-Switch/guide/010.jpg)

8. Run `claude` in your terminal. When you see the interactive prompt and receive responses, your setup is complete.

![](/assets/image/CC-Switch/guide/011.jpg)

::: warning Usage Note
If you are using the [CC Group](/en/docs/token/2-group.html#cc-group), note that this group **does not support third-party client testing**. Built-in connectivity test buttons in CC-Switch will not succeed.

Verify whether your configuration is active directly by conversing inside the `claude` CLI.
:::
