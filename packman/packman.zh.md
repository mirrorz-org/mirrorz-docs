openSUSE 非官方社区软件源，主要收录允许自由分发但存在专利纠纷的软件，
例如多媒体解码器等。

### 使用说明

#### openSUSE Leap

<tmpl z-lang="bash">
{{sudo}}zypper ar -p 90 -fcg {{endpoint}}/suse/openSUSE_Leap_\$releasever/ mirror-packman
</tmpl>

#### openSUSE Tumbleweed

<tmpl z-lang="bash">
{{sudo}}zypper ar -p 90 -fcg {{endpoint}}/suse/openSUSE_Tumbleweed/ mirror-packman
</tmpl>

#### openSUSE Slowroll

<tmpl z-lang="bash">
{{sudo}}zypper ar -p 90 -fcg {{endpoint}}/suse/openSUSE_Slowroll/ mirror-packman
</tmpl>

#### 备注

在添加后需要刷新缓存：

<tmpl z-lang="bash">
{{sudo}}zypper ref
</tmpl>

编辑后需要使用如下命令完成对应软件包的来源替换：

<tmpl z-lang="bash">
{{sudo}}zypper dup --recommends --allow-vendor-change
</tmpl>

部分情况需要使用 `--allow-downgrade` 参数允许对应软件包降级安装，即：

<tmpl z-lang="bash">
{{sudo}}zypper dup --recommends --allow-vendor-change --allow-downgrade
</tmpl>

并根据给出的选项完成变更操作。

由于在 openSUSE 官方仓库中存在大量和 Packman 中同名的软件包，但 Packman 中包含了官方仓库无法包含的编解码器以及部分软件提供了官方仓库无法提供的支持，因此需要设置比官方仓库更高的优先级以覆盖更新来启用。
