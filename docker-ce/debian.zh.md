### Debian/Ubuntu/Raspbian 用户

以下内容根据 [官方文档](https://docs.docker.com/engine/install/debian/) 修改而来。

如果你过去安装过 docker，先删掉：

<tmpl z-lang="bash">
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do {{sudo}}apt-get remove $pkg; done
</tmpl>

首先安装依赖：

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install ca-certificates curl gnupg
</tmpl>

信任 Docker 的 GPG 公钥并添加仓库：

<tmpl z-lang="bash" z-input="deb_release">
{{sudo}}install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/{{deb_release}}/gpg | {{sudo}}gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] {{endpoint}}/linux/{{deb_release}} \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  {{sudo}}tee /etc/apt/sources.list.d/docker.list > /dev/null
</tmpl>

最后安装

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</tmpl>
