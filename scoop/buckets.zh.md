### 将 bucket 切换至镜像

以 main 为例，先移除再重新添加指向镜像的 bucket：

```{ztmpl lang="powershell"}
scoop bucket rm main
scoop bucket add main "{{endpoint}}/main.git"
```

其他官方 bucket 同理：

```{ztmpl lang="powershell"}
scoop bucket rm extras
scoop bucket add extras "{{endpoint}}/extras.git"
scoop bucket rm versions
scoop bucket add versions "{{endpoint}}/versions.git"
scoop bucket rm nirsoft
scoop bucket add nirsoft "{{endpoint}}/nirsoft.git"
scoop bucket rm sysinternals
scoop bucket add sysinternals "{{endpoint}}/scoop-sysinternals.git"
scoop bucket rm php
scoop bucket add php "{{endpoint}}/php.git"
scoop bucket rm nerd-fonts
scoop bucket add nerd-fonts "{{endpoint}}/scoop-nerd-fonts.git"
scoop bucket rm nonportable
scoop bucket add nonportable "{{endpoint}}/nonportable.git"
scoop bucket rm java
scoop bucket add java "{{endpoint}}/java.git"
scoop bucket rm games
scoop bucket add games "{{endpoint}}/scoop-games.git"
```
