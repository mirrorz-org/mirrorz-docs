## Debian/Ubuntu 用户

首先信任 GitLab 的 GPG 公钥：

<tmpl z-lang="bash">
curl -fsSL https://packages.gitlab.com/gpg.key | {{sudo}}gpg --dearmor -o /usr/share/keyrings/gitlab_gitlab-ce-archive-keyring.gpg
</tmpl>

再选择你的 Debian/Ubuntu 版本，将下方内容写入 `/etc/apt/sources.list.d/gitlab-ce.list`

<tmpl z-input="release" z-path="/etc/apt/sources.list.d/gitlab-ce.list">
deb [signed-by=/usr/share/keyrings/gitlab_gitlab-ce-archive-keyring.gpg] {{endpoint}}/{{os}} {{release}} main
</tmpl>

安装 gitlab-ce:

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install gitlab-ce
</tmpl>
