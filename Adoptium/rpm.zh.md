## CentOS/RHEL/Fedora 用户

将下列内容添加到 `/etc/yum.repos.d/adoptium.repo` ：

```{ztmpl lang="ini" path="/etc/yum.repos.d/adoptium.repo"}
[Adoptium]
name=Adoptium
baseurl={{endpoint}}/rpm/centos$releasever-$basearch/
enabled=1
gpgcheck=1
gpgkey=https://packages.adoptium.net/artifactory/api/gpg/key/public
```

再执行

```{ztmpl lang="bash"}
{{sudo}}yum makecache
```

之后可以安装软件包，例如：

```{ztmpl lang="bash"}
{{sudo}}yum install temurin-17-jdk
```
