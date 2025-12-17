### Debian/Ubuntu/Raspbian 用户

以下内容根据 [官方文档](https://docs.docker.com/engine/install/debian/) 修改而来。

如果你过去安装过 docker，先删掉：

<tmpl z-lang="bash">
{{sudo}}apt remove $(dpkg --get-selections docker.io docker-compose docker-doc podman-docker containerd runc | cut -f1)
</tmpl>

首先安装依赖：

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install ca-certificates curl
</tmpl>

信任 Docker 的 GPG 公钥并添加仓库：

<tmpl z-lang="bash" z-input="deb_release">
{{sudo}}install -m 0755 -d /etc/apt/keyrings
{{sudo}}curl -fsSL https://download.docker.com/linux/{{deb_release}}/gpg -o /etc/apt/keyrings/docker.asc
{{sudo}}chmod a+r /etc/apt/keyrings/docker.asc
{{sudo}}tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: {{endpoint}}/linux/{{deb_release}}
Suites: $(. /etc/os-release && echo "$VERSION_CODENAME")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF
</tmpl>

最后安装

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</tmpl>
