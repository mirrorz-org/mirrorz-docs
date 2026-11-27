## 使用方法

使用前请先安装 `debian-ports-archive-keyring` 密钥环包：

```{ztmpl lang="bash"}
{{sudo}}apt install debian-ports-archive-keyring
```

根据系统配置格式选择以下任一方式替换软件源（`unstable` 与 `unreleased` 两个套件均需启用）：

### 传统格式（`/etc/apt/sources.list`）

```{ztmpl lang="properties" input="nf" path="/etc/apt/sources.list"}
deb {{endpoint}} unstable main{{nf}}
deb {{endpoint}} unreleased main{{nf}}
```

### DEB822 格式（`/etc/apt/sources.list.d/debian.sources`）

```{ztmpl lang="yaml" input="nf" path="/etc/apt/sources.list.d/debian.sources"}
Types: deb
URIs: {{endpoint}}
Suites: unstable unreleased
Components: main{{nf}}
Signed-By: /usr/share/keyrings/debian-ports-archive-keyring.gpg
```

注：Debian Ports 仅提供二进制包；如需源码包（`deb-src`），请配置 [Debian 软件仓库](../debian/) 的 `unstable` 源码源。

修改完成后更新索引：

```{ztmpl lang="bash"}
{{sudo}}apt update
```
