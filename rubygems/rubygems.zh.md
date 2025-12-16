## gem

使用以下命令替换 gems 默认源

<tmpl z-lang="bash">
# 添加镜像源并移除默认源
gem sources --add {{endpoint}}/ --remove https://rubygems.org/
# 列出已有源
gem sources -l
# 应该只有镜像源一个
</tmpl>

或者，编辑 `~/.gemrc`，将 <tmpl z-inline>{{endpoint}}/</tmpl> 加到 `sources` 字段。

## bundler

使用以下命令替换 bundler 默认源

<tmpl z-lang="bash">
bundle config set --global mirror.https://rubygems.org {{endpoint}}
</tmpl>

官方文档：https://bundler.io/v2.7/man/bundle-config.1.html#MIRRORS-OF-GEM-SOURCES
