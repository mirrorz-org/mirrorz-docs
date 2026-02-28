如需克隆 Linux Next 代码，使用

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
