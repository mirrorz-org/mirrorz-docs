拉取安装脚本并执行安装：

```{ztmpl lang="bash"}
# 从镜像获取安装脚本
git clone --depth=1 "{{endpoint}}/install.git" brew-install
/bin/bash brew-install/install.sh
rm -rf brew-install
```
