本镜像提供 Homebrew 程序本体（`brew.git`）与安装脚本（`install.git`）的 Git 仓库镜像。

二进制预编译包与 JSON API 镜像请配合 [Homebrew Bottles 帮助](../homebrew-bottles/) 配置。

### 迁移说明（Homebrew 4.0+）

自 Homebrew 4.0 起，默认改为通过 JSON API（可通过 `HOMEBREW_API_DOMAIN` 指定镜像）获取软件包元数据，不再需要本地克隆 `homebrew/core` 与 `homebrew/cask` Git 仓库：

- 无需再设置 `HOMEBREW_INSTALL_FROM_API`（已默认启用并移除）或 `HOMEBREW_CORE_GIT_REMOTE`。
- 除非需要开发 formula / cask，此前已克隆上述仓库的用户可执行 `brew untap homebrew/core` 与 `brew untap homebrew/cask` 以节省空间。
- 此前为规避慢速更新而设置的 `HOMEBREW_NO_AUTO_UPDATE`、`HOMEBREW_NO_INSTALL_FROM_API`、`HOMEBREW_AUTO_UPDATE_SECS` 等环境变量建议取消或按新行为重新评估。
- 如确需禁用 API 模式，可设置 `HOMEBREW_NO_INSTALL_FROM_API=1`（建议先了解 `HOMEBREW_API_AUTO_UPDATE_SECS`）；部分开发命令或从源码构建的配置也会自动回退。
