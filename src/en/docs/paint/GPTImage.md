---
title: GPT-Image-2 Tutorial
icon: material-symbols:image-outline
order: 2
---

## Prerequisites

The `gpt-image-2` model belongs to the **Sora Group**. Before calling this model, create an API token assigned to the `sora` group.

Refer to [Create API Token](/en/docs/register/4-token.html) and select the **sora** group.

## Calling Methods

OpenAI specifies image capabilities across Responses API, Images API, and Chat Completions API. For Packy's `gpt-image-2`, please prioritize the **Images API**.

| API | OpenAI Purpose | Packy `gpt-image-2` Recommendation | Support Status |
|-----|----------------|-----------------------------------|----------------|
| Responses API | Multimodal input / output tools | Not supported as an image generation entry point. | ✗ Unsupported |
| Images API | Generate and edit images | Recommended for text-to-image and image editing. | ✓ Supported (Recommended) |
| Chat Completions API | Analyze image inputs with text outputs | Not supported for image generation; `size`, `quality`, etc., will not take effect. | ✗ Unsupported |

### Method 1: Images API (Recommended)

Images API provides two dedicated endpoints:

- Text-to-Image: `POST https://cf.api.fan/v1/images/generations`
- Image Editing / Image-to-Image: `POST https://cf.api.fan/v1/images/edits`

::: tip Recommendation
Use `/v1/images/generations` for text-to-image, and `/v1/images/edits` for image editing and reference-image generation.
:::

#### Text-to-Image: `/v1/images/generations`

##### cURL Example

```bash
curl --location 'https://cf.api.fan/v1/images/generations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer your-sora-token' \
--header 'Accept: */*' \
--header 'Host: cf.api.fan' \
--header 'Connection: keep-alive' \
--data '{
    "model": "gpt-image-2",
    "prompt": "An orange cat wearing an orange scarf holding an otter, warm illustration style",
    "size": "3840x2160",
    "quality": "high",
    "output_format": "png",
    "response_format": "url",
    "n": 1
}'
```

##### Text-to-Image Parameters

| Parameter | Type | Support | Description |
|---|---|---|---|
| `model` | string | Supported | Fixed as `gpt-image-2`. |
| `prompt` | string | Supported | Detailed description of subjects, style, lighting, and composition. |
| `n` | integer | `1` only | Returns 1 image per request. Multi-image batches are not supported. |
| `size` | string | Supported | Supports `auto`, `1024x1024`, `1536x1024`, `1024x1536`, `1536x864`, `3840x2160`. |
| `quality` | string | Supported | `low`, `medium`, `high`, `auto`. Drafts can use `low`; production renders use `high`. |
| `response_format` | string | Supported | `url` (recommended) or `b64_json`. |
| `output_format` | string | Partial | Recommended `png` or `jpeg`. `webp` not recommended. |
| `output_compression` | integer | Supported | `0` to `100` (for `jpeg` only). |
| `background` | string | Partial | `opaque` or default. `transparent` unsupported. |
| `moderation` | string | Supported | `auto`, `low`. Content safety parameter; does not alter art style. |
| `user` | string | Supported | Optional end-user identifier string. |
| ~~`stream`~~ | boolean | Unsupported | Do not enable. |
| ~~`partial_images`~~ | integer | Unsupported | Intermediate streaming unsupported. |
| ~~`style`~~ | string | Not Recommended | Legacy parameter; not required for `gpt-image-2`. |

#### Image Editing / Image-to-Image: `/v1/images/edits`

`/v1/images/edits` uses `multipart/form-data`. `image` is binary image data, and `prompt` describes modifications.

##### cURL Example

```bash
curl --location 'https://cf.api.fan/v1/images/edits' \
--header 'Authorization: Bearer your-sora-token' \
--header 'Accept: */*' \
--form 'model="gpt-image-2"' \
--form 'prompt="Keep the subject, add a red wax seal in the top right corner with text DEMO"' \
--form 'image=@"/path/to/your-image.jpg"' \
--form 'size="1024x1024"' \
--form 'quality="high"' \
--form 'output_format="png"' \
--form 'response_format="url"'
```

##### Image Editing Parameters

| Parameter | Type | Support | Description |
|---|---|---|---|
| `model` | string | Supported | Fixed as `gpt-image-2`. |
| `prompt` | string | Supported | Clear instructions of what to retain, alter, and produce. |
| `image` | file | Supported | Required binary file of the image to edit. One image per request. |
| `mask` | file | Supported | Optional PNG mask for localized edits (transparent areas signify edit target). |
| `n` | integer | `1` only | Returns 1 image per request. |
| `size` | string | Supported | Same as text-to-image. Supports `auto` and valid resolutions. |
| `quality` | string | Supported | `low`, `medium`, `high`, `auto`. |
| `response_format` | string | Supported | `url` or `b64_json`. |
| `output_format` | string | Partial | Recommended `png` or `jpeg`. `webp` not recommended. |
| `output_compression` | integer | Supported | `0` to `100` (for `jpeg` only). |
| `background` | string | Partial | `opaque` or default. `transparent` unsupported. |
| `moderation` | string | Supported | `auto`, `low`. |
| `input_fidelity` | string | Supported | Pass `high` to maximize retention of source details. |
| `user` | string | Supported | Optional identifier string. |
| ~~`stream`~~ | boolean | Unsupported | Do not enable. |
| ~~`partial_images`~~ | integer | Unsupported | Intermediate streaming unsupported. |

#### General Specifications

##### Dimensions & Quality

- **Popular Sizes:**
  - `1024 × 1024`: Square
  - `1536 × 1024`: Landscape
  - `1024 × 1536`: Portrait
  - `2048 × 2048`: 2K Square
  - `2048 × 1152`: 2K Landscape
  - `3840 × 2160`: 4K Landscape
  - `2160 × 3840`: 4K Portrait
  - `auto`: Automatic (default)

- **Size Constraints:**
  - Max dimension $\le 3840$ pixels.
  - Width and height must both be multiples of 16.
  - Aspect ratio must not exceed 3:1.
  - Total pixel count must be between 655,360 and 8,294,400.

- **Quality Options:**
  - `low`: Fast draft
  - `medium`: Standard
  - `high`: High-definition render
  - `auto`: Default

::: tip Parameter Selection Guide
- **Simplest text-to-image**: Pass `model`, `prompt`, and `n: 1`.
- **Higher clarity**: Add `quality: "high"`.
- **Custom resolution**: Add `size`, e.g. `1024x1024` or `1536x1024`.
- **Image URL**: Use default `response_format: "url"`.
- **Programmatic storage**: Use `response_format: "b64_json"`.
- Do not set `n` greater than 1; loop client-side for multiple generations.
:::

##### Response Formats

Default URL response:
```json
{
  "created": 1776923999,
  "data": [
    {
      "url": "https://external-resources.packyapi.ai/file_download/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "revised_prompt": "..."
    }
  ]
}
```

Base64 JSON response (`"response_format": "b64_json"`):
```json
{
  "created": 1776923999,
  "data": [
    {
      "b64_json": "iVBORw0KGgoAAAANSUhEUgAA...",
      "revised_prompt": "..."
    }
  ]
}
```

### Method 2: Responses API (Unsupported)

::: warning Unsupported
Packy's `gpt-image-2` does not support generation via `/v1/responses`. Do not invoke `gpt-image-2` via `image_generation` tools in Responses.
:::

### Method 3: Chat Completions API (Unsupported)

::: warning Unsupported
Packy's `gpt-image-2` does not support `/v1/chat/completions`. When using Cherry Studio, ensure you switch to the dedicated "Paint" application with endpoint type `Image Generation (OpenAI)`.
:::

::: tip For Developers
If your client only supports Chat Completions and requires image generation capabilities, prioritize updating to support OpenAI Images API. Do not use `/v1/chat/completions` as a substitute for `/v1/images/generations`.
:::

## Using in Cherry Studio

1. Refer to [Create API Token](/en/docs/register/4-token.html) to create an API token under the **sora** group.
2. Download and install [Cherry Studio](https://www.cherry-ai.com/).
3. Open Cherry Studio, click the lower-left settings icon, navigate to `Model Services`, and click `Add`.
4. Set Provider Name to `packyapi-gpt-image-2`, Provider Type to `New API`, and click OK.

![](/assets/image/Paint/gpt-image-2/01.webp)

5. Paste your `sora` API key into `API Key`, and set `API Address` to `https://cf.api.fan`.

![](/assets/image/Paint/gpt-image-2/02.webp)

6. Click `Fetch Model List` to add the `gpt-image-2` model.
7. Click the edit icon next to `gpt-image-2`, set Endpoint Type to **Image Generation (OpenAI)**, and click Save.

![](/assets/image/Paint/gpt-image-2/03.webp)

8. Return to Home, click the `+` button in the top bar, and select the **Paint** app.

![](/assets/image/Paint/gpt-image-2/04.webp)

9. Select the provider and model `gpt-image-2`.

![](/assets/image/Paint/gpt-image-2/05.webp)

10. For text-to-image, select **Paint** mode at the top. For editing / image-to-image, select **Edit** mode, upload an input image, and submit your prompt.

![](/assets/image/Paint/gpt-image-2/06.webp)

::: tip Usage Tips
- **API Address**: Simply enter `https://cf.api.fan`; Cherry Studio will automatically append compatible endpoints without needing `/v1`.
- If `gpt-image-2` does not appear in the model list, refresh models under Manage. If drawing fails, verify the Endpoint Type is set to **Image Generation (OpenAI)**.
- Use **Paint** mode for text-to-image, and **Edit** mode for image-to-image editing or inpainting.
:::

### Troubleshooting Client Errors

- **`Failed to fetch`**: The connection timed out or was terminated by local proxy software. Check your proxy rules.

![](/assets/image/Paint/gpt-image-2/07.webp)

- **`Unexpected token '<', "<html>...`**: A Cloudflare verification page was returned instead of JSON. Retry the request.

![](/assets/image/Paint/gpt-image-2/08.webp)

## Long-Connection & Proxy Settings

Image generation tasks (especially 4K resolution or image edits) can take 60–120 seconds. If your local proxy software enforces a 60-second connection timeout, it may abort the request and display `Failed to fetch`.

![](/assets/image/Paint/gpt-image-2/09.webp)

To prevent timeouts, configure your proxy client to **Direct Connect (Bypass Proxy)** for the domain `packyapi.ai`.

![](/assets/image/Paint/gpt-image-2/10.webp)

Once configured, high-resolution and high-quality image generation requests can complete cleanly without premature termination.

![](/assets/image/Paint/gpt-image-2/11.webp)
