## 使用方法

编辑 `/etc/ostree/remotes.d/fedora.conf`：

```{ztmpl lang="conf"}
[remote "fedora"]
url={{endpoint}}
gpg-verify=true
gpgkeypath=/etc/pki/rpm-gpg/
# contenturl=mirrorlist=https://ostree.fedoraproject.org/mirrorlist
```
