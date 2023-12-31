**注：该镜像是 pkgsrc 源码安装的镜像。本镜像站同时提供 pkgsrc 其他功能的镜像（如二进制包，distfile 等，不包含 joyent 内容），请参考 [pkgsrc 镜像使用帮助](../pkgsrc/)。**

### 源码安装

对应[官方文档 getting-via-cvs](https://www.netbsd.org/docs/pkgsrc/pkgsrc.html#getting-via-cvs)，本镜像站中 pkgsrc.git 镜像与官方文档中源的 CVS 架构不同，与[官方 git 镜像](https://github.com/NetBSD/pkgsrc)架构类似，故使用命令有所调整。

拉取特定稳定版镜像分支

<tmpl z-lang="bash">
git clone -b pkgsrc-2021Q4 {{endpoint}}
</tmpl>

拉取当前镜像分支

<tmpl z-lang="bash">
git clone {{endpoint}}
</tmpl>

### 源码更新

对应[官方文档 uptodate-cvs](https://www.netbsd.org/docs/pkgsrc/pkgsrc.html#uptodate-cvs)，切换到 pkgsrc 目录，执行

<tmpl z-lang="bash">
git pull
</tmpl>

#### 源码切换分支

对应[官方文档 uptodate-cvs-switch](https://www.netbsd.org/docs/pkgsrc/pkgsrc.html#uptodate-cvs-switch)，切换到 pkgsrc 目录

切换特定稳定版镜像分支

<tmpl z-lang="bash">
git checkout pkgsrc-2021Q4
</tmpl>

切换当前镜像分支

<tmpl z-lang="bash">
git checkout trunk
</tmpl>
