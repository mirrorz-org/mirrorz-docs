一般情况下，将 `/etc/apt/sources.list` 文件中 Debian 默认的源地址 `http://deb.debian.org/` 替换为镜像地址即可。

Debian Buster 以上版本默认支持 HTTPS 源。如果遇到无法拉取 HTTPS 源的情况，请先使用 HTTP 源并安装：

<tmpl z-lang="bash">
{{sudo}}apt install apt-transport-https ca-certificates
</tmpl>

<tmpl z-input="release src nf mirror_security" z-path="/etc/apt/sources.list">
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
{{#sid}}
deb {{endpoint}}/ sid main contrib{{#nf}}{{nonfree}}{{/nf}}
{{src}}deb-src {{endpoint}}/ sid main contrib{{#nf}}{{nonfree}}{{/nf}}
{{/sid}}
{{^sid}}
deb {{endpoint}}/ {{release}} main contrib{{#nf}}{{nonfree}}{{/nf}}
{{src}}deb-src {{endpoint}}/ {{release}} main contrib{{#nf}}{{nonfree}}{{/nf}}

deb {{endpoint}}/ {{release}}-updates main contrib{{#nf}}{{nonfree}}{{/nf}}
{{src}}deb-src {{endpoint}}/ {{release}}-updates main contrib{{#nf}}{{nonfree}}{{/nf}}

deb {{endpoint}}/ {{release}}-backports main contrib{{#nf}}{{nonfree}}{{/nf}}
{{src}}deb-src {{endpoint}}/ {{release}}-backports main contrib{{#nf}}{{nonfree}}{{/nf}}

{{#mirror_security}}
deb {{endpoint}}-security {{release}}{{security}} main contrib{{#nf}}{{nonfree}}{{/nf}}
{{src}}deb-src {{endpoint}}-security {{release}}{{security}} main contrib{{#nf}}{{nonfree}}{{/nf}}
{{/mirror_security}}
{{^mirror_security}}
deb https://security.debian.org/debian-security {{release}}{{security}} main contrib{{#nf}}{{nonfree}}{{/nf}}
{{src}}deb-src https://security.debian.org/debian-security {{release}}{{security}} main contrib{{#nf}}{{nonfree}}{{/nf}}
{{/mirror_security}}
{{/sid}}
</tmpl>

为了方便快速配置，此处一并附上了 debian-security 的配置，一般来说，镜像站会同时提供 debian-security，为了更准确的信息您可以前往 [Debian Security 帮助](../debian-security/) 确认。

不过，一般来说，为了更及时地获得安全更新，不推荐使用镜像站安全更新软件源，因为镜像站往往有同步延迟。参考 https://www.debian.org/security/faq.en.html#mirror

> The purpose of security.debian.org is to make security updates available as quickly and easily as possible.
>
> Encouraging the use of unofficial mirrors would add extra complexity that is usually not needed and that can cause frustration if these mirrors are not kept up to date.
