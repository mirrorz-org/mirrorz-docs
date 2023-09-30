## 使用方法

### rsync 方式

修改 `/etc/portage/repos.conf/gentoo.conf` ，将

<tmpl>
sync-uri = rsync://rsync.gentoo.org/gentoo-portage
</tmpl>

修改为

<tmpl>
sync-uri = rsync://{{host}}{{path}}
</tmpl>

注意在使用前需要检查所选镜像站提供的 rsync 是否可以访问，MirrorZ 并未记录该元数据。

### git 方式

参考 [Gentoo Portage Git 帮助](../gentoo-portage.git/)。

## Distfiles 配置

参考 [Gentoo 帮助](../gentoo/)。

配置好 Portage 与 Distfiles 后，执行 `emerge --sync` 进行更新。
