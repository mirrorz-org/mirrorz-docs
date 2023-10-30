## 离线使用

如果您只能访问内网镜像站，在完成下列步骤后，依然可以正常使用 Bioconductor 镜像。
1. 确保 BiocManager 的版本不低于 `1.30.12`。
2. 使用一台可以访问公网的设备，访问 [https://bioconductor.org/config.yaml](https://bioconductor.org/config.yaml) 下载 `config.yaml`，并将该文件拷贝到 BiocManager 所在的内网设备上。然后，在 `~/.Rprofile` 添加如下配置：

<tmpl z-lang="r" z-path="~/.Rprofile" z-append>
options(
    BIOCONDUCTOR_CONFIG_FILE = "file:///path/to/config.yaml"  # config.yaml 所在的路径
)
</tmpl>
