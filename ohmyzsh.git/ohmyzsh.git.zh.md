### 安装

在本地克隆后获取安装脚本。

```{ztmpl lang="bash"}
git clone {{endpoint}}
cd ohmyzsh/tools
REMOTE={{endpoint}} sh install.sh
```

### 切换已有 ohmyzsh 至镜像源

```{ztmpl lang="bash"}
git -C $ZSH remote set-url origin {{endpoint}}
git -C $ZSH pull
```
