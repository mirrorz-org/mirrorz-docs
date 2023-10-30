## 使用方法

完整的包信息列表（包名称/架构/维护者/状态）请[点击这里](https://github.com/archlinuxcn/repo)查看。

*  官方仓库地址：https://repo.archlinuxcn.org

使用方法：在 `/etc/pacman.conf` 文件末尾添加以下两行：

<tmpl z-lang="ini" z-path="/etc/pacman.conf" z-append>
[archlinuxcn]
Server = {{endpoint}}/$arch
</tmpl>

之后通过以下命令安装 `archlinuxcn-keyring` 包导入 GPG key。

<tmpl z-lang="bash">
{{sudo}}pacman -Sy archlinuxcn-keyring
</tmpl>
