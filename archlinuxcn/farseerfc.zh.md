### 新系统中安装 archlinuxcn-keyring 包前的额外步骤

2023 年 12 月后，在新系统下安装 `archlinuxcn-keyring` 时可能会出现错误：

```
error: archlinuxcn-keyring: Signature from "Jiachen YANG (Arch Linux Packager Signing Key) " is marginal trust
```

需要在本地信任 farseerfc 的 GPG key：

<tmpl z-lang="bash">
{{sudo}}pacman-key --lsign-key "farseerfc@archlinux.org"
</tmpl>

然后重试安装。详情参见 [新系统中安装 archlinuxcn-keyring 包前需要手动信任 farseerfc 的 key](https://www.archlinuxcn.org/archlinuxcn-keyring-manually-trust-farseerfc-key/)。

