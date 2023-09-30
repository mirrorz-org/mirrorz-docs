## 使用方法

<tmpl z-lang="bash">
# 对于 CentOS 7
{{sudo}}sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://mirror.centos.org/centos|baseurl={{endpoint}}|g' \
    -i.bak \
    /etc/yum.repos.d/CentOS-*.repo

# 对于 CentOS 8
{{sudo}}sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://mirror.centos.org/$contentdir|baseurl={{endpoint}}|g' \
    -i.bak \
    /etc/yum.repos.d/CentOS-*.repo
</tmpl>

注意其中的`*`通配符，如果只需要替换一些文件中的源，请自行增删。

注意，如果需要启用其中一些 repo，需要将其中的 `enabled=0` 改为 `enabled=1`。

最后，更新软件包缓存

<tmpl z-lang="bash">
{{sudo}}yum makecache
</tmpl>
