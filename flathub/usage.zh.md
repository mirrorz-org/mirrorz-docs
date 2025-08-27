## 配置方法

如果之前从未使用过 Flathub，那么首先需要添加 Flathub 远程源：

<tmpl z-lang="bash">
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
</tmpl>

在已有 `flathub` 远程源的基础上：

<tmpl z-lang="bash">
{{sudo}}flatpak remote-modify flathub --url={{endpoint}}/flathub
</tmpl>

恢复默认值：

<tmpl z-lang="bash">
{{sudo}}flatpak remote-modify flathub --url=https://dl.flathub.org/repo
</tmpl>

## 同步方法

### SJTUG

Flathub 镜像是 flathub.org 的智能缓存。

当您请求镜像中的资源时，如果文件没有被镜像服务器缓存，我们会将您重定向回原站，并在后台进行缓存。目前镜像服务器上已经预先缓存了所有 Flathub 软件的分支。

目前 sel.flathub.org 已经重定向到 SJTUG 镜像站。如果您原先使用该服务器作为 Flathub 上游，无需做任何设置即可使用。

### USTC

**WARNING**: 本镜像处于测试阶段，以下内容可能发生变化。

Flathub 的元数据（`config`, `summary.idx`, `summaries/`）每小时完整同步一次。

Flathub 的 blob 数据（`objects/`）与增量更新数据（`deltas/`, `delta-indexes/`）为动态缓存，根据用户访问情况，每小时更新一次。**在请求未命中时，会 302 重定向到 Flathub 源站点**。本镜像不是 Flathub 的完整镜像，因此仍然需要用户到 Flathub 站点有基本的可连通性。

软件 manifest 中标注为 `extra-data` 的文件不会经过镜像站或 Flathub 服务器，而是直接从标注的源站点下载。

## 常见问题/调试方法

如果怀疑网络问题，请添加 `OSTREE_DEBUG_HTTP=1` 环境变量后再次运行 `flatpak` 命令以获取 libcurl 的详细输出，例如：

<tmpl z-lang="bash">
OSTREE_DEBUG_HTTP=1 flatpak install com.github.tchx84.Flatseal
</tmpl>

如果出现 "Can't check signature: public key not found" 错误可尝试导入 GPG 密钥：

<tmpl z-lang="bash">
wget {{endpoint}}/flathub/flathub.gpg
{{sudo}}flatpak remote-modify --gpg-import=flathub.gpg flathub
</tmpl>

Flathub 中部分软件由于重分发授权问题，需要从官方服务器下载，无法使用镜像站加速。比如 NVIDIA 驱动、JetBrains 系列软件等。如果您的使用体验不佳，请及时通过 GitHub 或邮件向镜像站反馈。

如果您中断了某次安装，重新下载可能会出现找不到文件的问题。您可以使用 `flatpak repair` 解决相关的问题。
