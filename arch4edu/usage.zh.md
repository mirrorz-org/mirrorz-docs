## 使用方法

* 导入 GPG key

```{ztmpl lang="bash"}
{{sudo}}pacman-key --recv-keys 7931B6D628C8D3BA
{{sudo}}pacman-key --finger 7931B6D628C8D3BA
{{sudo}}pacman-key --lsign-key 7931B6D628C8D3BA
```

* 在 `/etc/pacman.conf` 文件末尾添加以下内容：

```{ztmpl lang="ini" path="/etc/pacman.conf" append="true"}
[arch4edu]
Server = {{endpoint}}/$arch
```

* [**不推荐**] 不导入 GPG key，并直接在 `/etc/pacman.conf` 文件末尾添加以下内容：

```{ztmpl lang="ini" path="/etc/pacman.conf" append="true"}
[arch4edu]
SigLevel = Never
Server = {{endpoint}}/$arch
```
