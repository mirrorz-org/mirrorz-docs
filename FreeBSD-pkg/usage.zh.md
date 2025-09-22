## 使用方法

### FreeBSD pkg

为了避免可能出现的向后兼容问题，基本系统中未预置真实的 pkg(8) 工具，需要在线安装。参见 [man pkg(7)](https://man.freebsd.org/cgi/man.cgi?query=pkg)。安装方法为直接输入命令 `pkg` 根据提示进行确认安装。为了避免因网络问题造成安装失败，建议先按以下方法换源后再安装 pkg。

FreeBSD pkg 包管理器的官方源的配置路径为 `/etc/pkg/FreeBSD.conf`。不建议直接修改此文件：该配置文件是 FreeBSD 基本系统的一部分，会随着基本系统的更新而变化。

应创建路径及文件 `/usr/local/etc/pkg/repos/BSD.conf` 来覆盖配置，文件内容如下：

<tmpl z-input="channel">
BSD: {
  url: "{{endpoint}}/${ABI}/quarterly"
}
FreeBSD: { enabled: no }
</tmpl>

修改配置后，运行 `pkg update -f` 更新索引。

注：如未配置 [pkgbase](https://wiki.freebsd.org/pkgbase)，则 pkg 仅管理用户安装的第三方软件（Port），无法更新基本系统。基本系统与通过 pkg 安装的软件互不干涉。

### Ports Collection & Poudriere

如果使用 [poudriere](https://github.com/freebsd/poudriere) 构建 `ports` 软件包，可以更改 `/usr/local/etc/poudriere.conf +374`，使用镜像站来获取二进制软件包。

<tmpl>
# Set to always attempt to fetch packages or dependencies before building.
# XXX: This is subject to change
# Default: off; requires -b <branch> for bulk or testport.
# PACKAGE_FETCH_BRANCH=latest
# The branch will be appended to the URL:
PACKAGE_FETCH_URL={{endpoint}}/\${ABI}
</tmpl>

更改后，运行 `poudriere bulk` 时会报错：`No SRV record found for the repo`，此报错无害，不影响使用。

关于 `PACKAGE_FETCH_*` 的更多使用方法和配置可参考 `/usr/local/etc/poudriere.conf.sample`。
