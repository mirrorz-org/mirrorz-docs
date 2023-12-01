## 使用方法

下面以 CentOS 7 为例讲解如何使用本镜像站的 epel 镜像。CentOS 8 或 CentOS Stream 同样可用该方法。

首先从 CentOS Extras 这个源里安装 epel-release：

<tmpl z-lang="bash">
{{sudo}}yum install epel-release
</tmpl>

用如下命令自动替换：（修改自 [https://github.com/tuna/issues/issues/687](https://github.com/tuna/issues/issues/687)）

<tmpl z-lang="bash">
{{sudo}}sed -e 's!^metalink=!#metalink=!g' \
    -e 's!^#baseurl=!baseurl=!g' \
    -e 's!https\?://download\.fedoraproject\.org/pub/epel!{{endpoint}}!g' \
    -e 's!https\?://download\.example/pub/epel!{{endpoint}}!g' \
    -i /etc/yum.repos.d/epel{,-testing}.repo
</tmpl>

修改结果如下：（仅供参考，不同版本可能不同）

<tmpl z-lang="ini">
[epel]
name=Extra Packages for Enterprise Linux 7 - $basearch
baseurl={{endpoint}}/7/$basearch
#mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-7&arch=$basearch
failovermethod=priority
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7

[epel-debuginfo]
name=Extra Packages for Enterprise Linux 7 - $basearch - Debug
baseurl={{endpoint}}/7/$basearch/debug
#mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-debug-7&arch=$basearch
failovermethod=priority
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
gpgcheck=1

[epel-source]
name=Extra Packages for Enterprise Linux 7 - $basearch - Source
baseurl={{endpoint}}/7/SRPMS
#mirrorlist=https://mirrors.fedoraproject.org/metalink?repo=epel-source-7&arch=$basearch
failovermethod=priority
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
gpgcheck=1
</tmpl>

运行 `yum update` 测试一下吧。
