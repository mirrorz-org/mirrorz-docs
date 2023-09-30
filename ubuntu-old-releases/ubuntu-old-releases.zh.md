Ubuntu 旧版本的软件源、镜像

该仓库包含了所有 Ubuntu 以前发布过的软件仓库、镜像 ISO，但不包含 Ubuntu 衍生版的 ISO。

### 软件源

<tmpl z-input="release src proposed" z-path="/etc/apt/sources.list">
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb {{endpoint}}/ubuntu/ {{release}} main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ubuntu/ {{release}} main restricted universe multiverse
deb {{endpoint}}/ubuntu/ {{release}}-updates main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ubuntu/ {{release}}-updates main restricted universe multiverse
deb {{endpoint}}/ubuntu/ {{release}}-backports main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ubuntu/ {{release}}-backports main restricted universe multiverse
deb {{endpoint}}/ubuntu/ {{release}}-security main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ubuntu/ {{release}}-security main restricted universe multiverse

# 预发布软件源，不建议启用
{{proposed}}deb {{endpoint}}/ubuntu/ {{release}}-proposed main restricted universe multiverse
{{proposed}}{{src}}deb-src {{endpoint}}/ubuntu/ {{release}}-proposed main restricted universe multiverse
</tmpl>

更多版本代号可参考 https://wiki.ubuntu.com/Releases

### 镜像

请前往 <tmpl z-inline>{{endpoint}}/releases/</tmpl> 下载。

非 AMD64(x86_64), Intel x86 架构的镜像请前往 <tmpl z-inline>{{endpoint}}/releases/ports/releases/</tmpl> 下载。
