**注：该镜像是 Homebrew / Linuxbrew 源程序以及 formula / cask 索引的镜像（即 `brew update` 时所更新内容）。镜像站同时提供相应的二进制预编译包的镜像，请参考 [Homebrew bottles 镜像使用帮助](../homebrew-bottles/)**

镜像站提供了 https://github.com/Homebrew 组织下的以下 `repo`：`brew`, `homebrew-core`, `homebrew-cask`, `homebrew-command-not-found`, `install`。

**注：自 brew 4.0.0 (2023 年 2 月 16 日) 起，`HOMEBREW_INSTALL_FROM_API` 会成为默认行为，无需设置。大部分用户无需再克隆 `homebrew-core` 仓库，故无需设置 `HOMEBREW_CORE_GIT_REMOTE` 环境变量；但若需要运行 `brew` 的开发命令或者 `brew` 安装在非官方支持的默认 prefix 位置，则仍需设置 `HOMEBREW_CORE_GIT_REMOTE` 环境变量。如果不想通过 API 安装，可以设置 `HOMEBREW_NO_INSTALL_FROM_API=1`。**

**注：目前，`homebrew-cask-{drivers,versions,fonts}` 已被弃用，所有 cask 合并至 `homebrew-cask` 仓库。本帮助内已移除克隆这些仓库的命令。已克隆用户（`brew tap` 查看）可使用 `brew untap` 移除废弃的仓库。**

**注：截止到 brew 4.6.12，`homebrew-{services,bundle,homebrew-command-not-found}` 均已被弃用，所有 tap 合并至 `brew` 仓库。本帮助内已移除克隆这些仓库的命令。已克隆用户（`brew tap` 查看）可使用 `brew untap` 移除废弃的仓库。**

### 首次安装 Homebrew / Linuxbrew

首先，需要确保系统中安装了 bash、git 和 curl，对于 macOS 用户需额外要求安装 Command Line Tools (CLT) for Xcode。

- 对于 macOS 用户，系统自带 bash、git 和 curl，在命令行输入 `xcode-select --install` 安装 CLT for Xcode 即可。
- 对于 Linux 用户，系统自带 bash，仅需额外安装 git 和 curl。

接着，在终端输入以下几行命令设置环境变量：

<tmpl z-lang="bash">
export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="{{endpoint}}/homebrew-core.git"
export HOMEBREW_INSTALL_FROM_API=1
# export HOMEBREW_API_DOMAIN
# export HOMEBREW_BOTTLE_DOMAIN
# export HOMEBREW_PIP_INDEX_URL
</tmpl>

前往 [Homebrew bottles 镜像使用帮助](../homebrew-bottles/)中「临时替换」一节设置好 `HOMEBREW_API_DOMAIN` 与 `HOMEBREW_BOTTLE_DOMAIN`。

前往 [PyPI 镜像使用帮助](../pypi/)中「Homebrew」一节设置好 `HOMEBREW_PIP_INDEX_URL`。

_注：自 `brew` 4.0 起，`HOMEBREW_INSTALL_FROM_API` 会成为默认行为，无需设置；大部分用户无需再克隆 homebrew/core 仓库，故无需设置 `HOMEBREW_CORE_GIT_REMOTE` 环境变量。但若需要运行 `brew` 的开发命令或者 `brew` 安装在非官方支持的默认 prefix 位置，则仍需设置  `HOMEBREW_CORE_GIT_REMOTE` 环境变量；如果不想通过 API 安装，可以设置 `HOMEBREW_NO_INSTALL_FROM_API=1`。_

最后，在终端运行以下命令以安装 Homebrew / Linuxbrew：

<tmpl z-lang="bash">
# 从镜像下载安装脚本并安装 Homebrew / Linuxbrew
git clone --depth=1 {{endpoint}}/install.git brew-install
/bin/bash brew-install/install.sh
rm -rf brew-install

# 也可从 GitHub 获取官方安装脚本安装 Homebrew / Linuxbrew
/bin/bash -c "$(curl -fsSL https://github.com/Homebrew/install/raw/master/install.sh)"
</tmpl>

这样在首次安装的时候也可以使用镜像。更多信息请参考 [Homebrew 官方安装文档](https://docs.brew.sh/Installation)。

**安装成功后需将 brew 程序的相关路径加入到环境变量中：**

- 以下针对基于 Apple Silicon CPU 设备上的 macOS 系统（命令行运行 `uname -m` 应输出 `arm64`）上的 Homebrew：
  <tmpl z-lang="bash">
test -r ~/.bash_profile && echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.bash_profile
test -r ~/.zprofile && echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
</tmpl>

  对基于 Intel CPU 设备上的 macOS 系统（命令行运行 `uname -m` 应输出 `x86_64`）的用户可跳过本步。

- 以下针对 Linux 系统上的 Linuxbrew：
  <tmpl z-lang="bash">
test -d ~/.linuxbrew && eval "$(~/.linuxbrew/bin/brew shellenv)"
test -d /home/linuxbrew/.linuxbrew && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
test -r ~/.bash_profile && echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.bash_profile
test -r ~/.profile && echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.profile
test -r ~/.zprofile && echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.zprofile
</tmpl>

  参考了 [https://docs.brew.sh/Homebrew-on-Linux](https://docs.brew.sh/Homebrew-on-Linux)。

### 替换现有仓库上游

替换 brew 程序本身的源，Homebrew / Linuxbrew 相同：

<tmpl z-lang="bash">
# export HOMEBREW_API_DOMAIN=
export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}/brew.git"
brew update
</tmpl>

前往 [Homebrew bottles 镜像使用帮助](../homebrew-bottles/)中「临时替换」一节设置好 `HOMEBREW_API_DOMAIN`

以下针对 macOS 系统上的 Homebrew：

<tmpl z-lang="bash">
# 手动设置
export HOMEBREW_CORE_GIT_REMOTE="{{endpoint}}/homebrew-core.git"

# 注：自 brew 4.0 起，大部分 Homebrew 用户无需设置 homebrew/core 和 homebrew/cask 镜像，只需设置 HOMEBREW_API_DOMAIN 即可。
# 如果需要使用 Homebrew 的开发命令 (如 `brew cat <formula>`)，则仍然需要设置 homebrew/core 和 homebrew/cask 镜像。
# 请按需执行如下两行命令：
brew tap --custom-remote homebrew/core {{endpoint}}/homebrew-core.git
brew tap --custom-remote homebrew/cask {{endpoint}}/homebrew-cask.git

# 或使用下面的几行命令自动设置
export HOMEBREW_CORE_GIT_REMOTE="{{endpoint}}/homebrew-core.git"
for tap in core cask; do
    brew tap --custom-remote "homebrew/${tap}" "{{endpoint}}/homebrew-${tap}.git"
done
brew update
</tmpl>

以下针对 Linux 系统上的 Linuxbrew：

<tmpl z-lang="bash">
export HOMEBREW_CORE_GIT_REMOTE="{{endpoint}}/homebrew-core.git"

# 注：自 brew 4.0 起，使用默认 prefix (即 "/home/linuxbrew/.linuxbrew") 的大部分 Homebrew 用户无需设置 homebrew/core 镜像，只需设置 HOMEBREW_API_DOMAIN 即可。
# 如果不是默认 prefix 或者需要使用 Homebrew 的开发命令 (如 `brew cat <formula>`)，则仍然需要设置 homebrew/core 镜像。
# 请按需执行如下命令：
brew tap --custom-remote homebrew/core {{endpoint}}/homebrew-core.git
</tmpl>

**注：如果用户设置了环境变量 `HOMEBREW_BREW_GIT_REMOTE` 和 `HOMEBREW_CORE_GIT_REMOTE`，则每次执行 `brew update` 时，`brew` 程序本身和 Core Tap (`homebrew-core`) 的远程将被自动设置。推荐用户将这两个环境变量设置加入 shell 的 profile 设置中。**

<tmpl z-lang="bash">
test -r ~/.bash_profile && echo 'export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}/brew.git"' >> ~/.bash_profile  # bash
test -r ~/.bash_profile && echo 'export HOMEBREW_CORE_GIT_REMOTE="{{endpoint}}/homebrew-core.git"' >> ~/.bash_profile
test -r ~/.profile && echo 'export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}/brew.git"' >> ~/.profile
test -r ~/.profile && echo 'export HOMEBREW_CORE_GIT_REMOTE="{{endpoint}}/homebrew-core.git"' >> ~/.profile

test -r ~/.zprofile && echo 'export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}/brew.git"' >> ~/.zprofile  # zsh
test -r ~/.zprofile && echo 'export HOMEBREW_CORE_GIT_REMOTE="{{endpoint}}/homebrew-core.git"' >> ~/.zprofile
</tmpl>

对于 `HOMEBREW_API_DOMAIN` 与其余 bottles 相关环境变量的持久化，可以参考 [Homebrew Bottles 帮助](../homebrew-bottles/)。


### 复原仓库上游

(感谢 Snowonion Lee 提供说明)

- 以下针对 macOS 系统上的 Homebrew
  <tmpl z-lang="bash">
# brew 程序本身，Homebrew / Linuxbrew 相同
unset HOMEBREW_API_DOMAIN
unset HOMEBREW_BREW_GIT_REMOTE
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew

# 以下针对 macOS 系统上的 Homebrew
unset HOMEBREW_CORE_GIT_REMOTE
BREW_TAPS="$(BREW_TAPS="$(brew tap 2>/dev/null)"; echo -n "${BREW_TAPS//$'\n'/:}")"
for tap in core cask; do
    if [[ ":${BREW_TAPS}:" == *":homebrew/${tap}:"* ]]; then  # 只复原已安装的 Tap
        brew tap --custom-remote "homebrew/${tap}" "https://github.com/Homebrew/homebrew-${tap}"
    fi
done

# 重新拉取远程
brew update
</tmpl>

- 以下针对 Linux 系统上的 Linuxbrew
  <tmpl z-lang="bash">
# brew 程序本身，Homebrew / Linuxbrew 相同
unset HOMEBREW_API_DOMAIN
unset HOMEBREW_BREW_GIT_REMOTE
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew

# 以下针对 Linux 系统上的 Linuxbrew
unset HOMEBREW_API_DOMAIN
unset HOMEBREW_CORE_GIT_REMOTE
brew tap --custom-remote homebrew/core https://github.com/Homebrew/homebrew-core

# 重新拉取远程
brew update
</tmpl>

**注：重置回默认远程后，用户应该删除 shell 的 profile 设置中的环境变量 `HOMEBREW_BREW_GIT_REMOTE` 和 `HOMEBREW_CORE_GIT_REMOTE` 以免运行 `brew update` 时远程再次被更换。**
