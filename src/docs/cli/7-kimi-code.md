---
title: Kimi Code配置
icon: material-symbols:terminal
order: 7
---

Kimi Code 是 Moonshot AI 推出的终端编码助手。本教程只介绍通过 PackyAPI 使用模型的基础安装、配置和验证方法。

::: info 其它功能请参考官方文档
MCP、Skills、Plugins 等扩展能力不在本基础教程中展开，请直接参考 Kimi Code 官方文档：

- [MCP](https://www.kimi.com/code/docs/kimi-code-cli/customization/mcp.html)
- [Agent Skills](https://www.kimi.com/code/docs/kimi-code-cli/customization/skills.html)
- [Plugins](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html)
:::

::: warning 不要泄露 API 令牌
下面示例中的 `sk-替换为你的API令牌` 只是占位符。请勿在截图、聊天记录、公开仓库或工单中展示真实 API 令牌，也不要把包含令牌的 `config.toml` 提交到 Git 仓库。
:::

## 安装 Kimi Code

Kimi Code 官方同时提供安装脚本和 npm 安装方式。本教程推荐使用 npm；其它安装方式和最新环境要求请查看 [Kimi Code 官方入门文档](https://www.kimi.com/code/docs/kimi-code-cli/guides/getting-started.html)。

1. 确认已安装 Node.js `22.19.0` 或更高版本（版本要求与检查方法见 [环境确认（Node.js 与 npm）](/docs/cli/1-env.html)）：

```bash
node --version
```

2. 使用 npm 全局安装最新版 Kimi Code：

```bash
npm install -g @moonshot-ai/kimi-code@latest
```

![使用 npm 安装 Kimi Code](/assets/image/Kimi-Code/001.webp)

3. 检查安装结果：

```bash
kimi --version
```

## 准备令牌和模型

1. 在 [模型广场](/docs/token/1-intro.html) 中查看目标模型支持的请求协议。
2. 按照 [创建 API 令牌](/docs/register/4-token.html) 创建支持该模型和协议的令牌。
3. 从下面三种协议中选择一种配置，不要把三个示例同时写入配置文件。

::: important 令牌分组必须匹配
`cc` 分组不能用于第三方 CLI 接入。请以模型广场实时展示的模型 ID、支持协议和可用令牌分组为准。
:::

模型详情页会列出该模型支持的 API 端点。例如下图中的模型同时支持 Anthropic Messages、OpenAI Chat Completions 和 OpenAI Responses：

![在模型广场查看模型支持的 API 端点](/assets/image/Kimi-Code/002.webp)

## 打开配置文件

Kimi Code 的基础配置文件名为 `config.toml`。首次运行 `kimi` 后会自动创建配置目录；如果没有生成，也可以手动创建目录和文件。

::: tabs

@tab Windows

键盘按下“Win+R”，输入以下路径后回车：

```text
%USERPROFILE%\.kimi-code
```

打开或创建该目录中的 `config.toml`。

@tab macOS / Linux / WSL

配置文件路径为：

```text
~/.kimi-code/config.toml
```

如果目录不存在，可以先执行：

```bash
mkdir -p ~/.kimi-code
```

然后打开或创建 `config.toml`。

:::

## 配置 PackyAPI 网关

以下三种配置分别对应 OpenAI Chat Completions、OpenAI Responses 和 Anthropic Messages 协议。复制所选配置后，只需替换：

1. `sk-替换为你的API令牌`：替换为在 PackyAPI 创建的 API 令牌。
2. `替换为模型广场中的模型ID`：替换为令牌分组支持的实际模型 ID，例如模型广场当前提供的 `deepseek-v4-flash`。

`max_context_size` 是必填项。示例使用 `200000`，如果模型广场标注了其它上下文长度，请按模型说明修改。

### OpenAI Chat Completions

适用于支持 OpenAI Chat Completions 协议的模型，请求路径为 `/v1/chat/completions`。

```toml
default_model = "packy_chat"

[providers.packy_chat]
type = "openai"
base_url = "https://cf.api.fan/v1"
api_key = "sk-替换为你的API令牌"

[models.packy_chat]
provider = "packy_chat"
model = "替换为模型广场中的模型ID"
max_context_size = 200000
```

`base_url` 填写到 `/v1` 即可，不要再拼接 `/chat/completions`，Kimi Code 会自动补齐请求路径。

配置文件效果如下：

![Kimi Code 的 OpenAI Chat Completions 配置](/assets/image/Kimi-Code/003.webp)

启动并发送消息后，能够正常回复即表示配置成功：

![使用 OpenAI Chat Completions 配置测试 Kimi Code](/assets/image/Kimi-Code/004.webp)

### OpenAI Responses

适用于支持 OpenAI Responses API 的模型，请求路径为 `/v1/responses`。

```toml
default_model = "packy_responses"

[providers.packy_responses]
type = "openai_responses"
base_url = "https://cf.api.fan/v1"
api_key = "sk-替换为你的API令牌"

[models.packy_responses]
provider = "packy_responses"
model = "替换为模型广场中的模型ID"
max_context_size = 200000
```

`base_url` 填写到 `/v1` 即可，不要再拼接 `/responses`。`type` 必须写成 `openai_responses`，不能写成 `openai-responses`。

配置文件效果如下：

![Kimi Code 的 OpenAI Responses 配置](/assets/image/Kimi-Code/005.webp)

启动并发送消息后，能够正常回复即表示配置成功：

![使用 OpenAI Responses 配置测试 Kimi Code](/assets/image/Kimi-Code/006.webp)

### Anthropic Messages

适用于支持 Anthropic Messages 协议的模型，请求路径为 `/v1/messages`。

```toml
default_model = "packy_anthropic"

[providers.packy_anthropic]
type = "anthropic"
base_url = "https://cf.api.fan"
api_key = "sk-替换为你的API令牌"

[models.packy_anthropic]
provider = "packy_anthropic"
model = "替换为模型广场中的模型ID"
max_context_size = 200000
```

Anthropic 的 `base_url` 不要添加 `/v1` 或 `/v1/messages`，Kimi Code 使用的 Anthropic SDK 会自动补齐请求路径。

配置文件效果如下：

![Kimi Code 的 Anthropic Messages 配置](/assets/image/Kimi-Code/007.webp)

启动并发送消息后，能够正常回复即表示配置成功：

![使用 Anthropic Messages 配置测试 Kimi Code](/assets/image/Kimi-Code/008.webp)

## 常见问题

如果启动或请求失败，优先检查：

1. `default_model` 是否与 `[models.<名称>]` 完全一致。
2. `[models.<名称>].provider` 是否与 `[providers.<名称>]` 完全一致。
3. 模型 ID 是否属于当前令牌分组，并支持所选请求协议。
4. OpenAI Chat / Responses 的地址是否以 `/v1` 结尾。
5. Anthropic 的地址是否没有手动添加 `/v1` 或 `/v1/messages`。

## 官方配置参考

Kimi Code 更新较快，完整配置和高级用法请以官方文档为准：

- [供应商与模型](https://www.kimi.com/code/docs/kimi-code-cli/configuration/providers.html)
- [配置文件](https://www.kimi.com/code/docs/kimi-code-cli/configuration/config-files.html)
- [环境变量](https://www.kimi.com/code/docs/kimi-code-cli/configuration/env-vars.html)
- [配置覆盖](https://www.kimi.com/code/docs/kimi-code-cli/configuration/overrides.html)
