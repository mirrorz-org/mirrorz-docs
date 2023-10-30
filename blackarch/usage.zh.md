## 使用方法

在 `/etc/pacman.conf` 文件末尾添加两行：

<tmpl z-lang="ini" z-path="/etc/pacman.conf" z-append>
[blackarch]
Server = {{endpoint}}/$repo/os/$arch
</tmpl>

由于一些软件依赖 32 位的库，需要取消掉 `/etc/pacman.conf` 中 `multilib` 的注释，详见 [ArchWiki](https://wiki.archlinux.org/index.php/Official_repositories#Enabling_multilib) 。

然后请安装 ``blackarch-keyring`` 包以导入 GPG key。

<tmpl z-lang="bash">
{{sudo}}pacman -Sy blackarch-keyring
</tmpl>

注：Black Arch 软件源仅包含其打包的工具等软件。如果需要更换 Arch Linux 基础系统的软件源，请查看 [Arch Linux 帮助](../archlinux/)。
