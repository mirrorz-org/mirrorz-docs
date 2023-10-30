## 使用方法

Pacman 以 `mirrorlist` 中 Server 的顺序作为优先级，因此添加镜像需要在文件的最顶端添加；您可以同时注释掉其它所有镜像。

有关 Arch Linux 使用镜像的详细说明请见[官方文档](https://wiki.archlinux.org/title/mirrors)

编辑 `/etc/pacman.d/mirrorlist`，在文件的最顶端添加：

<tmpl z-lang="ini" z-path="/etc/pacman.d/mirrorlist">
Server = {{endpoint}}/$repo/os/$arch
</tmpl>

更新软件包缓存：

<tmpl z-lang="bash">
{{sudo}}pacman -Syyu
</tmpl>

两次 `y` 能避免从**损坏的**镜像切换到**正常的**镜像时出现的问题。

如果您从一个较新的镜像切换到较旧的镜像，以下命令可以降级部分包，以避免系统的部分更新。

<tmpl z-lang="bash">
{{sudo}}pacman -Syyuu
</tmpl>
