ImmortalWrt 是 OpenWrt 的一个第三方分支，主要针对国人用户开发，提供更多的本地化软件包和设备支持。

可以使用以下方法更换软件源：

修改 `/etc/opkg/distfeeds.conf` 文件，将源地址 `https://downloads.immortalwrt.org` 或 `https://mirrors.vsean.net/openwrt` 更改为：

<tmpl>
{{endpoint}}
</tmpl>

然后运行 `opkg update` 刷新软件包列表。

或通过 sed 命令一键更改：

<tmpl z-lang="bash">
sed -e 's,https://downloads.immortalwrt.org,{{endpoint}},g' \
    -e 's,https://mirrors.vsean.net/openwrt,{{endpoint}},g' \
    -i.bak /etc/opkg/distfeeds.conf
</tmpl>

您也可以登录 LuCI 后台，进入 `系统` -> `软件包` 页面，点击 `配置 opkg` 并按上述说明完成对源地址的更改。
