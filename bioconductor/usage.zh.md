## 使用方法

Bioconductor 镜像源配置文件之一是 `~/.Rprofile`（linux 下位于 `~/.Rprofile`, Windows 下位于 `~\library\base\R\Rprofile`）。

在文末添加如下语句或在 R/RStudio 终端下键入：

```{ztmpl lang="r" path="~/.Rprofile" append="true"}
options(BioC_mirror="{{endpoint}}")
```

即可使用该 Bioconductor 镜像源安装 Bioconductor 软件包。命令如下：

```{ztmpl lang="r"}
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install("$package")
```
