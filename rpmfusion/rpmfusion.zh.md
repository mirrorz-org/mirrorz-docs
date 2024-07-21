### 安装基础包

首先安装提供基础配置文件和 GPG 密钥的 `rpmfusion-*.rpm`。

#### Fedora 用户

<tmpl z-lang="bash">
{{sudo}}yum install --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
</tmpl>

或者如下直接用镜像中的 rpm 包：

<tmpl z-lang="bash">
{{sudo}}yum install --nogpgcheck {{endpoint}}/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm {{endpoint}}/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
</tmpl>

#### CentOS/RHEL 用户

<tmpl z-lang="bash" z-input="release">
{{sudo}}yum localinstall --nogpgcheck {{endpoint}}/free/el/rpmfusion-free-release-{{release}}.noarch.rpm {{endpoint}}/nonfree/el/rpmfusion-nonfree-release-{{release}}.noarch.rpm
</tmpl>

### 修改链接指向镜像站

安装成功后，使用以下命令修改 `/etc/yum.repos.d/` 目录下以 `rpmfusion` 开头，以 `.repo` 结尾的文件：

<tmpl z-lang="bash">
{{sudo}}sed -e 's!^metalink=!#metalink=!g' \
         -e 's!^mirrorlist=!#mirrorlist=!g' \
         -e 's!^#baseurl=!baseurl=!g' \
         -e 's!https\?://download1\.rpmfusion\.org/!{{endpoint}}/!g' \
         -i.bak /etc/yum.repos.d/rpmfusion*.repo
</tmpl>

以 Fedora 下的 `/etc/yum.repos.d/rpmfusion-free.repo` 为例，替换后的文件类似如下：

<tmpl z-lang="ini">
[rpmfusion-free]
name=RPM Fusion for Fedora $releasever - Free
baseurl={{endpoint}}/free/fedora/releases/$releasever/Everything/$basearch/os/
#metalink=https://mirrors.rpmfusion.org/metalink?repo=free-fedora-$releasever&arch=$basearch
enabled=1
metadata_expire=14d
type=rpm-md
gpgcheck=1
repo_gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-rpmfusion-free-fedora-$releasever

[rpmfusion-free-debuginfo]
name=RPM Fusion for Fedora $releasever - Free - Debug
baseurl={{endpoint}}/free/fedora/releases/$releasever/Everything/$basearch/debug/
#metalink=https://mirrors.rpmfusion.org/metalink?repo=free-fedora-debug-$releasever&arch=$basearch
enabled=0
metadata_expire=7d
type=rpm-md
gpgcheck=1
repo_gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-rpmfusion-free-fedora-$releasever

[rpmfusion-free-source]
name=RPM Fusion for Fedora $releasever - Free - Source
baseurl={{endpoint}}/free/fedora/releases/$releasever/Everything/source/SRPMS/
#metalink=https://mirrors.rpmfusion.org/metalink?repo=free-fedora-source-$releasever&arch=$basearch
enabled=0
metadata_expire=7d
type=rpm-md
gpgcheck=1
repo_gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-rpmfusion-free-fedora-$releasever
</tmpl>

### 更多

RHEL/CentOS 用户可参考 [RPMFusion 官方指南](http://rpmfusion.org/Configuration)。
