首先选择你要安装的版本：

<tmpl z-global z-input="version"></tmpl>

### Debian/Ubuntu 用户

选择你的 Debian/Ubuntu 版本，文本框中内容写进 `/etc/apt/sources.list.d/rudder.list`

<tmpl z-input="release" z-path="/etc/apt/sources.list.d/rudder.list">
deb {{endpoint}}/apt/{{version}} {{release}} main
</tmpl>

### RHEL/CentOS 用户

新建 `/etc/yum.repos.d/rudder.repo`，内容为：

<tmpl z-lang="ini" z-path="/etc/yum.repos.d/rudder.repo">
[Rudder_{{version}}]
name=Rudder {{version}}
baseurl={{endpoint}}/rpm/rudder{{version}}-RHEL_$releasever/
enabled=1
gpgcheck=1
gpgkey=https://repository.rudder.io/rpm/rudder_rpm_key.pub
</tmpl>
