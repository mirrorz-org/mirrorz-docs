### Debian / Ubuntu 用户

首先信任 https://apt.grafana.com/ 的 GPG 公钥：

```{ztmpl lang="bash"}
wget -q -O- https://apt.grafana.com/gpg.key | {{sudo}}gpg --dearmor -o /usr/share/keyrings/grafana.gpg
```

确保你的 apt 支持 HTTPS:

```{ztmpl lang="bash"}
{{sudo}}apt-get install -y apt-transport-https
```

选择你希望安装的 Grafana 版本（与你的系统版本无关），将下方内容写入 `/etc/apt/sources.list.d/grafana.list`

```{ztmpl lang="properties" input="version" path="/etc/apt/sources.list.d/grafana.list"}
deb [signed-by=/usr/share/keyrings/grafana.gpg] {{endpoint}}/apt/ {{version}} main
```

安装 Grafana

```{ztmpl lang="bash"}
{{sudo}}apt-get update
{{sudo}}apt-get install grafana
```
