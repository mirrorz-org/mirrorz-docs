## 使用方法

Fedora 默认使用 [Metalink](https://zh.fedoracommunity.org/2018/04/05/fedora-secures-package-delivery.html) 给出推荐的镜像列表，保证用户使用的镜像仓库足够新，并且能够尽快拿到安全更新，从而提供更好的安全性。所以通常情况下使用默认配置即可，无需更改配置文件。

由于 Metalink 需要从国外的 Fedora 项目服务器上获取元信息，所以对于校园内网、无国外访问等特殊情况，metalink 并不适用，此时可以如下修改配置文件。

Fedora 的软件源配置文件可以有多个，其中：

- 系统默认的 `fedora` 仓库配置文件为 `/etc/yum.repos.d/fedora.repo`
- 系统默认的 `updates` 仓库配置文件为 `/etc/yum.repos.d/fedora-updates.repo`

将上述两个文件先做个备份，根据 Fedora 系统版本分别替换为下面内容，之后通过 `sudo dnf makecache` 命令更新本地缓存，即可使用所选择的软件源镜像。

### 命令替换

用以下命令替换 `/etc/yum.repos.d` 下的文件

<tmpl z-lang="bash">
{{sudo}}sed -e 's|^metalink=|#metalink=|g' \
    -e 's|^#baseurl=http://download.example/pub/fedora/linux|baseurl={{endpoint}}|g' \
    -i.bak \
    /etc/yum.repos.d/fedora.repo \
    /etc/yum.repos.d/fedora-updates.repo
</tmpl>

### 手动替换

**`fedora` 仓库 (/etc/yum.repos.d/fedora.repo)**

<tmpl z-lang="ini">
[fedora]
name=Fedora $releasever - $basearch
baseurl={{endpoint}}/releases/$releasever/Everything/$basearch/os/
#metalink=https://mirrors.fedoraproject.org/metalink?repo=fedora-$releasever&arch=$basearch
enabled=1
countme=1
metadata_expire=7d
repo_gpgcheck=0
type=rpm
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
</tmpl>

**`updates` 仓库 (/etc/yum.repos.d/fedora-updates.repo)**

<tmpl z-lang="ini">
[updates]
name=Fedora $releasever - $basearch - Updates
baseurl={{endpoint}}/updates/$releasever/Everything/$basearch/
#metalink=https://mirrors.fedoraproject.org/metalink?repo=updates-released-f$releasever&arch=$basearch
enabled=1
countme=1
repo_gpgcheck=0
type=rpm
gpgcheck=1
metadata_expire=6h
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
</tmpl>
