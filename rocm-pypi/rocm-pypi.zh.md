本镜像收录 AMD ROCm（TheRock 项目）为 Radeon / Instinct GPU 预编译的 Python wheel 包（torch、torchvision、jax 等 ROCm 构建版本及其依赖），按 GPU 架构划分通道，数据来自 AMD 官方 `repo.amd.com/rocm/whl` 稳定版索引。

### pip

#### 临时使用

```{ztmpl lang="bash" input="target"}
pip install --index-url {{endpoint}}/{{target}}/ torch
```

#### 设为默认

```{ztmpl lang="bash" input="target"}
pip config set global.index-url {{endpoint}}/{{target}}/
```

注意：

- 通道必须与自己的 GPU 架构匹配，可在 [AMD 官方文档](https://rocm.docs.amd.com/) 查询显卡对应的架构代号。
- 本索引只包含 ROCm 相关包及其依赖，并非完整的 PyPI 镜像；如需安装其他包，请换回 PyPI（镜像）源。

### Astral uv

```{ztmpl lang="bash" input="target"}
uv pip install --index-url {{endpoint}}/{{target}}/ torch
```
