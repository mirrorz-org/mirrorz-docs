Nodejs Release 为各平台提供预编译的 nodejs 和 npm 等二进制文件，是 [https://nodejs.org/dist/](https://nodejs.org/dist/) 的镜像。

### 使用方法

可以手工选择下载所需的版本，也可以搭配 `n` 或者 `fnm` 等版本管理器使用，方法如下：

#### n

```{ztmpl lang="bash"}
# 设定环境变量
export NODE_MIRROR={{endpoint}}/
# 然后正常使用 n 即可
{{sudo}}n stable
```

#### fnm

```{ztmpl lang="bash"}
# 设定环境变量
export FNM_NODE_DIST_MIRROR={{endpoint}}/
# 然后正常使用 fnm 即可
fnm install <version>
```

#### volta

创建或编辑 `~/.volta/hooks.json` (Linux/MacOS)，或 `%LOCALAPPDATA%\Volta\hooks.json` (Windows)，将内容替换如下

```{ztmpl lang="json"}
{
    "node": {
        "index": {
            "template": "{{endpoint}}/index.json"
        },
        "distro": {
            "template": "{{endpoint}}/v{{=<% %>=}}{{version}}/{{filename}}"
        }
    }
}
```

之后即可正常使用 `volta`

```{ztmpl lang="bash"}
volta install node@<version>
```

#### nvm

```{ztmpl lang="bash"}
# 设定环境变量
export NVM_NODEJS_ORG_MIRROR={{endpoint}}/
# 然后正常使用
nvm install <version>
```

#### nvs

```{ztmpl lang="bash"}
nvs remote node {{endpoint}}/
```

#### mise

```{ztmpl lang="bash"}
mise settings node.mirror_url={{endpoint}}/
```
