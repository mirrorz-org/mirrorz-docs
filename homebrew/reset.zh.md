### 复原默认上游

取消镜像环境变量并将 `brew` 远程地址恢复为 GitHub 官方上游：

```{ztmpl lang="bash"}
unset HOMEBREW_API_DOMAIN
unset HOMEBREW_BOTTLE_DOMAIN
unset HOMEBREW_BREW_GIT_REMOTE
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew
brew update
```

复原后请删除 shell 配置文件（`~/.bashrc`、`~/.bash_profile` 或 `~/.zprofile`）中对应的 `export HOMEBREW_*` 配置，以免再次运行 `brew update` 时被重新覆盖。
