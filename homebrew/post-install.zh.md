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
