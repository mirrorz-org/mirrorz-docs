## 使用方法

### 为 Arch Linux 添加额外源

适用于给已经安装完毕的 Arch Linux 添加 BlackArch 源的情景。

1. [导入 GPG key](https://github.com/BlackArch/blackarch/issues/3505)：

    ```shell
    pacman-key --recv-keys 7533BAFE69A25079
    pacman-key --finger 7533BAFE69A25079
    pacman-key --lsign-key 7533BAFE69A25079
    ```

2. 在 `/etc/pacman.conf` 文件末尾添加两行：

    <tmpl z-lang="ini" z-path="/etc/pacman.conf" z-append>
    [blackarch]
    Server = {{endpoint}}/$repo/os/$arch
    </tmpl>

    由于一些软件依赖 32 位的库，需要取消掉 `/etc/pacman.conf` 中 `multilib` 的注释，详见 [ArchWiki](https://wiki.archlinux.org/index.php/Official_repositories#Enabling_multilib)。

3. 安装 `blackarch-keyring` 包来保持 GPG key 更新：

    <tmpl z-lang="bash">
    {{sudo}}pacman -Sy blackarch-keyring
    </tmpl>

注：BlackArch 软件源仅包含其打包的工具等软件。如果需要更换 Arch Linux 基础系统的软件源，请查看 [Arch Linux 帮助](../archlinux/)。

### 安装 BlackArch

适用于将 BlackArch 作为发行版安装并使用的情景。

编辑 `/etc/pacman.d/blackarch-mirrorlist`，在文件的最顶端添加：

```ini
Server = {{endpoint}}/$repo/os/$arch
```
