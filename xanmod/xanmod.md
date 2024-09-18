[XanMod](https://xanmod.org/) 是带有自定义设置和新功能的通用 Linux 内核，旨在提供稳定、流畅、可靠的系统体验。

本镜像为 amd64 架构的 APT 仓库，可供类 Debian 发行版使用。

## 使用方法

首先添加上游公钥：

<tmpl z-lang="bash">
wget -qO - https://dl.xanmod.org/archive.key | {{sudo}}gpg --dearmor -vo /usr/share/keyrings/xanmod-archive-keyring.gpg
</tmpl>

新增 APT 源配置：

<tmpl z-input="release" z-path="/etc/apt/sources.list.d/xanmod-release.list">
deb [signed-by=/usr/share/keyrings/xanmod-archive-keyring.gpg] {{endpoint}} releases main
</tmpl>

更新缓存并安装 XanMod 内核（根据自身需要选择不同包名，详见官网）：

<tmpl z-lang="bash">
{{sudo}}apt update
{{sudo}}apt install --install-recommends linux-xanmod-x64v3
</tmpl>
