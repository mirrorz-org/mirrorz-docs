本镜像包含 RISC-V 常用工具与文档，分别以 Git 仓库与 Release 的形式镜像。

### Git 仓库

本站提供了克隆脚本，以供克隆相关仓库与子模块。样例如下

<tmpl z-lang="bash">
# riscv-gnu-toolchain 及其子模块
## 单独克隆
git clone {{endpoint}}/git/riscv-collab/riscv-gnu-toolchain.git
## 同时克隆子模块，注意路径为 .git 替换为 .sh
curl {{endpoint}}/git/riscv-collab/riscv-gnu-toolchain.sh | bash
# rocket-tools 及其子模块
## 单独克隆
git {{endpoint}}/git/chipsalliance/rocket-tools.git
## 同时克隆子模块
curl {{endpoint}}/git/chipsalliance/rocket-tools.sh | bash
</tmpl>

已有项目可以在 <tmpl z-inline>{{endpoint}}/git/</tmpl> 中浏览。

中浏览。

### Release

镜像站提供了标准文档和预编译工具链的镜像，例如

<tmpl z-lang="bash">
# RISC-V 非特权与特权指令集文档
{{endpoint}}/release/riscv/riscv-isa-manual/
# RISC-V 向量扩展指令集文档
{{endpoint}}/release/riscv/riscv-v-spec/
# 预编译 riscv-gnu-toolchain
{{endpoint}}/release/riscv-collab/riscv-gnu-toolchain/LatestRelease/
</tmpl>

已有项目可以在 <tmpl z-inline>{{endpoint}}/release/</tmpl> 中浏览。

### 添加镜像

目前该同步脚本（暂时）维护在 https://github.com/tuna/tunasync-scripts/blob/for-iscas/riscv-toolchains.sh

在后续的维护中，您可以通过 PR 添加新的镜像。
