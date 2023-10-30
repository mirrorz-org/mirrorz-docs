## 使用方法

本节主要为 [Flutter 帮助](../flutter/) 使用。

获取最新稳定版 Flutter SDK 安装包可从镜像站下载

<tmpl>
{{endpoint}}/releases/stable/
</tmpl>

Flutter 开发依赖于 [SDK 的升级](https://flutter.cn/docs/development/tools/sdk/upgrading) 和 [Dart Package 生态](https://pub.flutter-io.cn/)，
因此，如果您的网络访问 Google 受阻，需要将您开发设备的如下两个环境变量设置指向镜像站：
- `FLUTTER_STORAGE_BASE_URL`
- `PUB_HOSTED_URL`

由于 `FLUTTER_STORAGE_BASE_URL` 在使用时会自动加上 `/flutter_infra`，在本帮助中只需要使用域名。

设定方式如下：

<tmpl z-lang="bash">
FLUTTER_STORAGE_URL={{endpoint}}
export FLUTTER_STORAGE_BASE_URL=${FLUTTER_STORAGE_URL%/flutter_infra}
</tmpl>

若希望长期使用镜像：

<tmpl z-lang="bash">
FLUTTER_STORAGE_URL={{endpoint}}
echo "export FLUTTER_STORAGE_BASE_URL=${FLUTTER_STORAGE_URL%/flutter_infra}" >> ~/.bashrc
</tmpl>

`PUB_HOSTED_URL` 部分可以参考 [Dart Pub 帮助](../dart-pub/)
