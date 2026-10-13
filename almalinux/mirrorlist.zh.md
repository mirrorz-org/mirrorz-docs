### 自动选择软件源镜像

[mirrorz-302](https://github.com/mirrorz-org/mirrorz-302) 提供 mirrorlist 接口，根据网络条件返回镜像列表，DNF 可在镜像不可用时尝试列表中的其他镜像。

例如 `BaseOS` 仓库（AlmaLinux 8 的 `/etc/yum.repos.d/almalinux.repo`，或 AlmaLinux 9、10 的 `/etc/yum.repos.d/almalinux-baseos.repo`），将 `[baseos]` 下的 `mirrorlist=` 修改为：

```{ztmpl lang="ini"}
mirrorlist=https://mirrors.cernet.edu.cn/api/rpm/mirrorlist/almalinux/$releasever/BaseOS/$basearch/os/
```

保持 `baseurl=` 为注释状态，其余配置（包括 `gpgcheck`、`gpgkey` 和 `enabled`）不变。接口路径使用仓库目录名，例如 `BaseOS` 和 `AppStream`，不能直接使用官方 mirrorlist 中的 `baseos` 和 `appstream`。

也可以使用以下命令批量修改 AlmaLinux 8、9、10 的默认配置，并将原文件备份为 `.bak`：

```{ztmpl lang="bash"}
{{sudo}}sed -i.bak -e '/^mirrorlist=https\?:\/\/mirrors\.almalinux\.org\//{
    N
    s|^mirrorlist=[^\n]*\n# *baseurl=https\?://repo\.almalinux\.org/almalinux/|mirrorlist=https://mirrors.cernet.edu.cn/api/rpm/mirrorlist/almalinux/|
}' /etc/yum.repos.d/almalinux*.repo
```

命令根据默认配置中相邻的 `mirrorlist=` 和 `# baseurl=` 生成地址，不改变仓库的启用状态和 GPG 校验配置。源码及调试仓库使用的 vault 地址保持不变。如果此前已修改过仓库配置，请先检查文件内容。

修改完成后运行以下命令更新缓存：

```{ztmpl lang="bash"}
{{sudo}}dnf makecache
```
