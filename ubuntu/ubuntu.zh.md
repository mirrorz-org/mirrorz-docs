本镜像仅包含 32/64 位 x86 架构处理器的软件包，在 ARM(arm64, armhf)、PowerPC(ppc64el)、RISC-V(riscv64) 和 S390x 等架构的设备上（对应官方源为 ports.ubuntu.com）请使用 [ubuntu-ports 镜像](../ubuntu-ports/)。

对于 Ubuntu 不再支持的版本，请参考 [Ubuntu 旧版本帮助](../ubuntu-old-releases/)。

在 Ubuntu 24.04 之前，Ubuntu 的软件源配置文件使用传统的 One-Line-Style，路径为 `/etc/apt/sources.list`；从 Ubuntu 24.04 开始，Ubuntu 的软件源配置文件变更为 DEB822 格式，路径为 `/etc/apt/sources.list.d/ubuntu.sources`。

将系统自带的对应文件做个备份，然后根据格式的选择下面对应的内容替换，即可使用选择的软件源镜像。

### 传统格式（`/etc/apt/sources.list`）

<tmpl z-input="release src proposed mirror_security" z-path="/etc/apt/sources.list">
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb {{endpoint}}/ {{release}} main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ {{release}} main restricted universe multiverse
deb {{endpoint}}/ {{release}}-updates main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ {{release}}-updates main restricted universe multiverse
deb {{endpoint}}/ {{release}}-backports main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ {{release}}-backports main restricted universe multiverse

# 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换
{{#mirror_security}}
deb {{endpoint}}/ {{release}}-security main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ {{release}}-security main restricted universe multiverse
{{/mirror_security}}
{{^mirror_security}}
deb http://security.ubuntu.com/ubuntu/ {{release}}-security main restricted universe multiverse
{{src}}deb-src http://security.ubuntu.com/ubuntu/ {{release}}-security main restricted universe multiverse
{{/mirror_security}}

# 预发布软件源，不建议启用
{{proposed}}deb {{endpoint}}/ {{release}}-proposed main restricted universe multiverse
{{proposed}}{{src}}deb-src {{endpoint}}/ {{release}}-proposed main restricted universe multiverse
</tmpl>

### DEB822 格式（`/etc/apt/sources.list.d/ubuntu.sources`）

<tmpl z-input="release_deb822 src proposed mirror_security" z-path="/etc/apt/sources.list.d/ubuntu.sources">
Types: deb
URIs: {{endpoint}}
Suites: {{release_deb822}} {{release_deb822}}-updates {{release_deb822}}-backports
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
{{src}}Types: deb-src
{{src}}URIs: {{endpoint}}
{{src}}Suites: {{release_deb822}} {{release_deb822}}-updates {{release_deb822}}-backports
{{src}}Components: main restricted universe multiverse
{{src}}Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

# 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换
{{#mirror_security}}
Types: deb
URIs: {{endpoint}}
Suites: {{release_deb822}}-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

{{src}}Types: deb-src
{{src}}URIs: {{endpoint}}
{{src}}Suites: {{release_deb822}}-security
{{src}}Components: main restricted universe multiverse
{{src}}Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
{{/mirror_security}}
{{^mirror_security}}
Types: deb
URIs: http://security.ubuntu.com/ubuntu/
Suites: {{release_deb822}}-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

{{src}}Types: deb-src
{{src}}URIs: http://security.ubuntu.com/ubuntu/
{{src}}Suites: {{release_deb822}}-security
{{src}}Components: main restricted universe multiverse
{{src}}Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
{{/mirror_security}}

# 预发布软件源，不建议启用

{{proposed}}Types: deb
{{proposed}}URIs: {{endpoint}}
{{proposed}}Suites: {{release_deb822}}-proposed
{{proposed}}Components: main restricted universe multiverse
{{proposed}}Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg

{{proposed}}{{src}}Types: deb-src
{{proposed}}{{src}}URIs: {{endpoint}}
{{proposed}}{{src}}Suites: {{release_deb822}}-proposed
{{proposed}}{{src}}Components: main restricted universe multiverse
{{proposed}}{{src}}Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
</tmpl>

因镜像站同步有延迟，可能会导致生产环境系统不能及时检查、安装上最新的安全更新，不建议替换 security 源。
