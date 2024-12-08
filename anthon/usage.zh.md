## 使用方法

### 自动替换

请使用以下命令交互式开启/关闭镜像源，输入镜像源名称并使用空格启用/禁用镜像源（请注意：`oma mirror` 允许指定多个镜像源，请注意禁用不需要使用的镜像源）：

<tmpl z-lang="bash">
{{sudo}}oma mirror
</tmpl>

关于 `oma mirror` 的更多详细命令和用法，请参考 [oma 的 GitHub 页面](https://github.com/AOSC-Dev/oma?tab=readme-ov-file#command-reference)。

### 手动修改（不推荐）

安同 OS 推荐使用 `oma` 完成对软件源配置的修改，不推荐手动编辑配置文件。

如确实有相关需求，请按下例编辑 `/etc/apt/sources.list` 的内容：

<tmpl z-path="/etc/apt/sources.list">
deb {{endpoint}}/debs stable main
</tmpl>
