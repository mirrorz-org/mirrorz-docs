### 首次安装 Homebrew

请先确保系统已安装 `bash`、`git` 与 `curl`；macOS 用户还需安装 Command Line Tools for Xcode（执行 `xcode-select --install`）。

在终端设置镜像环境变量（请同时参考 [Homebrew Bottles 帮助](../homebrew-bottles/) 设置 `HOMEBREW_API_DOMAIN` 与 `HOMEBREW_BOTTLE_DOMAIN`，按需参考 [PyPI 帮助](../pypi/) 设置 `HOMEBREW_PIP_INDEX_URL`）：

```{ztmpl lang="bash"}
export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}"
# export HOMEBREW_API_DOMAIN="..."
# export HOMEBREW_BOTTLE_DOMAIN="..."
# export HOMEBREW_PIP_INDEX_URL="..."
```
