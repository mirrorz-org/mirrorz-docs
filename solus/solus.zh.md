Solus 是一个界面美观，对新手友好的 Linux 发行版，使用 `eopkg` 作为包管理器。

*  项目地址：https://getsol.us

### 使用方法

执行以下命令

<tmpl z-lang="bash">
{{sudo}}eopkg add-repo Mirror {{endpoint}}/shannon/eopkg-index.xml.xz
</tmpl>

此后，之行以下命令以启用 Mirror 源，禁用官方源

<tmpl z-lang="bash">
{{sudo}}eopkg enable-repo Mirror
{{sudo}}eopkg disable-repo Solus
</tmpl>

或者用 Mirror 源直接覆盖官方源

<tmpl z-lang="bash">
{{sudo}}eopkg add-repo Solus {{endpoint}}/shannon/eopkg-index.xml.xz
</tmpl>

关于 `eopkg` 命令的详细用法，请执行 `eopkg help` 查看帮助。
