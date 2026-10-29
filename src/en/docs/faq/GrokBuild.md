---
title: Grok Build FAQ
icon: simple-icons:x
order: 4
---

### Cannot connect when using `env_key`

`env_key` must specify the environment variable name (e.g. `PACKY_API_KEY`), not the actual token itself.

To specify the key directly in `config.toml`, use:

```toml
api_key = "xxx"
```

### Model does not exist or permission denied

Verify:
1. Your PackyAPI token group supports the specified model.
2. `models_base_url` is set to `https://cf.api.fan/v1`.
3. `model = "grok-4.6"` exactly matches the model ID.
4. No extra whitespace exists in the API Key.

### `/effort` reasoning tuning not taking effect

Ensure `supports_reasoning_effort = true` is included under `[model."grok-4.6"]`. Restart Grok Build after editing the configuration file.

### Failures when using non-Grok models (e.g. Kimi-K3)

When using non-Grok models in Grok Build, you **must disable workflows**:

```toml
[workflows]
enabled = false
```
