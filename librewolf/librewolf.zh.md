LibreWolf 是基于 Firefox 的开源桌面浏览器，注重隐私、安全与自由。此处镜像其官方 apt/dnf 软件仓库（amd64、arm64）。

### Debian / Ubuntu 用户

导入 GPG 公钥：

```{ztmpl lang="bash"}
wget -qO- {{endpoint}}/keyring.gpg | sudo tee /usr/share/keyrings/librewolf.gpg > /dev/null
```

将以下内容写入 `/etc/apt/sources.list.d/librewolf.list`：

```{ztmpl lang="properties" path="/etc/apt/sources.list.d/librewolf.list"}
deb [signed-by=/usr/share/keyrings/librewolf.gpg] {{endpoint}} librewolf main
```

然后执行：

```bash
sudo apt update
sudo apt install librewolf
```

### RHEL / Fedora 用户

新建 `/etc/yum.repos.d/librewolf.repo`，内容如下：

```{ztmpl lang="ini" path="/etc/yum.repos.d/librewolf.repo"}
[librewolf]
name=LibreWolf Software Repository
baseurl={{endpoint}}
gpgcheck=1
repo_gpgcheck=1
gpgkey={{endpoint}}/pubkey.gpg
enabled=1
```

然后执行 `sudo dnf install librewolf`。

参考文档：https://librewolf.net/installation/
