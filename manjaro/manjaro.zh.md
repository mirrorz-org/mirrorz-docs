包含架构：`i686`, `x86_64`, `aarch64`

目前 AArch64 (ARM) 架构的 manjaro 源位于主源，manjaro-arm 镜像上游已不再更新。

使用说明
========

生成可用中国镜像站列表：

<tmpl z-lang="bash">
{{sudo}}pacman-mirrors -i -c China -m rank
</tmpl>
        
勾选

<tmpl>
{{endpoint}}/
</tmpl>

然后按 ``OK`` 键两次。
        
最后刷新缓存：

<tmpl z-lang="bash">
{{sudo}}pacman -Syy
</tmpl>
