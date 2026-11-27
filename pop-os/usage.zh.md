## 使用方法

### `sed` 替换

执行以下命令替换 Pop!_OS 专属软件源地址：

```{ztmpl lang="bash"}
{{sudo}}sed -i 's@https\?://apt\.pop-os\.org/@{{endpoint}}/@g' \
    /etc/apt/sources.list.d/pop-os-apps.sources \
    /etc/apt/sources.list.d/pop-os-release.sources
```

### 手动替换

编辑 `/etc/apt/sources.list.d/pop-os-release.sources`：

```{ztmpl lang="yaml" input="release src" path="/etc/apt/sources.list.d/pop-os-release.sources"}
X-Repolib-Name: Pop_OS Release Sources
Enabled: yes
Types: deb{{src}}
URIs: {{endpoint}}/release
Suites: {{release}}
Components: main
```

编辑 `/etc/apt/sources.list.d/pop-os-apps.sources`：

```{ztmpl lang="yaml" input="release" path="/etc/apt/sources.list.d/pop-os-apps.sources"}
X-Repolib-Name: Pop_OS Apps
Enabled: yes
Types: deb
URIs: {{endpoint}}/proprietary
Suites: {{release}}
Components: main
```

### Ubuntu 基础仓库

底层 Ubuntu 基础仓库配置位于 `/etc/apt/sources.list.d/system.sources`（默认指向 `http://apt.pop-os.org/ubuntu`），请参考 [Ubuntu 软件源帮助](../ubuntu/) 一并替换，完成后执行 {ztmpl}`{{sudo}}apt update` 更新索引。
