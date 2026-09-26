## 自动选择软件源镜像

[mirrorz-302](https://github.com/mirrorz-org/mirrorz-302) 提供 mirrorlist 接口，会根据你的地理位置、网络、ISP 等条件返回按可用性排序的镜像列表，客户端到列表中排在最前面的镜像拉取软件包，当排在前面的镜像不可用时还会自动回退到后续镜像。相比手动配置单一镜像地址，这种方式能自动为你选择网络条件最佳的镜像。

Fedora 默认使用 metalink，可将仓库配置中的 `metalink=` 替换为指向 mirrorz-302 的 `mirrorlist=`。该接口由 DNF/DNF5 支持，DNF 会先展开 `$releasever`、`$basearch` 等变量后再请求接口。

**`fedora` 仓库**

在 Fedora 44 及更新版本中，用以下命令替换默认的 metalink。

```{ztmpl lang="bash"}
{{sudo}}dnf config-manager setopt fedora.mirrorlist='https://mirrors.cernet.edu.cn/api/rpm/mirrorlist/fedora/releases/$releasever/Everything/$basearch/os/'
{{sudo}}dnf config-manager setopt fedora.metalink=
```

在 Fedora 43 及更旧版本中，将 `/etc/yum.repos.d/fedora.repo` 文件内容修改如下。

```{ztmpl lang="ini"}
[fedora]
name=Fedora $releasever - $basearch
#baseurl={{endpoint}}/releases/$releasever/Everything/$basearch/os/
mirrorlist=https://mirrors.cernet.edu.cn/api/rpm/mirrorlist/fedora/releases/$releasever/Everything/$basearch/os/
enabled=1
countme=1
metadata_expire=7d
repo_gpgcheck=0
type=rpm
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
```

**`updates` 仓库**

在 Fedora 44 及更新版本中，用以下命令替换默认的 Metalink。

```{ztmpl lang="bash"}
{{sudo}}dnf config-manager setopt updates.mirrorlist='https://mirrors.cernet.edu.cn/api/rpm/mirrorlist/fedora/updates/$releasever/Everything/$basearch/'
{{sudo}}dnf config-manager setopt updates.metalink=
```

在 Fedora 43 及更旧版本中，将 `/etc/yum.repos.d/fedora-updates.repo` 文件内容修改如下。

```{ztmpl lang="ini"}
[updates]
name=Fedora $releasever - $basearch - Updates
#baseurl={{endpoint}}/updates/$releasever/Everything/$basearch/
mirrorlist=https://mirrors.cernet.edu.cn/api/rpm/mirrorlist/fedora/updates/$releasever/Everything/$basearch/
enabled=1
countme=1
repo_gpgcheck=0
type=rpm
gpgcheck=1
metadata_expire=6h
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
```
