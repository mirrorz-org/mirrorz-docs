[GNU/Guix](https://guix.gnu.org/) 是隶属于 GNU 项目的自由软件发行版。Guix 可以作为独立的操作系统发行版安装在计算机上，可以作为软件包管理器安装在别的 Linux 发行版上。
它的核心是一个函数式软件包管理器，支持事务性的升级、回滚操作。用户可以通过 [Guile](https://www.gnu.org/software/guile/) 语言编写配置文件管理操作系统的服务或者管理用户安装的软件。

## 使用方法

* guix 命令支持使用 `--substitute-urls` 参数为单个命令的执行临时覆盖 substitute 服务器，例如：

<CodeBlock>
```shell
guix package -i <package> --substitute-urls="{{endpoint}}/guix"
```
</CodeBlock>

* 如果您使用 Guix 管理整个操作系统，请修改操作系统配置文件，替换
  `substitute-urls` 参数。例如：

<CodeBlock>
```scheme
(operating-system
  (services (modify-services %desktop-services
              (guix-service-type
               config => (guix-configuration
                          (inherit config)
                          (substitute-urls '("{{endpoint}}/guix"
                                             "https://ci.guix.gnu.org"))))))
  ...
  )
```
</CodeBlock>

* 如果您在别的发行版上使用 Guix 包管理器，请修改 `guix-daemon` 的
  `--substitute-urls` 参数。比如修改 `guix-daemon.service` 的 `ExecStart` 为：

<CodeBlock>
```conf
ExecStart=/var/guix/profiles/per-user/root/current-guix/bin/guix-daemon --build-users-group=guixbuild --substitute-urls="{{endpoint}}/guix"
```
</CodeBlock>
