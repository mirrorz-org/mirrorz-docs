## 软件源使用方法

编辑 `/etc/pacman.d/mirrorlist`，在文件的最顶端添加以下配置；您可以同时注释掉其它所有镜像。

<tmpl z-lang="ini" z-path="/etc/pacman.d/mirrorlist">
Server = {{endpoint}}/$arch/$repo
</tmpl>

更新软件包缓存：

<tmpl z-lang="bash">
{{sudo}}pacman -Syy
</tmpl>
