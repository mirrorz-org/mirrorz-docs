## 收录范围

FreeBSD 是一款功能完备的开源类 UNIX® 操作系统，以其卓越的稳定性、安全性和性能而著称。FreeBSD 项目由充满热忱的志愿者社区所开发。FreeBSD 基于伯克利软件发行版（Berkeley Software Distribution，BSD）UNIX 操作系统。

FreeBSD 的 STABLE 镜像是开发版本，并非一般发行版意义上的“稳定版”，仅代表此大版本内 ABI 稳定，FreeBSD 官方不建议将其应用于生产环境。参见 [FreeBSD Glossary STABLE](https://wiki.freebsd.org/Glossary#STABLE)。FreeBSD 传统意义上的稳定版是 RELEASE，FreeBSD 官方推荐将其用于生产环境。FreeBSD 的主线（main）开发版本称作 CURRENT。参见 [FreeBSD Release Engineering](https://docs.freebsd.org/en/articles/freebsd-releng/)。

注：FreeBSD 基本系统致力于去 GNU 化，因此不含 sudo 等软件（用户可通过包管理器自行安装）。参见 [GPL Software in FreeBSD Base](https://wiki.freebsd.org/GPLinBase)。

- CI 镜像位于 <tmpl z-inline>{{endpoint}}/releases/CI-IMAGES</tmpl>
- ISO/IMG 镜像位于 <tmpl z-inline>{{endpoint}}/releases/ISO-IMAGES</tmpl>
- OCI 镜像位于 <tmpl z-inline>{{endpoint}}/releases/OCI-IMAGES</tmpl>
- 虚拟机模板位于 <tmpl z-inline>{{endpoint}}/releases/VM-IMAGES</tmpl>
- 文档及资料位于 <tmpl z-inline>{{endpoint}}/doc</tmpl>

pkg 和 ports 仓库已被官方移动到独立的仓库中，详见 [FreeBSD pkg 帮助](../FreeBSD-pkg/)与 [FreeBSD ports 帮助](../FreeBSD-ports/)
