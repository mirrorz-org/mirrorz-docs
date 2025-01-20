### Debian/Ubuntu 用户

首先下载 GitLab 的 GPG 公钥：

<tmpl z-lang="bash">
curl -L https://packages.gitlab.com/runner/gitlab-runner/gpgkey | {{sudo}}gpg --dearmor -o /usr/share/keyrings/gitlab-runner.gpg
</tmpl>

再选择你的 Debian/Ubuntu 版本，将下方内容写入 `/etc/apt/sources.list.d/gitlab-runner.list`

<tmpl z-input="release" z-path="/etc/apt/sources.list.d/gitlab-runner.list">
deb [signed-by=/usr/share/keyrings/gitlab-runner.gpg] {{endpoint}}/{{os}} {{release}} main
</tmpl>

安装 gitlab-runner:

<tmpl z-lang="bash">
{{sudo}}apt-get update
{{sudo}}apt-get install gitlab-runner
</tmpl>
