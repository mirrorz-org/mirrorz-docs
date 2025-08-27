[GNU/Guix](https://guix.gnu.org/) 是隶属于 GNU 项目的自由软件发行版。Guix 可以作为独立的操作系统发行版安装在计算机上，可以作为软件包管理器安装在别的 Linux 发行版上。
它的核心是一个函数式软件包管理器，支持事务性的升级、回滚操作。用户可以通过 [Guile](https://www.gnu.org/software/guile/) 语言编写配置文件管理操作系统的服务或者管理用户安装的软件。

## 使用方法

修改 `~/.config/guix/channels.scm` 文件即可在 `guix pull` 时使用 Git 镜像：

<tmpl z-lang="scheme" z-path="~/.config/guix/channels.scm">
(list (channel
       (inherit (car %default-channels))
       (url "{{endpoint}}/git/guix.git")))
```
</tmpl>
