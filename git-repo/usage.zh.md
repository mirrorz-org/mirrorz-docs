## 下载

```{ztmpl lang="bash"}
curl -L {{endpoint}} -o repo
chmod +x repo
```

为了方便可以将其拷贝到你的`PATH`里。

## 更新

repo 的运行过程中会尝试访问官方的 git 源更新自己，如果想使用镜像源进行更新，可以将如下内容复制到你的`~/.bashrc`里

```{ztmpl lang="bash"}
export REPO_URL='{{endpoint}}'
```

并重启终端模拟器。
