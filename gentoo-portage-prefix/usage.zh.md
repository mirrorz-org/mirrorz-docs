## 使用方法

**注意：Gentoo Prefix Portage tree 已合并进 gentoo.git。如果您是 Linux 用户，请使用 [gentoo-portage](../gentoo-portage/) rsync 或 [gentoo-portage.git](../gentoo-portage.git/) 镜像。此 repo 专为 macOS 下 prefix 用户而设。**

[Gentoo Prefix](https://wiki.gentoo.org/wiki/Project:Prefix) macOS 的镜像配置方法如下：

### Bootstrap 镜像配置

参考 [Gentoo 帮助](../gentoo/)中「Gentoo Prefix Bootstrap 镜像配置」一节。

### Gentoo Portage Prefix 镜像配置：

在 `$EPREFIX/etc/portage` 目录下创建名为 `repos.conf` 的目录，在 `$EPREFIX/etc/portage/repos.conf/gentoo.conf` 中加入如下内容：

<tmpl z-path="$EPREFIX/etc/portage/repos.conf/gentoo.conf" z-append>
[gentoo_prefix]
sync-uri = rsync://{{host}}{{path}}
</tmpl>

注意在使用前需要检查所选镜像站提供的 rsync 是否可以访问，MirrorZ 并未记录该元数据。

### Distfiles 配置：

参考 [Gentoo 帮助](../gentoo/)，只需将 `/etc` 换成 `$EPREFIX/etc`。

配置好以上两项以后，执行 `emerge --sync` 或者 `eix-sync` 进行更新。
