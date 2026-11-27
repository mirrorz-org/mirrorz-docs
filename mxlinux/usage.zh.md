## 使用方法

### 图形界面配置（推荐）

打开系统内置的 `MX Repo Manager`（MX 软件源管理器），在镜像列表中勾选对应的镜像站并应用即可。

### 手动配置

编辑 `/etc/apt/sources.list.d/mx.list`，将其内容替换为：

```{ztmpl lang="properties" input="release ahs testrepo" path="/etc/apt/sources.list.d/mx.list"}
# MX Community Main and Test Repos
deb {{endpoint}}/mx/repo/ {{release}} main non-free
{{testrepo}}deb {{endpoint}}/mx/testrepo/ {{release}} test
{{#ahs}}

# ahs
deb {{endpoint}}/mx/repo/ {{release}} ahs
{{/ahs}}
```

注：MX Linux 的基础系统软件包来自 Debian 官方仓库（配置文件位于 `/etc/apt/sources.list.d/debian.list`），可同时参考 [Debian 软件源帮助](../debian/) 进行替换。修改完成后执行 {ztmpl}`{{sudo}}apt update` 更新索引。
