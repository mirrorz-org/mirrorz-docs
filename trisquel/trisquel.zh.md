Trisquel GNU/Linux 软件源。

Trisquel 使用 APT 软件包管理系统，故其软件源使用方法与 Ubuntu 或 Debian 等相似。

编辑 `/etc/apt/sources.list` 文件，将文件内容替换为

<tmpl z-input="release src" z-path="/etc/apt/sources.list">
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb {{endpoint}}/ {{release}} main
{{src}}deb-src {{endpoint}}/ {{release}} main
deb {{endpoint}}/ {{release}}-security main
{{src}}deb-src {{endpoint}}/ {{release}}-security main
deb {{endpoint}}/ {{release}}-updates main
{{src}}deb-src {{endpoint}}/ {{release}}-updates main
deb {{endpoint}}/ {{release}}-backports main
{{src}}deb-src {{endpoint}}/ {{release}}-backports main
</tmpl>

### 相关链接

* 官方主页 https://trisquel.info/en
* 文档 https://trisquel.info/en/wiki/documentation
