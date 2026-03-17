## 使用方法

完整的包信息列表（包名称/架构/维护者/状态）请[点击这里](https://github.com/archlinuxcn/repo)查看。

*  官方仓库地址：https://repo.archlinuxcn.org

使用方法：在 `/etc/pacman.conf` 文件末尾添加以下两行：

```{ztmpl lang="ini" path="/etc/pacman.conf" append="true"}
[archlinuxcn]
Server = {{endpoint}}/$arch
```

之后通过以下命令安装 `archlinuxcn-keyring` 包导入 GPG key。

```{ztmpl lang="bash"}
{{sudo}}pacman -Sy archlinuxcn-keyring
```
