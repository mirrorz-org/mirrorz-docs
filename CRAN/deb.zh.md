## Debian/Ubuntu 下添加 CRAN 镜像安装 R

参考如下链接中 README 里的步骤

<tmpl>
# Debian 帮助
{{endpoint}}/bin/linux/debian/
# Ubuntu 帮助
{{endpoint}}/bin/linux/ubuntu/fullREADME.html
</tmpl>

编辑 `/etc/apt/sources.list.d/r-mirror.list`

<tmpl z-path="/etc/apt/sources.list.d/r-mirror.list" z-input="release version">
deb {{endpoint}}/bin/linux/{{os}} {{release}}-{{version}}/
</tmpl>

然后运行

<tmpl z-lang="bash">
# Debian 用户添加该公钥
gpg --keyserver keyserver.ubuntu.com --recv-key '95C0FAF38DB3CCAD0C080A7BDC78B2DDEABC47B7'
gpg --armor --export '95C0FAF38DB3CCAD0C080A7BDC78B2DDEABC47B7' | {{sudo}} tee /etc/apt/trusted.gpg.d/cran_debian_key.asc
# Ubuntu 用户添加该公钥
wget -qO- {{endpoint}}/bin/linux/ubuntu/marutter_pubkey.asc | {{sudo}} tee -a /etc/apt/trusted.gpg.d/cran_ubuntu_key.asc
# 更新软件包
{{sudo}}apt-get update
{{sudo}}apt-get install r-base-dev
</tmpl>
