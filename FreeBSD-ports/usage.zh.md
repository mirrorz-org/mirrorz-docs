## 使用方法

在 `/etc/make.conf` 中添加以下内容（如果文件不存在，则新建该文件）：

<tmpl z-path="/etc/make.conf" z-append>
MASTER_SITE_OVERRIDE?={{endpoint}}/distfiles/${DIST_SUBDIR}/
</tmpl>

ports.tar.gz 文件为 Ports Collection，可以下载后解压到 `/usr/ports/` 目录。
也可参考 FreeBSD Handbook 中 `Installing the Ports Collection` 一节，使用 `git` 获取 ports tree：

<tmpl z-lang="bash">
git clone {{endpoint}}/ports.git /usr/ports
</tmpl>

注：
  1. 部分 ports 的源代码需要从 http://distcache.freebsd.org/ports-distfiles/ 以外的 master site 下载，本镜像不包含这些文件。
  2. 本镜像仅包含 ports tree 中 HEAD branch 引用到的文件。季度分支（如 `2020Q4`）引用的文件有可能不包含在本镜像中。
