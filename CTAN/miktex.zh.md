## MiKTeX

MiKTeX 发行版的特点在于仅安装用户需要的宏包，节省了磁盘空间占用，但在部分实现细节上与 TeX Live 有所出入。该发行版支持 Windows、Linux 和 macOS。

### 安装

MiKTeX 仅提供 Windows 和 macOS 的独立安装包，前往[TeX 排版系统下载页](https://mirrorz.org/app/TeX%E6%8E%92%E7%89%88%E7%B3%BB%E7%BB%9F)即可。在 Linux 下的安装请参考[官方文档](https://miktex.org/howto/install-miktex-unx)。

### 使用镜像

MiKTeX 使用的 CTAN 镜像源可以从内置的 MiKTeX Console 图形化应用程序进行切换，也可以使用如下命令：

<tmpl z-lang="bash">
mpm --set-repository={{endpoint}}/systems/win32/miktex/tm/packages/
</tmpl>
