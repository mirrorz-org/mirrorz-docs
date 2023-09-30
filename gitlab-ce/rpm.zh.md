## RHEL/CentOS 用户

新建 `/etc/yum.repos.d/gitlab-ce.repo`，内容为

<tmpl z-lang="ini" z-path="/etc/yum.repos.d/gitlab-ce.repo">
[gitlab-ce]
name=Gitlab CE Repository
baseurl={{endpoint}}/yum/el$releasever/
gpgcheck=0
enabled=1
</tmpl>

再执行

<tmpl z-lang="bash">
{{sudo}}yum makecache
{{sudo}}yum install gitlab-ce
</tmpl>
