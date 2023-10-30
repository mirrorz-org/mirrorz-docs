## 使用方法

在 `/etc/apt/sources.list` 中加入

<tmpl z-input="release src" z-path="/etc/apt/sources.list" z-append>
deb {{endpoint}}/ {{release}} main non-free
{{src}}deb-src {{endpoint}}/ {{release}} main non-free
{{#backports}}
deb {{endpoint}}/ {{release}}-backports main
{{src}}deb-src {{endpoint}}/ {{release}}-backports main
{{/backports}}
</tmpl>

更改完 `sources.list` 文件后请导入 deb-multimedia-keyring ，然后更新索引以生效。

<tmpl z-lang="bash">
wget {{endpoint}}/pool/main/d/deb-multimedia-keyring/deb-multimedia-keyring_2016.8.1_all.deb
{{sudo}}dpkg -i deb-multimedia-keyring_2016.8.1_all.deb
{{sudo}}apt-get update
</tmpl>
