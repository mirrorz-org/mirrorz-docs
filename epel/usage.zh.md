## 使用方法

下面以 Rocky Linux 9 为例讲解如何使用本镜像站的 epel 镜像。RHEL 及其他衍生发行版同样可用该方法。

首先从 Extras 里安装 epel-release：

<tmpl z-lang="bash">
{{sudo}}dnf install epel-release
</tmpl>

用如下命令自动替换：（修改自 [https://github.com/tuna/issues/issues/687](https://github.com/tuna/issues/issues/687)）

<tmpl z-lang="bash">
{{sudo}}sed -e 's!^metalink=!#metalink=!g' \
    -e 's!^#baseurl=!baseurl=!g' \
    -e 's!https\?://download\.fedoraproject\.org/pub/epel!{{endpoint}}!g' \
    -e 's!https\?://download\.example/pub/epel!{{endpoint}}!g' \
    -i /etc/yum.repos.d/epel{,-testing}.repo
</tmpl>

`epel.repo` 的修改结果如下：（仅供参考，不同版本可能不同）

<tmpl z-lang="ini">
[epel]
name=Extra Packages for Enterprise Linux $releasever - $basearch
# It is much more secure to use the metalink, but if you wish to use a local mirror
# place its address here.
baseurl={{endpoint}}/$releasever/Everything/$basearch/
#metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-$releasever&arch=$basearch&infra=$infra&content=$contentdir
enabled=1
gpgcheck=1
countme=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-$releasever

[epel-debuginfo]
name=Extra Packages for Enterprise Linux $releasever - $basearch - Debug
# It is much more secure to use the metalink, but if you wish to use a local mirror
# place its address here.
baseurl={{endpoint}}/$releasever/Everything/$basearch/debug/
#metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-debug-$releasever&arch=$basearch&infra=$infra&content=$contentdir
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-$releasever
gpgcheck=1

[epel-source]
name=Extra Packages for Enterprise Linux $releasever - $basearch - Source
# It is much more secure to use the metalink, but if you wish to use a local mirror
# place its address here.
baseurl={{endpoint}}/$releasever/Everything/source/tree/
#metalink=https://mirrors.fedoraproject.org/metalink?repo=epel-source-$releasever&arch=$basearch&infra=$infra&content=$contentdir
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-$releasever
gpgcheck=1
</tmpl>

由于无法同步，镜像站不包含 EPEL Cisco OpenH264 仓库（`epel-cisco-openh264.repo`），如果不需要可手动将其改为 `enabled=0`。

运行 `dnf update` 测试一下吧。
