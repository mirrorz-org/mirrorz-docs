**注意：本镜像是 AOSP 镜像，Android SDK 因版权原因，不能提供镜像服务。**

**可访问 <https://cs.android.com> 在线搜索及浏览 AOSP 源码。**

参考 Google 教程 <https://source.android.com/setup/build/downloading>，
将 `https://android.googlesource.com/` 全部使用如下链接代替即可。

<tmpl>
{{endpoint}}/
</tmpl>

**由于 AOSP 镜像造成 CPU/内存负载过重，我们限制了并发数量，因此建议：**
1. sync 的时候并发数不宜太高，否则会出现 503 错误，即 `-j` 后面的数字不能太大，建议选择 4。
2. 请尽量选择流量较小时错峰同步。

## 过程摘录

### 下载 repo 工具

<tmpl z-lang="bash">
mkdir ~/bin
PATH=~/bin:$PATH
curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
chmod a+x ~/bin/repo
</tmpl>

或者使用 [git-repo 镜像](../git-repo/)

### 使用每月更新的初始化包

参考 [AOSP Monthly 镜像](../aosp-monthly/)，此目录仅在部分镜像站存在。

### 传统初始化方法

建立工作目录：

<tmpl z-lang="bash">
mkdir WORKING_DIRECTORY
cd WORKING_DIRECTORY
</tmpl>

初始化仓库：

<tmpl z-lang="bash">
repo init -u {{endpoint}}/platform/manifest
</tmpl>

**如果提示无法连接到 gerrit.googlesource.com，请参照 [git-repo 的帮助页面](../git-repo/)的更新一节。**

如果需要某个特定的 Android 版本 (见「说明」中「Android 版本列表」部分)：

<tmpl z-lang="bash">
repo init -u {{endpoint}}/platform/manifest -b android-4.0.1_r1
</tmpl>

同步源码树（以后只需执行这条命令来同步）：

<tmpl z-lang="bash">
repo sync
</tmpl>

### 建立次级镜像

由于 AOSP 镜像需求量巨大，且 Git 服务占资源较多，部分镜像站服务器因 AOSP 产生的负载已经占主要部分。
如果你是团队用户，我们强烈建议你建立次级镜像，再分享给团队内其他用户，减轻服务器压力。
建立 AOSP 镜像需要占用约 850G 磁盘。

具体步骤为：

下载 `repo` 工具和建立工作目录（略）

初始化：

<tmpl z-lang="bash">
repo init -u {{endpoint}}/mirror/manifest --mirror
</tmpl>

最后同步源码树：

<tmpl z-lang="bash">
repo sync
</tmpl>

同步完成后，运行：

<tmpl z-lang="bash">
git daemon --verbose --export-all --base-path=WORKING_DIR WORKING_DIR`
</tmpl>

其中 `WORKING_DIR` 为代码树所在目录。

此后，其他用户使用 `git://ip.to.mirror/` 作为镜像即可。

### 替换已有的 AOSP 源代码的 remote

如果你之前已经通过某种途径获得了 AOSP 的源码 (或者你只是 init 这一步完成后)，
你希望以后通过 TUNA 同步 AOSP 部分的代码，只需要修改 `.repo/manifests.git/config`，将

<tmpl>
url = https://android.googlesource.com/platform/manifest
</tmpl>

更改为

<tmpl>
url = {{endpoint}}/platform/manifest
</tmpl>

或者可以不修改文件，而执行

<tmpl>
git config --global url.{{endpoint}}/.insteadof https://android.googlesource.com
</tmpl>

### 常见问题

1. 本仓库镜像的是 AOSP 的 git 仓库，不是系统镜像或者开发工具下载。
1. Android 版本列表：<https://source.android.com/source/build-numbers.html#source-code-tags-and-builds> 或 <https://source.android.google.cn/source/build-numbers#source-code-tags-and-builds>。
1. 出现 `curl: (22) The requested URL returned error: 404 Not Found Server does not provide clone.bundle; ignoring.` 怎么办？
    - 无视即可，参见 <https://github.com/tuna/issues/issues/936>。
1. 为何不能通过浏览器访问？
    - 镜像站没有 gitweb, 并且提供的是 git bare 仓库，没有可以直接看到的内容。
    - 建议访问 <https://cs.android.com> 在线搜索及浏览 AOSP 源码。

## LineageOS 中对于 AOSP 的替换

打开`.repo/manifests/default.xml`，将

<tmpl z-lang="xml">
  <remote  name="aosp"
           fetch="https://android.googlesource.com"
</tmpl>

改成

<tmpl z-lang="xml">
  <remote  name="aosp"
           fetch="{{endpoint}}"
</tmpl>
