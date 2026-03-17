Termux 第三方软件源，包含 gcc、R 语言和许多游戏

### 使用说明

添加 apt 存储库

```{ztmpl lang="bash"}
wget -qO- https://its-pointless.github.io/setup-pointless-repo.sh | bash
```

使用镜像

```{ztmpl lang="bash"}
echo "deb {{endpoint}}/24 termux extras" > $PREFIX/etc/apt/sources.list.d/pointless.list
```

### 相关链接

https://github.com/its-pointless/gcc_termux

