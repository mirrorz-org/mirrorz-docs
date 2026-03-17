### Debian/Ubuntu 用户

首先下载 GitLab 的 GPG 公钥：

```{ztmpl lang="bash"}
curl -L https://packages.gitlab.com/runner/gitlab-runner/gpgkey | {{sudo}}gpg --dearmor -o /usr/share/keyrings/gitlab-runner.gpg
```

再选择你的 Debian/Ubuntu 版本，将下方内容写入 `/etc/apt/sources.list.d/gitlab-runner.list`

```{ztmpl input="release" path="/etc/apt/sources.list.d/gitlab-runner.list"}
deb [signed-by=/usr/share/keyrings/gitlab-runner.gpg] {{endpoint}}/{{os}} {{release}} main
```

安装 gitlab-runner:

```{ztmpl lang="bash"}
{{sudo}}apt-get update
{{sudo}}apt-get install gitlab-runner
```
