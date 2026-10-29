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
                    text: "（5）环境确认",
                    icon: "mdi:tools",
                    link: "/docs/cli/1-env.html",
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
            text: "环境准备",
            icon: "mdi:tools",
            collapsible: false,
            children: [
                {
                    text: "环境确认（Node.js 与 npm）",
                    icon: "mdi:tools",
                    link: "/docs/cli/1-env.html",
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
                    text: "Claude Desktop配置",
                    icon: "material-icon-theme:claude",
                    link: "4-claude-desktop.md",
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
            text: "绘图模型教程",
            icon: "pepicons-pop:paint-pallet-circle",
            prefix: "paint/",
            collapsible: false,
            children: [
                {
                    text: "GPT-Image",
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
            text: "优化",
            icon: "material-symbols:speed",
            prefix: "cli/",
            collapsible: false,
            children: [
                {
                    text: "Claude Code 缓存优化代理",
                    icon: "material-symbols:cached",
                    link: "5-cache-fix.md",
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
});
