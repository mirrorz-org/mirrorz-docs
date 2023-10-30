### flutter_infra

获取最新稳定版 Flutter SDK 安装包可从镜像站下载

<tmpl>
{{endpoint}}/flutter_infra/releases/stable/
</tmpl>

Flutter 开发依赖于 [SDK 的升级](https://flutter.cn/docs/development/tools/sdk/upgrading) 和 [Dart Package 生态](https://pub.flutter-io.cn/)，
因此，如果您的网络访问 Google 受阻，需要将您开发设备的如下两个环境变量设置指向镜像站：
- `FLUTTER_STORAGE_BASE_URL`
- `PUB_HOSTED_URL`

设定方式如下：

<tmpl z-lang="bash">
export FLUTTER_STORAGE_BASE_URL="{{endpoint}}"
</tmpl>

若希望长期使用镜像：

<tmpl z-lang="bash">
echo 'export FLUTTER_STORAGE_BASE_URL="{{endpoint}}"' >> ~/.bashrc
</tmpl>

`PUB_HOSTED_URL` 部分可以参考 [Dart Pub 帮助](../dart-pub/)

部分镜像站将 flutter_infra 单列为一个镜像，可以参考 [Flutter Infra 帮助](../flutter_infra/)。

### download.flutter.io

在编译 android 项目时，flutter 还会从 https://storage.googleapis.com/download.flutter.io 下载 Java 程序库，您可以在 Android 项目目录下的 build.gradle 中添加下面一行下载源，从而使用镜像源。

<tmpl z-lang="gradle">
allprojects {
    repositories {
        google()
        jcenter()
        maven { url '{{endpoint}}/download.flutter.io' }
    }
}
</tmpl>

### Flutter SDK

Flutter SDK 的更新会从 Github 获取，如您的开发设备访问 Github 速度慢，可以参考 [Flutter SDK 镜像](../flutter-sdk.git/)。
