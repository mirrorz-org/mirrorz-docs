## TeX Live

TeX Live 是目前使用最为广泛的 TeX 发行版，支持 Windows、Linux 和 macOS。其中，在 macOS 上发行的版本称为 MacTeX。

## 安装方法

TeX Live 发行版的常见安装方法可以参考如下文档。

<tmpl>
{{endpoint}}/info/install-latex-guide-zh-cn/install-latex-guide-zh-cn.pdf
</tmpl>

除每年更新的完整版 ISO 镜像以外，CTAN 镜像中也包含在线安装器。这种方法可以使安装的所有宏包均为最新版本，但受网络连接状况影响较大。操作方法为（*很可能需要管理员权限*）：

1. 下载 install-tl.zip 并解压缩

<tmpl>
{{endpoint}}/systems/texlive/tlnet/install-tl.zip
</tmpl>

2. Windows 下双击运行其中的 `install-tl.bat`。如果有图形化界面，可以在进入安装器前的右下角按钮指定使用镜像源。

    Linux 下使用如下命令：

<tmpl z-lang="bash">
perl install-tl --repository {{endpoint}}/systems/texlive/tlnet
</tmpl>

### 切换镜像

TeX Live 使用的 CTAN 镜像源可以从内置的包管理器 `tlmgr` 更改（*很可能需要管理员权限*）。

在命令行中执行

<tmpl z-lang="bash">
{{sudo}}tlmgr option repository {{endpoint}}/systems/texlive/tlnet
</tmpl>

即可永久更改镜像源。

如果只需要临时切换，可以用如下命令：

<tmpl z-lang="bash">
{{sudo}}tlmgr update --all --repository {{endpoint}}/systems/texlive/tlnet
</tmpl>

其中的 `update --all` 指令可根据需要修改。
