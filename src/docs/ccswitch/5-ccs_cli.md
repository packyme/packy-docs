---
title: CC Switch CLI使用
icon: tdesign:ai-terminal-filled
order: 5
---

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