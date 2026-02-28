### CentOS / Rocky Linux 用户

官方目前没有提供软件仓库，请前往[官网](https://www.erlang-solutions.com/downloads/) 下载。

<!-- 首先信任 erlang-solutions 的 GPG 公钥：

```{ztmpl lang="bash"}
{{sudo}}rpm --import https://packages.erlang-solutions.com/rpm/erlang_solutions.asc
```

新建 `/etc/yum.repos.d/erlang-solutions.repo`，内容为

```{ztmpl lang="ini" path="/etc/yum.repos.d/erlang-solutions.repo"}
[erlang-solutions]
name=CentOS $releasever - Erlang Solutions
baseurl={{endpoint}}/centos/$releasever/
gpgcheck=1
gpgkey=https://packages.erlang-solutions.com/rpm/erlang_solutions.asc
enabled=1
```

刷新缓存并安装 `erlang` 即可。

```{ztmpl lang="bash"}
{{sudo}}yum makecache
{{sudo}}yum install erlang
``` -->
