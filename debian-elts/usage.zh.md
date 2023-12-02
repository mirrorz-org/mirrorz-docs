## 使用方法

在使用前，请确保你的系统正在 ELTS 列表中。

首先安装 Freexian 的 APT 源密钥：

<tmpl z-lang="bash">
wget https://deb.freexian.com/extended-lts/archive-key.gpg -O /tmp/elts-archive-key.gpg
mv /tmp/elts-archive-key.gpg /etc/apt/trusted.gpg.d/freexian-archive-extended-lts.gpg
</tmpl>

此后，**删除** `/etc/apt/sources.list` 中的所有的 Debian 源（可能包括 `foo`, `foo-updates`, `foo-backports`, `foo-security` 等多个来源，其中 `foo` 为版本代号），替换为：

<tmpl z-input="release nf">
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb {{endpoint}} {{release}} main contrib{{#nf}}{{nonfree}}{{/nf}}
</tmpl>

提醒：旧版 Debian 如需使用 HTTPS 源，需要安装 `apt-transport-https` 包，并需要对应更新根证书，否则可能无法访问大多数镜像站。详情可参见 TUNA issues 上的[相应讨论](https://github.com/tuna/issues/issues/1342#issuecomment-931412628)。
