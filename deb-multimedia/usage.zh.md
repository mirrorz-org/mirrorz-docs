## 使用方法

在 `/etc/apt/sources.list` 中加入

```{ztmpl input="release src" path="/etc/apt/sources.list" append="true"}
deb {{endpoint}}/ {{release}} main non-free
{{src}}deb-src {{endpoint}}/ {{release}} main non-free
{{#backports}}
deb {{endpoint}}/ {{release}}-backports main
{{src}}deb-src {{endpoint}}/ {{release}}-backports main
{{/backports}}
```

更改完 `sources.list` 文件后请导入 deb-multimedia-keyring，然后更新索引以生效。

```{ztmpl lang="bash"}
wget {{endpoint}}/pool/main/d/deb-multimedia-keyring/deb-multimedia-keyring_2024.9.1_all.deb
{{sudo}}dpkg -i deb-multimedia-keyring_2016.8.1_all.deb
{{sudo}}apt-get update
```
