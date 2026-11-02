## 使用方法

以下内容根据 [官方文档](https://docs.opnsense.org/manual/updates.html) 修改而来。

1. 使用 root 用户登录防火墙通用用户界面。
2. 依次进入 **系统 ‣ 固件 ‣ 设置 (System ‣ Firmware ‣ Settings)** 菜单。
3. 在 **镜像 (Mirror)** 下拉菜单中选择 `(custom)` 选项。
4. 在下方的文本框中输入镜像站地址：

```{ztmpl}
{{endpoint}}
```

5. 点击下方的 **保存 (Save)** 按钮。
6. 在 **状态 (Status)** 菜单点击下方的 **检查升级 (Check for updates)** 按钮进行更新。
