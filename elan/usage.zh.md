## 使用方法

Elan 上游目前未原生支持自定义镜像源环境变量。可直接访问以下地址下载所需版本的 Elan 与 Lean 4 工具链发行包：

```{ztmpl}
{{endpoint}}/
```

常见子目录包括：

- `elan/`：Elan 版本管理工具发行包
- `leanprover/lean4/`：Lean 4 稳定版工具链
- `leanprover/lean4_nightly/`：Lean 4 Nightly 工具链

下载并解压 Lean 4 工具链后，可通过 `elan toolchain link` 将其注册到本地供 Elan 使用：

```bash
elan toolchain link <name> /path/to/lean-toolchain
```
