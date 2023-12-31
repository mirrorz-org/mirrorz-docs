从 Mageia 6 开始，Mageia 的软件仓库同时兼容 urpmi 和 dnf，两个包管理器默认情况下均被预装。由于在可预见的未来里，urpmi 仍是默认包管理器且 Mageia 控制中心也只调用 urpmi，所以 urpmi 是必须要配置好的，而 dnf 可以按你的实际需要选择是否进行配置。

## urpmi 配置方法

移除所有已添加的软件仓库（sudo 似乎是没有被预装的，可以在稍后再安装使用）：

<tmpl z-lang="bash">
su
urpmi.removemedia -a
</tmpl>

添加软件源

<tmpl z-lang="bash" z-input="version arch">
su
urpmi.addmedia --distrib {{endpoint}}/distrib/{{version}}/{{arch}}
</tmpl>

刷新缓存：

<tmpl z-lang="bash">
su
urpmi.update -a
</tmpl>

## dnf 配置方法

dnf 在默认情况下已经被预装，如果你发现并没有，可以使用 urpmi 安装：

<tmpl z-lang="bash">
su
urpmi mageia-repos dnf
</tmpl>

接下来编辑 `/etc/yum.repos.d/` 中的文件：

将所有文件中的：

<tmpl>
#baseurl=https://mirrors.kernel.org/mageia/
</tmpl>

替换为：

<tmpl>
baseurl={{endpoint}}/
</tmpl>

注：为了让 dnf 能在镜像站软件源出现问题时，自动切换至其它后备软件源，我们不建议你注释掉 mirrorlist 行。

为了避免 dnf 和 urpmi 启用的软件仓库不一致，在保存之前，还需要额外进行检查，查看 urpmi 已启用仓库的方法如下：

* 打开 Mageia 控制中心。
* 选择配置安装和更新所用的介质源。

默认情况下，一个使用 `x86_64` 架构的 Mageia 在 urpmi 下默认启用的仓库有：

* Core Release
* Core Updates
* Nonfree Release
* Nonfree Updates
* Core 32bit Release
* Core 32bit Updates
* Nonfree 32bit Release
* Nonfree 32bit Updates

接下来，逐个检查文件，确认 urpmi 已仓库在 dnf 也被已启用，依然是编辑 `/etc/yum.repos.d/` 中的文件：

以 `/etc/yum.repos.d/mageia-x86_64.repo` 为例，你需要确认所有需要开启的软件仓库，如 `[mageia-x86_64]` 和 `[updates-x86_64]` （即 Core Release 和 Core Updates）部分末端 enabled 值为 1，其它所有不启用的仓库 enabled 值为 0。

保存所有的文件，退出。

刷新缓存：

<tmpl z-lang="bash">
su
dnf makecache
</tmpl>
