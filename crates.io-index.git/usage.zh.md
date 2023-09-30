## 使用方法

编辑 `$CARGO_HOME/config` 文件，添加以下内容：

<tmpl z-lang="toml">
[source.crates-io]
replace-with = 'mirror'

[source.mirror]
registry = "{{endpoint}}"
</tmpl>

注：`$CARGO_HOME`：在 Windows 系统默认为：`%USERPROFILE%\.cargo`，在类 Unix 系统默认为：`$HOME/.cargo`

在 Linux 环境可以使用下面的命令完成：

<tmpl z-lang="bash">
mkdir -vp ${CARGO_HOME:-$HOME/.cargo}

cat << EOF | tee -a ${CARGO_HOME:-$HOME/.cargo}/config
[source.crates-io]
replace-with = 'mirror'

[source.mirror]
registry = "{{endpoint}}"
EOF
</tmpl>

在可能的情况下推荐使用 [Rust crates.io 稀疏索引镜像](../crates.io-index/)
