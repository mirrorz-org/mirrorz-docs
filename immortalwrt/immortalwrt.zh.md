与 OpenWrt 相同，从 ImmortalWrt 25.12 开始，包管理器由 `opkg` 改为 `apk` (Alpine Package Keeper)，默认软件源的配置文件路径由 `/etc/opkg/distfeeds.conf` 改为 `/etc/apk/repositories.d/distfeeds.list`。

### 自动替换

对于 ImmortalWrt 25.12 及以上版本，需选择 `APK`；对于 ImmortalWrt 24.10 及以下版本，需选择 `OPKG`。

执行如下命令自动替换：

```{ztmpl lang="bash" input="packagemanager"}
sed -e 's,https://downloads.immortalwrt.org,{{endpoint}},g' \
    -e 's,https://mirrors.vsean.net/openwrt,{{endpoint}},g' \
    -i.bak {{filepath}}
```

### 手工替换

登录到路由器，根据版本或包管理器选择编辑 `/etc/apk/repositories.d/distfeeds.list` 或 `/etc/opkg/distfeeds.conf` 文件，将源地址 `https://downloads.immortalwrt.org` 或 `https://mirrors.vsean.net/openwrt` 替换为：

```{ztmpl}
{{endpoint}}
```

然后运行 `apk update` 或 `opkg update` 刷新软件包列表。

您也可以登录 LuCI 后台，进入 `系统` -> `软件包` 页面，点击 `配置 apk` 或 `配置 opkg` 并按上述说明完成对源地址的更改。
