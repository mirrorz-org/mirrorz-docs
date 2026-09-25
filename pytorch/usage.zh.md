[PyTorch](https://pytorch.org) 官方为不同的计算平台（CPU、CUDA、ROCm、Intel XPU）提供独立的 wheel 索引（原始地址为 `https://download.pytorch.org/whl/<平台>`），用于安装 `torch`、`torchvision`、`torchaudio` 等包的对应构建。

请选择与本机计算平台匹配的索引：

```{ztmpl global="true" input="target"}
```

注意：

- PyPI 上的 `torch` 在 Linux 下默认为 CUDA 构建，在 Windows 与 macOS 下为 CPU 构建；如需其他平台的构建，请使用本索引。
- 各索引支持的 PyTorch 版本不尽相同，较旧的 CUDA 版本通常只提供较旧的 PyTorch 版本，请参考 [PyTorch 官方安装说明](https://pytorch.org/get-started/locally/)。
- 本索引主要包含 PyTorch 相关包及其部分依赖，并非完整的 PyPI 镜像；其余包应从 PyPI（或所配置的 [PyPI 镜像](../pypi/)）获取。

### pip

#### 临时使用 {#pip-temporary}

```{ztmpl lang="bash"}
python -m pip install \
    torch torchvision torchaudio \
    --index-url {{endpoint}}/whl/{{target}}
```

使用 `--index-url` 时，所有依赖都会从本索引获取；若出现依赖缺失，可改用 `--extra-index-url`，但 pip 会在所有索引中选择“最佳”版本，可能会从 PyPI 安装到非预期平台的构建。

#### 设为默认 {#pip-default}

```{ztmpl lang="bash"}
pip config set global.extra-index-url {{endpoint}}/whl/{{target}}
```

### Astral uv

#### 在项目中使用（推荐） {#uv-project}

在 `pyproject.toml` 中添加如下内容，将 `torch` 等包固定到本索引：

```{ztmpl lang="toml"}
[project]
dependencies = ["torch", "torchvision"]

[tool.uv.sources]
torch = { index = "pytorch-{{target}}" }
torchvision = { index = "pytorch-{{target}}" }

[[tool.uv.index]]
name = "pytorch-{{target}}"
url = "{{endpoint}}/whl/{{target}}"
explicit = true
```

`explicit = true` 表示该索引**仅**用于在 `[tool.uv.sources]` 中显式指定到它的包，其余依赖（如 `numpy`）仍从 PyPI（或所配置的 PyPI 镜像）获取。

也可以使用 `uv add` 自动写入上述配置（不会自动添加 `explicit = true`，建议手动加上）：

```{ztmpl lang="bash"}
uv add torch torchvision --index pytorch-{{target}}={{endpoint}}/whl/{{target}}
```

`[tool.uv.sources]` 中的条目还支持 `marker`（如 `marker = "sys_platform == 'linux'"`）与 `extra` 等字段，可按平台或 extra 选择不同的计算平台，详见 [uv 的 PyTorch 集成文档](https://docs.astral.sh/uv/guides/integration/pytorch/)。

#### 临时使用 {#uv-temporary}

```{ztmpl lang="bash"}
uv pip install \
    torch torchvision torchaudio \
    --index pytorch-{{target}}={{endpoint}}/whl/{{target}}
```

命令行传入的 `--index` 优先级高于 PyPI。由于 uv 默认的 `first-index` 策略，本索引中存在的包（包括部分依赖）只会从本索引获取。

#### 设为默认 {#uv-default}

- Linux/macOS：在 `~/.config/uv/uv.toml`（或 `$XDG_CONFIG_HOME/uv/uv.toml`）或者 `/etc/uv/uv.toml`
- Windows：在 `%AppData%\uv\uv.toml` 或者 `%ProgramData%\uv\uv.toml`

填写下面的内容：

```{ztmpl lang="toml"}
[[index]]
name = "pytorch-{{target}}"
url = "{{endpoint}}/whl/{{target}}"
```

注意：`[tool.uv.sources]` 只能写在 `pyproject.toml` 中，因此在 `uv.toml` 中**不要**设置 `explicit = true`，否则没有任何包能从该索引安装。详情参考[官方配置文件文档](https://docs.astral.sh/uv/concepts/configuration-files/)。

### GPU 扩展包

FlashAttention、DeepSpeed、vLLM 等 GPU 扩展包的预构建 wheel 可参考 [Astral GPU indexes 帮助](../astral-wheels/)。
