PyPI 镜像在每次同步成功后间隔 5 分钟同步一次。

### pip

#### 临时使用

<tmpl z-lang="bash">
pip install -i {{endpoint}}/web/simple some-package
</tmpl>

注意，`simple` 不能少。
pip 要求使用 `https` ，因此需要 `https` 而不是 `http`

#### 设为默认

升级 pip 到最新的版本 (>=10.0.0) 后进行配置：

<tmpl z-lang="bash">
python -m pip install --upgrade pip
pip config set global.index-url {{endpoint}}/web/simple
</tmpl>

如果您到 pip 默认源的网络连接较差，临时使用本镜像站来升级 pip：

<tmpl z-lang="bash">
python -m pip install -i {{endpoint}}/web/simple --upgrade pip
</tmpl>

#### 配置多个镜像源

如果您想配置多个镜像源平衡负载，可在已经替换 `index-url` 的情况下通过以下方式继续增加源站：

<tmpl z-lang="bash">
pip config set global.extra-index-url "<url1> <url2>..."
</tmpl>

请自行替换引号内的内容，源地址之间需要有空格

例如

<tmpl z-lang="bash">
pip config set global.extra-index-url "{{endpoint}}/web/simple"
</tmpl>

### PDM

通过如下命令设置默认镜像：

<tmpl z-lang="bash">
pdm config pypi.url {{endpoint}}/web/simple
</tmpl>

### Poetry

通过以下命令为单个项目设置默认镜像：

<tmpl z-lang="bash">
poetry source add --default mirrors {{endpoint}}/web/simple/
</tmpl>

通过以下命令为单个项目设置次级镜像：

<tmpl z-lang="bash">
poetry source add --secondary mirrors {{endpoint}}/web/simple/
</tmpl>

Poetry 尚未支持全局设置镜像。参考 [issue 1632](https://github.com/python-poetry/poetry/issues/1632)。

使用全局镜像的临时方案是将 Poetry 的安装器切换回 pip，如下所示。但该方式会在将来的版本中停止支持，参考 [PR 7356](https://github.com/python-poetry/poetry/pull/7356)。

<tmpl z-lang="bash">
poetry config experimental.new-installer false
</tmpl>

## Homebrew

本节主要供 [Homebrew 帮助](../homebrew/)使用。

<tmpl z-lang="bash">
export HOMEBREW_PIP_INDEX_URL="{{endpoint}}/web/simple"
</tmpl>
