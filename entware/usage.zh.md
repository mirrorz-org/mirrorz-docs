## 使用方法

Entware 使用 opkg 来管理其软件包，只需修改 opkg 配置文件中的软件源地址，就可以使用镜像来下载软件包。

按照官方 Wiki 中的教程安装好 entware 后，使用 `sed` 命令即可将软件源地址替换为本镜像站。

替换后，请运行 `opkg update` 命令，更新软件包 feed。

<tmpl z-lang="bash">
sed -i 's|https\?://bin.entware.net|{{endpoint}}|g' /opt/etc/opkg.conf
opkg update
</tmpl>

如果系统没有 sed 命令，可以手动编辑 `/opt/etc/opkg.conf` 文件，编辑时请注意自己设备的处理器架构。
例如：

<tmpl>
src/gz entware {{endpoint}}/aarch64-k3.10
</tmpl>
