**注：该镜像仅包含 Scoop 本体及官方 known buckets 的 git 仓库（即 `scoop update` 和 `scoop bucket` 所更新的内容）；bucket 中软件的二进制安装包仍需从各软件官方站点下载，不在本镜像范围内。**

镜像站提供了 Scoop 本体以及 [Scoop 官方 known buckets](https://github.com/ScoopInstaller/Scoop/blob/master/buckets.json) 中的全部十个 bucket：

- `scoop.git`（Scoop 本体）
- `main.git`、`extras.git`、`versions.git`、`nirsoft.git`、`php.git`、`nonportable.git`、`java.git`
- `scoop-nerd-fonts.git`、`scoop-games.git`、`scoop-sysinternals.git`（这三个官方 bucket 上游托管在个人账号下，目录名跟随上游仓库名）

### 安装 Scoop 时使用镜像

```{ztmpl lang="powershell"}
# 下载安装脚本，指定 Scoop 本体仓库为镜像
iwr -useb get.scoop.sh -outfile install.ps1
.\install.ps1 -ScoopRepo "{{endpoint}}/scoop.git"
```

### 已安装 Scoop，切换至镜像

```{ztmpl lang="powershell"}
scoop config SCOOP_REPO "{{endpoint}}/scoop.git"
scoop update
```

### 将 bucket 切换至镜像

以 main 为例，先移除再重新添加指向镜像的 bucket：

```{ztmpl lang="powershell"}
scoop bucket rm main
scoop bucket add main "{{endpoint}}/main.git"
```

其他官方 bucket 同理：

```{ztmpl lang="powershell"}
scoop bucket add extras "{{endpoint}}/extras.git"
scoop bucket add versions "{{endpoint}}/versions.git"
scoop bucket add nirsoft "{{endpoint}}/nirsoft.git"
scoop bucket add sysinternals "{{endpoint}}/scoop-sysinternals.git"
scoop bucket add php "{{endpoint}}/php.git"
scoop bucket add nerd-fonts "{{endpoint}}/scoop-nerd-fonts.git"
scoop bucket add nonportable "{{endpoint}}/nonportable.git"
scoop bucket add java "{{endpoint}}/java.git"
scoop bucket add games "{{endpoint}}/scoop-games.git"
```
