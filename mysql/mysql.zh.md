首先选择要安装的版本：

<tmpl z-global z-input="version"></tmpl>

### Debian/Ubuntu 用户

再选择你的 Debian/Ubuntu 版本，文本框中内容写进 `/etc/apt/sources.list.d/mysql-community.list`

<tmpl z-input="deb_release" z-path="/etc/apt/sources.list.d/mysql-community.list">
deb {{endpoint}}/apt/{{os}} {{deb_release}} mysql-{{version}} mysql-tools
</tmpl>

参考文档：https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/

### RHEL/CentOS 用户

新建 `/etc/yum.repos.d/mysql-community.repo`，内容如下：

<tmpl z-lang="ini" z-input="rh_release" z-path="/etc/yum.repos.d/mysql-community.repo">
[mysql-connectors-community]
name=MySQL Connectors Community
baseurl={{endpoint}}/yum/mysql-connectors-community-{{rh_release}}-$basearch/
enabled=1
gpgcheck=1
gpgkey=https://repo.mysql.com/RPM-GPG-KEY-mysql
       https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
       https://repo.mysql.com/RPM-GPG-KEY-mysql-2023

[mysql-tools-community]
name=MySQL Tools Community
baseurl={{endpoint}}/yum/mysql-tools-community-{{rh_release}}-$basearch/
enabled=1
gpgcheck=1
gpgkey=https://repo.mysql.com/RPM-GPG-KEY-mysql
       https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
       https://repo.mysql.com/RPM-GPG-KEY-mysql-2023

[mysql-{{version}}-community]
name=MySQL {{version}} Community Server
baseurl={{endpoint}}/yum/mysql-{{version}}-community-{{rh_release}}-$basearch/
enabled=1
gpgcheck=1
gpgkey=https://repo.mysql.com/RPM-GPG-KEY-mysql
       https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
       https://repo.mysql.com/RPM-GPG-KEY-mysql-2023
</tmpl>

参考文档：https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/
