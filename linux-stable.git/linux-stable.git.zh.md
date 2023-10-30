如需克隆 Linux Stable 代码，使用

<tmpl z-lang="bash">
git clone {{endpoint}}
</tmpl>

若要将 mirror 加入已有代码库，可在已有仓库中运行

<tmpl z-lang="bash">
git remote add mirror {{endpoint}}
</tmpl>

或运行

<tmpl z-lang="bash">
git remote set-url origin {{endpoint}}
</tmpl>

将默认上游设置为镜像站
