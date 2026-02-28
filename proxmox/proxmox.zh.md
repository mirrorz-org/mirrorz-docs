### Debian 软件源

参考 [Debian 帮助](../debian/) 修改 `/etc/apt/sources.list`。

### Proxmox 软件源

#### 传统格式（`/etc/apt/sources.list.d/pve-no-subscription.list`）：

新建 `/etc/apt/sources.list.d/pve-no-subscription.list`（如果选择的不是 pve，需要使用另一个文件名），内容为：

```{ztmpl input="release service" path="/etc/apt/sources.list.d/pve-no-subscription.list"}
deb {{endpoint}}/debian/{{service}} {{release}} {{service}}-no-subscription
```

#### DEB822 格式（`/etc/apt/sources.list.d/pve-no-subscription.sources`）：

```{ztmpl input="release service" path="/etc/apt/sources.list.d/pve-no-subscription.sources"}
Types: deb
URIs: {{endpoint}}/debian/{{service}}
Suites: {{release}}
Components: {{service}}-no-subscription
Signed-By: /usr/share/keyrings/proxmox-archive-keyring.gpg
```

注意快速配置中的文件名需要根据需求而修改。

### ISO 安装文件下载

```{ztmpl}
{{endpoint}}/iso/
```

### CT Templates

如果你需要加速 Proxmox 网页端下载 CT Templates，可以替换 CT Templates 的源。

具体方法：将 `/usr/share/perl5/PVE/APLInfo.pm` 文件中默认的源地址 `http://download.proxmox.com`
替换为

```{ztmpl}
{{endpoint}}
```


可以使用如下命令修改：

```{ztmpl lang="bash"}
cp /usr/share/perl5/PVE/APLInfo.pm /usr/share/perl5/PVE/APLInfo.pm_back
sed -i 's|http://download.proxmox.com|{{endpoint}}|g' /usr/share/perl5/PVE/APLInfo.pm
```

针对 `/usr/share/perl5/PVE/APLInfo.pm` 文件的修改，重启后生效。

## OpenMediaVault

本节供 [OpenMediaVault 帮助](../OpenMediaVault/)使用。

```{ztmpl lang="bash"}
omv-env set OMV_PROXMOX_APT_REPOSITORY_URL "{{endpoint}}/debian"
```
