### 首次安装 Homebrew

请先确保系统已安装 `bash`、`git` 与 `curl`；macOS 用户还需安装 Command Line Tools for Xcode（执行 `xcode-select --install`）。

在终端设置镜像环境变量（请同时参考 [Homebrew Bottles 帮助](../homebrew-bottles/) 设置 `HOMEBREW_API_DOMAIN` 与 `HOMEBREW_BOTTLE_DOMAIN`，按需参考 [PyPI 帮助](../pypi/) 设置 `HOMEBREW_PIP_INDEX_URL`）：

```{ztmpl lang="bash"}
export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}/brew.git"
# export HOMEBREW_API_DOMAIN="..."
# export HOMEBREW_BOTTLE_DOMAIN="..."
# export HOMEBREW_PIP_INDEX_URL="..."
```

拉取安装脚本并执行安装：

```{ztmpl lang="bash"}
# 从镜像获取安装脚本
git clone --depth=1 {{endpoint}}/install.git brew-install
/bin/bash brew-install/install.sh
rm -rf brew-install

# 也可从 GitHub 获取官方安装脚本
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装完成后，按平台将 `brew` 加入环境变量（Intel macOS 可跳过此步）：

- macOS（Apple Silicon，`uname -m` 输出 `arm64`）：

  ```{ztmpl lang="bash"}
  eval "$(/opt/homebrew/bin/brew shellenv)"
  echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
  ```

- Linux：

  ```{ztmpl lang="bash"}
  eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
  echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
  ```

  （使用 zsh 时将 `~/.bashrc` 替换为 `~/.zshrc`。）

更多说明请参考 [Homebrew 官方安装文档](https://docs.brew.sh/Installation)。
