### Centos / Redhat 用户

新建 `/etc/yum.repos.d/grafana.repo`，内容为

<tmpl z-lang="ini" z-input="version" z-path="/etc/yum.repos.d/grafana.repo">
[grafana]
name=grafana
baseurl={{endpoint}}/yum/rpm
repo_gpgcheck=0
enabled=1
gpgcheck=0
{{^beta}}
exclude=*beta*
{{/beta}}
</tmpl>

再执行

<tmpl z-lang="bash">
{{sudo}}yum makecache
{{sudo}}yum install grafana
</tmpl>
