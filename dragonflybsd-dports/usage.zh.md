## 使用方法

编辑 `/usr/local/etc/pkg/repos/df-latest.conf`（若不存在可从同目录下的 `df-latest.conf.sample` 复制），将其内容替换为：

```{ztmpl path="/usr/local/etc/pkg/repos/df-latest.conf"}
Mirror: {
  url: "{{endpoint}}/${ABI}/LATEST",
  enabled: yes
}
```

配置完成后更新软件包索引：

```{ztmpl lang="bash"}
{{sudo}}pkg update -f
```
