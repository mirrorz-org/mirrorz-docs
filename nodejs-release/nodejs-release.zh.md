Nodejs Release 为各平台提供预编译的 nodejs 和 npm 等二进制文件，是 [https://nodejs.org/dist/](https://nodejs.org/dist/) 的镜像。

### 使用方法

可以手工选择下载所需的版本，也可以搭配 `n` 或者 `fnm` 等版本管理器使用，方法如下：

#### n

<tmpl z-lang="bash">
# 设定环境变量
export NODE_MIRROR={{endpoint}}/
# 然后正常使用 n 即可
{{sudo}}n stable
</tmpl>

#### fnm

<tmpl z-lang="bash">
# 设定环境变量
export FNM_NODE_DIST_MIRROR={{endpoint}}/
# 然后正常使用 fnm 即可
fnm install <version>
</tmpl>

#### volta

创建或编辑 `~/.volta/hooks.json` (Linux/MacOS)，或 `%LOCALAPPDATA%\Volta\hooks.json` (Windows)，将内容替换如下

<tmpl z-lang="json">
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
</tmpl>

之后即可正常使用 `volta`

<tmpl z-lang="bash">
volta install node@<version>
</tmpl>

#### nvm

<tmpl z-lang="bash">
# 设定环境变量
export NVM_NODEJS_ORG_MIRROR={{endpoint}}/
# 然后正常使用
nvm install <version>
</tmpl>

#### nvs

<tmpl z-lang="bash">
nvs remote node {{endpoint}}/
</tmpl>
