LXC 1.0 以上版本增加了 `download` 模版，支持下载定义好的系统镜像。

欲使用镜像站进行下载加速，可以在 `lxc-create -t download` 的选项部分，
增加 `--server` 即可，例如：

<tmpl z-lang="bash">
lxc-create -t download -n my-container -- --server {{host}}{{path}}
</tmpl>

**LXD/LXC 2.0 及以上版本使用镜像加速的方法**:

创建一个 remote 链接，指向镜像站即可，或替换掉默认的 images 链接。

<tmpl z-lang="bash">
lxc remote add mirror-images {{endpoint}}/ --protocol=simplestreams --public
lxc image list mirror-images:
</tmpl>
