[Nix](https://nixos.org/nix) 是一个支持 Linux 和 macOS 的独特的“函数式包管理器”，具有原子更新、依赖隔离、构建尽可能可复现等特点。

[Nixpkgs](https://nixos.org/nixpkgs) 是 Nix 包管理器对应的软件发行版，使用 Nix 函数式语言编写，除软件包外提供用于软件定制、构建、开发环境配置的工具。

[NixOS](https://nixos.org) 是一个基于 Nix 和 Nixpkgs 的 GNU/Linux 发行版。在 Nixpkgs 中的软件之上 NixOS 使用 Nix 语言提供了声明式的系统配置，实现系统完整可复现、版本快速切换等功能。

### Nix

细节内容，请参见 Nix 文档中的 [Installing a Binary Distribution](https://nixos.org/nix/manual/#ch-installing-binary) 一节。

- 单用户安装
    <tmpl z-lang="bash">
sh <(curl -L {{endpoint}}/latest/install)
</tmpl>

- 多用户安装：
    <tmpl z-lang="bash">
sh <(curl -L {{endpoint}}/latest/install) --daemon
</tmpl>

如果需要，可以在文件列表中手动挑选需要的版本

<tmpl>
{{endpoint}}
</tmpl>
