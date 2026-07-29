## 使用方法

本仓库只含 ebuild，不含源码，源码见 [gentoo-zh](../gentoo-zh/)。Git 同步需要 `dev-vcs/git`。

已经用 `eselect repository enable gentoo-zh` 启用过的用户，配置写在 `/etc/portage/repos.conf/eselect-repo.conf` 里，把其中 `[gentoo-zh]` 的 `sync-uri` 改为 {ztmpl}`{{endpoint}}` 即可，不要用 `eselect repository add`，它对已启用的仓库会报错退出。

未启用过的用户，创建 `/etc/portage/repos.conf/gentoo-zh.conf`：

```{ztmpl path="/etc/portage/repos.conf/gentoo-zh.conf"}
[gentoo-zh]
location = /var/db/repos/gentoo-zh
sync-type = git
sync-uri = {{endpoint}}
auto-sync = yes
```

改过 `sync-uri` 之后，若此前已同步过，需于 `/var/db/repos/gentoo-zh` 下执行：

```{ztmpl lang="bash"}
git remote set-url origin {{endpoint}}
```

最后执行 `emerge --sync gentoo-zh`。
