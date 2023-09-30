### Debian 软件源

参考 [Debian 帮助](../debian/) 修改 `/etc/apt/sources.list`。

### 软件源

新建 `/etc/apt/sources.list.d/pve-no-subscription.list`（如果选择的不是 pve，需要使用另一个文件名），内容为：

<tmpl z-input="release service" z-path="/etc/apt/sources.list.d/pve-no-subscription.list">
deb {{endpoint}}/debian/{{service}} {{release}} {{service}}-no-subscription
</tmpl>

注意快速配置中的文件名需要根据需求而修改。

### ISO 安装文件下载

<tmpl>
{{endpoint}}/iso/
</tmpl>

### CT Templates

如果你需要加速 Proxmox 网页端下载 CT Templates，可以替换 CT Templates 的源。

具体方法：将 `/usr/share/perl5/PVE/APLInfo.pm` 文件中默认的源地址 `http://download.proxmox.com`
替换为

<tmpl>
{{endpoint}}
</tmpl>


可以使用如下命令修改：

<tmpl z-lang="bash">
cp /usr/share/perl5/PVE/APLInfo.pm /usr/share/perl5/PVE/APLInfo.pm_back
sed -i 's|http://download.proxmox.com|{{endpoint}}|g' /usr/share/perl5/PVE/APLInfo.pm
</tmpl>

针对 `/usr/share/perl5/PVE/APLInfo.pm` 文件的修改，重启后生效。

## OpenMediaVault

本节供 [OpenMediaVault 帮助](../OpenMediaVault/)使用。

<tmpl z-lang="bash">
omv-env set OMV_PROXMOX_APT_REPOSITORY_URL "{{endpoint}}/debian"
</tmpl>
