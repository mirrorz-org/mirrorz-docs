## 收录架构

* MINGW: i686, x86_64, ucrt64, clang64
* MSYS: i686, x86_64

## 安装

请访问镜像目录下的 `distrib/` 目录

<tmpl>
# x86_64
{{endpoint}}/distrib/x86_64/
# i686
{{endpoint}}/distrib/i686/
</tmpl>

找到名为 `msys2-<架构>-<日期>.exe` 的文件（如 `msys2-x86_64-20141113.exe`），下载安装即可。

## pacman 的配置

直接运行

<tmpl z-lang="bash">
sed -i "s#https\?://mirror.msys2.org/#{{endpoint}}/#g" /etc/pacman.d/mirrorlist*
</tmpl>
