## 实验性脚本（仅 TUNA 提供）

如需克隆 QEMU 代码及其子模块，使用以下脚本

<tmpl z-lang="bash">
curl https://mirrors.tuna.tsinghua.edu.cn/git/qemu/qemu.sh | bash
</tmpl>

## 手动克隆

如仅需克隆 QEMU 代码，使用

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
