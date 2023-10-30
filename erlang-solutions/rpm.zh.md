### CentOS 用户

首先信任 erlang-solutions 的 GPG 公钥：

<tmpl z-lang="bash">
{{sudo}}rpm --import https://packages.erlang-solutions.com/rpm/erlang_solutions.asc
</tmpl>

新建 `/etc/yum.repos.d/erlang-solutions.repo`，内容为

<tmpl z-lang="ini" z-path="/etc/yum.repos.d/erlang-solutions.repo">
[erlang-solutions]
name=CentOS $releasever - Erlang Solutions
baseurl={{endpoint}}/centos/$releasever/
gpgcheck=1
gpgkey=https://packages.erlang-solutions.com/rpm/erlang_solutions.asc
enabled=1
</tmpl>

刷新缓存并安装 `erlang` 即可。

<tmpl z-lang="bash">
{{sudo}}yum makecache
{{sudo}}yum install erlang
</tmpl>
