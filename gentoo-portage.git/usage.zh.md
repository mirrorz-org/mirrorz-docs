## 使用方法

第一次使用 `git` 同步方式的用户需要进行如下操作：

- 修改 `/etc/portage/repos.conf/gentoo.conf`
	- 将 `sync-type` 改为 `git`
	- 将 `sync-uri` 改为 <tmpl z-inline>{{endpoint}}</tmpl>

- 删除 `/var/db/repos/gentoo`
- 执行 `emerge --sync`

已经配置 `git` 同步的用户只需：

- 修改 `/etc/portage/repos.conf/gentoo.conf`
	- 将 `sync-uri` 改为 <tmpl z-inline>{{endpoint}}</tmpl>

- 于 `/var/db/repos/gentoo` 下，执行
<tmpl>
git remote set-url origin {{endpoint}}
</tmpl>
- 执行 `emerge --sync`
