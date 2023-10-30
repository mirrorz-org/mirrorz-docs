### CentOS/RHEL

新建 `/etc/yum.repos.d/gitlab-runner.repo`，内容为

<tmpl z-lang="ini" z-path="/etc/yum.repos.d/gitlab-runner.repo">
[gitlab-runner]
name=gitlab-runner
baseurl={{endpoint}}/yum/el$releasever-$basearch/
repo_gpgcheck=0
gpgcheck=0
enabled=1
gpgkey=https://packages.gitlab.com/gpg.key
</tmpl>

再执行

<tmpl z-lang="bash">
{{sudo}}yum makecache
{{sudo}}yum install gitlab-runner
</tmpl>
