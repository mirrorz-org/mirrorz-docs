Termux 第三方软件源，包含 gcc、R 语言和许多游戏

### 使用说明

添加 apt 存储库

<tmpl z-lang="bash">
wget -qO- https://its-pointless.github.io/setup-pointless-repo.sh | bash
</tmpl>

使用镜像

<tmpl z-lang="bash">
echo "deb {{endpoint}}/24 termux extras" > $PREFIX/etc/apt/sources.list.d/pointless.list
</tmpl>

### 相关链接

https://github.com/its-pointless/gcc_termux

