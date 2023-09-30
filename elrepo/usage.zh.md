## 使用方法

首先按照[官网的安装说明](https://elrepo.org/tiki/tiki-index.php)，配置 ELRepo：

<tmpl z-lang="bash">
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
</tmpl>

接着，按照你的系统版本，运行：

<tmpl z-lang="bash" z-input="release">
yum install https://www.elrepo.org/elrepo-release-{{version}}.{{release}}.elrepo.noarch.rpm
</tmpl>

接下来是换源，建议先备份 `/etc/yum.repos.d/elrepo.repo` ：

<tmpl z-lang="bash">
{{sudo}}cp /etc/yum.repos.d/elrepo.repo /etc/yum.repos.d/elrepo.repo.bak
</tmpl>

然后编辑 /etc/yum.repos.d/elrepo.repo 文件，在 `mirrorlist=` 开头的行前面加 `#` 注释掉；并将 `http://elrepo.org/linux` 替换为

<tmpl>
{{endpoint}}
</tmpl>

最后，更新软件包缓存

<tmpl z-lang="bash">
{{sudo}}yum makecache
</tmpl>
