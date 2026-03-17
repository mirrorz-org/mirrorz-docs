## 使用方法

首先按照[官网的安装说明](https://elrepo.org/tiki/tiki-index.php)，配置 ELRepo：

```{ztmpl lang="bash"}
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
```

接着，按照你的系统版本，运行：

```{ztmpl lang="bash" input="release"}
yum install https://www.elrepo.org/elrepo-release-{{version}}.{{release}}.elrepo.noarch.rpm
```

接下来是换源，建议先备份 `/etc/yum.repos.d/elrepo.repo` ：

```{ztmpl lang="bash"}
{{sudo}}cp /etc/yum.repos.d/elrepo.repo /etc/yum.repos.d/elrepo.repo.bak
```

然后编辑 /etc/yum.repos.d/elrepo.repo 文件，在 `mirrorlist=` 开头的行前面加 `#` 注释掉；并将 `http://elrepo.org/linux` 替换为

```{ztmpl}
{{endpoint}}
```

最后，更新软件包缓存

```{ztmpl lang="bash"}
{{sudo}}yum makecache
```
