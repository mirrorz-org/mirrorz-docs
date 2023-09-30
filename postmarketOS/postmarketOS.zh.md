### pmbootstrap

需要在每个 `pmbootstrap` 命令中都指定镜像

<tmpl z-lang="bash">
pmbootstrap --mirror-pmOS={{endpoint}}/ --mirror-alpine=http://mirror/alpine/ init
pmbootstrap --mirror-pmOS={{endpoint}}/ --mirror-alpine=http://mirror/alpine/ install
</tmpl>

其中 `mirror-alpine` 部分需要前往 [Alpine 帮助](../alpine/)构造。

### 安装后的 postmarketOS

将 `/etc/apk/repositories` 替换为以下的内容

<tmpl>
{{endpoint}}/master
http://mirror/alpine/edge/main
http://mirror/alpine/edge/community
</tmpl>

其中 alpine 部分需要前往 [Alpine 帮助](../alpine/)构造。

可以按照需要使用不同的 channel，例如 `postmarketOS/v21.12`，`alpine/v3.15/main`
