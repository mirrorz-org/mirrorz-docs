Loong Arch Linux 是为 LoongArch 架构移植的 ArchLinux 发行版，它遵循 Arch 的 K.I.S.S.原则，采用滚动升级模式，尽力为大多数软件提供最新的稳定版本。

Loong Arch Linux 可运行在龙芯 3A5000、3C5000(L)、3D5000 等处理器的机器上。以下帮助修改自 [Loong Arch Linux 镜像列表](https://loongarchlinux.org/pages/mirrorlist/)。

软件包 `pacman-mirrorlist` 提供了预配置好的仓库镜像，您可通过以下命令来安装/升级：

<tmpl z-lang="bash">
{{sudo}}pacman -Syu pacman-mirrorlist
</tmpl>

如需调整仓库，请编辑 `/etc/pacman.d/mirrorlist` 文件，对您想使用的镜像取消注释，并将其置于 mirrorlist 文件的最上方。或直接在该文件最顶端添加：

<tmpl z-lang="ini" z-path="/etc/pacman.d/mirrorlist">
Server = {{endpoint}}/archlinux/$repo/os/$arch
</tmpl>
