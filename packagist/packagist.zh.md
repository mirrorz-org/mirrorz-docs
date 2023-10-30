执行以下命令即可将 Composer 默认仓库设置为本站：

<tmpl z-lang="bash">
composer config -g repos.packagist composer {{endpoint}}/index
</tmpl>

该镜像只包含包索引，不含包的内容，主要目的是加快 composer 读取软件包索引的速度。
