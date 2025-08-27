## 使用方法

编辑 `/etc/ostree/remotes.d/fedora.conf`：

<tmpl z-lang="conf">
[remote "fedora"]
url={{endpoint}}/fedora-ostree
gpg-verify=true
gpgkeypath=/etc/pki/rpm-gpg/
# contenturl=mirrorlist=https://ostree.fedoraproject.org/mirrorlist
</tmpl>
