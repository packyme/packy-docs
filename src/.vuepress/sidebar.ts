import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/docs/": [
        {
            text: "快速开始",
            icon: "rocket",
            prefix: "register/",
            link: "register/",
            collapsible: false,
            children: [
                {
                    text: "（1）注册账号",
                    icon: "material-symbols:person-add",
                    link: "1-register.md",
                },
                {
                    text: "（2）登录账号",
                    icon: "material-symbols:login",
                    link: "2-login.md",
                },
                {
                    text: "（3）购买额度",
                    icon: "mdi:credit-card-outline",
                    link: "3-quota.md",
                },
                {
                    text: "（4）创建 API 令牌",
                    icon: "mdi:key-variant",
                    link: "4-token.md",
                },
                {
                    text: "（5）环境检查",
                    icon: "mdi:tools",
                    link: "5-env.md",
                },
                {
                    text: "（6）配置 CLI 工具",
                    icon: "mdi:console",
                    link: "6-cli.md",
                },
            ],
        },
        {
            text: "模型分组介绍",
            icon: "uis:layer-group",
            prefix: "token/",
            link: "token/",
            collapsible: false,
            children: [
                {
                    text: "模型广场",
                    icon: "material-symbols:view-in-ar-outline",
                    link: "1-intro.md",
                },
                {
                    text: "令牌分组介绍",
                    icon: "ic:baseline-generating-tokens",
                    link: "2-group.md",
                },
            ],
        },
        {
            text: "CC-Switch使用",
            icon: "fluent:table-switch-16-filled",
            prefix: "ccswitch/",
            link: "ccswitch/",
            collapsible: false,
            children: [
                {
                    text: "通用步骤",
                    icon: "fluent:table-switch-16-filled",
                    link: "1-common.md",
                },
                {
                    text: "Claude Code配置",
                    icon: "material-icon-theme:claude",
                    link: "2-claude.md",
                },
                {
                    text: "Codex配置",
                    icon: "hugeicons:chat-gpt",
                    link: "3-codex.md",
                },
                {
                    text: "用量查询配置",
                    icon: "mdi:chart-line",
                    link: "4-usage-query.md",
                },
                {
                    text: "CC-Switch-CLI 使用",
                    icon: "tdesign:ai-terminal-filled",
                    link: "5-ccs_cli.md",
                },
            ],
        },
        {
            text: "CLI配置教程",
            icon: "heroicons:command-line-20-solid",
            prefix: "cli/",
            link: "cli/",
            collapsible: false,
            children: [
                {
                    text: "环境检查（通用步骤）",
                    icon: "mdi:tools",
                    link: "1-env.md",
                },
                {
                    text: "Claude Code配置",
                    icon: "material-icon-theme:claude",
                    link: "2-claude.md",
                },
                {
                    text: "Codex配置",
                    icon: "hugeicons:chat-gpt",
                    link: "3-codex.md",
                },
                {
                    text: "Grok Build配置",
                    icon: "simple-icons:x",
                    link: "6-grok-build.md",
                },
                {
                    text: "Kimi Code配置",
                    icon: "material-symbols:terminal",
                    link: "7-kimi-code.md",
                },

            ],
        },
        {
            text: "额外配置",
            icon: "mdi:tune",
            prefix: "cli/",
            collapsible: false,
            children: [
                {
                    text: "CC缓存优化代理",
                    icon: "material-symbols:cached",
                    link: "5-cache-fix.md",
                },
            ],
        },
        {
            text: "绘图模型教程",
            icon: "pepicons-pop:paint-pallet-circle",
            prefix: "paint/",
            collapsible: false,
            children: [
                {
                    text: "Banana2 Pro",
                    icon: "emojione-monotone:banana",
                    link: "Banana.md",
                },
                {
                    text: "GPT-Image-2",
                    icon: "material-symbols:image-outline",
                    link: "GPTImage.md",
                },
            ],
        },
        {
            text: "官方客户端",
            icon: "material-symbols:desktop-windows",
            collapsible: false,
            children: [
                {
                    text: "Claude Desktop",
                    icon: "material-icon-theme:claude",
                    link: "advanced/ClaudeDesktop.md",
                },
                {
                    text: "ChatGPT",
                    icon: "hugeicons:chat-gpt",
                    link: "ccswitch/6-codex-app.md",
                },
            ],
        },
        {
            text: "第三方接入",
            icon: "noto:fire",
            prefix: "advanced/",
            collapsible: false,
            children: [
                {
                    text: "AionUi",
                    icon: "akar-icons:paper-airplane",
                    link: "AionUI.md",
                },
                {
                    text: "OpenCode",
                    icon: "mynaui:code-hexagon-solid",
                    link: "OpenCode.md",
                },
                {
                    text: "OpenClaw",
                    icon: "noto:lobster",
                    link: "OpenClaw.md",
                },
                {
                    text: "Hermes",
                    icon: "game-icons:caduceus",
                    link: "Hermes.md",
                },
                {
                    text: "WorkBuddy",
                    icon: "/assets/icon/workbuddy.png",
                    link: "WorkBuddy.md",
                },
                {
                    text: "All API Hub",
                    icon: "material-symbols:extension",
                    link: "AllApiHub.md",
                },
                {
                    text: "DS接入CC",
                    icon: "simple-icons:deepseek",
                    link: "DeepSeekClaudeCode.md",
                },
                {
                    text: "DS接入Codex",
                    icon: "simple-icons:deepseek",
                    link: "DeepSeekCodex.md",
                },
                {
                    text: "GPT接入CC",
                    icon: "hugeicons:chat-gpt",
                    link: "ChatGPTClaudeCode.md",
                },
            ],
        },
        {
            text: "常见问题",
            icon: "mingcute:question-fill",
            prefix: "faq/",
            collapsible: false,
            children: [
                {
                    text: "Claude Code",
                    icon: "material-icon-theme:claude",
                    link: "CC.md",
                },
                {
                    text: "Codex",
                    icon: "hugeicons:chat-gpt",
                    link: "Codex.md",
                },
                {
                    text: "Gemini",
                    icon: "vscode-icons:file-type-gemini",
                    link: "Gemini.md",
                },
                {
                    text: "Grok Build",
                    icon: "simple-icons:x",
                    link: "GrokBuild.md",
                },
            ],
        },
        {
            text: "条款与政策",
            icon: "ic:round-motion-photos-off",
            prefix: "tos/",
            link: "tos/",
            collapsible: false,
            children: [
                {
                    text: "使用政策（AUP）",
                    icon: "material-symbols:policy",
                    link: "aup.md",
                },
                {
                    text: "服务条款",
                    icon: "mdi:file-document-outline",
                    link: "TOS.md",
                },
                {
                    text: "服务特定条款",
                    icon: "mdi:clipboard-text-outline",
                    link: "service-specific-terms.md",
                },
                {
                    text: "支持的国家和地区",
                    icon: "mdi:earth",
                    link: "use.md",
                },
            ],
        },
    ],
    "/": [""],
    "/en/docs/": [
        {
            text: "Quick Start",
            icon: "rocket",
            prefix: "register/",
            link: "register/",
            collapsible: false,
            children: [
                {
                    text: "(1) Register Account",
                    icon: "material-symbols:person-add",
                    link: "1-register.md",
                },
                {
                    text: "(2) Log in Account",
                    icon: "material-symbols:login",
                    link: "2-login.md",
                },
                {
                    text: "(3) Purchase Quota",
                    icon: "mdi:credit-card-outline",
                    link: "3-quota.md",
                },
                {
                    text: "(4) Create API Token",
                    icon: "mdi:key-variant",
                    link: "4-token.md",
                },
                {
                    text: "(5) Environment Check",
                    icon: "mdi:tools",
                    link: "5-env.md",
                },
                {
                    text: "(6) Configure CLI Tools",
                    icon: "mdi:console",
                    link: "6-cli.md",
                },
            ],
        },
        {
            text: "Model Groups",
            icon: "uis:layer-group",
            prefix: "token/",
            link: "token/",
            collapsible: false,
            children: [
                {
                    text: "Model Marketplace",
                    icon: "material-symbols:view-in-ar-outline",
                    link: "1-intro.md",
                },
                {
                    text: "Token Group Details",
                    icon: "ic:baseline-generating-tokens",
                    link: "2-group.md",
                },
            ],
        },
        {
            text: "CC-Switch Guide",
            icon: "fluent:table-switch-16-filled",
            prefix: "ccswitch/",
            link: "ccswitch/",
            collapsible: false,
            children: [
                {
                    text: "Common Steps",
                    icon: "fluent:table-switch-16-filled",
                    link: "1-common.md",
                },
                {
                    text: "Claude Code Setup",
                    icon: "material-icon-theme:claude",
                    link: "2-claude.md",
                },
                {
                    text: "Codex Setup",
                    icon: "hugeicons:chat-gpt",
                    link: "3-codex.md",
                },
                {
                    text: "Claude Desktop Setup",
                    icon: "material-icon-theme:claude",
                    link: "4-claude-desktop.md",
                },
                {
                    text: "Usage Query Setup",
                    icon: "mdi:chart-line",
                    link: "4-usage-query.md",
                },
                {
                    text: "CC-Switch-CLI Guide",
                    icon: "tdesign:ai-terminal-filled",
                    link: "5-ccs_cli.md",
                },
                {
                    text: "Codex App & ChatGPT",
                    icon: "hugeicons:chat-gpt",
                    link: "6-codex-app.md",
                },
            ],
        },
        {
            text: "CLI Configuration",
            icon: "heroicons:command-line-20-solid",
            prefix: "cli/",
            link: "cli/",
            collapsible: false,
            children: [
                {
                    text: "Environment Check (General)",
                    icon: "mdi:tools",
                    link: "1-env.md",
                },
                {
                    text: "Claude Code Setup",
                    icon: "material-icon-theme:claude",
                    link: "2-claude.md",
                },
                {
                    text: "Codex Setup",
                    icon: "hugeicons:chat-gpt",
                    link: "3-codex.md",
                },
                {
                    text: "Grok Build Setup",
                    icon: "simple-icons:x",
                    link: "6-grok-build.md",
                },
                {
                    text: "Kimi Code Setup",
                    icon: "material-symbols:terminal",
                    link: "7-kimi-code.md",
                },
            ],
        },
        {
            text: "Extra Configurations",
            icon: "mdi:tune",
            prefix: "cli/",
            collapsible: false,
            children: [
                {
                    text: "CC Cache Optimization Proxy",
                    icon: "material-symbols:cached",
                    link: "5-cache-fix.md",
                },
            ],
        },
        {
            text: "Image Generation Models",
            icon: "pepicons-pop:paint-pallet-circle",
            prefix: "paint/",
            collapsible: false,
            children: [
                {
                    text: "Banana2 Pro",
                    icon: "emojione-monotone:banana",
                    link: "Banana.md",
                },
                {
                    text: "GPT-Image-2",
                    icon: "material-symbols:image-outline",
                    link: "GPTImage.md",
                },
            ],
        },
        {
            text: "Official Clients",
            icon: "material-symbols:desktop-windows",
            collapsible: false,
            children: [
                {
                    text: "Claude Desktop",
                    icon: "material-icon-theme:claude",
                    link: "advanced/ClaudeDesktop.md",
                },
                {
                    text: "ChatGPT",
                    icon: "hugeicons:chat-gpt",
                    link: "ccswitch/6-codex-app.md",
                },
            ],
        },
        {
            text: "Third-party Integrations",
            icon: "noto:fire",
            prefix: "advanced/",
            collapsible: false,
            children: [
                {
                    text: "AionUi",
                    icon: "akar-icons:paper-airplane",
                    link: "AionUI.md",
                },
                {
                    text: "OpenCode",
                    icon: "mynaui:code-hexagon-solid",
                    link: "OpenCode.md",
                },
                {
                    text: "OpenClaw",
                    icon: "noto:lobster",
                    link: "OpenClaw.md",
                },
                {
                    text: "Hermes",
                    icon: "game-icons:caduceus",
                    link: "Hermes.md",
                },
                {
                    text: "WorkBuddy",
                    icon: "/assets/icon/workbuddy.png",
                    link: "WorkBuddy.md",
                },
                {
                    text: "All API Hub",
                    icon: "material-symbols:extension",
                    link: "AllApiHub.md",
                },
                {
                    text: "DeepSeek in Claude Code",
                    icon: "simple-icons:deepseek",
                    link: "DeepSeekClaudeCode.md",
                },
                {
                    text: "DeepSeek in Codex",
                    icon: "simple-icons:deepseek",
                    link: "DeepSeekCodex.md",
                },
                {
                    text: "GPT in Claude Code",
                    icon: "hugeicons:chat-gpt",
                    link: "ChatGPTClaudeCode.md",
                },
            ],
        },
        {
            text: "FAQ",
            icon: "mingcute:question-fill",
            prefix: "faq/",
            collapsible: false,
            children: [
                {
                    text: "Claude Code",
                    icon: "material-icon-theme:claude",
                    link: "CC.md",
                },
                {
                    text: "Codex",
                    icon: "hugeicons:chat-gpt",
                    link: "Codex.md",
                },
                {
                    text: "Gemini",
                    icon: "vscode-icons:file-type-gemini",
                    link: "Gemini.md",
                },
                {
                    text: "Grok Build",
                    icon: "simple-icons:x",
                    link: "GrokBuild.md",
                },
            ],
        },
        {
            text: "Terms and Policies",
            icon: "ic:round-motion-photos-off",
            prefix: "tos/",
            link: "tos/",
            collapsible: false,
            children: [
                {
                    text: "Acceptable Use Policy (AUP)",
                    icon: "material-symbols:policy",
                    link: "aup.md",
                },
                {
                    text: "Terms of Service",
                    icon: "mdi:file-document-outline",
                    link: "TOS.md",
                },
                {
                    text: "Service-Specific Terms",
                    icon: "mdi:clipboard-text-outline",
                    link: "service-specific-terms.md",
                },
                {
                    text: "Supported Countries and Regions",
                    icon: "mdi:earth",
                    link: "use.md",
                },
            ],
        },
    ],
});
