## 使用方法

Flutter SDK 默认从 Github 获取更新，如您访问 Github 速度慢，可以在 Flutter 目录下运行命令：

<tmpl z-lang="bash">
git remote set-url origin {{endpoint}}
</tmpl>

将上游设置为镜像站。

或者通过下面的命令，直接从 Master 构建渠道检出 Flutter 的 SDK：

<tmpl z-lang="bash">
git clone -b master {{endpoint}}
./flutter-sdk/bin/flutter --version
</tmpl>

您也可以替换上述代码中 `git clone -b` 之后的 `master` 为 `beta` 获取 Beta 渠道的构建、替换为 `dev` 获取 Dev 渠道的构建。

Flutter 镜像使用方法参见 [Flutter 镜像安装帮助](../flutter/)。
