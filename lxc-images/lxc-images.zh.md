## LXD/Incus 分叉说明

**此镜像库为 linuxcontainers 的镜像，只适用于 Incus 项目。**

曾经 LXD 是 linuxcontainers 社区维护的项目，LXC 是命令行工具，LXD 是后台守护进程。
后来 Canonical 公司接管了 LXD 项目进行开发维护，linuxcontainers 社区分叉并独立维护了 Incus 项目作为 LXC 和 LXD 的替代。
经过 LXD/Incus 项目分叉后，目前差异如下：

* Incus 有自己独立的命令行工具和守护进程（incus/incusd），并且只使用 incus 命令交互，不再暴露 incusd 命令给使用者。**本镜像库（linuxcontainers 镜像）只能用于 Incus 项目**。
* LXC/LXD 继续沿用之前体系，并且只能使用 Canonical 公司的镜像库。**LXC/LXD 不能使用本镜像库**。如果强行让 LXC/LXD 使用本镜像库，有些镜像可能可以启动，但是会出现各种各样的兼容性问题，例如虚拟机镜像无法启动 agent，无法进行 "exec"

参考来源：
* https://discuss.linuxcontainers.org/t/important-notice-for-lxd-users-image-server/18479
* https://discuss.linuxcontainers.org/t/lxd-is-no-longer-part-of-the-linux-containers-project/17593

## Incus 使用镜像加速的方法

创建一个 remote 链接，指向镜像站即可，或替换掉默认的 images 链接。

<tmpl z-lang="bash">
incus remote add mirror-images {{endpoint}}/ --protocol=simplestreams --public
incus image list mirror-images:
</tmpl>
