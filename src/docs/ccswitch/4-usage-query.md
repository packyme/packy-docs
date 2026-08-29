---
title: 用量查询配置
icon: mdi:chart-line
order: 4
---

CC Switch 可以直接显示 PackyCode 的已用额度和剩余额度。用量查询需要使用 PackyApi 的**系统访问令牌和用户 ID**，不是配置供应商时使用的 API Key。

1. 在 PackyCode 供应商卡片右侧点击 **配置用量查询**。

![](/assets/image/CC-Switch/guide/018.jpg)

2. 开启 **启用用量查询**，预设模板选择 `NewAPI`。

![](/assets/image/CC-Switch/guide/019.jpg)

3. 请求地址填写 `https://www.packyapi.ai`。前往 PackyApi **个人设置 → 安全设置**生成系统访问令牌；用户 ID 可在个人设置页顶部查看。

![](/assets/image/CC-Switch/guide/020.jpg)

4. 将系统访问令牌和用户 ID 填入对应字段。

![](/assets/image/CC-Switch/guide/021.jpg)

5. 点击 **保存配置**。返回供应商列表后，即可在 PackyCode 卡片上查看用量并手动刷新。

![](/assets/image/CC-Switch/guide/022.jpg)
