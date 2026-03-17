## 实验性脚本（仅 TUNA 提供）

如需克隆 QEMU 代码及其子模块，使用以下脚本

```{ztmpl lang="bash"}
curl https://mirrors.tuna.tsinghua.edu.cn/git/qemu/qemu.sh | bash
```

## 手动克隆

如仅需克隆 QEMU 代码，使用

```{ztmpl lang="bash"}
git clone {{endpoint}}
```

若要将 mirror 加入已有代码库，可在已有仓库中运行

```{ztmpl lang="bash"}
git remote add mirror {{endpoint}}
```

或运行

```{ztmpl lang="bash"}
git remote set-url origin {{endpoint}}
```

将默认上游设置为镜像站
