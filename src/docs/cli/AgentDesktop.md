---
title: Agent Desktop
icon: material-symbols:computer
date: 2026-11-12
---

[agent-desktop](https://github.com/vercel-labs/agent-desktop) 是 Vercel Labs 以 Apache-2.0 发布的本机程序。它读取桌面应用的无障碍树，把控件编成 ref，再按 ref 做点击、写入和核对。调用它的是你的编码助手或一段脚本。程序里面没有模型，也不连接 Packy。

它可以作为截图式 Computer Use 的另一条路。它替换的是看见界面和点中控件那一层。模型、决定下一步的循环、网页自动化、Packy 的中转接口，都不在这个程序里。

::: warning 核对范围
本文核对日期是 2026 年 11 月 12 日。npm 上的包是 `agent-desktop@1.2.0`，发布时间 2026-11-05。GitHub Release `v1.2.0` 的发布时间是 2026-11-05T02:43:54Z，标签提交是 `2b0a7334fc111730454b726e6800aa41cdafc093`。

本文在 Linux x86_64 上运行了这个发布包里的 `agent-desktop-linux-x64`，只执行了 `version`、`--help`、若干子命令的 `--help`，以及 `skills list`。没有执行 `snapshot`、`click`、`screenshot`、`status`，也没有操作任何窗口。

同一天的线上文档 [agent-browser.dev/desktop](https://agent-browser.dev/desktop) 已经按更新的 main 来写。main 在 2026-11-10 的提交 `54855b6225aec00da4ac65e2d0362fd41cd9fcb3` 上，仓库版本号仍写着 1.2.0，但比发布标签多了 `sandbox`。对 1.2.0 的二进制执行 `sandbox`，返回 `unrecognized subcommand 'sandbox'`，退出码 2。下面以发布包为准。和线上文档不一致的地方会单独写出。
:::

## 它是工具，循环在调用方

一次桌面操作里有五段，不要并成一件事。

1. 模型决定下一步。agent-desktop 不包含模型。
2. 循环负责观察、动作、再观察。这段在编码助手或你的脚本里。官方说明写明它不是 agent，也没有交互提示符。每条命令打一份 JSON，然后退出。
3. 桌面驱动把「看」和「点」做成具体调用。agent-desktop 在这里。
4. 操作系统提供无障碍接口。macOS 是 AX，Windows 是 UI Automation，Linux 是 AT-SPI。
5. 应用把自己的控件暴露给这个接口。没有这棵树的界面，驱动看不见。

Packy 不在这五段里。它只可能出现在第 1 段，也就是编码助手请求模型的时候。agent-desktop 不读取 Packy 令牌，也不把桌面内容发到 Packy。本文不验证任何令牌分组、模型名或端点能和它一起工作。助手本身怎么接 Packy，看 [Claude Code 配置](/docs/cli/2-claude.html)、[Codex 配置](/docs/cli/3-codex.html) 或 [OpenCode](/docs/advanced/OpenCode.html)。那些页面管的是模型，不是桌面。

npm 包里是 CLI 和六个平台的二进制。C 库在 GitHub Release 的另一组文件里，名字以 `agent-desktop-ffi-v1.2.0-` 开头，不在 npm 包内。它走同一套核心，给要在进程内调用的程序用。日常让助手操作桌面，用 CLI 即可。库的接入见[官方 C 库文档](https://agent-browser.dev/desktop/ffi)。

## 它替换的是看截图和点坐标

Anthropic 文档里的 Computer Use 是模型侧的一套工具。2026-11-12 核对的页面是 [Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool)。请求里放 `{"type":"computer_toolset_20260801"}` 之后，模型根据截图返回 `left_click`、`type`、`key` 等动作。点击坐标是截图像素里的 `[x, y]`。执行这些动作的是你自己的程序，跑在你提供的环境里。该页写明这个工具集当时不在 Claude Managed Agents 里提供。同一套文档把留在网页里的任务指到 browser use，而不是整台桌面。

agent-desktop 不实现 `computer_toolset_20260801`，也不按像素找控件。`click @快照:e序号` 走的是无障碍接口里的语义动作。`screenshot` 是另一条命令，用来出 PNG，不参与 ref 的定位。官方 FAQ 写明，不发布无障碍树的应用对它不可见。

所以它替代的是驱动层里「截一张图，再点一个坐标」这种做法。它不替代模型，不替代助手里的循环，也不能把现有的 Computer Use 请求改个地址就接到 Packy。

默认动作是无头的。语义调用不移动鼠标，不抢走焦点，也不合成按键。人可以继续使用这台电脑，但应用里的控件状态会被改掉。需要真实鼠标或键盘时加全局 `--headed`。没有语义路径时，命令直接失败，不会偷偷改成移动鼠标。官方说明要求不要在无头失败之后补上 `--headed` 再试一次。那样既会动到用户的光标，也可能把已经送达的动作做第二遍。

## 一轮操作实际发生什么

助手先拿一份小的观察，再对其中一个 ref 动作，然后重新读界面。`ok: true` 只表示命令返回了，不表示应用完成了你要的事。

观察有三种常用粒度，都来自[官方循环说明](https://agent-browser.dev/desktop/guides/observe-act-verify)。

- 已经知道角色和准确名字时，用 `find`，例如 `find --app APP --role button --name Save --exact --first`。
- 应用不大时，用 `snapshot --app APP -i --compact`。`-i` 只留可交互节点。
- 节点很多时，先 `snapshot --skeleton`，再用 `snapshot --root REF` 展开一块。菜单、附加对话框或警告已经打开时，用 `snapshot --surface`，不要再加 `--skeleton`。

ref 属于产生它的那次快照。1.2.0 的 `--help` 写明，输出形式类似 `@s8f3k2p9:e1`，裸的 `@e1` 会被拒绝。界面变了之后，旧 ref 会得到 `STALE_REF` 或 `AMBIGUOUS_TARGET`。处理办法是重新快照，用新 ref。多个窗口匹配时也是 `AMBIGUOUS_TARGET`，用 `--window-id` 指定一个。

动作命令会在真正执行前重新辨认这个控件。macOS 上，ref 带着控件自己的地址，相同的两个按钮可以各自保留 ref。Windows 和 Linux 上，ref 只有在捕获时整个窗口里唯一，而且现在仍然只有一个控件匹配时才能用。相同控件没有 ref 这条路。这条规则写在随二进制发布的技能里，不是本文实测。

点下去之后要看 `disposition`，不要只看 `ok`。

| `delivery` | `retry` | 表示什么 |
| --- | --- | --- |
| `not_delivered` | `safe` | 输入没有送到应用。重复命令不会做第二遍。 |
| `delivered_unverified` | `unsafe` | 调用已经发出，效果还没被读回来。 |
| `delivered_verified` | `unsafe` | 调用已经发出，并且读回了它声明的那个后置条件。再执行一次会做第二遍。 |
| `delivery_uncertain` | `unsafe` | 输入可能已经送到，没有证据判断哪一种。 |
| `unknown` | `unknown` | 命令没有判断出输入有没有送到。例如一次可能已经生效的 `TIMEOUT`。 |

只有 `retry` 为 `safe` 时才可以原样重试。其余情况先 `get`、`is` 或再做一次快照。点击之后界面可能还没刷新，官方建议用 `wait`，不要用固定睡眠。`check` 和 `uncheck` 是幂等的。`toggle` 再来一次会把状态翻回去。写文本时，优先 `set-value`。Windows 上无头的 `type` 会得到 `POLICY_DENIED`。Windows 文档的原因是 UI Automation 没有「在光标处插入文字」这条语义路径。

每次 ref 动作默认最多等 5000 毫秒，直到目标可操作。这是官方循环说明里的数字，不是本文计时。

JSON 外壳的 `version` 在 1.2.0 里是 `"2.6"`。本文运行 `version` 时看到的外壳就是这个值。失败时看 `error.code` 和 `error.disposition`，不要解析 `message` 的句子，官方写明句子会改。

## 三个系统不能套用同一条命令

发布包的 `package.json` 声明 Node.js 18 或更高，操作系统是 `darwin`、`win32`、`linux`，CPU 是 `arm64` 与 `x64`。包内 `lib/platform.js` 把这六种组合都标成 `released`。系统版本和权限比这六种组合更窄，下表来自各平台文档，不是本文在三套系统上跑出来的。

| 条件 | macOS | Windows | Linux |
| --- | --- | --- | --- |
| 系统 | 13 或更高，Intel 或 Apple 芯片 | Windows 10 1809 或更高，或 Windows Server 2019 或更高。必须是已登录用户的交互式桌面 | 文档要求 Ubuntu 24.04 或更高，x86_64 或 aarch64，glibc 不低于 2.35。其他发行版需要带有提交 `dc0dc33` 的 `at-spi2-core`。Ubuntu 22.04 的桥会在 `Action.GetActions` 上中止 |
| 会话 | 辅助功能权限属于启动它的那个应用，例如终端或 IDE。换一个终端就要重新授权 | 服务会话、安全桌面、锁屏和其他用户的会话不支持 | 必须在该用户的图形会话里运行。TTY、没有会话总线的 SSH、没有总线的容器看不到应用 |
| 权限 | `permissions --guide` 打开系统设置里的辅助功能，以及截图所需的屏幕录制。自动化权限只在命令报告缺失时需要 | 同一完整性级别没有授权框。以管理员运行的应用可以读，不能从较低完整性的终端写入，返回 `PERM_DENIED` | 没有授权框。`status` 检查无障碍总线。`supported_surfaces` 为空表示总线没有应答 |

下面这些差异会改变你怎么写命令。完整表在 [macOS](https://agent-browser.dev/desktop/platforms/macos)、[Windows](https://agent-browser.dev/desktop/platforms/windows)、[Linux](https://agent-browser.dev/desktop/platforms/linux)。

- `type` 在 macOS 上可以无头。在 Windows 上无头会被拒绝，改用 `set-value`。在 Linux 上，普通控件可以无头，终端文本节点不行。
- `right-click` 在 macOS 上可以无头。Windows 需要 `--headed`。Linux 要求控件自己提供上下文菜单动作。
- `hover`、`drag`、`mouse-click` 以及大多数 `double-click` 需要 `--headed`。macOS 上控件提供 `AXOpen` 时，`double-click` 可以无头。Wayland 上这些指针动作返回 `ACTION_NOT_SUPPORTED`。
- `scroll` 在 macOS 和 Windows 上可以无头。Linux 上需要 `--headed`，并且只有 X11。
- `press` 是真实按键。macOS 的主键是 `cmd`。Windows 上 `cmd` 和 `meta` 是 Windows 键，复制要用 `ctrl+c`。退出类组合键在未加 `--force` 时会被拒绝。退出应用用 `close-app`。带 `--app` 时，三个平台的焦点规则不一样，以平台页为准。
- `key-down` 和 `key-up` 在 1.2.0 的帮助文本里写明会失败，并指向 `press`。`mouse-down` 和 `mouse-up` 同样会失败，并指向 `mouse-click` 或 `drag`。README 的原因是还没有守护进程能松开按住的键或按钮。

PowerShell 会把裸的 `@token` 当成拆分运算符，参数在进入程序前就消失。ref 要写成 `'@s8f3k2p9:e1'`。`cmd.exe` 和 bash 不用这样加引号。

应用名用 `list-apps` 打出来的名字。Windows 的 `launch` 不接受「Google Chrome」这种显示名。它接受绝对路径，或 System32、Windows 目录下的裸文件名，例如 `notepad`。Linux 的 `--app` 匹配 `list-apps` 的名字、桌面项名字或桌面项 id，不匹配窗口标题。

## 浏览器、脚本和截图各自留下什么

网页用 [agent-browser](https://agent-browser.dev)。agent-desktop 的 FAQ 写明它不自动化网页。Chromium 或 Electron 里，窗口、菜单和文件对话框仍由 agent-desktop 处理。应用要由你新启动。`launch --cdp` 只打开一个本机 DevTools 端口，并确认它有响应。agent-desktop 自己不讲 CDP。网页内容交给 `agent-browser connect 端口`。

1.2.0 的文档写，端口开着时，同一用户的其他本地进程可以控制这个应用里的网页。main 上的文档改成端口没有认证，同一台机器的其他账户也能连。只在需要时加 `--cdp`。已经在运行的应用不能补这个端口。程序会拒绝给现有进程加调试端口。

手写脚本适合步骤固定的事。agent-desktop 每次只做一条命令，下一步由助手看 JSON 再决定。它不保存一条「打开设置、点三次、填表」的业务流程。你要把流程写死时，直接调用无障碍接口或应用自己的接口，通常比把模型放进循环更清楚。

截图式 Computer Use 能看见不暴露无障碍树的画面，例如一块画布或一张图里的字。代价是坐标落在截图的像素空间里，驱动还要自己把坐标换算回屏幕。agent-desktop 反过来。树里有名字、角色和可执行动作，相同控件在 Windows 和 Linux 上会拒绝猜测。树里没有的东西，它看不见，`screenshot` 也不会拿来补这个缺口。

## 什么时候不要用

- 应用不暴露无障碍树。自绘游戏和画布通常属于这一类。屏幕上只有像素、没有交给本机无障碍接口的控件，它都看不见。
- 任务只在浏览器页面里。用 agent-browser，不要先把整个桌面点进浏览器。
- 你要判断颜色、间距或截图里才看得清的小字。无障碍树不提供这个判断。
- Windows 或 Linux 上，目标是一排相同按钮里的某一个，而且它们的角色、名称和描述都一样。ref 会拒绝。macOS 上这条限制不同，相同控件可以各自有 ref。
- 当前会话是 Wayland，而动作是拖拽、悬停或按坐标点击。平台页写这些指针输入会拒绝。
- 你不想让启动它的终端或 IDE 拥有辅助功能权限。授权是一次性的，之后每条命令不再弹窗。
- 屏幕、剪贴板或窗口标题里有密码、聊天和密钥。快照、剪贴板读取、通知、截图和 `--debug --screenshot 文件.html` 都会带上这些内容。不要把输出贴到公开日志。
- 你需要一台和当前桌面分开的虚拟机。1.2.0 发布包没有这个命令。见后文「发布包没有虚拟桌面」。

## 安装时机器上要有什么

npm、pnpm、Yarn 或 Bun 都可以装同一个包。下面用 npm。需要 Node.js 18 或更高。`-g` 把命令放到 `PATH`。不加 `-g` 时，用 `npx agent-desktop`。

::: tabs

@tab npm

```bash
npm install -g agent-desktop
agent-desktop version
```

@tab Homebrew

```bash
brew install agent-desktop
agent-desktop version
```

安装文档写，Homebrew 只覆盖 macOS 和 Linux，配方在 `Homebrew/homebrew-core`，升级用 `brew upgrade agent-desktop`。新版本可能晚于 npm 和 GitHub Release。本文没有执行 `brew`。

@tab 发布包

从 [v1.2.0 Release](https://github.com/vercel-labs/agent-desktop/releases/tag/v1.2.0) 下载对应压缩包。本文核对到六个 CLI 文件，名字都是 `agent-desktop-v1.2.0-` 加上 target，再加 `.tar.gz`。例如 `agent-desktop-v1.2.0-x86_64-unknown-linux-gnu.tar.gz`。旁边有 `checksums.txt`。可执行文件和它的助手程序要放在同一目录。Windows 的 CLI 包没有单独的助手程序。`checksums.txt` 只能发现下载损坏，不能证明文件来自该仓库。来源核对用 `gh attestation verify ARCHIVE --repo vercel-labs/agent-desktop`，把 `ARCHIVE` 换成下载的文件。

:::

没有官方 Scoop 包。仓库也不再维护自己的 Homebrew tap 或 Scoop bucket。

安装文档写，npm 12 默认不运行安装脚本。脚本没跑时，每次调用都经过 Node 启动器。发布包 `bin/agent-desktop` 里的提示写明这会多大约 125 毫秒，并给出重新链接的命令。

```bash
npm install -g agent-desktop --allow-scripts=agent-desktop
```

装在项目里时，文档写的是先在项目内执行 `npm install-scripts approve agent-desktop`，再 `npm rebuild agent-desktop`。`approve` 会改项目的 `package.json`，不能用于全局安装。

本文直接运行发布包里的 Linux x86_64 二进制，`version` 打印的是：

```json
{"version":"2.6","ok":true,"command":"version","data":{"os":"linux","target":"x86_64","version":"1.2.0"}}
```

`os` 和 `target` 随机器变化。`data.version` 才是包版本。

装完之后看权限，不要先点任何应用。

```bash
agent-desktop status
agent-desktop skills get platform
```

`status` 报告平台、权限和 `supported_surfaces`。本文没有运行它。macOS 上若辅助功能是 `denied`，执行 `agent-desktop permissions --guide`。1.2.0 的帮助文本写明 `--guide` 打开系统设置里的引导，`--request` 才会弹出权限请求。Linux 上 `supported_surfaces` 为空时，先确认命令跑在图形会话里，并且安装了 `at-spi2-core`。Windows 文档写，`permissions --guide` 返回 `PLATFORM_NOT_SUPPORTED`，因为没有那张授权页。

二进制没有签名。安装文档写，浏览器直接下载时 SmartScreen 可能警告，杀毒软件可能隔离，干净的 Windows 11 上 Smart App Control 会拦截，npm 安装不触发 SmartScreen。本文没有在 Windows 上验证这三项。

从源码构建需要仓库钉死的 Rust 1.89.0，而且每个平台的适配层只能在该平台上编译。使用者不必走这条路。步骤在[安装文档](https://agent-browser.dev/desktop/installation)。

## 编码助手怎么接到它

官方写了两条接入。本文没有把它们配进 Claude Code、Codex、Cursor 或 OpenCode，也没有验证某个客户端的配置文件路径。

第一条是助手自己执行 CLI。README 建议在第一次使用前运行：

```bash
agent-desktop skills get desktop
agent-desktop skills get platform
```

技能编译在二进制里，所以和这个版本一致。本文在 1.2.0 的 Linux 二进制上执行 `skills list`，列出了 `agent-desktop`、三个平台技能、`agent-desktop-ffi` 和 `jev-desktop`。`skills get platform` 会按当前系统挑平台技能。

也可以把技能装进助手：

```bash
npx skills add https://github.com/vercel-labs/agent-desktop --skill agent-desktop
```

或者把 README 里的这段放进 `AGENTS.md`：

```markdown
Use `agent-desktop` to see and operate desktop apps. Before the first use, run
`agent-desktop skills get desktop` and `agent-desktop skills get platform`, and follow them.
```

本文没有执行 `npx skills add`。

第二条是 MCP。1.2.0 的 README 和 `mcp --help` 都写明，`agent-desktop mcp` 用 stdio 把每条命令暴露成工具。全局旗标加在 `mcp` 上，对之后每次调用生效。

```json
{
  "mcpServers": {
    "agent-desktop": {
      "command": "agent-desktop",
      "args": ["mcp"]
    }
  }
}
```

工具名是 `desktop_` 加命令名，连字符变成下划线，例如 `desktop_snapshot`、`desktop_click`。参数同样把连字符换成下划线。返回值和 CLI 同一份 JSON。`screenshot` 不写路径时，返回的是图像块，不是一段 base64 文本。

1.2.0 的 MCP 说明还有几条限制。工具参数不会经过 shell。工具自己不能再传 `--headed` 或 `--session`，这两个只能写在启动 `mcp` 的命令上。服务器最多同时处理 8 个调用，拒绝超过 4 MiB 的消息。它能做的事和 CLI 一样多，包括 `launch` 启动 `PATH` 上的程序。MCP 文档要求把它当成当前登录用户的 shell。助手侧的动作确认要开着。从屏幕读到的文字对模型来说是不可信输入。

线上文档已经补了一句，这些全局旗标不作用于 `sandbox exec`。1.2.0 没有 `sandbox`，也没有这条例外。

`skills list` 里还有一份 `jev-desktop`，它不是第三条接入。npm 压缩包里没有 `scripts/jev`。随 1.2.0 二进制发布的技能正文要求克隆仓库，并设置 `TYPESAFE_API_KEY`。`run.mjs` 会把屏幕描述发给你配置的模型服务，默认是 TypeSafe 的 `api.typesafe.ai`。CLI 本身不需要远程模型。二进制能打印这份技能，不表示 `npm install` 带上了这个循环。

## 官方记录的一轮计算器操作

下面这一轮抄自官方 [Quick start](https://agent-browser.dev/desktop/quick-start)。那一页写明输出是在 Linux 上对 GNOME Calculator 记录的，本文没有重跑，也没有核对那些 ref 今天是否仍然对应同一个按钮。把页面上的 `@s2txcl95uvubmn:...` 抄到自己的机器上会失败。你要的是顺序，ref 用你自己命令打出来的。

这一轮的风险较低，因为它只按计算器上的 7，再按 C 恢复。不要对装着未保存工作的应用模仿它。

1. 在图形会话里打开 GNOME Calculator。macOS 或 Windows 上先 `list-apps`，用它打出来的名字，官方举例是 `Calculator`。PowerShell 里给 ref 加单引号。
2. 先看浅层结构。

```bash
agent-desktop snapshot --app gnome-calculator --skeleton -i --compact
```

官方那次记录的 `snapshot_id` 是 `s2txcl95uvubmn`，浅层只有两个 ref。他们把 `e1` 当成计算器主体。

3. 展开这一块，找到数字键和显示屏。

```bash
agent-desktop snapshot --root @你的快照:e主体 -i --compact
```

那次记录里，显示屏是 `e6`，按钮 7 是 `e11`，清除键 C 是 `e8`。你的编号可以不同。

4. 点击你自己快照里的按钮 7。官方记录的 `click` 走了 `semantic_api`，`disposition` 是 `delivered_unverified`，`retry` 是 `unsafe`。无障碍调用已经返回，但还没有证明屏幕上出现了 7。官方的循环说明写，这时再点一次，可能变成 77。

5. 等显示屏的值变成 7。用你自己的显示屏 ref：

```bash
agent-desktop wait --element @你的快照:e显示屏 --predicate value --value 7 --timeout 5000
```

他们那次记录用的是 `@s2txcl95uvubmn:e6`。结果里 `found` 为 true，`elapsed_ms` 是 286。这个时间是他们的记录，不是一项性能承诺。

6. 点击 C，把计算器恢复成开始时的样子。确认恢复时再读一次显示屏，不要假设点击 C 已经生效。

只想知道应用能不能被看见时，停在第 2 步。那一步不改应用状态。

## 权限给了之后不会再问你

agent-desktop 没有在每次点击前弹出确认。1.2.0 的 `--help` 里，`--headed` 是一个普通全局旗标，没有额外的确认步骤。

macOS 的确认发生在授权时。辅助功能权限给的是启动进程的那个应用。Terminal、iTerm2、VS Code 或助手的宿主程序各算各的。文档写，tmux 或 SSH 下面没有可识别的启动应用，要把启动 tmux 的终端自己加进设置。屏幕录制只在 `screenshot` 和 `session start --screenshots` 时需要。授权之后，后续语义点击不会再问你。

Windows 没有这张授权页。隔离靠完整性级别。完整性更低的终端读得了以管理员运行的应用，写不进去。文档要求把终端提升到和目标相同的级别，并且给提升后的运行单独设 `AGENT_DESKTOP_HOME`，因为两种完整性不能共用一个状态目录。

Linux 也没有授权页。能连上当前图形会话的 AT-SPI，就能读这棵树。

`--headed` 允许抢焦点、移动真实光标、合成键盘和指针事件。官方写明物理输入没有操作系统的确认，结果通常是 `delivered_unverified`。技能文本要求助手先得到你的明确允许再加这个旗标。这是写给模型的规则，二进制不会替你执行它。助手如果会在调用工具前询问，把那个询问留着。MCP 文档明确说要打开客户端自己的确认。

状态目录默认是 `~/.agent-desktop`。`--help` 写明 `AGENT_DESKTOP_HOME` 把整个根目录换到你给的绝对路径，不会再追加一层 `.agent-desktop`。会话、ref 映射和追踪写在这里。Linux 文档写，状态目录如果对同组可写，或对所有用户可读，写入命令会以 `INTERNAL` 失败。处理是 `chmod 700`。

密码控件有单独的读写约定，写在仓库的 `CONCEPTS.md`。平台把它标成密码之后，观察结果不带它的值。动作可以写入，但步骤和错误详情里不回显写入的内容。这不能代替你自己避开密码和密钥。`type`、`set-value`、`clipboard-set` 可以用 `--stdin`，避免文字出现在进程参数里。1.2.0 的帮助文本写明，`type --stdin` 最多读 10000 字节，`set-value --stdin` 和 `clipboard-set --stdin` 最多读 128 KiB。README 另外写明，批量 JSON 里的文本仍会出现在进程参数里，保密步骤要拆成单独命令。

追踪可以遮住一部分结构化字段。FAQ 写明这不会让截图变得可以公开。`--debug --screenshot` 生成的 HTML 带截图和无障碍数据，帮助文本把它标成敏感的本地文件。

### 发布包没有虚拟桌面

线上的 [Sandboxing](https://agent-browser.dev/desktop/sandboxes) 描述了 `agent-desktop sandbox`。它管理 Apple 芯片 Mac 上的 macOS 虚拟机。文档写明它分开的是桌面，不是网络，也不是宿主机。同一台主机上的虚拟机共用一个虚拟网络，客户机能够访问主机的网络服务。从镜像安装第一台虚拟机被标成实验性的。克隆一台已经设置好的虚拟机，文档说做过端到端测试。Linux 和 Windows 没有这个本地提供者。

这些段落在 main 和线上文档里。它们不在标签 `v1.2.0` 的树里，1.2.0 二进制也不认识 `sandbox`。按线上文档对发布包执行 `agent-desktop sandbox install`，得到的是参数错误，不是一台虚拟机。

main 上还有一篇 Docker 指南，示例里下载的仍是 `v1.0.2` 的 Linux 包。那不是当前发布版本。本文不把那篇指南当成 1.2.0 的安装步骤。

因此，1.2.0 的默认运行位置就是当前登录用户的真实桌面。要隔离，需要你自己准备单独的用户、虚拟机或容器。程序不会替 1.2.0 的安装做这件事。

Anthropic 的 Computer Use 页面建议用权限很小的虚拟机或容器，避免把登录信息交给模型，并让人确认会带来实际后果的动作。那是那套截图工具的使用建议。agent-desktop 不会因为你读了那段建议就自动跑在虚拟机里。

## 报错时先看 code

命令失败时外壳是 `ok: false`。官方错误页写，解析错误的退出码是 2，其他失败的退出码是 1。本文看到的未知子命令 `sandbox` 就是退出码 2。裸 ref 被命令拒绝时，本文没有另测退出码。

| 你看到的 | 它表示什么 | 下一步 |
| --- | --- | --- |
| `PERM_DENIED` | 缺权限，或 Windows 上目标进程完整性更高 | macOS 看 `permissions`。Windows 把终端升到同一级别。Linux 确认自己在图形会话里 |
| `supported_surfaces` 为空 | Linux 上无障碍总线没有应答 | 安装 `at-spi2-core`，在桌面会话中运行。不要用 `busctl` 代替 `status` 来判断，文档写冷会话里总线要等第一次使用才有所有者 |
| `unrecognized subcommand 'sandbox'` | 装的是还没有该命令的 1.2.0 | 不要按线上 Sandboxing 页操作这台安装 |
| PowerShell 里 ref 变成 `INVALID_ARGS` | 裸 `@` 被吃掉 | 给 ref 加单引号 |
| `STALE_REF` 或 `SNAPSHOT_NOT_FOUND` | ref 或快照已经不能用 | 重新 `snapshot`，用新 ref |
| `AMBIGUOUS_TARGET` | 多个窗口、多个应用实例，或 Windows、Linux 上的相同控件 | 用 `--window-id` 收窄。相同控件不要换个 ref 再试 |
| `POLICY_DENIED` | 无头模式挡住了键鼠或焦点 | 输入没有送达，但不要为了重试自动加 `--headed`。写文字改用 `set-value` |
| `ACTION_NOT_SUPPORTED` | 这个控件或这个系统没有该动作 | 换命令或换控件。Wayland 上的指针动作属于这一类 |
| `TIMEOUT` | 等待到期，或目标一直不可操作 | 看 `disposition.retry`。不是 `safe` 就不要再点 |
| `APP_NOT_FOUND` | 没有匹配的进程 | 用 `list-apps` 的名字。没启动就 `launch` |
| 快照节点很少 | 树还没建好，或应用没有树 | 提高 `--timeout-ms`。Windows 文档写 Chromium 138 及以后第一次读取会不完整，冷启动要等 10 到 25 秒。Linux 上启动 Chromium 浏览器时要带 `--force-renderer-accessibility`。Electron 文档写不需要这个旗标 |
| 每次调用 stderr 提示 Node launcher | 安装脚本没跑 | 用上一节的 `--allow-scripts=agent-desktop` 重装 |
| macOS 上 `right-click` 之后 `APP_UNRESPONSIVE`，而且 `retry` 不是 `safe` | `AXShowMenu` 已经进入菜单跟踪 | 不要重试。改读 `snapshot --surface menu` |

`ACTION_FAILED` 没有统一的重试方法。看 `details` 和 `disposition`。macOS 文档写，AX 返回成功也不能证明效果，应用可以承认一个什么都没做的动作。判断标准仍然是再读一次界面。

## 本文核对过的材料

发布包和命令行为：

- npm `agent-desktop@1.2.0`，包内版本与 `version` 输出都是 1.2.0。`engines.node` 是 `>=18`。
- 标签 [v1.2.0](https://github.com/vercel-labs/agent-desktop/releases/tag/v1.2.0)，提交 `2b0a7334fc111730454b726e6800aa41cdafc093`。
- 该标签的 README、`docs/install.md`、`docs/faq.md`，以及当时的平台页、循环说明、MCP 说明、headed 说明。
- 1.2.0 Linux x86_64 二进制的 `version`、`--help`、`sandbox`、`skills list`，以及 `type`、`set-value`、`clipboard-set`、`permissions`、`mcp` 的 `--help`。

和发布包不是同一份的材料：

- main `54855b6225aec00da4ac65e2d0362fd41cd9fcb3`（2026-11-10）。`Cargo.toml` 版本仍是 1.2.0。相对标签新增了 `sandbox` 源码和文档。
- 2026-11-12 打开的 [介绍页](https://agent-browser.dev/desktop) 和 [Sandboxing](https://agent-browser.dev/desktop/sandboxes)。介绍页写 61 个命令名。发布包 README 的表格是 60 个命令名，不含 `mcp` 和 `help`。二进制 `--help` 在这 60 个之外还有 `mcp` 和 `help`，没有 `sandbox`。
- [Computer use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool)，用来说明截图和坐标那一层，不是 agent-desktop 的文档。

官方入口：

- [仓库](https://github.com/vercel-labs/agent-desktop)
- [安装](https://agent-browser.dev/desktop/installation)
- [Quick start](https://agent-browser.dev/desktop/quick-start)
- [观察、动作、核对](https://agent-browser.dev/desktop/guides/observe-act-verify)
- [Headed mode](https://agent-browser.dev/desktop/guides/headed-mode)
- [MCP](https://agent-browser.dev/desktop/guides/mcp)
- [错误与恢复](https://agent-browser.dev/desktop/errors-and-recovery)
- [Chromium 与 Electron](https://agent-browser.dev/desktop/guides/chromium-and-electron)
- [npm](https://www.npmjs.com/package/agent-desktop)

官方循环说明只说更大的快照会花更多时间和 token。它没有给出和截图式 Computer Use 对比的数字，本文也没有测量速度、成功率或价格。
