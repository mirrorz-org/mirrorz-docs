## 使用方法

镜像站提供了 Anaconda 仓库与第三方源（conda-forge、msys2、pytorch 等，各镜像站镜像的第三方源并不相同，可以参考下方「第三方镜像源」一节）的镜像，各系统都可以通过修改用户目录下的 `.condarc` 文件来使用镜像站。

不同系统下的 `.condarc` 目录如下：
- Linux: `${HOME}/.condarc`
- macOS: `${HOME}/.condarc`
- Windows: `C:\Users\<YourUserName>\.condarc`

注：
  * Windows 用户无法直接创建名为 `.condarc` 的文件，可先执行 `conda config --set show_channel_urls yes` 生成该文件之后再修改。
  * 由于更新过快难以同步，TUNA 等镜像站不同步 `pytorch-nightly` , `pytorch-nightly-cpu` , `ignite-nightly` 这三个包。
  * 如果您正在从某一镜像源切换到另一镜像源，请检查镜像源是否同步了您所需要的 repo，以及该 repo 是否支持您使用的平台 (e.g. linux-64)。
  * 为了保证以下配置在所有镜像站可用，配置中只加入了少量必须的第三方源，您可以在下方的列表中自行寻找并添加其他第三方源。

<tmpl z-lang="yaml" z-path="~/.condarc">
channels:
  - defaults
show_channel_urls: true
default_channels:
  - {{endpoint}}/pkgs/main
  - {{endpoint}}/pkgs/r
  - {{endpoint}}/pkgs/msys2
custom_channels:
  conda-forge: {{endpoint}}/cloud
  pytorch: {{endpoint}}/cloud
</tmpl>

即可添加 Anaconda Python 免费仓库。

使用下列命令清除索引缓存，并安装常用包测试一下。

<tmpl z-lang="bash">
conda clean -i
conda create -n myenv numpy
</tmpl>
