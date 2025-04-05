MongoDB 镜像自 MongoDB [官方仓库](https://repo.mongodb.org/)，目前有 RHEL/CentOS, Ubuntu, Debian 的镜像，支持 amd64, i386, arm64 架构。

更详细的内容，可以参考 [官方文档](https://docs.mongodb.org/master/administration/install-on-linux/)

### Debian/Ubuntu 用户

首先选择要安装的版本

<tmpl z-global z-input="version"></tmpl>

信任 MongoDB 的 GPG 公钥：

<tmpl z-lang="bash">
wget -qO - https://www.mongodb.org/static/pgp/server-{{version}}.asc | {{sudo}}gpg -o /etc/apt/keyrings/mongodb-server-{{version}}.gpg --dearmor
</tmpl>

再选择你的 Debian / Ubuntu 版本，文本框中内容写进 `/etc/apt/sources.list.d/mongodb.list`

<tmpl z-input="release" z-path="/etc/apt/sources.list.d/mongodb.list">
deb [signed-by=/etc/apt/keyrings/mongodb-server-{{version}}.gpg] {{endpoint}}/apt/{{os}} {{release}}/mongodb-org/{{version}} {{repo}}
</tmpl>

安装 `mongodb-org` 即可

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install -y mongodb-org
</tmpl>

### RHEL/CentOS 用户


新建 `/etc/yum.repos.d/mongodb.repo`，内容为

<tmpl z-path="/etc/yum.repos.d/mongodb.repo" z-lang="ini">
[mongodb-org]
name=MongoDB Repository
baseurl={{endpoint}}/yum/el$releasever/
gpgcheck=0
enabled=1
</tmpl>

刷新缓存并安装 `mongodb-org` 即可。

<tmpl z-lang="bash">
{{sudo}}yum makecache
{{sudo}}yum install mongodb-org
</tmpl>
