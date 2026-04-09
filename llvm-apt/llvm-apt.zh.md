### 安装脚本

```{ztmpl input="ver" lang="bash"}
# 下载脚本
wget {{endpoint}}/llvm.sh
chmod +x llvm.sh
{{sudo}}./llvm.sh{{#ver}} {{ver}}{{/ver}} all -m {{endpoint}}
```

### 手动启用

首先信任来自 https://apt.llvm.org/ 的 PGP 公钥：

```{ztmpl lang="bash"}
wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key | {{sudo}}gpg -o /etc/apt/keyrings/llvm-snapshot.gpg --dearmor
```

新增 `/etc/apt/sources.list.d/llvm-apt.list`，内容为

```{ztmpl lang="properties" input="release ver2 src" path="/etc/apt/sources.list.d/llvm-apt.list"}
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb [signed-by=/etc/apt/keyrings/llvm-snapshot.gpg] {{endpoint}}/{{release}}/ llvm-toolchain-{{release}}{{#ver2}}-{{ver2}}{{/ver2}} main
{{src}}deb-src [signed-by=/etc/apt/keyrings/llvm-snapshot.gpg] {{endpoint}}/{{release}}/ llvm-toolchain-{{release}}{{#ver2}}-{{ver2}}{{/ver2}} main
```

