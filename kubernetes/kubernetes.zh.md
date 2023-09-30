Kubernetes 是用于自动部署，扩展和管理容器化应用程序的开源系统。详情可见 [官方介绍](https://kubernetes.io/zh/)。

**硬件架构：`x86_64`, `armhfp`, `aarch64`**

### Debian/Ubuntu 用户

首先导入 gpg key：

<tmpl z-lang="bash">
{{sudo}}curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://dl.k8s.io/apt/doc/apt-key.gpg
</tmpl>

新建 `/etc/apt/sources.list.d/kubernetes.list`，内容为

<tmpl z-path="/etc/apt/sources.list.d/kubernetes.list">
deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] {{endpoint}}/apt kubernetes-xenial main
</tmpl>

### RHEL/CentOS 用户

新建 `/etc/yum.repos.d/kubernetes.repo`，内容为：

<tmpl z-lang="ini" z-path="/etc/yum.repos.d/kubernetes.repo">
[kubernetes]
name=kubernetes
baseurl={{endpoint}}/yum/repos/kubernetes-el7-$basearch
enabled=1
</tmpl>

## Minikube

请到 minikube 镜像，即一些镜像站的 `/github-release/kubernetes/minikube/LatestRelease/` 路径下载。
