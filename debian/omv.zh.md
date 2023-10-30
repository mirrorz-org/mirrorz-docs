## OpenMediaVault

本节供 [OpenMediaVault 帮助](../OpenMediaVault/)使用。

<tmpl data-lang="bash">
omv-env set OMV_APT_KERNEL_BACKPORTS_REPOSITORY_URL "{{endpoint}}"
omv-env set OMV_APT_SECURITY_REPOSITORY_URL "{{endpoint}}-security"
</tmpl>

关于 debian-security 可以参考上文的说明。
