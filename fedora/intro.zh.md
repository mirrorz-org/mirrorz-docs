## 项目简介

Fedora 默认使用 [Metalink](https://zh.fedoracommunity.org/2018/04/05/fedora-secures-package-delivery.html) 给出推荐的镜像列表，保证用户使用的镜像仓库足够新，并且能够尽快拿到安全更新，从而提供更好的安全性。所以通常情况下使用默认配置即可，无需更改配置文件。

由于 Metalink 需要从国外的 Fedora 项目服务器上获取元信息，所以对于校园内网、无国外访问等特殊情况，Metalink 并不适用，此时可以如下修改配置文件。

在 Fedora 44 及更新版本中，建议直接通过 `dnf config-manager` 命令覆写仓库配置项，它会在 `/etc/dnf/repos.override.d` 下创建合适的覆写文件。随后本地缓存将自动更新。

如果仍需直接修改仓库配置文件，请注意在 Fedora 45 及更新版本中它们的路径有所变动：

- 系统默认的 `fedora` 仓库配置文件为 `/usr/share/dnf5/repos.d/fedora.repo`
- 系统默认的 `updates` 仓库配置文件为 `/usr/share/dnf5/repos.d/fedora-updates.repo`

Fedora 44 中仓库配置文件的路径与更旧版本一致。

在 Fedora 43 及更旧版本中，由于部分系统组件不支持 DNF5 的分层配置系统，仍建议直接修改仓库配置文件：

- 系统默认的 `fedora` 仓库配置文件为 `/etc/yum.repos.d/fedora.repo`
- 系统默认的 `updates` 仓库配置文件为 `/etc/yum.repos.d/fedora-updates.repo`

将上述两个文件先做个备份，根据 Fedora 系统版本分别替换为下面内容。随后本地缓存将自动更新。
