## 使用方法

编辑 `$CARGO_HOME/config.toml` 文件，添加以下内容：

<tmpl z-lang="toml">
[source.crates-io]
replace-with = 'mirror'

[source.mirror]
registry = "{{endpoint}}"
</tmpl>

注：`$CARGO_HOME`：在 Windows 系统默认为：`%USERPROFILE%\.cargo`，在类 Unix 系统默认为：`$HOME/.cargo`。

注：cargo 仍会尝试读取不带 `.toml` 扩展名的配置文件（即 `$CARGO_HOME/config`），但从 1.39 版本起，cargo 引入了对 `.toml` 扩展名的支持，并将其设为首选格式。请根据使用的 cargo 版本选择适当的配置文件名。

在 Linux 环境可以使用下面的命令完成：

<tmpl z-lang="bash">
mkdir -vp ${CARGO_HOME:-$HOME/.cargo}

cat << EOF | tee -a ${CARGO_HOME:-$HOME/.cargo}/config.toml
[source.crates-io]
replace-with = 'mirror'

[source.mirror]
registry = "{{endpoint}}"
EOF
</tmpl>

在可能的情况下推荐使用 [Rust crates.io 稀疏索引镜像](../crates.io-index/)
