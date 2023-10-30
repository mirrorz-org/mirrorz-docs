## postmarketOS

本节供 [postmarketOS 帮助](../postmarketOS/)使用。

<tmpl z-lang="bash">
pmbootstrap --mirror-pmOS=http://mirror/postmarketOS/ --mirror-alpine={{endpoint}}/ init
pmbootstrap --mirror-pmOS=http://mirror/postmarketOS/ --mirror-alpine={{endpoint}}/ install
</tmpl>

将 `/etc/apk/repositories` 替换为以下的内容

<tmpl z-path="/etc/apk/repositories">
http://mirror/postmarketOS/master
{{endpoint}}/edge/main
{{endpoint}}/edge/community
</tmpl>
