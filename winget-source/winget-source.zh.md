Windows Package Manager (aka. WinGet) 默认软件源。

**修改 WinGet 软件源需要管理员权限，请以管理员身份运行终端。**

### WinGet \>= 1.8

用以下命令替换 winget 源：

<tmpl z-lang="powershell">
winget source remove winget
winget source add winget {{endpoint}} --trust-level trusted
</tmpl>

### WinGet \<= 1.7

用以下命令替换 winget 源：

<tmpl z-lang="powershell">
winget source remove winget
winget source add winget {{endpoint}}
</tmpl>

若出现 0x80073d1b : smartscreen reputation check failed. 错误，请检查网络连接或暂时关闭 SmartScreen。

### 重置与故障排除

如需重置为官方地址，执行以下命令即可：

```powershell
winget source reset winget
```

如果出现错误：

```text
Operation failed: Windows 无法安装程序包 Microsoft.Winget.Source……因为它的版本为 xxx。已安装此程序包的更高版本 yyy。
```

那么说明镜像站的 WinGet 版本暂时低于官方源，可以使用以下命令移除更高版本的源：

```powershell
Get-AppxPackage Microsoft.Winget.Source | Remove-AppPackage
```

在执行 `winget update` 之后，被删除的源会自动重新安装。
