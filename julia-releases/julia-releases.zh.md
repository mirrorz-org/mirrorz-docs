## Julia 二进制安装程序

Julia 是一个全新的以科学计算为核心的通用编程语言，其二进制程序可以到如下链接下载。

<tmpl>
{{endpoint}}/bin/
</tmpl>

这里仅镜像 [JuliaLang Downloads](https://julialang.org/downloads/) 中提供的稳定发行版以及 rc 版本。每日构建的测试版 (nightlies) 以及  [Juno](http://junolab.org/)/[Julia Pro](https://juliacomputing.com/products/juliapro)等 IDE 版本不包括在内。

尽管一些包管理工具（例如 `apt`, `pacman`, `conda`, `choco`) 中提供有 Julia，但是这些工具或多或少都存在一些由二进制 依赖导致的问题，因此官方推荐的方式是根据自己的使用平台下载相应的二进制程序，然后通过解压的方式进行手动安装。

## juliaup 使用说明

[juliaup](https://github.com/JuliaLang/juliaup) 是现在 Julia 社区默认推荐的安装方式，通过设置环境变量 `JULIAUP_SERVER` 的地址为 <tmpl z-inline>{{endpoint}}</tmpl> 后，即可正常使用镜像站来下载 Julia 程序。

以下是 juliaup 官方的标准安装方式

Windows：

```powershell
winget install --name Julia --id 9NJNWW8PVKMN -e -s msstore
```

Mac, Linux, and FreeBSD：

```shell
curl -fsSL https://install.julialang.org | sh
```
