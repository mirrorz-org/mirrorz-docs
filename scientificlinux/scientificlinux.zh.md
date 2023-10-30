下载 sl-mirrors.repo 放入 `/etc/yum.repo.d/` 中。

<tmpl z-lang="ini" z-input="release" z-path="/etc/yum.repos.d/sl-mirrors.repo">
[sl]
name=Scientific Linux $releasever - $basearch - mirrros
baseurl={{endpoint}}/$releasever/$basearch/os/
#mirrorlist=http://ftp.scientificlinux.org/linux/scientific/mirrorlist/sl-base-{{release}}.txt
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-sl file:///etc/pki/rpm-gpg/RPM-GPG-KEY-sl{{release}} file:///etc/pki/rpm-gpg/RPM-GPG-KEY-cern

[sl-security]
name=Scientific Linux $releasever - $basearch - security updates - mirrors
baseurl={{endpoint}}/$releasever/$basearch/updates/security/
#mirrorlist=http://ftp.scientificlinux.org/linux/scientific/mirrorlist/sl-security-{{release}}.txt
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-sl file:///etc/pki/rpm-gpg/RPM-GPG-KEY-sl{{release}} file:///etc/pki/rpm-gpg/RPM-GPG-KEY-cern

[sl-source]
name=Scientific Linux $releasever - Source - mirrors
baseurl={{endpoint}}/$releasever/SRPMS/
enabled=0
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-sl file:///etc/pki/rpm-gpg/RPM-GPG-KEY-sl{{release}} file:///etc/pki/rpm-gpg/RPM-GPG-KEY-cern
</tmpl>

运行 `yum makecache` 生成缓存。
