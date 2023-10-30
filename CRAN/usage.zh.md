## 使用方法

### 长期使用

[CRAN](https://cran.r-project.org/) (The Comprehensive R Archive Network) 镜像源配置文件之一是 `.Rprofile` (linux 下位于 `~/.Rprofile` )。

在文末添加如下语句：

<tmpl z-lang="r" z-path="~/.Rprofile" z-append>
options("repos" = c(CRAN="{{endpoint}}/"))
</tmpl>

打开 R 即可使用该 CRAN 镜像源安装 R 软件包。

### 临时使用

在安装时指定 repo ，如安装 lattice ：

<tmpl z-lang="r">
install.packages("lattice", repos="{{endpoint}}/")
</tmpl>

