由于上游并未提供 rsync，镜像站只同步了 ubuntu/debian 部分。

首先启用 32 位架构

<tmpl z-lang="bash">
{{sudo}}dpkg --add-architecture i386
</tmpl>

之后信任来自 https://dl.winehq.org/ 的公钥

<tmpl z-lang="bash">
{{sudo}}wget -nc -O /usr/share/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
</tmpl>

新增 `/etc/apt/sources.list.d/winehq.list`，内容为

<tmpl z-input="release" z-path="/etc/apt/sources.list.d/winehq.list">

deb [arch=amd64,i386 signed-by=/usr/share/keyrings/winehq-archive.key] {{endpoint}}/{{os}}/ {{release}} main
</tmpl>

通过以下命令安装 winehq

<tmpl z-lang="bash">
{{sudo}}apt update
{{sudo}}apt install --install-recommends winehq-stable
</tmpl>
