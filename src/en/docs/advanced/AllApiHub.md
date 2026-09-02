---
title: All API Hub
icon: material-symbols:extension
category:
  - Third-party Integrations
  - Open Source Projects
date: 2026-08-10
---

> Manage PackyCode accounts in All API Hub: unified balance dashboard, model price comparison, key management, and instant export to popular AI clients.

PackyCode provides proxy services for Claude Code, Codex, Gemini, and more. If you use multiple PackyCode accounts, work across different AI API providers, or frequently configure various IDE tools, **All API Hub** acts as a centralized local dashboard to organize, inspect, and export your credentials.

After adding your PackyCode account, you can view balances, manage API keys, inspect model pricing, and quickly export to Cherry Studio, CC-Switch, Kilo Code, CLIProxyAPI, Claude Code Router, or your custom upstream distribution panel.

![All API Hub Dashboard Preview](/assets/image/Advanced/AllApiHub/01.png)

## What is All API Hub?

**All API Hub** ([GitHub Open Source](https://github.com/qixing-jk/all-api-hub)) is an open-source browser extension designed for AI API users to unify multi-account, multi-site, and multi-client configurations.

Key benefits for PackyCode users:

- **Unified Multi-Account Dashboard:** View balances, account statuses, and health check results across multiple accounts on a single page.
- **Cross-Account Price Comparison:** Inspect PackyCode model rates and compare them side-by-side with other added accounts.
- **Centralized API Key Management:** Create, view, edit, delete, and copy PackyCode API keys within the extension.
- **Fast Credential Export:** Export managed `Base URL + API Key` to popular clients, CLI tools, or self-hosted distribution channels.
- **Multi-Device Synchronization:** Migrate settings via data import/export or WebDAV sync across your workstations.

In short: PackyCode provides models and interfaces, while All API Hub unifies multi-account management, price comparisons, and downstream tool configurations.

## Installing All API Hub

For automatic updates and stability, install via your browser's official store:

### Desktop Browsers

- **Chrome:** [Chrome Web Store](https://chromewebstore.google.com/detail/lapnciffpekdengooeolaienkeoilfeo)
- **Edge:** [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/pcokpjaffghgipcgjhapgdpeddlhblaa)
- **Firefox:** [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/%7Bbc73541a-133d-4b50-b261-36ea20df0d24%7D)

### Other Environments

- **Brave / Vivaldi / Opera / Other Browsers:** Brave, Vivaldi, and Opera can install via Chrome Web Store. For QQ, 360, or other Chromium-based browsers, refer to the [Other Browsers Installation Guide](https://all-api-hub.qixing1217.top/other-browser-install.html).
- **Safari (Mac):** Install via Xcode or the dedicated package (see [Safari Installation Guide](https://all-api-hub.qixing1217.top/safari-install.html)).
- **Mobile Browsers:** Supported on Edge Mobile, Firefox Android, Kiwi Browser (see [Mobile Guide](https://all-api-hub.qixing1217.top/faq.html#mobile-browser-support)).
- **Manual Installation:** Download the latest stable package from [GitHub Releases](https://github.com/qixing-jk/all-api-hub/releases/latest).

## Adding a PackyCode Account

All API Hub supports automatic detection of logged-in PackyCode accounts.

### Why is it Useful for PackyCode Users?

- View balances, statuses, and model prices alongside other API providers.
- Compare model token costs across accounts.
- Create, edit, delete, and copy PackyCode API keys directly within the extension.
- Export PackyCode credentials to AI clients or custom distribution panels.

### Auto-Detection & Setup

1. Log in to [PackyCode](https://www.packyapi.ai) in your browser.
2. Click the All API Hub extension icon in your browser toolbar.
3. Click **"Add Account"** and use the current site URL or enter the PackyCode domain manually.

![Enter PackyCode URL and prepare auto-detection](/assets/image/Advanced/AllApiHub/02.png)

4. Click **"Auto Detect"**.
5. Verify detected account details and click **"Save Account"**.

![Confirm detected account details](/assets/image/Advanced/AllApiHub/03.png)

::: tip Note
Once added, the extension uses the session token to load balances, API keys, and model pricing data.
:::

### Managing PackyCode API Keys

Under **"Key Management"**, you can:
- View all active API keys.
- Create new keys, edit, or delete existing ones.
- Copy keys or save them to the **"API Credential Vault"** for reuse.
- Initiate exports directly to client applications.

## Common Use Cases

### Checking Balances & Account Status

On the All API Hub home dashboard, view PackyCode balances, account states, and refresh statuses side-by-side with other providers.

### Comparing Model Pricing

Navigate to the **"Model Pricing"** tab and select your PackyCode account to:
- Browse all supported models.
- Search models and run latency tests.
- View input and output token multipliers.
- Compare token pricing against other accounts to choose the most cost-effective model for each task.

![Browse PackyCode model list and pricing](/assets/image/Advanced/AllApiHub/04.png)

### Exporting to AI Clients

Export PackyCode credentials directly to your preferred tools:
1. Locate your PackyCode key in **"Key Management"**.
2. Select your export destination (e.g. **Cherry Studio**, **CC Switch**, **Kilo Code**, **CLIProxyAPI**, **Claude Code Router**, or custom self-hosted channels).

![Exporting PackyCode key from key management](/assets/image/Advanced/AllApiHub/05.png)

Additional features:
- Copy `Base URL + API Key` for manual entry.
- Test endpoint health and CLI compatibility.
- Export identical credentials to multiple clients without retyping.
- Sync across workstations via WebDAV.

### Importing to Self-Hosted Proxy Channels

If you operate your own AI proxy or distribution backend, All API Hub can import PackyCode keys directly as upstream channels. Configure your backend under **"Basic Settings" → "Self-Hosted Site Management"**, then import single or multiple keys from Key Management.

### Multi-Device Migration & Backups

Migrate settings across computers using JSON import/export or WebDAV sync. Data remains stored locally in your browser by default unless WebDAV sync is explicitly enabled.

## All API Hub vs. AI Clients

| Dimension | All API Hub (Management) | Cherry Studio / NextChat (Client Execution) |
| --- | --- | --- |
| **Core Focus** | Centralized management of PackyCode accounts, balances, keys, pricing, and channels | Chat conversations, inference, prompt engineering |
| **Key Features** | Multi-account dashboard, key management, price comparison, credential export | Chat sessions, document analysis, agent workflows |
| **Relationship** | **Organizes credentials:** Keeps Keys, Base URLs, and rates organized in one place | **Consumes credentials:** Uses organized profiles to invoke models |

**Recommended Flow:** Use All API Hub to manage PackyCode accounts, keys, pricing, and exports; use your favorite desktop or CLI clients to converse with models.

## FAQ

**Q: Does All API Hub upload my API Keys?**  
A: No. By default, accounts and keys are stored locally within your browser. Data is only synchronized when you explicitly configure WebDAV synchronization.

**Q: Can I use All API Hub without a self-hosted backend?**  
A: Yes. Balance inspection, key management, model price comparison, and client exports work independently without a custom server.

**Q: Does exporting credentials break existing client configurations?**  
A: No. All API Hub generates configuration profiles for target clients without altering unrelated configurations.

**Q: What is the relationship between All API Hub and the PackyCode Console?**  
A: They complement each other. The PackyCode console handles account balance top-ups, billing, and official services; All API Hub organizes daily key management, price comparisons, and multi-tool routing.

## Conclusion

PackyCode provides comprehensive AI models and endpoints, while All API Hub makes managing those accounts, keys, pricing, and tools effortless.

- [PackyCode Official Website](https://www.packyapi.ai)
- [All API Hub GitHub Repository](https://github.com/qixing-jk/all-api-hub)
- [All API Hub Documentation](https://all-api-hub.qixing1217.top)
