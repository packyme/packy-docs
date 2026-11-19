---
title: SSH MCP
icon: mdi:ssh
date: 2026-11-19
---

[ssh-mcp](https://github.com/BingZi-233/ssh-mcp) 是以 MIT 发布的 SSH / SFTP 命令行工具，也可以作为 MCP stdio 服务接入 Claude Code、Codex 等客户端。npm 包名是 [`@bingzi-233/ssh-mcp`](https://www.npmjs.com/package/@bingzi-233/ssh-mcp)。它读取一份你自己维护的服务器配置，用现有 SSH 凭据连过去执行命令、传文件、做端口转发。

它不替代服务器权限系统，也不连接 Packy。Packy 只可能出现在编码助手请求模型的那一层。助手本身怎么接 Packy，看 [Claude Code 配置](/docs/cli/2-claude.html) 或 [Codex 配置](/docs/cli/3-codex.html)。那些页面管的是模型，不是 SSH。

::: warning 核对范围
本文核对日期是 2026 年 11 月 19 日。npm 上的包是 `@bingzi-233/ssh-mcp@1.5.2`，发布时间 2026-10-14T02:46:12.436Z，`engines.node` 为 `>=18`，许可证 MIT。GitHub 默认分支 `master` 当时的提交是 `2f05864807aea1e1e82f16b77d353fe0cba7da64`。仓库 `package.json` 与 npm 发布包都是 **1.5.2**。

插件清单仍写着 1.5.1：`plugins/ssh-mcp/.claude-plugin/plugin.json` 和 `plugins/ssh-mcp/.codex-plugin/plugin.json` 的 `version` 都是 `1.5.1`。下面以 npm / `package.json` 为准，不把插件清单里的 1.5.1 当成当前包版本。

本文在 Linux x86_64、Node.js 22.23.4 上解包了 npm 发布包，执行了 `--help`、`run-command --help`、`close-session --help`。没有对任何远程主机发起 SSH / SFTP，也没有把 MCP 配进 Claude Code 或 Codex 实际跑一轮工具调用。
:::

## 它做什么，不做什么

一次远程操作里有几段，不要并成一件事。

1. 模型决定下一步。ssh-mcp 不包含模型。
2. 编码助手或你的脚本负责调用 CLI 或 MCP 工具。
3. ssh-mcp 按 `servers.json` 里的条目建立 SSH / SFTP。
4. 目标服务器按自己的账号、sudo、防火墙和审计策略执行命令。

ssh-mcp 只覆盖第 3 段。连接用的是你写进配置的私钥、密码，或本机 `SSH_AUTH_SOCK` 里的 ssh-agent。命令仍在目标机器上跑。内置拦截只是额外保护，不是权限系统。

## 安装

需要 Node.js 18 或更高。若还要用 Claude Code，按 [环境确认（Node.js 与 npm）](/docs/cli/1-env.html) 准备更高版本。

```bash
npm install -g @bingzi-233/ssh-mcp
ssh-mcp --help
```

`ssh-mcp --help` 打印的版本行是 `v1.5.2`。本文解包发布包后看到的就是这一行，后面跟着 31 个子命令，以及全局选项 `--mcp`。

也可以从源码安装：

```bash
git clone https://github.com/BingZi-233/ssh-mcp.git
cd ssh-mcp
npm ci
npm run build
npm link
```

## 配置 `servers.json`

默认读取**当前工作目录**的 `servers.json`。也可以用环境变量 `SSH_MCP_CONFIG` 指定路径，支持 `~` 展开。`src/config.ts` 写明每次调用都会从磁盘重读，改完配置不必重启 CLI 或 MCP 进程。

仓库自带 `servers.example.json`。复制一份再改，不要提交真实凭据。仓库 `.gitignore` 已经排除了 `servers.json`。

```bash
cp servers.example.json servers.json
```

配置不在当前目录时：

```bash
SSH_MCP_CONFIG=~/.config/ssh-mcp/servers.json ssh-mcp list-servers
```

下面是占位示例，字段来自 `servers.example.json`、README 和 `src/config.ts`。**不要填真实密码、私钥或令牌。**

```json
{
  "security": {
    "blocked_patterns": ["shutdown\\s+-h", "reboot"]
  },
  "servers": [
    {
      "name": "prod-web",
      "description": "生产环境 Web 服务器",
      "host": "192.168.1.10",
      "port": 22,
      "username": "deploy",
      "privateKeyPath": "~/.ssh/id_ed25519",
      "passphrase": "<private-key-passphrase>"
    },
    {
      "name": "staging",
      "host": "staging.example.com",
      "username": "deploy",
      "password": "<password>"
    },
    {
      "name": "build",
      "description": "用本机 ssh-agent 登录，不必在此写凭据",
      "host": "build.internal",
      "username": "ci"
    }
  ]
}
```

必填字段是 `name`、`host`、`username`。`port` 默认 22。`name` 必须唯一，模型用它区分服务器。

认证优先级写在 `src/ssh.ts` 的 `buildConnectConfig` 里：

1. 配置了 `privateKeyPath` → 读私钥；有 `passphrase` 就带上。
2. 否则若有 `password` → 密码登录。
3. 否则若存在环境变量 `SSH_AUTH_SOCK` → 走本机 ssh-agent。

`list_servers` / `list-servers` 只返回 `name`、描述、地址和用户名，不回传密码或私钥。

::: tip 相关阅读
MCP 客户端启动前，工作目录里必须能读到这份配置，或在客户端环境里设置 `SSH_MCP_CONFIG`。工具列表会按配置动态读取服务器。
:::

## 先用 CLI 确认配置可读

接入 MCP 之前，先在同一份配置上跑通列出服务器。这里不连远程也能暴露「找不到配置」这类问题：

```bash
ssh-mcp list-servers
ssh-mcp list-servers --json
```

连上之后常用：

```bash
ssh-mcp run-command -s prod-web -c "hostname && uptime"
ssh-mcp batch --servers prod-web,staging -c "df -h /"
ssh-mcp health -s prod-web
```

每个子命令都有独立帮助：

```bash
ssh-mcp <子命令> --help
```

`run-command` 的超时默认 60000 毫秒，可用 `--timeout` 改。stdout 走标准输出，stderr 走标准错误，退出码透传。

## 接入 MCP

以 stdio 启动（README 字面）：

```bash
npx -y @bingzi-233/ssh-mcp --mcp
```

进程会在 stderr 打一行 `ssh-mcp MCP 服务已启动，配置文件：…`。MCP 服务名在仓库插件清单 `plugins/ssh-mcp/.mcp.json` 里是 `ssh`，启动命令是 `npx -y @bingzi-233/ssh-mcp --mcp`。

::: tabs

@tab Claude Code

仓库 README 给出的注册命令：

```bash
claude mcp add ssh -- npx -y @bingzi-233/ssh-mcp --mcp
```

也可以用 Claude 插件市场（README 字面）：

```bash
/plugin marketplace add BingZi-233/ssh-mcp
/plugin install ssh-mcp@bingzi-plugins
```

市场清单在仓库 `.claude-plugin/marketplace.json`，市场名是 `bingzi-plugins`，插件源目录是 `./plugins/ssh-mcp`。

插件自带的 MCP 清单 `plugins/ssh-mcp/.mcp.json` 字面如下。需要把配置文件路径告诉进程时，把 `env` 填上，不要把密钥写进这段 JSON：

```json
{
  "mcpServers": {
    "ssh": {
      "command": "npx",
      "args": ["-y", "@bingzi-233/ssh-mcp", "--mcp"],
      "env": {
        "SSH_MCP_CONFIG": "/home/you/.config/ssh-mcp/servers.json"
      }
    }
  }
}
```

本文没有执行 `claude mcp add`，也没有核对该 JSON 必须写进 Claude Code 的哪一个文件。助手侧的模型怎么接 Packy，见 [Claude Code 配置](/docs/cli/2-claude.html)。

@tab Codex

仓库 README 给出的插件命令：

```bash
codex plugin marketplace add BingZi-233/ssh-mcp
codex plugin add ssh-mcp@bingzi-plugins
```

Codex 市场清单在 `.agents/plugins/marketplace.json`。插件目录是 `plugins/ssh-mcp`，其中的 `.codex-plugin/plugin.json`、`.mcp.json` 和 `skills/` 与 Claude 插件共用同一套 npm MCP 服务。Codex 技能正文写明：Codex 会从插件的 `.mcp.json` 自动启动 MCP stdio 服务。

`.mcp.json` 里的服务名同样是 `ssh`，启动命令同样是 `npx -y @bingzi-233/ssh-mcp --mcp`。客户端启动前必须能读到 `servers.json`，或在客户端环境里设置 `SSH_MCP_CONFIG`。

装好后可用 Codex 的 `/mcp` 查看当前 MCP 工具。该命令的含义见 [Codex 常见问题](/docs/faq/Codex.html)。

本文没有在 Codex 里实际安装这套插件，也没有在 Packy 文档或 ssh-mcp 仓库里找到一份已核对的 Codex `config.toml` MCP 片段，因此不另写一套 TOML。助手侧的模型怎么接 Packy，见 [Codex 配置](/docs/cli/3-codex.html)。

:::

::: important 工作目录就是配置目录
MCP 进程的当前目录决定默认的 `./servers.json`。在项目 A 里启动客户端，读的是项目 A 下的文件；换目录就换配置。固定路径请设 `SSH_MCP_CONFIG`。
:::

## MCP 工具名和 CLI 子命令不是同一套

MCP 工具名用下划线，CLI 子命令用连字符，有些名字还对不上。下面以 1.5.2 的 `src/index.ts` 与 `ssh-mcp --help` 为准。

| 能力 | CLI 子命令 | MCP 工具名 |
| --- | --- | --- |
| 列出服务器 | `list-servers` | `list_servers` |
| 执行命令 | `run-command` | `run_command` |
| 批量执行 | `batch` | `batch_run` |
| 长连接 | `open-session` / `close-session` / `list-sessions` | `open_session` / `close_session` / `list_sessions` |
| 文件传输 | `upload` / `download` | `upload_file` / `download_file` |
| 传输进度 / 取消 | `transfer-status` / `cancel-transfer` | `transfer_status` / `cancel_transfer` |
| 端口转发 | `forward` / `list-forwards` / `close-forward` | `start_forward` / `list_forwards` / `close_forward` |
| SFTP 浏览 / 操作 | `ls` / `stat` / `rm` / `mkdir` | `list_directory` / `stat_file` / `remove_file` / `make_directory` |
| 健康 / 证书 / 环境 | `health` / `cert-info` / `env` | `health_check` / `cert_info` / `remote_env` |
| 服务器间直传 / 对比 | `copy-between` / `diff-servers` | `copy_between` / `diff_servers` |
| 脚本 / 快照 | `exec-script` / `snapshot` | `exec_script` / `snapshot` |
| tail | `tail-f` / `stop-tail` / `list-tails` | `start_tail` / `stop_tail` / `get_tail` |
| watch | `watch` / `stop-watch` / `list-watches` | `start_watch` / `stop_watch` / `get_watch` |
| 远程 HTTP | `curl` | `http_request` |

几个容易写错的参数：

- `run_command`：`server`、`command`，可选 `timeout_ms`、`session`、`force`。
- `upload_file` / `download_file`：`local_path`、`remote_path`（不是 CLI 的 `-l` / `-r`），可选 `overwrite`。MCP 说明里 `local_path` 按绝对路径描述。
- `batch_run`：`servers` 是字符串数组；CLI 的 `batch --servers` 是逗号分隔。
- `start_forward`：`type` 只能是 `"local"` 或 `"remote"`，再加上 `local_port`、`remote_host`、`remote_port`；`local_host` 默认 `127.0.0.1`。CLI 用的是 `-L` / `-R` 那种 `port:host:port` 写法。
- `close_session` 的参数是 `session`。CLI 对应 `--session` / `-s`，**不是** `-i`。发布包 `close-session --help` 的示例是 `ssh-mcp close-session -s s1`。
- MCP 没有单独的 `list_tails` / `list_watches`；不传 `id` 时用 `get_tail`、`get_watch` 列出全部。

## 常用能力（使用时要注意的点）

### 长连接只复用 TCP 和认证

```bash
ssh-mcp open-session -s prod-web
# 输出类似 s1
ssh-mcp run-command -s prod-web --session s1 -c "hostname"
ssh-mcp list-sessions
ssh-mcp close-session -s s1
```

`src/ssh.ts` 写明：长连接省去重复握手和认证，但每条命令仍在独立 channel 里 `exec`。**不会保留 `cd` 或环境变量。** 需要同一目录时自己串起来，例如 `cd /var/www && git pull`。MCP 的 `run_command` 描述写了同一条限制。

### 传输是后台任务，默认续传

```bash
ssh-mcp upload -s prod-web -l ./release.tar.gz -r /tmp/
ssh-mcp transfer-status
ssh-mcp transfer-status -i t1
ssh-mcp download -s prod-web -r /var/log/app.log -l ./logs/
ssh-mcp cancel-transfer -i t1
```

`src/transfer.ts` 的行为：

- 调用立即返回任务 id（如 `t1`），用 `transfer-status` / `transfer_status` 轮询。不要把「命令返回了」当成「文件已经传完」。
- 目标已有部分内容时，默认从目标当前大小继续；`--overwrite` 或 MCP 的 `overwrite: true` 从头覆盖。
- 远端（上传）或本地（下载）路径若是已存在的目录，会自动追加源文件名。
- 任务表只活在当前进程内存里。续传看的是磁盘上已有字节，进程重启后再对同一对路径发起，仍可续上。
- 目标已有字节超过源文件时会报错，要求用 overwrite 重传。

MCP 工具描述还写了适用大文件（40GB+）。本文没有实测大文件或续传。

### 端口转发

```bash
# 本机 8080 → SSH 服务器 → 内网 192.168.1.5:80
ssh-mcp forward -s prod-web -L 8080:192.168.1.5:80

# SSH 服务器 9000 → 回传到本机 127.0.0.1:3000
ssh-mcp forward -s prod-web -R 9000:127.0.0.1:3000

ssh-mcp list-forwards
ssh-mcp close-forward -i f1
```

CLI 的 `-L` 把本机绑定在 `127.0.0.1`；`-R` 在远端监听 `0.0.0.0`。这些默认值来自 `src/index.ts` 的 `cmdForward`，不是另测出来的。CHANGELOG 1.5.2 修过远程转发（`-R`）回连目标端口的问题。

### 健康检查、证书、环境、远程 HTTP

```bash
ssh-mcp health -s prod-web
ssh-mcp cert-info -s prod-web --host example.com
ssh-mcp env -s prod-web
ssh-mcp env -s prod-web --process nginx
ssh-mcp curl -s prod-web http://localhost:8080/health
```

`health_check` 收集主机名、操作系统、运行时长、负载、内存、磁盘、CPU 核心数。`cert_info` 在 SSH 目标上跑 openssl，去查你传入的 `host`（可选 `port`，默认 443）。`http_request` / `curl` 是从远程网络环境发 HTTP，不是从你的笔记本直连。

### 服务器间直传、配置对比、快照、脚本

```bash
ssh-mcp copy-between --src web1 --dst web2 \
  --src-path /opt/app/config.yml --dst-path /opt/app/config.yml

ssh-mcp diff-servers --server-a web1 --server-b web2 \
  --path /etc/nginx/nginx.conf

ssh-mcp snapshot -s prod-web --dir /var/log --output ./logs.tar.gz
ssh-mcp snapshot -s prod-web --dir /opt/app --output ./backup.tar.gz --exclude "*.log,node_modules"

ssh-mcp exec-script -s prod-web --script ./deploy.sh
```

`copy_between` 的 MCP 参数是 `source_server`、`dest_server`、`source_path`、`dest_path`。快照的 MCP 参数是 `remote_dir`、`local_file`，以及可选的 `excludes` 数组。`exec_script` 会把本机脚本上传到远程（默认 `/tmp/ssh-mcp-script.sh`）、执行、再删掉临时文件，超时默认 120000 毫秒。

### tail 和 watch

CLI 的 `tail-f` / `watch` 会占住当前终端，Ctrl+C 停止。MCP 则立刻返回 id，再用 `get_tail` / `get_watch` 查看、`stop_tail` / `stop_watch` 停止。`start_tail` 默认每 2000 毫秒用 SFTP 轮询一次文件增长。

## 安全策略

`run-command` / `run_command`（以及 `batch` / `batch_run`）默认走 `src/config.ts` 的 `validateCommand`。命中则拒绝执行。内置规则对应：

- `rm -rf /`、`rm -rf /*` 这类根目录递归强制删除
- `dd` 覆盖块设备（`of=/dev/sd*`、`hd`、`nvme` 等）
- `mkfs.*` 在块设备上创建文件系统
- 重定向覆盖块设备
- fork bomb（源码匹配 `:(){` 这种形态）

可以在 `security.blocked_patterns` 里追加正则。README 的例子是 `"shutdown\\s+-h"`、`"reboot"`。源码注释写明 JSON 里要按字符串双重转义。用户给的正则无效时会跳过，不报错。

`--force`（MCP 里 `force: true`）会跳过内置和自定义检查。只应在确认目标和命令之后使用。

::: warning 这是额外保护，不是授权
安全策略拦不住所有危险命令。仍应使用最小权限账号、SSH key 和服务器侧审计。不要把生产 root 密码写进 `servers.json`。助手如果会在调用工具前询问，把那个询问留着。
:::

## 排障

**找不到服务器配置**

确认当前目录有 `servers.json`，或检查：

```bash
echo "$SSH_MCP_CONFIG"
ssh-mcp --help
```

`--help` 会打印它当时解析到的配置路径。缺少顶层 `servers` 数组、JSON 不合法、条目缺 `name` / `host` / `username`、`name` 重复，都会在读取时失败。

**认证失败**

核对 `username`、私钥路径和私钥口令；私钥支持 `~` 展开。也可以先用系统自带的 `ssh -v` 验证同一套凭据。认证顺序仍然是私钥 → 密码 → `SSH_AUTH_SOCK`。

**传输没有结束**

传输是后台任务，用 `transfer-status` 看状态。若目标文件大小已经超过源文件，加 `--overwrite` 重头开始。

**MCP 客户端看不到工具**

确认启动参数包含 `--mcp`，配置文件路径对 MCP 进程可读，并从客户端日志看 stdio 进程有没有起来。工具列表随 `servers.json` 动态读取；配置为空或读失败时，`list_servers` 会返回错误文本而不是一组服务器。

**CLI 和助手各说各的工具名**

先看上一节对照表。例如助手侧是 `run_command`，终端里是 `run-command`。

## 本文核对过的材料

发布包与源码：

- npm [`@bingzi-233/ssh-mcp@1.5.2`](https://www.npmjs.com/package/@bingzi-233/ssh-mcp)，包内 `package.json` 版本 1.5.2，`engines.node` 为 `>=18`。
- GitHub [`BingZi-233/ssh-mcp`](https://github.com/BingZi-233/ssh-mcp) 默认分支 `master`，提交 `2f05864807aea1e1e82f16b77d353fe0cba7da64`（2026-10-14）。
- 该提交的 `README.md`、`package.json`、`servers.example.json`、`.gitignore`、`CHANGELOG.md`、`src/index.ts`、`src/config.ts`、`src/ssh.ts`、`src/transfer.ts`。
- 插件清单：`plugins/ssh-mcp/.mcp.json`、`plugins/ssh-mcp/.claude-plugin/plugin.json`、`plugins/ssh-mcp/.codex-plugin/plugin.json`、`.claude-plugin/marketplace.json`、`.agents/plugins/marketplace.json`。
- 发布包解压后的 `ssh-mcp --help`、`run-command --help`、`close-session --help`。

没有当成当前包版本的材料：

- 插件 `plugin.json` 的 `version: "1.5.1"`。功能描述仍可参考，版本号以 npm 为准。
- README 里 `close-session -i s1` 的写法。发布包帮助与源码使用 `--session` / `-s`。

官方入口：

- [仓库](https://github.com/BingZi-233/ssh-mcp)
- [npm](https://www.npmjs.com/package/@bingzi-233/ssh-mcp)

本文没有测量速度、成功率或价格，也没有验证任何 Packy 令牌分组、模型名或端点能和 ssh-mcp 一起工作。
