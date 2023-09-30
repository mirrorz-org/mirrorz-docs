### RHEL/CentOS 用户

新建 `/etc/yum.repos.d/chef.repo`，内容为：

<tmpl z-lang="ini" z-path="/etc/yum.repos.d/chef.repo">
[chef-stable]
name=chef-stable
baseurl={{endpoint}}/yum/stable/stable-el$releasever-x86_64/
enabled=1
gpgcheck=1
gpgkey=https://packages.chef.io/chef.asc
</tmpl>
