### Debian/Ubuntu 用户

选择你的系统版本：

<tmpl z-global z-input="release"></tmpl>

Mongoose IM 版本：

<tmpl z-global z-input="mongooseim-version"></tmpl>

Erlang 版本：

<tmpl z-global z-input="erlang-version"></tmpl>

Elixir 版本：

<tmpl z-global z-input="elixir-version"></tmpl>

请注意：官方提供的软件列表可能经常变化，镜像站不保证能提供所有系统与软件的组合。
请在[官网](https://www.erlang-solutions.com/downloads/)查询目前的可用版本，并根据实际情况指定版本。

首先信任来自 [Erlang Solutions](https://www.erlang-solutions.com/downloads/) 的 PGP 公钥：

<tmpl z-lang="bash">
{{sudo}}mkdir -m 0755 -p /etc/apt/keyrings/
curl -s https://binaries2.erlang-solutions.com/GPG-KEY-pmanager.asc | {{sudo}}gpg --dearmor -o /etc/apt/keyrings/erlang-solutions-archive_compat.gpg
</tmpl>

新建 `/etc/apt/sources.list.d/erlang-solutions.list`，填入下列内容（可根据需要选择）：

<tmpl z-path="/etc/apt/sources.list.d/erlang-solutions.list">
deb [signed-by=/etc/apt/keyrings/erlang-solutions-archive_compat.gpg] {{endpoint}}/{{os}} {{release}}-esl-erlang-{{erlang-version}} contrib
deb [signed-by=/etc/apt/keyrings/erlang-solutions-archive_compat.gpg] {{endpoint}}/{{os}} {{release}}-elixir-{{elixir-version}} contrib
deb [signed-by=/etc/apt/keyrings/erlang-solutions-archive_compat.gpg] {{endpoint}}/{{os}} {{release}}-mongooseim-{{mongooseim-version}} contrib
</tmpl>

安装 `esl-erlang` 等软件包即可：

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install -y elixir esl-erlang mongooseim
</tmpl>
