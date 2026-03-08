# Packy API 文档站（packy-docs）

> Documentation for Packy API – The One-stop AI Relay Service  
> Packy API 官方文档源码仓库，提供最稳定、最便捷的 AI 模型中转服务使用指南~

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![VuePress 2](https://img.shields.io/badge/VuePress-2.0.0--rc.26?logo=vue.js)
![Theme: Hope](https://img.shields.io/badge/Theme-vuepress--theme--hope-0f766e)
![Node.js](https://img.shields.io/badge/Node.js-Required-brightgreen?logo=node.js)

---

## 🚀 项目概览

| 维度 | 内容 |
| --- | --- |
| 项目名称 | `packy-docs` |
| 项目类型 | 文档站前端源码 |
| 主要功能 | 为 Packy API 用户提供从注册、令牌配置，到在 Claude Code / Codex / Gemini CLI 等终端中使用的完整教程与 FAQ |
| 核心受众 | 想要使用 Packy API 中转服务的开发者、运营人员，以及维护文档站的内部同学 |
| 技术栈 | VuePress 2.0.0-rc.26（bundler-vite）+ vuepress-theme-hope 2.0.0-rc.98 + Vue 3.5.22 |
| 许可协议 | MIT |

PackyAPI 是一个“一站式 AI 中转服务”，通过统一域名和密钥接入多个大模型供应商，并提供监控、限流、告警、风控等能力。  
本仓库则是其官方文档站的源码，用于编写与维护线上文档站 `https://docs.packyapi.com`。

---

## 🌐 在线地址

| 类型 | 链接 | 说明 |
| --- | --- | --- |
| 官方文档 | https://docs.packyapi.com | 本仓库编译部署后的线上站点 |
| Packy API 官网 | https://www.packyapi.com | 产品主站与控制台入口 |
| 服务状态监控 | https://status.packyapi.com/group/Packy | 对应文档站中的“监控站”页面 |

---

## ✨ 功能特性

- 一站式接入文档：从注册账号、购买额度、创建 API 令牌到 CLI 配置，一条龙引导。
- 专注 CLI 使用场景：面向 Claude Code、Codex、Gemini CLI 等主流终端，提供详细图文教程与最佳实践。
- 令牌分组详解：对 Default / CC / Codex / Aws / Antigravity 等分组进行场景化说明，降低“模型不存在”等配置错误。
- 图文并茂的交互体验：大量截图、标签页（tabs）、提示块（tips / important / warning）和自定义组件，显著降低阅读成本。
- 服务可观测性：内嵌 Packy API 状态页，方便用户快速判断是自身配置问题还是服务侧波动。
- 基于 VuePress 2 + Hope 主题：享受现代化文档站能力：深色模式、响应式布局、全文搜索、组件化文档等。

---

## 📚 文档模块一览

| 模块 | 路径 | 面向对象 | 内容说明 |
| --- | --- | --- | --- |
| 首页 | `src/README.md` | 所有访客 | 站点首页，展示 Packy API 卖点、入口按钮、售后 QQ 群等 |
| 快速开始 | `src/docs/register/` | 新用户 | 从注册、登录、充值到创建 API 令牌的完整流程 |
| CLI 配置教程 | `src/docs/cli/` | 终端用户 | Node 环境检查、Claude Code / Codex / Gemini CLI 安装与配置 |
| 令牌分组介绍 | `src/docs/token/` | 进阶用户 | 各分组定位、适用 CLI、模型使用建议与配置注意事项 |
| CC-Switch 教程 | `src/docs/ccswitch/` | GUI 用户 | 通过 CC-Switch 图形化工具切换与管理不同供应商 / 分组 |
| FAQ 常见问题 | `src/docs/faq/` | 所有用户 | 针对 Claude Code / Codex / Gemini 的常见问题与使用技巧 |
| 条款与政策 | `src/docs/tos/` | 所有用户 | 服务条款、可接受使用政策、专项条款与使用约定 |
| 监控站 | `src/docs/Monitor.md` | 运维 / 开发 | 内嵌 `status.packyapi.com` 的服务状态监控页面 |

如果你要新增文档页面，建议按现有目录划分进行扩展，保持信息架构一致。

---

## 🧑‍💻 本地开发与预览

以下内容面向**维护本仓库的开发 / 运营同学**，非使用者可以略过。

### 1. 环境准备

- Node.js（推荐 18+，具体可参考 VuePress 官方要求）
- Yarn（仓库自带 `yarn.lock`，推荐使用 Yarn 管理依赖）
- Git

### 2. 安装依赖

```bash
# 在仓库根目录执行
yarn install
# 或者如果你坚持用 npm（不推荐混用）
# npm install
```

### 3. 启动本地开发服务器

```bash
# 常规开发
yarn docs:dev

# 如果遇到缓存问题，可以先清缓存再启动
yarn docs:clean-dev
```

启动后，VuePress 会在本地启动一个 dev server（通常是 `http://localhost:8080` 或类似端口），  
在浏览器访问即可实时预览文档修改效果。

### 4. 构建生产版本

```bash
yarn docs:build
```

构建完成后，静态文件会输出到：

```text
src/.vuepress/dist
```

将该目录部署到任意静态托管（如 Nginx、Vercel、Netlify、Cloudflare Pages 等）即可上线。

### 5. 更新 VuePress 相关依赖

```bash
yarn docs:update-package
```

该命令通过 `yarn dlx vp-update` 帮你更新 VuePress 相关依赖版本，  
执行前建议配合 `git diff` 检查变更，并在测试无误后再合并。

---

## 🧩 项目结构

> 仅展示与文档和配置相关的关键结构，忽略 `node_modules` 等依赖目录。

```text
packy-docs/
├─ package.json           # 项目信息与脚本
├─ tsconfig.json          # TypeScript 配置
├─ yarn.lock              # Yarn 依赖锁定文件
├─ src/
│  ├─ README.md           # 文档站首页内容（Hero + QQ 群 + 高亮卡片）
│  ├─ .vuepress/
│  │  ├─ config.ts        # VuePress 主配置（站点信息、Vite 代理等）
│  │  ├─ theme.ts         # Hope 主题配置（页脚、Markdown 扩展、插件等）
│  │  ├─ navbar.ts        # 导航栏配置
│  │  ├─ sidebar.ts       # 侧边栏配置
│  │  ├─ components/      # 自定义组件
│  │  ├─ public/          # 静态资源（如 /logo.webp）
│  │  ├─ styles/          # 自定义样式
│  │  ├─ .cache/          # VuePress 缓存目录（自动生成）
│  │  ├─ .temp/           # VuePress 临时目录（自动生成）
│  │  └─ dist/            # 构建输出目录（自动生成）
│  └─ docs/
│     ├─ register/        # 快速开始与账号 / 额度 / 令牌教程
│     ├─ cli/             # Claude Code / Codex / Gemini CLI 配置教程
│     ├─ token/           # 令牌分组与模型说明
│     ├─ ccswitch/        # CC-Switch 使用教程
│     ├─ faq/             # 常见问题 FAQ
│     ├─ tos/             # 条款与政策（TOS / AUP 等）
│     └─ Monitor.md       # 监控站页面（内嵌 status 页面）
└─ task_manager/
   ├─ README.md           # 仓库内部任务管理首页
   ├─ task.md             # 任务说明
   ├─ doc/                # 内部文档/说明
   ├─ images/             # 任务相关图片
   └─ 监控站活动/          # 监控站活动相关资料
```

---

## 🛠 常用脚本速查表

| 场景 | 命令 | 说明 |
| --- | --- | --- |
| 启动本地开发 | `yarn docs:dev` | 以当前 `src` 目录为入口启动 VuePress dev server |
| 清缓存后开发 | `yarn docs:clean-dev` | 先清除 `.cache` / `.temp` 再启动 dev，解决部分缓存引起的问题 |
| 构建生产版本 | `yarn docs:build` | 生成静态文件到 `src/.vuepress/dist` |
| 更新 VuePress 依赖 | `yarn docs:update-package` | 使用 `vp-update` 升级 VuePress 及相关插件版本 |

---

## 🤝 贡献指南（建议）

欢迎对文档内容和结构进行改进。建议流程如下：

1. **Fork 或新建分支**
   - 从主分支创建功能分支，例如 `feat/add-gemini-examples`。
2. **本地开发与预览**
   - 按“本地开发与预览”章节启动 dev server，对照浏览器实时验证文档排版与交互。
3. **保持风格一致**
   - 新增页面时：
     - 尽量在顶部添加规范的 frontmatter（如 `title`、`icon`、`category`、`date` 等）。
     - 文案风格与现有文档保持一致：分步骤、配截图、适当使用 `::: tip / warning / important` 等。
4. **提交与合并**
   - 提交前确保 `yarn docs:build` 能正常通过。
   - 使用简明的提交信息，并在 PR 中说明改动范围与目的。

---

## 📄 License

本项目基于 MIT License 开源。你可以在 `package.json` 中查看 `license` 字段，  
也可以在仓库根目录添加 / 查看 `LICENSE` 文件以获得完整协议文本。
