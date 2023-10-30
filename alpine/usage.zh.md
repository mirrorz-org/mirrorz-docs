## 使用方法

在终端输入以下命令以替换镜像源：

<tmpl z-lang="bash">
{{sudo}}sed -i 's#https\?://dl-cdn.alpinelinux.org/alpine#{{endpoint}}#g' /etc/apk/repositories
</tmpl>

也可以直接编辑 `/etc/apk/repositories` 文件。以下是 v3.5 版本的参考配置：

<tmpl z-path="/etc/apk/repositories">
{{endpoint}}/v3.5/main
{{endpoint}}/v3.5/community
</tmpl>

也可以使用 `latest-stable` 指向最新的稳定版本：

<tmpl z-path="/etc/apk/repositories">
{{endpoint}}/latest-stable/main
{{endpoint}}/latest-stable/community
</tmpl>

更改完 `/etc/apk/repositories` 文件后请更新索引以使更改生效:

<tmpl z-lang="bash">
{{sudo}}apk update
</tmpl>
