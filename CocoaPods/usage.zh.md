## 使用方法

对于旧版的 CocoaPods 可以使用如下方法使用镜像：

<tmpl z-lang="bash">
pod repo remove master
pod repo add master {{endpoint}}/Specs.git
pod repo update
</tmpl>

新版的 CocoaPods 不允许用`pod repo add`直接添加 master 库了，但是依然可以：

<tmpl z-lang="bash">
cd ~/.cocoapods/repos
pod repo remove master
git clone {{endpoint}}/Specs.git master
</tmpl>

最后进入自己的工程，在自己工程的`podFile`第一行加上：

<tmpl>
source '{{endpoint}}/Specs.git'
</tmpl>
