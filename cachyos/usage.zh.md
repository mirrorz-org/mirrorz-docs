## 使用方法

### CachyOS 用户

运行以下命令：

<tmpl z-lang="bash">
{{sudo}}cachyos-rate-mirrors
</tmpl>

### Arch Linux 用户

参考以下步骤，或者访问<https://github.com/CachyOS/linux-cachyos/blob/master/README.md#option-2-manual-installation>

#### 1. 安装 cachyos keyring

<tmpl z-lang="bash">
{{sudo}}pacman-key --recv-keys F3B607488DB35A47 --keyserver keyserver.ubuntu.com
{{sudo}}pacman-key --lsign-key F3B607488DB35A47
</tmpl>

#### 2. 安装所需的软件包

注意： 安装 CachyOS Pacman 将安装一个 pacman 的分支，其中包含从 CachyOS 添加的功能，例如 `INSTALLED_FROM` 和自动架构检查。CachyOS Pacman 6.1 开始添加了功能验证功能，当使用 Arch Linux pacman 时，该功能可能会导致警告。CachyOS 正在与 Arch Linux 沟通，以再次提供适当的兼容性。

如果你想避免这种情况，请不要添加 `[cachyos]` 仓库，其中包含自定义的 pacman。所有其他仓库，如 cachyos-v3、cachyos-v4、cachyos-extra/core-v3/4 都可以添加。

<tmpl z-lang="bash">
{{sudo}}pacman -U '{{endpoint}}/repo/x86_64/cachyos/cachyos-keyring-20240331-1-any.pkg.tar.zst' \
    '{{endpoint}}/repo/x86_64/cachyos/cachyos-mirrorlist-18-1-any.pkg.tar.zst' \
    '{{endpoint}}/repo/x86_64/cachyos/cachyos-v3-mirrorlist-18-1-any.pkg.tar.zst' \
    '{{endpoint}}/repo/x86_64/cachyos/cachyos-v4-mirrorlist-6-1-any.pkg.tar.zst' \
    '{{endpoint}}/repo/x86_64/cachyos/pacman-7.0.0.r3.gf3211df-3.1-x86_64.pkg.tar.zst'
</tmpl>

如果安装了 CachyOS 的 pacman 版本后需要回到 Arch Linux 仓库，你必须在回滚后运行以下命令，以避免收到 `%INSTALLED_DB%` 警告：

<tmpl z-lang="bash">
{{sudo}}find /var/lib/pacman/local/ -type f -name "desc" -exec sed -i '/^%INSTALLED_DB%$/,+2d' {} \;
</tmpl>

#### 3. 检查 CPU 兼容性

通过运行以下命令来检查支持：

<tmpl z-lang="bash">
/lib/ld-linux-x86-64.so.2 --help | grep supported
</tmpl>

与 `x86-64-v4` 指令集兼容的 CPU 输出示例:

> x86-64-v4 (supported, searched)
> x86-64-v3 (supported, searched)
> x86-64-v2 (supported, searched)

如果您看到 `x86-64-v4 (supported, searched)`，则表示 CPU 兼容并且可以使用 x86-64-v4 指令集。

#### 4. 添加 cachyos 仓库

您需要编辑 `/etc/pacman.conf` 并添加仓库。

* 如果您的 CPU 支持 x86-64，则仅添加 [cachyos] 仓库

<tmpl z-lang="ini" z-path="/etc/pacman.conf" z-append>
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
</tmpl>

* 如果您的 CPU 支持 x86-64-v3，则添加 [cachyos-v3]、[cachyos-core-v3]、[cachyos-extra-v3] 和 [cachyos]

<tmpl z-lang="ini" z-path="/etc/pacman.conf" z-append>
[cachyos-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-core-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos-extra-v3]
Include = /etc/pacman.d/cachyos-v3-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
</tmpl>

* 如果您的 CPU 支持 x86-64-v4，则添加 [cachyos-v4]、[cachyos-core-v4]、[cachyos-extra-v4] 和 [cachyos]

<tmpl z-lang="ini" z-path="/etc/pacman.conf" z-append>
[cachyos-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-core-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos-extra-v4]
Include = /etc/pacman.d/cachyos-v4-mirrorlist
[cachyos]
Include = /etc/pacman.d/cachyos-mirrorlist
</tmpl>

最后，使用 CachyOS 软件包更新您的系统：

<tmpl z-lang="bash">
{{sudo}}pacman -Syu
</tmpl>
