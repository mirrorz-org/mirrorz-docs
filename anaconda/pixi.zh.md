## Pixi

Pixi 是一个高效、跨平台的包管理与环境管理工具，构建于 Conda 生态之上，专为科研与数据科学工作流设计。[Github地址](https://github.com/prefix-dev/pixi)


Pixi 也支持镜像配置，你可以参考 [此文档](https://pixi.sh/latest/reference/pixi_configuration/#mirrors) 将「清华TUNA镜像」源添加到你的配置文件里。

配置 `config.toml` 如下:

```shell
[mirrors]
"https://conda.anaconda.org/conda-forge" = [
    "https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge"
]
"https://conda.anaconda.org/pkgs/main" = [
    "https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main"
]
"https://conda.anaconda.org/pkgs/free" = [
    "https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free"
]
"https://prefix.dev/conda-forge" = [
    "https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge"
]
```

如果是项目级别的镜像配置，请配置在此目录：`your_project/.pixi/config.toml`；如果是全局配置，请配置在此目录：`$HOME/.pixi/config.toml`。更多自定义级别的配置，请参考[配置文档](https://pixi.sh/latest/reference/pixi_configuration/)

如需验证镜像是否生效，可尝试使用`sudo tcpdump -i any -n -A host mirrors.tuna.tsinghua.edu.cn` 来监听第三方包的下载:

```shell
# 在一个终端运行
sudo tcpdump -i any -n -A host mirrors.tuna.tsinghua.edu.cn

# 在另一个终端安装包
pixi add numpy
```
如果看到数据包输出，说明正在从「清华TUNA镜像」下载。

注意：`pixi.lock` 文件中记录的可能仍是原始的 conda.anaconda.org 地址，但实际下载时 pixi 会根据镜像配置自动重定向到「清华TUNA镜像」，这是正常现象。