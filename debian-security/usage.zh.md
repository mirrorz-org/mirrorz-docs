## 使用方法

大部分 Debian 的软件源配置文件使用传统的 One-Line-Style，路径为 `/etc/apt/sources.list`；但是对于容器镜像，从 Debian 12 开始，其软件源配置文件变更为 DEB822 格式，路径为 `/etc/apt/sources.list.d/debian.sources`。一般情况下，将对应文件中 Debian 默认的源地址 `http://security.debian.org/` 替换为镜像地址即可。

为了保证安全更新的时效性，Debian 不推荐用户使用安全更新镜像，如确需使用请选择同步频次较高的镜像站。

### 传统格式（`/etc/apt/sources.list`）

<tmpl z-input="release src nf">
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb {{endpoint}} {{release}}{{security}} main contrib{{#nf}}{{nonfree}}{{/nf}}
{{src}}deb-src {{endpoint}} {{release}}{{security}} main contrib{{#nf}}{{nonfree}}{{/nf}}
</tmpl>

### DEB822 格式（`/etc/apt/sources.list.d/debian.sources`）

<tmpl z-input="release_deb822 src nf">
Types: deb
URIs: {{endpoint}}
Suites: {{release_deb822}}-security
Components: main contrib{{#nf}} non-free non-free-firmware{{/nf}}
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

{{src}}Types: deb-src
{{src}}URIs: {{endpoint}}
{{src}}Suites: {{release_deb822}}-security
{{src}}Components: main contrib{{#nf}} non-free non-free-firmware{{/nf}}
{{src}}Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
</tmpl>
