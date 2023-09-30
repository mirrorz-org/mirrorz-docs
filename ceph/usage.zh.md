## 使用方法

请参考[Ceph 官方安装教程](https://docs.ceph.com/en/latest/install/get-packages/)，只需要把文档中出现的 `download.ceph.com` 替换为以下链接即可。

<tmpl>
{{endpoint}}
</tmpl>

以 Debian Buster 为例，举例如下：

<tmpl z-lang="bash">
wget -q -O- 'https://download.ceph.com/keys/release.asc' | {{sudo}}apt-key add -
{{sudo}}apt-add-repository 'deb {{endpoint}}/debian-octopus/ buster main'
{{sudo}}apt update
</tmpl>
