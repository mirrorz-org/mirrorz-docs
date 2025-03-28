## 下载

<tmpl z-lang="bash">
curl -L {{endpoint}} -o repo
chmod +x repo
</tmpl>

为了方便可以将其拷贝到你的`PATH`里。

## 更新

repo 的运行过程中会尝试访问官方的 git 源更新自己，如果想使用镜像源进行更新，可以将如下内容复制到你的`~/.bashrc`里

<tmpl z-lang="bash">
export REPO_URL='{{endpoint}}'
</tmpl>

并重启终端模拟器。
