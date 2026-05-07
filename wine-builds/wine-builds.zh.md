由于上游并未提供 rsync，镜像站只同步了 ubuntu/debian 部分。

首先启用 32 位架构

```{ztmpl lang="bash"}
{{sudo}}dpkg --add-architecture i386
```

之后信任来自 https://dl.winehq.org/ 的公钥

```{ztmpl lang="bash"}
wget -nc -O- https://dl.winehq.org/wine-builds/winehq.key | {{sudo}}gpg --dearmor -o /usr/share/keyrings/winehq-archive.gpg
```

新增 `/etc/apt/sources.list.d/winehq.list`，内容为

```{ztmpl lang="properties" input="release" path="/etc/apt/sources.list.d/winehq.list"}
deb [arch=amd64,i386 signed-by=/usr/share/keyrings/winehq-archive.gpg] {{endpoint}}/{{os}}/ {{release}} main
```

通过以下命令安装 winehq

```{ztmpl lang="bash"}
{{sudo}}apt update
{{sudo}}apt install --install-recommends winehq-stable
```
