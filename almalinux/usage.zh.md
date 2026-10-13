AlmaLinux 是与 RHEL 兼容的 Linux 发行版。

以下命令适用于 AlmaLinux 8、9、10 的默认仓库配置，将官方 mirrorlist 替换为当前镜像站的地址，并将原文件备份为 `.bak`：

```{ztmpl lang="bash"}
{{sudo}}sed -i.bak -e '/^mirrorlist=https\?:\/\/mirrors\.almalinux\.org\//{
    N
    s|^mirrorlist=[^\n]*\n# *baseurl=https\?://repo\.almalinux\.org/almalinux/|baseurl={{endpoint}}/|
}' /etc/yum.repos.d/almalinux*.repo
```

命令根据默认配置中相邻的 `mirrorlist=` 和 `# baseurl=` 转换地址，不改变仓库的启用状态和 GPG 校验配置。源码及调试仓库使用的 vault 地址保持不变。如果此前已修改过仓库配置，请先检查文件内容。

修改完成后运行以下命令更新缓存：

```{ztmpl lang="bash"}
{{sudo}}dnf makecache
```
