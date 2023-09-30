## Debian/Ubuntu 用户

首先请安装依赖：

<tmpl z-lang="bash">
{{sudo}}apt-get update && {{sudo}}apt-get install -y wget apt-transport-https
</tmpl>

然后信任 GPG 公钥：

<tmpl z-lang="bash">
wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | {{sudo}}tee /etc/apt/keyrings/adoptium.asc
</tmpl>

随后将下列内容添加到 `/etc/apt/sources.list.d/adoptium.list` ：

<tmpl z-input="release" z-path="/etc/apt/sources.list.d/adoptium.list">
deb [signed-by=/etc/apt/keyrings/adoptium.asc] {{endpoint}}/deb {{release}} main
</tmpl>

再执行

<tmpl z-lang="bash">
{{sudo}}apt-get update
</tmpl>

之后可以安装软件包，例如：

<tmpl z-lang="bash">
{{sudo}}apt-get install temurin-17-jdk
</tmpl>
