## 使用方法

### 1. 检查 CPU 支持的特性级别

> **重要**：启用当前 CPU 不支持的特性级别可能导致系统无法启动，请先检查再配置。

```bash
/lib/ld-linux-x86-64.so.2 --help
```

输出中带有 `(supported, searched)` 的级别即为当前 CPU 支持的级别（如 `x86-64-v3`）。

### 2. 安装密钥环和镜像列表

从 AUR 安装 `alhp-keyring` 和 `alhp-mirrorlist`。

### 3. 配置镜像源地址

编辑 `/etc/pacman.d/alhp-mirrorlist`，在文件顶部添加：

```{ztmpl lang="ini" path="/etc/pacman.d/alhp-mirrorlist"}
Server = {{endpoint}}/$repo/os/$arch
```

### 4. 修改 `/etc/pacman.conf`

编辑 `/etc/pacman.conf`，在对应的 Arch Linux 官方仓库**上方**添加对应级别的 ALHP 仓库：

```{ztmpl lang="ini" input="level multilib" path="/etc/pacman.conf"}
[core-{{level}}]
Include = /etc/pacman.d/alhp-mirrorlist

[extra-{{level}}]
Include = /etc/pacman.d/alhp-mirrorlist

[core]
Include = /etc/pacman.d/mirrorlist

[extra]
Include = /etc/pacman.d/mirrorlist
{{#multilib}}

[multilib-{{level}}]
Include = /etc/pacman.d/alhp-mirrorlist

[multilib]
Include = /etc/pacman.d/mirrorlist
{{/multilib}}
```

### 5. 更新软件包数据库

```{ztmpl lang="bash"}
{{sudo}}pacman -Suy
```

更多说明（如移除或切换特性级别）请参考 [ALHP 官方文档](https://somegit.dev/ALHP/ALHP.GO)。
