### CentOS/RHEL

以下内容根据 [官方文档](https://docs.docker.com/engine/install/centos/) 修改而来。

如果你之前安装过 docker，请先删掉

<tmpl z-lang="bash">
{{sudo}}yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
</tmpl>

安装依赖，下载 repo 文件，并把软件仓库地址替换为镜像站：

<tmpl z-lang="bash" z-input="rh_release">

{{sudo}} yum install -y yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/{{rh_release}}/docker-ce.repo
{{sudo}}sed -i 's+https://download.docker.com+{{endpoint}}+' /etc/yum.repos.d/docker-ce.repo
</tmpl>

最后安装：

<tmpl z-lang="bash">
{{sudo}}yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</tmpl>
