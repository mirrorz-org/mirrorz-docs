## 使用方法

[Bioconductor](https://www.bioconductor.org) 镜像源配置文件之一是 `.Rprofile`（linux 下位于 `~/.Rprofile`, Windows 下位于 `~\library\base\R\Rprofile`）。

在文末添加如下语句或在 R/RStudio 终端下键入：

<tmpl z-lang="r" z-path="~/.Rprofile" z-append>
options(BioC_mirror="{{endpoint}}")
</tmpl>

即可使用该 Bioconductor 镜像源安装 Bioconductor 软件包。命令如下：

<tmpl z-lang="r">
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install("$package")
</tmpl>
