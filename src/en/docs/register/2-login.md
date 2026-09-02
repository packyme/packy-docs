---
title: Sign In
icon: material-symbols:login
order: 2
---

Sign-in page: <https://www.packyapi.ai/login>

![](/assets/image/QuickStart/001.webp)

## Sign in with Google

1. Click **Continue with Google**.
2. Select the Google account linked during registration.
3. Complete authorization to sign in automatically.

## Sign in with Email or Username

1. Enter your email address or username.
2. Enter your password.
3. Click **Continue**.

::: info Device Sign-in Note
Your browser keeps the sign-in session. Repeat the sign-in process when using a new device.
:::

## Fix Google Sign-in Errors

If Google sign-in reports "Error: OIDC Token acquisition failed, please check settings!", it is usually caused by browser cache or cookie conflicts.

![](/assets/image/QuickStart/002.webp)

Clear browsing data and try again:

- Windows / Linux Chrome: press `Ctrl + Shift + Delete` to open the clear browsing data dialog.
- macOS Chrome: press `Command + Shift + Delete` to open the clear browsing data dialog.

If the issue persists, manually delete cookies for `packyapi.ai`:

1. Press `F12` on the login page to open Developer Tools.
2. Open the **Application** panel.
3. On the left, navigate to **Storage** → **Cookies** → `https://www.packyapi.ai`.
4. Delete cookies such as `session` and `TDC_itoken`, refresh the page, and sign in again.

![](/assets/image/QuickStart/006.webp)
