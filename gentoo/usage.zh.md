## Distfiles 配置

在 `/etc/portage/make.conf` 中加入：

```{ztmpl path="/etc/portage/make.conf" append="true"}
GENTOO_MIRRORS="{{endpoint}}"
```

关于 Portage 配置可以参考 [Gentoo Portage 镜像](../gentoo-portage/)。

配置好 Portage 与 Distfiles 后，执行 `emerge --sync` 进行更新。

## Gentoo Prefix Bootstrap 镜像配置

在运行 Bootstrap 脚本之前，可通过设置以下环境变量选择 Bootstrap 过程中使用的镜像。

```{ztmpl lang="bash"}
export GENTOO_MIRRORS="{{endpoint}}"
export SNAPSHOT_URL="{{endpoint}}/snapshots"
# export GNU_URL="http://mirror/gnu"
```

`GNU_URL` 的具体设置可以参考 [GNU 帮助](../gnu/)。

Bootstrap 成功后，若对 Gentoo Portage 和 Distfiles 换源，可参照以上几节，只需将 `/etc` 换成 `$EPREFIX/etc`
