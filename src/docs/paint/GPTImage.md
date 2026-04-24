---
title: GPT-Image-2 绘图教程
icon: material-symbols:image-outline
order: 2
---

## 前置准备

`gpt-image-2` 模型属于 **Sora 分组**，使用前需要创建令牌分组为 `sora` 的令牌。

参照 [创建令牌分组](/docs/register/4-token.html#%E8%BF%9B%E5%85%A5%E4%BB%A4%E7%89%8C%E7%AE%A1%E7%90%86) 教程创建令牌，**分组选择 `sora`**。

## 调用方式

`gpt-image-2` 支持两种 API 调用方式：

### 方式一：Images API（推荐）

通过 OpenAI 标准的 `/v1/images/generations` 接口调用，最为直接。

**请求示例：**

```bash
curl --location 'https://www.packyapi.com/v1/images/generations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer 你的Sora分组令牌' \
--header 'Accept: */*' \
--header 'Host: www.packyapi.com' \
--header 'Connection: keep-alive' \
--data '{
    "model": "gpt-image-2",
    "prompt": "一只橘猫戴着橙色围巾抱着水獭，温暖插画风格",
    "size": "3840x2160",
    "quality": "high",
    "output_format": "png",
    "response_format": "b64_json",
    "n": 1
}'
```

#### 支持的尺寸与质量选项

- 常用尺寸（Popular sizes）
  - **1024 × 1024**：正方形
  - **1536 × 1024**：横向
  - **1024 × 1536**：纵向
  - **2048 × 2048**：2K 正方形
  - **2048 × 1152**：2K 横向
  - **3840 × 2160**：4K 横向
  - **2160 × 3840**：4K 纵向
  - **auto**：自动（默认）

- 尺寸限制（Size constraints）
  - 最大边长必须 **小于或等于 3840 像素**
  - 宽和高都必须是 **16 的倍数**
  - 长边与短边的比例 **不能超过 3:1**
  - 总像素数必须 **不少于 655,360**，且 **不超过 8,294,400**

- 质量选项（Quality options）
  - **low**：低质量
  - **medium**：中等质量
  - **high**：高质量
  - **auto**：自动（默认）

**返回示例：**

```json
{
  "created": 1776923999,
  "data": [
    {
      "url": "https://external-resources.packyapi.com/file_download/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }
  ]
}
```

返回的 `url` 即为生成的图片地址，直接访问即可下载。

**支持参数：**

| 参数 | 类型 | 说明 |
|------|------|------|
| `model` | string | 固定为 `gpt-image-2` |
| `prompt` | string | 图片描述提示词 |
| `n` | integer | 生成图片数量，默认 1 |
| `size` | string | 图片尺寸，如 `1024x1024`、`1536x1024`、`1024x1536` |

### 方式二：Chat Completions API

通过 `/v1/chat/completions` 接口调用，适用于仅支持 Chat Completions 格式的客户端。

**请求示例：**

```bash
curl 'https://www.packyapi.com/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer 你的sora分组令牌' \
  -d '{
    "model": "gpt-image-2",
    "messages": [
      {
        "role": "user",
        "content": "生成一张可爱的猫咪图片"
      }
    ]
  }'
```

**返回示例：**

```json
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "图像生成完成\n图像 1:\n![image](https://external-resources.packyapi.com/file_download/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)",
        "role": "assistant"
      }
    }
  ],
  "model": "gpt-5-3-image",
  "object": "chat.completion"
}
```

图片 URL 包含在 `message.content` 字段中，以 Markdown 图片格式返回。

::: warning 关于 Chat Completions 方式的错误提示
部分客户端使用 Chat Completions 方式调用时，可能会显示错误信息。遇到此情况**不必惊慌**，请查看详细的返回内容——图片 URL 通常已包含在响应体中，提取 `message.content` 中的链接即可获取生成的图片。
:::

## 在 Cherry Studio 中使用

1. 参照 [创建令牌分组](/docs/register/4-token.html#%E8%BF%9B%E5%85%A5%E4%BB%A4%E7%89%8C%E7%AE%A1%E7%90%86) 教程，创建 **`sora` 分组** 的令牌，并复制 API Key。

2. 打开 Cherry Studio，进入 `设置` -> `模型服务`，点击底部 `添加`，新增一个提供商。

3. 在弹出的窗口中填写提供商名称，`提供商类型` 选择 `New API`。

![](/assets/image/Paint/gpt-image-2/01.webp)

4. 打开刚创建的提供商，填写 API Key 和 API 地址。API 地址请填写 `https://www.packyapi.com`。

![](/assets/image/Paint/gpt-image-2/02.webp)

5. 点击提供商配置页中的 `管理`，搜索并添加 `gpt-image-2` 模型。

6. 如果模型添加后无法正常用于绘图，点击 `编辑模型`，将 `端点类型` 调整为 `图像生成（OpenAI）`，并确认 `模型类型` 已勾选 `视觉`。

![](/assets/image/Paint/gpt-image-2/03.webp)

7. 回到首页，点击顶部 `+` 按钮，新建一个 `绘画` 应用。

![](/assets/image/Paint/gpt-image-2/04.webp)

8. 在绘画页面中选择刚才配置好的提供商和 `gpt-image-2` 模型。文生图请选择 `绘图` 模式；如果要上传参考图做图生图或局部修改，请切换到 `编辑` 模式。

![](/assets/image/Paint/gpt-image-2/05.webp)

![](/assets/image/Paint/gpt-image-2/06.webp)

9. 输入提示词后即可开始生成。首次使用时，建议先将 `图片尺寸`、`质量`、`敏感度` 等选项保持为 `自动`，确认流程跑通后再按需微调。

::: tip 使用建议
- API 地址直接填写 `https://www.packyapi.com` 即可，Cherry Studio 会自动拼接兼容端点，无需手动补 `/v1`。
- 如果模型列表没有自动带出 `gpt-image-2`，可以先在 `管理` 中刷新模型，再检查 `端点类型` 是否为 `图像生成（OpenAI）`。
- 如果你是在普通对话页里直接调用 `gpt-image-2`，建议关闭 `流式输出`，避免返回内容解析异常；使用 `绘画` 应用时通常不需要额外处理。
:::
