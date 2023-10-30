使用如下命令替换为本镜像：

<tmpl z-lang="bash">
mkdir -p /etc/xbps.d
cp /usr/share/xbps.d/*-repository-*.conf /etc/xbps.d/
sed -i 's|https://repo-default.voidlinux.org|{{endpoint}}|g' /etc/xbps.d/*-repository-*.conf
</tmpl>

若报错可尝试

<tmpl z-lang="bash">
sed -i 's|https://alpha.de.repo.voidlinux.org|{{endpoint}}|g' /etc/xbps.d/*-repository-*.conf
</tmpl>

之后可用 `xbps-query -L` 检查是否正确替换。

参考[官方教程](https://docs.voidlinux.org/xbps/repositories/mirrors/changing.html)。
