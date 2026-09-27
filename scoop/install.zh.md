### 首次安装 Scoop

上游安装脚本硬编码了 GitHub 仓库地址，不支持通过参数或环境变量指定镜像，因此首次安装请使用官方安装程序（安装过程需要能够访问 GitHub）：

```powershell
iwr -useb get.scoop.sh | iex
```

安装完成后，按下文配置 Scoop 本体和 bucket 的更新来源。
