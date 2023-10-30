[Oracle Virtualbox](https://www.virtualbox.org/) VirtualBox 是一款开源虚拟机软件。由德国 Innotek 公司开发，Sun Microsystems 公司出品。使用 Qt 编写，在 Sun 被 Oracle 收购后正式更名成 Oracle VM VirtualBox。采用 GPL 协议开源。

## Microsoft Windows

<tmpl>
# Windows 最新版
{{endpoint}}/virtualbox-Win-latest.exe
</tmpl>

## Macintosh OS X

<tmpl>
# OS X 最新版
{{endpoint}}/virtualbox-osx-latest.dmg
</tmpl>

# Linux

## 通过编译好的二进制包安装

<tmpl>
{{endpoint}}
</tmpl>

访问该镜像下最新的目录（例如`5.0.24`），找到名为 发行版名称~发行代号~架构 的文件。

如 `virtualbox-5.0_5.0.24-108355~Ubuntu~xenial_i386.deb` 下载安装即可。

目前支持的系统有：

* Ubuntu
* Debian
* Fedora
* openSUSE
* SUSE Linux Enterprise Server
* Oracle Linux / Red Hat Enterprise Linux / CentOS

如果您所使用的发行版不在上述列表之内，请下载通用的`run`文件（例如`VirtualBox-5.0.24-108355-Linux_x86.run`），然后使用 `chmod +x` 给予执行权限后，直接安装即可。

### 通过包管理器安装

#### Debian / Ubuntu 用户

首先信任 Virtualbox 的 GPG 公钥：

对于 Debian 8 和 Ubuntu 16.04 及以上：

<tmpl z-lang="bash">
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | {{sudo}}apt-key add -
</tmpl>

其他版本

<tmpl z-lang="bash">
wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | {{sudo}}apt-key add -
</tmpl>

再选择你的 Debian/Ubuntu 版本，将文本框中内容写进`/etc/apt/sources.list.d/virtualbox.list`

<tmpl z-input="release" z-path="/etc/apt/sources.list.d/virtualbox.list">
deb {{endpoint}}/apt/ {{release}} contrib
</tmpl>

安装 VirtualBox:

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install virtualbox
# 此时会列出具体可用版本，选择所需版本安装
</tmpl>

### RHEL/CentOS 用户


新建 `/etc/yum.repos.d/virtualbox.repo`，内容为

<tmpl z-lang="ini" z-path="/etc/yum.repos.d/virtualbox.repo">
[virtualbox]
name=Virtualbox Repository
baseurl={{endpoint}}/rpm/el$releasever/
gpgcheck=0
enabled=1
</tmpl>

刷新缓存并安装 `virtualbox` 即可。

<tmpl z-lang="bash">
{{sudo}}yum makecache
{{sudo}}yum search VirtualBox
# 此时会列出具体可用版本，选择所需版本安装即可
</tmpl>
