### Debian/Ubuntu 用户

选择你的 Debian/Ubuntu 版本，文本框中内容写进 `/etc/apt/sources.list.d/chef.list`

<tmpl z-path="/etc/apt/sources.list.d/chef.list">
deb {{endpoint}}/apt/stable {{release}} main
</tmpl>
