本镜像包含 amd64, arm64, armel, armhf, i386 架构处理器的软件包。

### 手动替换

编辑 `/etc/apt/sources.list` 文件，在文件最前面添加以下条目：

<tmpl z-input="src" z-path="/etc/apt/sources.list">
deb {{endpoint}} kali-rolling main non-free contrib
{{src}}deb-src {{endpoint}} kali-rolling main non-free contrib
</tmpl>

### sed 替换

执行如下命令 sed 替换

<tmpl z-lang="bash">
{{sudo}}sed -i "s@http://http.kali.org/kali@{{endpoint}}@g" /etc/apt/sources.list
</tmpl>
