## 使用方法

一般情况下，将 `/etc/apt/sources.list` 文件中 Debian 默认的源地址 `http://security.debian.org/` 替换为镜像地址即可。

为了保证安全更新的时效性，Debian 不推荐用户使用安全更新镜像，如确需使用请选择同步频次较高的镜像站。

<tmpl z-input="release src nf">
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb {{endpoint}}-security {{release}}{{security}} main contrib{{#nf}}{{nonfree}}{{/nf}}
{{src}}deb-src {{endpoint}}-security {{release}}{{security}} main contrib{{#nf}}{{nonfree}}{{/nf}}
</tmpl>
