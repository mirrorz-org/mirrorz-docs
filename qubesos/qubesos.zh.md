[Qubes OS](https://www.qubes-os.org/) 是一个面向安全的操作系统。

它使用一种叫做*隔离保证安全* (security by compartmentalization) 的理念，采用虚拟化技术隔离各个应用来保证安全。

### 使用方法

#### R4.1 及以上

在 `/etc/dnf/dnf.conf` 中添加 `fastestmirror=True`

#### R4.0 及以下

每次使用 `qubes-dom0-update --setopt=fastestmirror=True` 更新
  
或者不想使用上述命令，您可以使用如下方法

对于 `/etc/yum.repos.d` 下的 `qubes-*.repo`:

1. 用`#`注释掉所有的 `metalink`
2. 将 `baseurl` 中的 `https://yum.qubes-os.org/` 替换为 <tmpl z-inline>{{endpoint}}/repo/yum/</tmpl> 并取消这些 `baseurl` 的注释
