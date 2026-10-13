### 自动选择软件源镜像

[mirrorz-302](https://github.com/mirrorz-org/mirrorz-302) 提供 mirrorlist 接口，会根据你的地理位置、网络、ISP 等条件返回按可用性排序的镜像列表，客户端到列表中排在最前面的镜像拉取软件包，当排在前面的镜像不可用时还会自动回退到后续镜像。相比手动配置单一镜像地址，这种方式能自动为你选择网络条件最佳的镜像。

例如 `BaseOS` 仓库（Rocky Linux 8 的 `/etc/yum.repos.d/Rocky-BaseOS.repo`，或 Rocky Linux 9 及以上版本的 `/etc/yum.repos.d/rocky.repo`），将 `[baseos]` 下的 `mirrorlist=` 修改为：

```{ztmpl lang="ini"}
mirrorlist=https://mirrors.cernet.edu.cn/api/rpm/mirrorlist/rocky/$releasever/BaseOS/$basearch/os/
```

保持 `baseurl=` 为注释状态，其余配置（包括 `gpgcheck`、`gpgkey` 和 `enabled`）不变。接口路径中的 `rocky` 已表示仓库根目录，不需要再添加 `$contentdir`。

也可以使用以下命令修改默认配置：注释原有的官方 `mirrorlist=`，再利用各仓库的 `#baseurl=` 路径生成对应的 CERNET `mirrorlist=`。

对于 Rocky Linux 8：

```{ztmpl lang="bash"}
{{sudo}}sed -e '/^mirrorlist=https\?:\/\/mirrors\.rockylinux\.org\//{
                  s/^/#/
                  n
                  s|^#baseurl=http://dl\.rockylinux\.org/$contentdir/|mirrorlist=https://mirrors.cernet.edu.cn/api/rpm/mirrorlist/rocky/|
              }' -i.bak \
         /etc/yum.repos.d/Rocky-*.repo
```

对于 Rocky Linux 9 及以上版本：

```{ztmpl lang="bash"}
{{sudo}}sed -e '/^mirrorlist=https\?:\/\/mirrors\.rockylinux\.org\//{
                  s/^/#/
                  n
                  s|^#baseurl=http://dl\.rockylinux\.org/$contentdir/|mirrorlist=https://mirrors.cernet.edu.cn/api/rpm/mirrorlist/rocky/|
              }' -i.bak \
         /etc/yum.repos.d/rocky*.repo
```

配置完成后请运行 `{{sudo}}dnf makecache` 更新缓存。
