## 使用方法

### 自动替换

AOSC OS 内置 `apt-gen-list` 工具来切换社区提供的可用镜像源。

列出可用镜像源，执行：

<tmpl z-lang="bash">
{{sudo}}apt-gen-list list-mirrors
</tmpl>

要启用某一镜像源，执行：

<tmpl z-lang="bash">
{{sudo}}apt-gen-list add-mirror <mirror>
</tmpl>

其中 `<mirror>` 替换为所列出的简称。

要仅启用某一源，执行：

<tmpl z-lang="bash">
{{sudo}}apt-gen-list set-mirror <mirror>
</tmpl>

其中 `<mirror>` 替换为所列出的简称。

关于 `apt-gen-list` 的语义和详细用法，请执行 `apt-gen-list help` 查看帮助。

### 手动修改

修改 `/etc/apt/sources.list`，内容为

<tmpl z-path="/etc/apt/sources.list">
deb {{endpoint}}/debs stable main
</tmpl>
