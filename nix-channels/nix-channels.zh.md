### Nixpkgs binary cache

目前 TUNA/BFSU/USTC 等并未提供 nix-darwin 的 binary cache，请使用官方源或 SJTUG。

#### 持久配置

以优先选择镜像，备选源站为例，选择以下配置之一：

- 单独安装的 Nix：编辑配置文件添加或修改如下项（多用户安装修改 `/etc/nix/nix.conf`，单用户安装修改 `~/.config/nix/nix.conf`）：
  ```{ztmpl lang="conf"}
  substituters = {{endpoint}}/store https://cache.nixos.org/
  ```

- NixOS 21.11 及之前的版本在 `configuration.nix` 中使用如下配置（https://cache.nixos.org 会被自动添加）
  ```{ztmpl lang="nix"}
  nix.binaryCaches = [ "{{endpoint}}/store" ];
  ```

- NixOS 22.05 及之后的版本在 `configuration.nix` 中使用如下配置（https://cache.nixos.org 会被自动添加）：
  ```{ztmpl lang="nix"}
  nix.settings.substituters = [ "{{endpoint}}/store" ];
  ```

如果因为无法访问 https://cache.nixos.org 等原因，希望避免自动添加该默认地址，请在配置中使用`lib.mkForce`。

```{ztmpl lang="nix"}
# load `lib` into namespace at the file head with `{ config, pkgs, lib, ... }:`
nix.settings.substituters = lib.mkForce [ "{{endpoint}}/store" ];
```

Nix 2.4 及之后的版本可以在 substituter 链接参数中指定优先级 (1~100)：

```{ztmpl lang="nix"}
nix.settings.substituters = [ "{{endpoint}}/store?priority=10" ];
```

查询 substituter 默认优先级：

```{ztmpl lang="bash"}
curl {{endpoint}}/store/nix-cache-info
```

一般情况下，镜像的默认优先级为 40，与 cache.nixos.org 保持一致。

#### 临时使用

在安装 NixOS 时临时使用：

```{ztmpl lang="bash"}
nixos-install --option substituters "{{endpoint}}/store https://cache.nixos.org"
```

在 NixOS 切换配置时临时使用：

```{ztmpl lang="bash"}
nixos-rebuild --option substituters "{{endpoint}}/store https://cache.nixos.org"
```

临时关闭可以通过还原 substituters 实现：

```{ztmpl lang="bash"}
nixos-rebuild --option substituters "https://cache.nixos.org"
```

指定 substituter 优先级：

```{ztmpl lang="bash"}
nixos-rebuild --option substituters "{{endpoint}}/store?priority=10 https://cache.nixos.org"
```

### Nixpkgs channel

注：SJTUG 提供了 binary cache，未提供该镜像。

单独安装的 Nix 替换 `nixpkgs-unstable` 命令如下：

```{ztmpl lang="bash"}
nix-channel --add {{endpoint}}/nixpkgs-unstable nixpkgs
nix-channel --update
```

替换 NixOS channel 命令如下（以 root 执行）：

```{ztmpl lang="bash" input="version"}
nix-channel --add {{endpoint}}/nixos-{{version}} nixos
nix-channel --update
```
