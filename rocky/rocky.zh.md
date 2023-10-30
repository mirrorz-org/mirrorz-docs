对于 Rocky Linux 8，使用以下命令替换默认的配置

<tmpl z-lang="bash">
{{sudo}}sed -e 's|^mirrorlist=|#mirrorlist=|g' \
         -e 's|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl={{endpoint}}|g' \
         -i.bak \
         /etc/yum.repos.d/Rocky-AppStream.repo \
         /etc/yum.repos.d/Rocky-BaseOS.repo \
         /etc/yum.repos.d/Rocky-Extras.repo \
         /etc/yum.repos.d/Rocky-PowerTools.repo
</tmpl>

对于 Rocky Linux 9，使用以下命令替换默认的配置


<tmpl z-lang="bash">
{{sudo}}sed -e 's|^mirrorlist=|#mirrorlist=|g' \
         -e 's|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl={{endpoint}}|g' \
         -i.bak \
         /etc/yum.repos.d/rocky-extras.repo \
         /etc/yum.repos.d/rocky.repo
</tmpl>

以上命令只替换了默认启用的仓库。替换之后请运行 `dnf makecache` 更新缓存。
