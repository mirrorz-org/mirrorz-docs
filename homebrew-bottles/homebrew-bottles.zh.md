本镜像提供 Homebrew 二进制预编译包（Bottles）及 JSON API 镜像。Homebrew 本体与安装脚本镜像请参考 [Homebrew 帮助](../homebrew/)。

注：大多数镜像站同时提供 {ztmpl}`{{endpoint}}/api` 作为 `HOMEBREW_API_DOMAIN`；若所选镜像站未提供 `/api` 接口，仅设置 `HOMEBREW_BOTTLE_DOMAIN` 即可。

### 临时替换

```{ztmpl lang="bash"}
export HOMEBREW_API_DOMAIN="{{endpoint}}/api"
export HOMEBREW_BOTTLE_DOMAIN="{{endpoint}}"
```

### 长期替换

如果你使用 bash：

```{ztmpl lang="bash"}
echo 'export HOMEBREW_API_DOMAIN="{{endpoint}}/api"' >> ~/.bash_profile
echo 'export HOMEBREW_BOTTLE_DOMAIN="{{endpoint}}"' >> ~/.bash_profile
export HOMEBREW_API_DOMAIN="{{endpoint}}/api"
export HOMEBREW_BOTTLE_DOMAIN="{{endpoint}}"
```

如果你使用 zsh：

```{ztmpl lang="bash"}
echo 'export HOMEBREW_API_DOMAIN="{{endpoint}}/api"' >> ~/.zprofile
echo 'export HOMEBREW_BOTTLE_DOMAIN="{{endpoint}}"' >> ~/.zprofile
export HOMEBREW_API_DOMAIN="{{endpoint}}/api"
export HOMEBREW_BOTTLE_DOMAIN="{{endpoint}}"
```
