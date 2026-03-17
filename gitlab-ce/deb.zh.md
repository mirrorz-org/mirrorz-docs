## Debian/Ubuntu 用户

首先信任 GitLab 的 GPG 公钥：

```{ztmpl lang="bash"}
curl -fsSL https://packages.gitlab.com/gpg.key | {{sudo}}gpg --dearmor -o /usr/share/keyrings/gitlab_gitlab-ce-archive-keyring.gpg
```

再选择你的 Debian/Ubuntu 版本，将下方内容写入 `/etc/apt/sources.list.d/gitlab-ce.list`

```{ztmpl input="release" path="/etc/apt/sources.list.d/gitlab-ce.list"}
deb [signed-by=/usr/share/keyrings/gitlab_gitlab-ce-archive-keyring.gpg] {{endpoint}}/{{os}}/{{release}} {{release}} main
```

安装 gitlab-ce:

```{ztmpl lang="bash"}
{{sudo}}apt-get update
{{sudo}}apt-get install gitlab-ce
```
