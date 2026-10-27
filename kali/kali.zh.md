本镜像包含 amd64, arm64, armel, armhf, i386 架构处理器的软件包。

### 手动替换

根据系统使用的配置格式选择以下一种方式，替换已有的 Kali 软件源配置，避免重复配置。

#### 传统格式（`/etc/apt/sources.list`）

编辑 `/etc/apt/sources.list` 文件，将 Kali 软件源条目替换为：

```{ztmpl input="src" path="/etc/apt/sources.list"}
deb {{endpoint}} kali-rolling main non-free contrib non-free-firmware
{{src}}deb-src {{endpoint}} kali-rolling main non-free contrib non-free-firmware
```

#### DEB822 格式（`/etc/apt/sources.list.d/kali.sources`）

编辑 `/etc/apt/sources.list.d/kali.sources` 文件，将 Kali 软件源配置替换为：

```{ztmpl lang="yaml" input="src" path="/etc/apt/sources.list.d/kali.sources"}
Types: deb
URIs: {{endpoint}}
Suites: kali-rolling
Components: main non-free contrib non-free-firmware
Signed-By: /usr/share/keyrings/kali-archive-keyring.gpg

# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
{{src}}Types: deb-src
{{src}}URIs: {{endpoint}}
{{src}}Suites: kali-rolling
{{src}}Components: main non-free contrib non-free-firmware
{{src}}Signed-By: /usr/share/keyrings/kali-archive-keyring.gpg
```

### sed 替换

对于传统格式，执行如下命令：

```{ztmpl lang="bash"}
{{sudo}}sed -i "s@http://http.kali.org/kali@{{endpoint}}@g" /etc/apt/sources.list
```

对于 DEB822 格式，执行如下命令：

```{ztmpl lang="bash"}
{{sudo}}sed -i "s@http://http.kali.org/kali@{{endpoint}}@g" /etc/apt/sources.list.d/kali.sources
```
