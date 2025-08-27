[opam](https://opam.ocaml.org) 是 OCaml 的包管理器。

## 使用方式

- 首次使用 opam（未运行过 `opam init`）：

<tmpl z-lang="bash">
opam init default {{endpoint}}
</tmpl>

- 从 `opam init` 配置的默认源切换至镜像源：

<tmpl z-lang="bash">
opam repo set-url default {{endpoint}} --all --set-default
</tmpl>

使用时如出现 "Duplicate field archive-mirrors" 警告，可根据错误信息手动删除重复配置。

以 Linux 为例，删除 `~/.opam/repo/default/repo` 文件中重复的 `archive-mirrors` 条目即可。
