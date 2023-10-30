## 使用方法

请参考 [elasticsearch 官方安装教程](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html)。

以 Debian/Ubuntu 安装为例，举例如下：

<tmpl z-lang="bash" z-input="version">
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | {{sudo}}gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] {{endpoint}}/{{version}}/apt/ stable main" | {{sudo}}tee /etc/apt/sources.list.d/elastic-{{version}}.list
{{sudo}}apt-get update && {{sudo}}apt-get install elasticsearch
</tmpl>
