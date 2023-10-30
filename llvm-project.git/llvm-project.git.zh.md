本镜像镜像了如下仓库：

<tmpl>
https://github.com/llvm/llvm-project.git
</tmpl>

如需克隆代码，使用

<tmpl z-lang="bash">
git clone {{endpoint}}
</tmpl>

由于仓库体积均较大，执行`git clone`可能需要较长时间，并且没有进度提示，请耐心等候。

若要将 mirror 加入已有代码库，可在已有仓库中运行

<tmpl z-lang="bash">
git remote add mirror {{endpoint}}
</tmpl>

或运行

<tmpl z-lang="bash">
git remote set-url origin {{endpoint}}
</tmpl>

将默认上游设置为镜像站

注：如需要各个子项目的发布版本代码，请至 [GitHub Release 镜像](../github-release/) 中 llvm-project 一节。
