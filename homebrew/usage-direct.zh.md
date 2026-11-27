### 替换现有仓库上游

设置 `HOMEBREW_BREW_GIT_REMOTE` 并运行 `brew update`，`brew` 会自动更新其 Git 远程地址：

```{ztmpl lang="bash"}
export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}"
brew update
```

如需长期生效，将该环境变量写入 shell 配置文件（bash 写入 `~/.bashrc` 或 `~/.bash_profile`，zsh 写入 `~/.zprofile`）：

```{ztmpl lang="bash"}
# bash
echo 'export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}"' >> ~/.bashrc

# zsh
echo 'export HOMEBREW_BREW_GIT_REMOTE="{{endpoint}}"' >> ~/.zprofile
```

请同时前往 [Homebrew Bottles 帮助](../homebrew-bottles/) 配置 `HOMEBREW_API_DOMAIN` 与 `HOMEBREW_BOTTLE_DOMAIN`。
