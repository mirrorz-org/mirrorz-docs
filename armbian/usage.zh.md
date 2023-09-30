## 使用方法

可以使用以下方法更换软件源：

* 运行 `armbian-config` -> Personal -> Mirrors -> 选择镜像站。
* 编辑 `/etc/apt/sources.list.d/armbian.list`，将 `http://apt.armbian.com` 替换为以下链接

<tmpl>
{{endpoint}}
</tmpl>

然后执行 `apt update`。

这可以由以下命令完成

<tmpl z-lang="bash">
{{sudo}}sed -i.bak 's#http://apt.armbian.com#{{endpoint}}#g' /etc/apt/sources.list.d/armbian.list
{{sudo}}apt update
</tmpl>
