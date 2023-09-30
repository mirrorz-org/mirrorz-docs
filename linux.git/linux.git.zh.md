如需克隆 Linux 代码，使用

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

### 增量下载

如果需要其它 linux 分支的代码（如树莓派内核代码），可以在 clone 本项目基础上增量下载分支的代码，从而加速下载

以树莓派为例，具体操作为

<tmpl z-lang="bash">
git clone {{endpoint}}
git remote add rasp https://github.com/raspberrypi/linux.git
git fetch rasp
</tmpl>
