Kubernetes 是用于自动部署，扩展和管理容器化应用程序的开源系统。详情可见 [官方介绍](https://kubernetes.io/zh/)。

在以下 URL 中，所有仓库的公钥均相同，因此只需要将仓库地址中的 `v1.28` 修改为所需的版本。

### Debian / Ubuntu 用户

首先导入 gpg key：

<tmpl z-lang="bash">
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | {{sudo}}gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
</tmpl>

新建 `/etc/apt/sources.list.d/kubernetes.list`，内容为

<tmpl z-input="cri_o" z-path="/etc/apt/sources.list.d/kubernetes.list">
deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] {{endpoint}}/core:/stable:/v1.28/deb/ /
{{cri_o}}deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] {{endpoint}}/addons:/cri-o:/stable:/v1.28/deb/ /
</tmpl>

### RHEL / CentOS 用户

新建 `/etc/yum.repos.d/kubernetes.repo`，内容为：

<tmpl z-input="cri_o" z-lang="ini" z-path="/etc/yum.repos.d/kubernetes.repo">
[kubernetes]
name=kubernetes
baseurl={{endpoint}}/yum/repos/kubernetes-el7-$basearch
name=Kubernetes
baseurl={{endpoint}}/core:/stable:/v1.28/rpm/
enabled=1
gpgcheck=1
gpgkey=https://pkgs.k8s.io/core:/stable:/v1.28/rpm/repodata/repomd.xml.key

{{cri_o}}[cri-o]
{{cri_o}}name=CRI-O
{{cri_o}}baseurl={{endpoint}}/addons:/cri-o:/stable:/v1.28/rpm/
{{cri_o}}enabled=1
{{cri_o}}gpgcheck=1
{{cri_o}}gpgkey=https://pkgs.k8s.io/addons:/cri-o:/prerelease:/main/rpm/repodata/repomd.xml.key
</tmpl>

## Minikube

请到 Minikube 镜像，即一些镜像站的 </github-release/kubernetes/minikube/LatestRelease/> 路径下载。
