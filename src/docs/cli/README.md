---
title: CLI配置教程
index: false
icon: fa-solid fa-star-of-david
category:
  - Cli
date: 2025-11-23
---

## 环境检查(通用步骤)

### （1）确认Nodejs环境已安装
1. 在windows或MacOS终端输入以下命令

```bash
npm list -g --depth-0
```

正常情况应该是如下图所示（没有任何内容也没关系），如果提示“命令未找到”，则说明你没有安装Nodejs，你需要按 [此教程](https://www.runoob.com/nodejs/nodejs-install-setup.html) 来安装运行 Claude Code、Codex 等 CLI 所需的环境

![](/assets/image/Cli/001.webp)

2. 如果你发现自己没有安装Nodejs，并且跟着教程目前已经安装完毕，请你重新执行上述提到的命令，如果不再提示“命令未找到”，则说明安装成功

### （2）安装CLI

1. 在windows或MacOS终端输入以下命令，安装 Claude Code 与 Codex

```bash
npm i -g @anthropic-ai/claude-code@latest
npm i -g @openai/codex@latest
```

![](/assets/image/Cli/002.webp)

### （3）测试安装成功
> [!important]
> **这一步很重要，请你务必运行命令进行测试，因为这一步运行命令后，你的用户目录下才会生成各CLI的配置目录，方便后续操作！**


::: tabs

@tab Claude Code

在windows或MacOS终端输入以下命令，若出现图示内容，或出现选项让你选择，则Claude code安装成功（图下方红框里就是这次运行生成的 `.claude` 目录）。Windows 下按两次 `Esc` 即可退出这次运行。

```bash
claude
```

![](/assets/image/Cli/031.webp)

> [!important]
> **第二步十分重要，请你务必跳转链接后运行命令进行配置**

2. 点击 [claude code 无法连接到 Anthropic 服务](/docs/faq/CC.html#claude-code-无法连接到-anthropic-服务) 跳转，务必根据教程运行命令，然后再继续阅读之后单独CLI的配置教程

@tab Codex

在windows或MacOS终端输入以下命令，若出现图示内容，或出现选项让你选择，则Codex安装成功

```bash
codex
```

![](/assets/image/Cli/004.webp)

:::

## ::material-icon-theme:claude:: Claude Code配置

::: tabs

@tab Windows

1. 键盘按下“Win+R”键，输入以下内容后回车，打开Claude Code配置目录

```bash
%userprofile%\.claude
```

![](/assets/image/Cli/013.webp)

2. 目录内容如图所示，如果目录中没有 `settings.json`，你需要手动创建后打开

- **settings.json**：Claude 主要的配置文件，用来配置中转站地址、ApiKey，以及 hooks、plugins 等

![](/assets/image/Cli/032.webp)

@tab MacOS

1. 在访达界面按下 “Command+Shift+G”，输入以下路径后回车，打开配置目录

```bash
~/.claude
```

![](/assets/image/Cli/017.webp)

2. 若目录不存在 `settings.json`，需要你手动进行创建

- **settings.json**：Claude 主要的配置文件，用来配置中转站地址、ApiKey，以及 hooks、plugins 等

![](/assets/image/Cli/018.webp)

> [!tip]
> macOS 版与 Windows 版内容完全一致：配置文件与令牌的截图两边通用；终端截图以 Windows 界面为例，macOS 上把路径换成 `~/.claude` 即可。

:::

打开 `.claude` 配置目录后的 3–5 步，Windows 与 MacOS 完全一致。

3. 将以下内容写入 `settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://cf.api.fan",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_DISABLE_TERMINAL_TITLE": "1",
    "CLAUDE_CODE_NEW_INIT": "1",
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1",
    "DISABLE_AUTOUPDATER": "1",
    "DISABLE_TELEMETRY": "1",
    "DISABLE_BUG_COMMAND": "1",
    "DISABLE_ERROR_REPORTING": "1",
    "ENABLE_TOOL_SEARCH": "false",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1",
    "CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS": "1"
  },
  "includeCoAuthoredBy": false,
  "language": "Chinese-simplified"
}
```

![](/assets/image/Cli/033.webp)

4. 回顾 [创建API令牌](/docs/register/4-token.html)，在 PackyApi 中创建 **CC** 分组的令牌，提交后在弹窗里复制完整密钥（只显示一次，关掉就看不到了）

![](/assets/image/QuickStart/010.webp)

把复制到的 key 填进上方 `ANTHROPIC_AUTH_TOKEN` 的 `xxx` 位置

![](/assets/image/Cli/035.webp)

5. 在终端运行 `claude`，如果出现安全确认提示，用方向键选中 `Yes, I trust this folder` 后回车

```bash
claude
```

![](/assets/image/Cli/036.webp)

进入对话界面后随便发一句话测试，能收到回复即表示配置成功

![](/assets/image/Cli/037.webp)

::: tip 遇到其他配置问题
比如连不上服务、提示需要登录等，都可以优先查看 [Claude Code 相关问题](/docs/faq/CC.html) 页面，常见报错的处理方法都在里面。
:::

更多环境变量含义与可选配置，见 [Claude Code配置](/docs/cli/2-claude.html#配置项说明)。

## ::hugeicons:chat-gpt:: Codex配置

::: tabs

@tab Windows

1. 键盘按下“Win+R”键，输入以下内容后回车，打开你的codex配置目录

```bash
%userprofile%\.codex
```

![](/assets/image/Cli/006.webp)

2. 目录里大多是 Codex 自己生成的会话、日志与数据库文件，我们只需要其中两个

![](/assets/image/Cli/007.webp)

  - **config.toml**：Codex的**核心配置**文件，中转服务与MCP等都在此文件配置

  - **auth.json**：用来配置你在中转站获取的ApiKey秘钥

  - **`AGENTS.md`**：用来设置codex全局工作的提示词，不接入中转服务也可以先不建

> [!important]
> 上图里只有 `config.toml` 是 Codex 自己生成的，`auth.json` 与 `AGENTS.md` 都可能不存在，没有就手动新建文件再写入内容。

@tab MacOS

1. 在访达界面按下 “Command+Shift+G”，输入以下路径并回车，打开 Codex 配置目录

```bash
~/.codex
```

![](/assets/image/Cli/011.webp)

2. 目录中可能会存在以下文件，其它文件可忽略

![](/assets/image/Cli/012.webp)

  - **config.toml**：Codex 的核心配置文件，中转服务与 MCP 等都在此文件配置

  - **auth.json**：存放中转站获取的 ApiKey 秘钥

  - **`AGENTS.md`**：Codex 全局工作的提示词，不接入中转服务也可以先不建

> [!important]
> 初次安装若未自动生成，需要手动创建上述文件并写入内容

:::

打开配置目录后的 3–6 步，Windows 与 MacOS 完全一致；`config.toml` 里的 `[windows]` 段只对 Windows 生效，macOS 可以不写。

3. 将以下内容写入 `config.toml`

```toml
disable_response_storage = true
model = "gpt-6-astra"
model_provider = "packycode"
model_reasoning_effort = "xhigh"
model_verbosity = "high"

[features]
web_search_request = true

[model_providers.packycode]
base_url = "https://cf.api.fan/v1"
name = "packycode"
requires_openai_auth = true
wire_api = "responses"

[tui]
screen_reader_detection_done = true

[windows]
sandbox = "elevated"
```

![](/assets/image/Cli/038.webp)

> [!important]
> `model` 要填 [Codex分组](/docs/token/2-group.html) 里实时展示的可用模型 ID，`gpt-5.3-codex` 及其以下版本已被官方删除。上图填的 `gpt-6-astra` 是当时 Codex 分组在售的模型，实际以该页面的实时列表为准。

> [!note]
> **Windows 沙盒装不上时可以换一档**
>
> `[windows] sandbox` 共有三种实现：`mxc`、`elevated`、`unelevated`。截图里用的是 `elevated`，它需要管理员授权完成一次初始化；如果你的电脑 UAC 被拒、或者公司电脑不允许新建本地用户、改防火墙与组策略，改成 `unelevated` 一样能跑，只是网络隔离比 `elevated` 弱一些。
>
> Windows 11 24H2（build 26100.9278）及以上可以改用 `mxc`：`elevated` 那行保持不动，在 `[features]` 里加一行 `prefer_mxc = true`，设备支持时会自动选用 MXC。
>
> 细节见官方文档 [Windows sandbox](https://developers.openai.com/codex/windows/windows-sandbox)。

4. 将以下内容写入 `auth.json`

```json
{
  "auth_mode": "apikey",
  "OPENAI_API_KEY": "xxx"
}
```

> [!important]
> `auth_mode` 用于按 API 密钥登录，值必须写成小写 `apikey`。

5. 回顾 [创建API令牌](/docs/register/4-token.html) 这一步教程，我们需要在PackyApi中创建 **Codex** 分组的令牌，提交后在弹窗里复制完整密钥（只显示一次，关掉就看不到了）

![](/assets/image/QuickStart/010.webp)

把复制到的 key 填进上方 `xxx` 的位置后保存

![](/assets/image/Cli/009.webp)

6. 测试对话

在终端输入以下命令，出现图示内容，进行对话测试，如果有回复，则配置成功，开始你的Codex使用之旅~

```bash
codex
```

![](/assets/image/Cli/010.webp)

> [!tip]
> **遇到其他配置问题**
>
> 连不上服务、沙盒初始化失败、令牌分组选错等，都可以优先查看 [Codex 相关问题](/docs/faq/Codex.html) 页面，常见报错的处理方法都在里面。
