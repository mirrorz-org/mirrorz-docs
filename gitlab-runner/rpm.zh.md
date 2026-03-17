### CentOS/RHEL

新建 `/etc/yum.repos.d/gitlab-runner.repo`，内容为

```{ztmpl lang="ini" path="/etc/yum.repos.d/gitlab-runner.repo"}
[gitlab-runner]
name=gitlab-runner
baseurl={{endpoint}}/yum/el$releasever-$basearch/
repo_gpgcheck=0
gpgcheck=0
enabled=1
gpgkey=https://packages.gitlab.com/gpg.key
```

再执行

```{ztmpl lang="bash"}
{{sudo}}yum makecache
{{sudo}}yum install gitlab-runner
```
