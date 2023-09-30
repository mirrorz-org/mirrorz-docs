## 使用方法

如果希望通过 pub 镜像安装软件，只需要设置 [PUB_HOSTED_URL](https://www.dartlang.org/tools/pub/environment-variables)

以 bash 为例，临时使用镜像来安装依赖：

<tmpl z-lang="bash">
export PUB_HOSTED_URL="{{endpoint}}"
# pub: pub get
# flutter: flutter packages get
</tmpl>

若希望长期使用镜像：

<tmpl z-lang="bash">
echo 'export PUB_HOSTED_URL="{{endpoint}}"' >> ~/.bashrc
</tmpl>

Flutter 镜像使用方法参见 [Flutter 镜像安装帮助](../flutter/)。
