### Debian/Ubuntu/Raspbian 用户

以下内容根据 [官方文档](https://docs.docker.com/engine/install/debian/) 修改而来。

如果你过去安装过 docker，先删掉：

```{ztmpl lang="bash"}
{{sudo}}apt remove $(dpkg --get-selections docker.io docker-compose docker-doc podman-docker containerd runc | cut -f1)
```

首先安装依赖：

```{ztmpl lang="bash"}
{{sudo}}apt-get update
{{sudo}}apt-get install ca-certificates curl
```

信任 Docker 的 GPG 公钥并添加仓库：

```{ztmpl lang="bash" input="deb_release"}
{{sudo}}install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/{{deb_release}}/gpg | {{sudo}}gpg --dearmor -o /etc/apt/keyrings/docker.gpg
{{sudo}}chmod a+r /etc/apt/keyrings/docker.gpg
{{sudo}}tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: {{endpoint}}/linux/{{deb_release}}
Suites: $(. /etc/os-release && echo "$VERSION_CODENAME")
Components: stable
Signed-By: /etc/apt/keyrings/docker.gpg
EOF
```

最后安装

```{ztmpl lang="bash"}
{{sudo}}apt-get update
{{sudo}}apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
