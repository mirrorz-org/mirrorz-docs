Linux Lite 是一个基于 Ubuntu 长期支持版本（LTS）的 Linux 发行版，搭载 Xfce 桌面环境。Linux Lite 的目的是将 Windows 用户引入 Linux，对新手比较友好。其旨在提供一套完整的应用程序来帮助用户满足用户日常的计算需求，这包括完整的办公套件、媒体播放器和其他基本的日常软件。

Linux Lite 的软件源配置文件是 `/etc/apt/sources.list`。将系统自带的该文件做个备份，将该文件替换为下面内容，即可使用选择的软件源镜像。

<tmpl z-input="release" z-path="/etc/apt/sources.list">
deb {{endpoint}}/ {{release}} main
</tmpl>
