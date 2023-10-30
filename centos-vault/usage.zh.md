## 使用方法

需要确定您所需要的小版本，如无特殊需要则使用该大版本的最后一个小版本，比如 6.10，5.11，填入下方的文本框。

<tmpl z-lang="bash" z-input="minorver">
{{sudo}}sed -e "s|^mirrorlist=|#mirrorlist=|g" \
    -e "s|^#baseurl=http://mirror.centos.org/centos/\$releasever|baseurl={{endpoint}}/{{minorver}}|g" \
    -e "s|^#baseurl=http://mirror.centos.org/\$contentdir/\$releasever|baseurl={{endpoint}}/{{minorver}}|g" \
    -i.bak \
    /etc/yum.repos.d/CentOS-*.repo
</tmpl>

注意其中的`*`通配符，如果只需要替换一些文件中的源，请自行增删。

注意，如果需要启用其中一些 repo，需要将其中的 `enabled=0` 改为 `enabled=1`。

最后，更新软件包缓存

<tmpl z-lang="bash">
{{sudo}}yum makecache
</tmpl>
