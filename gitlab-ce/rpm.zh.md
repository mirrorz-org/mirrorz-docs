## RHEL/CentOS 用户

新建 `/etc/yum.repos.d/gitlab-ce.repo`，内容为

```{ztmpl lang="ini" path="/etc/yum.repos.d/gitlab-ce.repo"}
[gitlab-ce]
name=Gitlab CE Repository
baseurl={{endpoint}}/yum/el$releasever/
gpgcheck=0
enabled=1
```

再执行

```{ztmpl lang="bash"}
{{sudo}}yum makecache
{{sudo}}yum install gitlab-ce
```
