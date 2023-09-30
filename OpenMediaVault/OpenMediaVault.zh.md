Open Media Vault 是一款基于 Debian 的 NAS 操作系统，本站提供 OpenMediaVault 的镜像，以加快国内访问速度。

以下方法自 5.6.3-1 开始可用（2021-04-07）

### 替换 Open Media Vault 镜像源

登录到已经部署的 Open Media Vault 使用如下命令可以替换 Open Media Vault 镜像源。

其中的非 OpenMediaVault 部分的镜像站需要分别在 [Debian 帮助](../debian/)，[Docker CE 帮助](../docker-ce/)，和 [Proxmox 帮助](../proxmox/) 中构造。

<tmpl z-lang="bash">
omv-env set OMV_APT_REPOSITORY_URL "{{endpoint}}/public"
omv-env set OMV_APT_ALT_REPOSITORY_URL "{{endpoint}}/packages"
# 前往其他帮助文档修改
#omv-env set OMV_APT_KERNEL_BACKPORTS_REPOSITORY_URL "https://mirror/debian"
#omv-env set OMV_APT_SECURITY_REPOSITORY_URL "https://mirror/debian-security"
# 如果你有安装 omv-extras 则需要运行如下命令更改源
omv-env set OMV_EXTRAS_APT_REPOSITORY_URL "{{endpoint}}/openmediavault-plugin-developers"
#omv-env set OMV_DOCKER_APT_REPOSITORY_URL "https://mirror/docker-ce/linux/debian"
#omv-env set OMV_PROXMOX_APT_REPOSITORY_URL "https://mirror/proxmox/debian"
# 使得环境变量更改生效
omv-salt stage run all
</tmpl>

1. 由于 Open Media Vault 自带 kernel backports 因此在 `/etc/apt/source.list` 中配置 backports 源会造成冲突。
2. 由于 Open Media Vault 的公钥分发通过源自己携带完成，因此本身存在被篡改的可能性，故在换源后用户需要通过其他渠道验证获取的公钥的正确性。

### 首次部署 Open Media Vault

对于首次部署操作步骤以 https://openmediavault.readthedocs.io/en/latest/installation/on_debian.html 为准

我们仅对 **Add the package repositories** 段落做出如下调整

<tmpl z-input="release proposed partner" z-path="/etc/apt/sources.list.d/openmediavault.list">
deb {{endpoint}}/public {{release}} main
deb {{endpoint}}/packages {{release}} main
## Uncomment the following line to add software from the proposed repository.
{{proposed}}deb {{endpoint}}/public {{release}}-proposed main
{{proposed}}deb {{endpoint}}/packages {{release}}-proposed main
## This software is not part of OpenMediaVault, but is offered by third-party
## developers as a service to OpenMediaVault users.
{{partner}}deb {{endpoint}}/public {{release}} partner
{{partner}}deb {{endpoint}}/packages {{release}} partner
</tmpl>
