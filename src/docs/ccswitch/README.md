---
title: CC-Switch使用教程
index: false
icon: fluent:table-switch-16-filled
category:
  - CC-Switch
date: 2025-11-23
---

## 通用步骤

### CC-Switch介绍

<div align="center">

<h3>Claude Code / Codex / Gemini CLI 全方位辅助工具</h3>

[![Version](https://img.shields.io/badge/version-3.7.1-blue.svg)](https://github.com/farion1231/cc-switch/releases)
[![Trending](https://img.shields.io/badge/🔥_TypeScript_Trending-Daily%20%7C%20Weekly%20%7C%20Monthly-ff6b6b.svg)](https://github.com/trending/typescript)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)](https://github.com/farion1231/cc-switch/releases)
[![Built with Tauri](https://img.shields.io/badge/built%20with-Tauri%202-orange.svg)](https://tauri.app/)
[![Downloads](https://img.shields.io/endpoint?url=https://api.pinstudios.net/api/badges/downloads/farion1231/cc-switch/total)](https://github.com/farion1231/cc-switch/releases/latest)

<a href="https://trendshift.io/repositories/15372" target="_blank"><img src="https://trendshift.io/api/badge/repositories/15372" alt="farion1231%2Fcc-switch | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

[::mdi:clipboard-text-history::更新日志](https://github.com/farion1231/cc-switch/blob/main/CHANGELOG.md) | [::fa-solid:cloud-download-alt::下载地址](https://github.com/farion1231/cc-switch/releases/latest)

**从供应商切换器到 AI CLI 一体化管理平台**

**统一管理 Claude Code、Codex 与 Gemini CLI 的供应商配置、MCP 服务器、Skills 扩展和系统提示词。**
</div>

使用 CC-Switch，您可以：
- ✅ 一键切换 API 配置 - 在多个 API 提供商之间快速切换
- ✅ 可视化配置管理 - 通过图形界面轻松管理所有配置
- ✅ 内置 PackyAPI 模板 - 预设了 PackyAPI 的配置模板
- ✅ MCP 服务器管理 - 管理 Model Context Protocol 服务器
- ✅ 系统托盘快捷操作 - 通过托盘菜单快速切换

::: tip 温馨提示
CC-Switch 已经内置了 PackyAPI 的快捷配置模板，无需手动编辑配置文件！
:::

### 软件下载

::: tabs

@tab Windows
1. 点击下载链接→[传送门](https://github.com/farion1231/cc-switch/releases/latest)←，进入CC-Switch的Github Release页面

2. 鼠标滚动到最下方选择适合自己版本的安装包，windows系统推荐下载普通msi后缀的安装包进行安装

![](/assets/image/CC-Switch/001.webp)

3. 安装后运行CC-Switch主程序，界面如下。

![](/assets/image/CC-Switch/002.webp)

@tab MacOS
- MacOS安装推荐使用HomeBrew

- 开启终端后，分别运行以下命令：
```bash
# 添加 tap 源
brew tap farion1231/ccswitch

# 安装 CC-Switch
brew install --cask cc-switch
```

- 安装完成后，在“启动台”或“应用程序”文件夹中找到 CC-Switch 并启动。

![](/assets/image/CC-Switch/002.webp)

@tab Linux
> [!important]
> 以下命令中的文件名包含占位符版本号 x.x.x，请访问[GitHub Releases](https://github.com/farion1231/cc-switch/releases/latest) 页面查看最新版本，并替换为实际的版本号和完整文件名。

Debian/Ubuntu 系统：
```bash
# 下载 .deb 包
wget https://github.com/farion1231/cc-switch/releases/latest/download/cc-switch_x.x.x_amd64.deb

# 安装
sudo dpkg -i cc-switch_x.x.x_amd64.deb
```

:::

### 环境检查

::: warning
**请你最好进行此步的环境检查步骤！！！
如果你有经验，能确认你的Nodejs环境以及cc、codex、gemini的cli安装没问题，配置目录也都存在，可以忽略这一步，直接进入以下的CC Switch配置**

点击右侧传送门查看 [如何进行环境检查？](/docs/cli/1-env.html)
:::



## ::material-icon-theme:claude:: Claude Code配置

1. 打开你下载的CC Switch软件，你会看到如下图的初始界面

![](/assets/image/CC-Switch/003.webp)

2. 在分组条中，将分组选择至“Claude”

![](/assets/image/CC-Switch/004.webp)

3. 在供应商分组中，选择如图的“PakcyCode”

![](/assets/image/CC-Switch/005.webp)

4. 回顾 [创建API令牌](/docs/register/4-token.html)，在 PackyApi 中创建 **CC** 分组的令牌，点击复制按钮，复制ApiKey到剪切板

![](/assets/image/Cli/025.webp)

5. 下拉模态框，找到“API Key”配置项，填入你刚才复制的ApiKey，再点击右下角“添加”按钮

![](/assets/image/CC-Switch/006.webp)

6. 添加成功后，在主界面会看到我们配置的分组，在右侧点击“启用”按钮，显示“使用中”，则配置完成

![](/assets/image/CC-Switch/007.webp)

7. 点击左上角“设置”按钮，在通用页面下拉找到 `跳过 Claude Code初次安装确认` ，务必勾选

![](/assets/image/CC-Switch/017.webp)

8. 在终端运行 `claude`，看到对话界面并能正常回复即表示配置完成

![](/assets/image/Cli/016.webp)


## ::hugeicons:chat-gpt:: Codex配置

1. 打开你下载的CC Switch软件，你会看到如下图的初始界面

![](/assets/image/CC-Switch/003.webp)

2. 在分组条中，将分组选择至“Codex”

![](/assets/image/CC-Switch/008.webp)

3. 在供应商分组中，选择如图的“PakcyCode”

![](/assets/image/CC-Switch/009.webp)

4. 回顾 [创建API令牌](/docs/register/4-token.html)，在 PackyApi 中创建 **Codex** 分组的令牌，点击复制按钮，复制ApiKey到剪切板

![](/assets/image/Cli/008.webp)

5. 下拉模态框，找到“API Key”配置项，填入你刚才复制的ApiKey，再点击右下角“添加”按钮

::: important
如果你是Codex包月用户,你需要从 [包月Codex控制台](https://codex.packycode.com/api-management)获取你的**API Key**
另外下图中“**API 请求地址**”一项，需要将链接更换为`https://codex-api.packycode.com/v1`
:::

![](/assets/image/CC-Switch/010.webp)

6. 添加成功后，在主界面会看到我们配置的分组，在右侧点击“启用”按钮，显示“使用中”，则配置完成

![](/assets/image/CC-Switch/011.webp)

7. 在终端运行 `codex`，看到对话界面并能正常回复即表示配置完成

![](/assets/image/Cli/010.webp)

## ::vscode-icons:file-type-gemini:: Gemini配置

1. 打开你下载的CC Switch软件，你会看到如下图的初始界面

![](/assets/image/CC-Switch/003.webp)

2. 在分组条中，将分组选择至“Gemini”

![](/assets/image/CC-Switch/012.webp)

3. 在供应商分组中，选择如图的“PakcyCode”

![](/assets/image/CC-Switch/013.webp)

4. 回顾 [创建API令牌](/docs/register/4-token.html)，在 PackyApi 中创建 **Gemini** 分组的令牌，点击复制按钮，复制ApiKey到剪切板

![](/assets/image/Cli/026.webp)

5. 下拉模态框，找到“API Key”配置项，填入你刚才复制的ApiKey，再点击右下角“添加”按钮

![](/assets/image/CC-Switch/014.webp)

6. 添加成功后，在主界面会看到我们配置的分组，在右侧点击“启用”按钮，显示“使用中”，则配置完成

![](/assets/image/CC-Switch/015.webp)

7. 在终端运行 `gemini`，看到对话界面并能正常回复即表示配置完成

![](/assets/image/Cli/022.webp)

## CC Switch CLI 使用

::: tip
**推荐在服务器环境或MacOS系统下使用 CC Switch CLI**
:::

<div align="center">

# CC-Switch CLI

[![Version](https://img.shields.io/badge/version-4.7.2-blue.svg)](https://github.com/saladday/cc-switch-cli/releases)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)](https://github.com/saladday/cc-switch-cli/releases)
[![Built with Rust](https://img.shields.io/badge/built%20with-Rust-orange.svg)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

**Claude Code、Codex 与 Gemini CLI 的命令行管理工具**

统一管理 Claude Code、Codex 与 Gemini CLI 的供应商配置、MCP 服务器、Skills 扩展和系统提示词。

</div>

![](/assets/image/CC-Switch/018.webp)

---


## 下载与安装

::: tabs

@tab MacOS

```bash
# 下载 Universal Binary（推荐，支持 Apple Silicon + Intel）
curl -LO https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-darwin-universal.tar.gz

# 解压
tar -xzf cc-switch-cli-darwin-universal.tar.gz

# 添加执行权限
chmod +x cc-switch

# 移动到 PATH
sudo mv cc-switch /usr/local/bin/

# 如遇 "无法验证开发者" 提示
xattr -cr /usr/local/bin/cc-switch
```

@tab Linux (x64)

```bash
# 下载
curl -LO https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-linux-x64-musl.tar.gz

# 解压
tar -xzf cc-switch-cli-linux-x64-musl.tar.gz

# 添加执行权限
chmod +x cc-switch

# 移动到 PATH
sudo mv cc-switch /usr/local/bin/
```

@tab Linux (ARM64)

```bash
# 适用于树莓派或 ARM 服务器
curl -LO https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-linux-arm64-musl.tar.gz
tar -xzf cc-switch-cli-linux-arm64-musl.tar.gz
chmod +x cc-switch
sudo mv cc-switch /usr/local/bin/
```

@tab Windows

```bash
# 下载 zip 文件
# https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-windows-x64.zip

# 解压后将 cc-switch.exe 移动到 PATH 目录，例如：
move cc-switch.exe C:\Windows\System32\

# 或者直接运行
.\cc-switch.exe
```

:::

## 命令列表

::: tabs

@tab 常用命令

```bash
cc-switch provider list              # 列出供应商
cc-switch provider switch <id>       # 切换供应商
cc-switch mcp sync                   # 同步 MCP 服务器

# 使用全局 `--app` 参数来指定目标应用：
cc-switch --app claude provider list    # 管理 Claude 供应商
cc-switch --app codex mcp sync          # 同步 Codex MCP 服务器
cc-switch --app gemini prompts list     # 列出 Gemini 提示词

# 支持的应用：`claude`（默认）、`codex`、`gemini`
```

@tab 供应商管理

> 管理 Claude Code、Codex 和 Gemini 的 API 配置。
> 功能： 一键切换、多端点支持、API 密钥管理、速度测试、供应商复制。

```bash
cc-switch provider list              # 列出所有供应商
cc-switch provider current           # 显示当前供应商
cc-switch provider switch <id>       # 切换供应商
cc-switch provider add               # 添加新供应商
cc-switch provider edit <id>         # 编辑现有供应商
cc-switch provider duplicate <id>    # 复制供应商
cc-switch provider delete <id>       # 删除供应商
cc-switch provider speedtest <id>    # 测试 API 延迟
```

@tab MCP 服务器管理

> 跨 Claude/Codex/Gemini 管理模型上下文协议服务器。
> 功能： 统一管理、多应用支持、三种传输类型（stdio/http/sse）、自动同步、智能 TOML 解析器。

```bash
cc-switch mcp list                   # 列出所有 MCP 服务器
cc-switch mcp add                    # 添加新 MCP 服务器（交互式）
cc-switch mcp edit <id>              # 编辑 MCP 服务器
cc-switch mcp delete <id>            # 删除 MCP 服务器
cc-switch mcp enable <id> --app claude   # 为特定应用启用
cc-switch mcp disable <id> --app claude  # 为特定应用禁用
cc-switch mcp validate <command>     # 验证命令在 PATH 中
cc-switch mcp sync                   # 同步到实时文件
cc-switch mcp import --app claude    # 从实时配置导入
```

@tab Prompts 管理

> 管理 AI 编码助手的系统提示词预设。
> 跨应用支持： Claude (CLAUDE.md)、Codex (AGENTS.md)、Gemini (GEMINI.md)。

```bash
cc-switch prompts list               # 列出提示词预设
cc-switch prompts current            # 显示当前活动提示词
cc-switch prompts activate <id>      # 激活提示词
cc-switch prompts deactivate         # 停用当前激活的提示词
cc-switch prompts create             # 创建新提示词预设
cc-switch prompts edit <id>          # 编辑提示词预设
cc-switch prompts show <id>          # 显示完整内容
cc-switch prompts delete <id>        # 删除提示词
```

@tab Skills 管理

> 通过社区技能扩展 Claude Code/Codex/Gemini 的能力。
> 功能： SSOT 技能仓库、多应用启用/禁用、同步到应用目录、扫描/导入未管理技能、仓库发现。

```bash
cc-switch skills list                # 列出已安装技能
cc-switch skills search <query>      # 搜索可用技能
cc-switch skills install <name>      # 安装技能
cc-switch skills uninstall <name>    # 卸载技能
cc-switch skills enable <name>       # 为当前应用启用（配合 --app）
cc-switch skills disable <name>      # 为当前应用禁用（配合 --app）
cc-switch skills info <name>         # 显示技能信息
cc-switch skills sync                # 同步已启用技能到应用目录
cc-switch skills sync-method [m]     # 查看/设置同步方式（auto|symlink|copy）
cc-switch skills scan-unmanaged      # 扫描未管理技能
cc-switch skills import-from-apps    # 导入未管理技能到 SSOT
cc-switch skills repos list          # 查看仓库列表
cc-switch skills repos add <repo>    # 添加仓库（owner/name[@branch] 或 GitHub URL）
cc-switch skills repos remove <repo> # 移除仓库（owner/name 或 GitHub URL）
```

@tab 配置管理

> 管理配置文件的备份、导入和导出。
> 功能： 自定义备份命名、交互式备份选择、自动轮换（保留 10 个）、导入/导出。

```bash
cc-switch config show                # 显示配置
cc-switch config path                # 显示配置文件路径
cc-switch config validate            # 验证配置文件

# 通用配置片段（跨所有供应商共享设置）
cc-switch --app claude config common show
cc-switch --app claude config common set --json '{"env":{"CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC":1},"includeCoAuthoredBy":false}' --apply
cc-switch --app claude config common clear --apply

# 备份
cc-switch config backup              # 创建备份（自动命名）
cc-switch config backup --name my-backup  # 创建备份（自定义名称）

# 恢复
cc-switch config restore             # 交互式：从备份列表选择
cc-switch config restore --backup <id>    # 通过 ID 恢复特定备份
cc-switch config restore --file <path>    # 从外部文件恢复

# 导入/导出
cc-switch config export <path>       # 导出到外部文件
cc-switch config import <path>       # 从外部文件导入

cc-switch config reset               # 重置为默认配置
```

:::

## 配置PackyAPI

::: tip
这里以claude code的配置为例，codex与gemini配置同理
:::

1. 安装好CC Switch CLI后，在终端运行以下命令进入TUI界面

```bash
cc-switch
```

2. 下拉在左侧选择 `Providers` ，回车选中，并按下 `a` 键，进入供应商添加页面

![](/assets/image/CC-Switch/019.webp)

3. 在上方模板中选择 `PackyCode`

![](/assets/image/CC-Switch/020.webp)

4. 在 `Api Key` 处填写你的Apikey回车，并按下 `Ctrl+S` 进行保存

![](/assets/image/CC-Switch/021.webp)

5. 确保此时选中的是刚才配置的Provider，然后在左侧菜单中退出 CC Switch CLI

![](/assets/image/CC-Switch/022.webp)