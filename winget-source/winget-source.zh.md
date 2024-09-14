Windows Package Manager (aka. WinGet) 默认软件源。

**修改 WinGet 软件源需要管理员权限，请以管理员身份运行终端。**

### WinGet \>= 1.8

用以下命令替换 winget 源：

<tmpl z-lang="bash">
winget source remove winget
winget source add winget {{endpoint}} --trust-level trusted
</tmpl>

### WinGet \<= 1.7

用以下命令替换 winget 源：

<tmpl z-lang="bash">
winget source remove winget
winget source add winget {{endpoint}}
</tmpl>

若出现 0x80073d1b : smartscreen reputation check failed. 错误，请检查网络连接或暂时关闭 SmartScreen。

如需重置为官方地址，执行以下命令即可：

```bash
winget source reset winget
```
