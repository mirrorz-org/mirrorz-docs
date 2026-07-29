完整的包列表（含二进制包状态）请[点击这里](https://distfiles.gentoozh.org/packages)查看。

## 启用 overlay

先启用 overlay，二进制包与 distfiles 都只是加速下载：

```{ztmpl lang="bash"}
{{sudo}}emerge --oneshot app-eselect/eselect-repository
{{sudo}}eselect repository enable gentoo-zh
{{sudo}}emerge --sync gentoo-zh
```

overlay 本身也有 Git 镜像，见 [gentoo-zh Overlay Git](../gentoo-zh.git/)。

## Distfiles

追加到 `/etc/portage/make.conf`：

```{ztmpl path="/etc/portage/make.conf" append="true"}
GENTOO_MIRRORS="${GENTOO_MIRRORS} {{endpoint}}"
```

只有 overlay 的源码，不能替代官方源，因此是追加。地址不写 `distfiles/`，Portage 会自己补上。官方源见 [Gentoo 软件仓库](../gentoo/)。

## 二进制包

上游每晚构建并签名，目前只有 amd64。

### 导入签名公钥

Portage 用自己的密钥环 `/etc/portage/gnupg`，该目录由 `getuto` 建立，顺序不能颠倒：

```{ztmpl lang="bash"}
{{sudo}}emerge sec-keys/openpgp-keys-gentoozh
{{sudo}}getuto
{{sudo}}gpg --homedir /etc/portage/gnupg --import /usr/share/openpgp-keys/gentoozh.asc
{{sudo}}gpg --homedir /etc/portage/gnupg --batch --yes --pinentry-mode loopback \
    --passphrase-file /etc/portage/gnupg/pass \
    --lsign-key 6A0726AF1476A2F382C6AC6638A0234EC16AD42E
{{sudo}}gpg --homedir /etc/portage/gnupg --check-trustdb
```

验签以 `portage` 用户执行，它对 trustdb 没有写入权限，所以要先 `--check-trustdb` 算好。

### 添加仓库

写入 `/etc/portage/binrepos.conf/gentoo-zh.conf`：

```{ztmpl path="/etc/portage/binrepos.conf/gentoo-zh.conf"}
[gentoo-zh]
sync-uri = {{endpoint}}/binpkgs/x86-64
priority = 10
verify-signature = true
location = /var/cache/binhost/gentoo-zh
```

用 `binrepos.conf` 而不是 `PORTAGE_BINHOST`：后者是隐式仓库，无法单独设置 `verify-signature`。

### 打开 getbinpkg

追加到 `/etc/portage/make.conf`：

```{ztmpl path="/etc/portage/make.conf" append="true"}
FEATURES="${FEATURES} getbinpkg"
```

不要用全局的 `FEATURES=binpkg-request-signature`，它会覆盖上一步的 `verify-signature`，并要求本机 `buildpkg` 编出的包也带签名，那些包默认没有签名，每次本地构建都会报 `GnuPG verification failed`。

若 `emerge` 仍编译源码，用 `emerge -pv` 检查，前缀为 `[binary]` 才是采用了二进制包；USE 不完全匹配时 Portage 不会用。

上游说明：<https://distfiles.gentoozh.org>
