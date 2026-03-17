## 软件源使用方法

编辑 `/etc/pacman.d/mirrorlist`，在文件的最顶端添加：

```{ztmpl lang="ini" path="/etc/pacman.d/mirrorlist"}
Server = {{endpoint}}/repo/$repo
```

其余部分可以参考 [Arch Linux 帮助](../archlinux/)。
