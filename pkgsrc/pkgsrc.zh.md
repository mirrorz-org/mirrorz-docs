**注：该镜像是 pkgsrc 二进制包和 distfile 的镜像。本镜像站同时提供 pkgsrc 源码的镜像，请参考 [pkgsrc.git 镜像使用帮助](../pkgsrc.git/)。**

### 二进制包使用

输入

<tmpl z-lang="bash">
echo {{endpoint}}/packages/NetBSD/<ARCH>/<VERSION>/All > $PKGDIR/etc/pkgin/repositories.conf
</tmpl>

其中 `<ARCH>` 和 `<VERSION>` 可选范围可参看以下链接

<tmpl>
{{endpoint}}/packages/NetBSD/
</tmpl>

注意该镜像不包括 joyent 内容，即`MacOS`，`SmartOS`，`Linux`中二进制包。

### distfile 使用

如果想使用该镜像的 distfile 强制替换全部 distfile 的下载路径，编辑`$PKGSRCDIR/mk/defaults/mk.conf`，并添加

<tmpl>
MASTER_SITE_BACKUP= {{endpoint}}/distfiles/
MASTER_SITE_OVERRIDE= {{endpoint}}/distfiles/
MASTER_SORT= .edu.cn .cn
</tmpl>

若只是部分替代，可参考

<tmpl>
MASTER_SITE_CYGWIN= https://mirror/cygwin/
MASTER_SITE_GNU= https://mirror/gnu/
MASTER_SITE_PERL_CPAN= https://mirror/CPAN/modules/by-module/
MASTER_SITE_TEX_CTAN= https://mirror/CTAN/
MASTER_SITE_BACKUP= {{endpoint}}/distfiles/
MASTER_SORT= .edu.cn .cn
</tmpl>

其中非 pkgsrc 的变量可参考[ Cygwin 帮助](../cygwin/)，[ GNU 帮助](../gnu/)，[ CPAN 帮助](../CPAN/)，[CTAN 帮助](../CTAN/)。
