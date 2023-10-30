本镜像仅包含 32/64 位 x86 架构处理器的软件包，在 ARM(arm64, armhf)、PowerPC(ppc64el)、RISC-V(riscv64) 和 S390x 等架构的设备上（对应官方源为 ports.ubuntu.com）请使用 [ubuntu-ports 镜像](../ubuntu-ports/)。

对于 Ubuntu 不再支持的版本，请参考 [Ubuntu 旧版本帮助](../ubuntu-old-releases/)。

Ubuntu 的软件源配置文件是 `/etc/apt/sources.list`。将系统自带的该文件做个备份，将该文件替换为下面内容，即可使用选择的软件源镜像。

<tmpl z-input="release src proposed mirror_security" z-path="/etc/apt/sources.list">
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb {{endpoint}}/ {{release}} main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ {{release}} main restricted universe multiverse
deb {{endpoint}}/ {{release}}-updates main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ {{release}}-updates main restricted universe multiverse
deb {{endpoint}}/ {{release}}-backports main restricted universe multiverse
{{src}}deb-src {{endpoint}}/ {{release}}-backports main restricted universe multiverse

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

因镜像站同步有延迟，可能会导致生产环境系统不能及时检查、安装上最新的安全更新，不建议替换 security 源。
