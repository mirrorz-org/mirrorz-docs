## 使用方法

FreeBSD pkg 包管理器的官方源配置是 `/etc/pkg/FreeBSD.conf` ，请先检查该文件内容。注意其中的 `url` 参数配置了官方仓库的地址，我们需要把它替换为镜像站的地址。

该配置文件是 FreeBSD 基本系统的一部分，会随着 `freebsd-update` 更新，请不要直接修改，而是创建 `/usr/local/etc/pkg/repos/FreeBSD.conf` 覆盖配置，文件内容如下：

<tmpl z-input="channel">
FreeBSD: {
  url: "pkg+{{endpoint}}/${ABI}/{{channel}}",
}
</tmpl>

修改配置后，运行 `pkg update -f` 更新索引。

注：使用 HTTPS 可以有效避免国内运营商的缓存劫持，但需要事先安装 `security/ca_root_nss` 软件包。

