### Fedora

以下内容根据 [官方文档](https://docs.docker.com/engine/install/fedora/) 修改而来。

如果你之前安装过 docker，请先删掉：

```{ztmpl lang="bash"}
{{sudo}}dnf remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

安装依赖，下载 repo 文件，并把软件仓库地址替换为镜像站：

```{ztmpl lang="bash"}
{{sudo}}dnf config-manager addrepo --from-repofile https://download.docker.com/linux/fedora/docker-ce.repo
{{sudo}}sed -i 's+https://download.docker.com+{{endpoint}}+' /etc/yum.repos.d/docker-ce.repo
```

最后安装：

```{ztmpl lang="bash"}
{{sudo}}dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
