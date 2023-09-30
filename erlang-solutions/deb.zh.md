### Debian/Ubuntu 用户

选择你的系统版本

<tmpl z-global z-input="release"></tmpl>

首先信任 erlang-solutions 的 GPG 公钥：

<tmpl z-lang="bash">
curl -s https://packages.erlang-solutions.com/{{os}}/erlang_solutions.asc | {{sudo}}apt-key add -
</tmpl>

新建 `/etc/apt/sources.list.d/erlang-solutions.list`

<tmpl z-path="/etc/apt/sources.list.d/erlang-solutions.list">
deb {{endpoint}}/{{os}} {{release}} contrib
</tmpl>

安装 `erlang` 即可

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install -y erlang
</tmpl>
