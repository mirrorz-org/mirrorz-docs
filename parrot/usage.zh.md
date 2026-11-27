## 使用方法

Parrot OS 默认将 `/etc/apt/sources.list` 留空，并在 `/etc/apt/sources.list.d/parrot.list` 中管理软件源配置。

### 手动替换

备份并编辑 `/etc/apt/sources.list.d/parrot.list`，将其内容替换为：

```{ztmpl lang="properties" input="release backports src" path="/etc/apt/sources.list.d/parrot.list"}
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb {{endpoint}} {{release}} main contrib non-free non-free-firmware
{{src}}deb-src {{endpoint}} {{release}} main contrib non-free non-free-firmware

deb {{endpoint}} {{release}}-security main contrib non-free non-free-firmware
{{src}}deb-src {{endpoint}} {{release}}-security main contrib non-free non-free-firmware

{{backports}}deb {{endpoint}} {{release}}-backports main contrib non-free non-free-firmware
{{backports}}{{src}}deb-src {{endpoint}} {{release}}-backports main contrib non-free non-free-firmware
```

### `sed` 替换

也可以直接使用以下命令替换默认官方源地址：

```{ztmpl lang="bash"}
{{sudo}}sed -i "s@https\?://deb\.parrot\.sh/parrot@{{endpoint}}@g" /etc/apt/sources.list.d/parrot.list
```

修改完成后，更新软件包索引：

```{ztmpl lang="bash"}
{{sudo}}apt update
```
