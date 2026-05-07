## Debian/Ubuntu 用户

首先请安装依赖：

```{ztmpl lang="bash"}
{{sudo}}apt-get update && {{sudo}}apt-get install -y wget apt-transport-https
```

然后信任 GPG 公钥：

```{ztmpl lang="bash"}
wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | {{sudo}}gpg --dearmor -o /etc/apt/keyrings/adoptium.gpg
```

随后将下列内容添加到 `/etc/apt/sources.list.d/adoptium.list` ：

```{ztmpl lang="properties" input="release" path="/etc/apt/sources.list.d/adoptium.list"}
deb [signed-by=/etc/apt/keyrings/adoptium.gpg] {{endpoint}}/deb {{release}} main
```

再执行

```{ztmpl lang="bash"}
{{sudo}}apt-get update
```

之后可以安装软件包，例如：

```{ztmpl lang="bash"}
{{sudo}}apt-get install temurin-17-jdk
```
