[Astral GPU indexes](https://wheels.astral.sh) 是 Astral 为 PyTorch 生态提供的 GPU 相关扩展包（如 FlashAttention、DeepSpeed、vLLM 等）的预构建 wheel，覆盖多种 Python、CPU 架构、CUDA 与 PyTorch 版本组合，按 CUDA 版本划分通道。

根据 PyTorch 命名习惯，Astral GPU indexes 为支持的每个 CUDA 版本使用独立的索引 URL（例如 `/simple/cu128`），并为不同的 CUDA 与 PyTorch 版本组合发布 wheel（例如 `+cu.12.8.torch.2.11`）。

请选择与本机 CUDA 版本匹配的通道：

```{ztmpl global="true" input="target"}
```

在开始之前，请注意：

- 本索引**不包含** `torch`、`numpy` 等基础包，只提供扩展包；这些依赖仍需从 PyPI（或所配置的 PyPI 镜像）或 PyTorch 官方索引获取。
- wheel 依赖特定的 PyTorch 小版本（如 `+cu.12.8.torch.2.11` 要求 `torch==2.11.*`），请确保已安装或同时指定匹配的 `torch`。
- 各通道提供的包与版本不尽相同，请在 [Astral GPU indexes](https://wheels.astral.sh)（或镜像站对应页面）查询。部分包的安装名与展示名不同，如 `flash-attn-3`、`sageattn3`、`deep-gemm`、`deep-ep`、`torch-scatter`。
- 建议显式指定包含本地版本号的完整版本，例如 `flash-attn==2.8.3.post1+cu.12.8.torch.2.11`，以确保安装的是与 CUDA/PyTorch 匹配的构建。

### Astral uv

#### 在项目中使用（推荐） {#uv-project}

使用 `uv add` 添加依赖，uv 会将索引写入 `pyproject.toml`，并通过 `[tool.uv.sources]` 将该包固定到此索引：

```{ztmpl lang="bash"}
uv add flash-attn --index astral-{{target}}={{endpoint}}/{{target}}/
```

生成的配置大致如下。`uv add` **不会**自动添加 `explicit = true`，建议手动加上，使该索引仅用于在 `[tool.uv.sources]` 中显式指定的包：

```{ztmpl lang="toml"}
[project]
dependencies = ["flash-attn"]

[tool.uv.sources]
flash-attn = { index = "astral-{{target}}" }

[[tool.uv.index]]
name = "astral-{{target}}"
url = "{{endpoint}}/{{target}}/"
explicit = true
```

如需添加更多包（如 `deepspeed`、`vllm`），应参考以上示例，在 `[tool.uv.sources]` 中添加字段以指定 index。

`[[tool.uv.index]]` 的常用字段：

- `name`：索引名称，被 `[tool.uv.sources]` 引用时必填；
- `url`：索引地址；
- `explicit`：设为 `true` 时，该索引**仅**用于在 `[tool.uv.sources]` 中显式指定到它的包，其余包（包括 `torch` 等依赖）不会从这里查找；
- `default`：设为 `true` 时，该索引替代 PyPI 成为默认索引（优先级最低）。本索引不是完整的 PyPI 镜像，**请勿**设置此项。

如果同时需要从 PyTorch 官方索引安装 CUDA 版 `torch`，可以用同样的方式配置（PyTorch 索引的镜像使用方法见 [PyTorch 帮助](../pytorch/)），例如：

```{ztmpl lang="toml"}
[project]
dependencies = ["torch==2.11.*", "flash-attn"]

[tool.uv.sources]
torch = { index = "pytorch-{{target}}" }
flash-attn = { index = "astral-{{target}}" }

[[tool.uv.index]]
name = "pytorch-{{target}}"
url = "https://download.pytorch.org/whl/{{target}}"  # 或替换为镜像站的 PyTorch 索引地址
explicit = true

[[tool.uv.index]]
name = "astral-{{target}}"
url = "{{endpoint}}/{{target}}/"
explicit = true
```

`[tool.uv.sources]` 中的条目还支持 `marker`（如 `marker = "sys_platform == 'linux'"`）与 `extra` 等字段，可按平台或 extra 选择不同的 CUDA 通道，详见 [uv 的 PyTorch 集成文档](https://docs.astral.sh/uv/guides/integration/pytorch/)。

#### 临时使用 {#uv-temporary}

`uv pip`：

```{ztmpl lang="bash"}
uv pip install \
    flash-attn \
    --index astral-{{target}}={{endpoint}}/{{target}}/
```

命令行传入的 `--index` 是普通索引（无法设为 explicit），优先级高于 PyPI。

#### 设为默认 {#uv-default}

- Linux/macOS：在 `~/.config/uv/uv.toml`（或 `$XDG_CONFIG_HOME/uv/uv.toml`）或者 `/etc/uv/uv.toml`
- Windows：在 `%AppData%\uv\uv.toml` 或者 `%ProgramData%\uv\uv.toml`

填写下面的内容：

```{ztmpl lang="toml"}
[[index]]
name = "astral-{{target}}"
url = "{{endpoint}}/{{target}}/"
```

注意：

- `uv.toml` 中的索引写法为 `[[index]]`，而 `pyproject.toml` 中为 `[[tool.uv.index]]`。
- `[tool.uv.sources]` 只能写在 `pyproject.toml` 中，且被引用的索引必须定义在项目的 `pyproject.toml` 里。因此在用户级或系统级 `uv.toml` 中**不要**设置 `explicit = true`，否则没有任何包能从该索引安装。
- 这样配置后，uv 仍以 PyPI 为默认索引，本索引会优先查询。项目级配置中的索引优先于用户级、系统级配置，命令行参数优先于配置文件。详情参考[官方配置文件文档](https://docs.astral.sh/uv/concepts/configuration-files/)。

#### 索引优先级 {#uv-index-strategy}

uv 默认使用 `first-index` 策略：按定义顺序查找索引，一旦某个包在某个索引中存在，就**只**使用该索引中的版本，以防范依赖混淆攻击。对本索引而言：

- 本索引中不存在的包（如 `torch`、`numpy`）会继续从后续索引（如 PyPI）获取，不受影响；
- 本索引中存在的包（如 `vllm`、`deepspeed`）以非 explicit 方式配置时只会从本索引获取。若所需版本不在本索引中，解析会直接失败，而不会回退到 PyPI。

遇到这种情况，推荐在 `pyproject.toml` 中使用 `explicit = true` 配合 `[tool.uv.sources]`，只让需要的包使用本索引；也可以使用 `--index-strategy unsafe-best-match` 在所有索引中选择最佳版本，但这会带来依赖混淆风险。

### pip

#### 临时使用 {#pip-temporary}

```{ztmpl lang="bash"}
python -m pip install \
    flash-attn \
    --extra-index-url {{endpoint}}/{{target}}/
```

#### 设为默认 {#pip-default}

```{ztmpl lang="bash"}
pip config set global.extra-index-url {{endpoint}}/{{target}}/
```

注意：

- 必须使用 `--extra-index-url`（或 `extra-index-url` 配置项）而非 `--index-url`，因为本索引不包含 `torch` 等依赖，替换默认索引后这些依赖将无法安装。
- pip 对多个索引没有优先级，会在所有索引中选择“最佳”版本，因此同名包可能从 PyPI 安装。如需确保安装本索引中的构建，请指定包含本地版本号的完整版本，如 `flash-attn==2.8.3.post1+cu.12.8.torch.2.11`。
- 本索引仅提供 JSON 格式（PEP 691）的 Simple API，请使用较新版本的 pip。
