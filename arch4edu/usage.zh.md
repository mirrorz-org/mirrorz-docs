## 使用方法

* 导入 GPG key

<tmpl z-lang="bash">
{{sudo}}pacman-key --recv-keys 7931B6D628C8D3BA
{{sudo}}pacman-key --finger 7931B6D628C8D3BA
{{sudo}}pacman-key --lsign-key 7931B6D628C8D3BA
</tmpl>

* 在 `/etc/pacman.conf` 文件末尾添加以下内容：

<tmpl z-lang="ini" z-path="/etc/pacman.conf" z-append>
[arch4edu]
Server = {{endpoint}}/$arch
</tmpl>

* [**不推荐**] 不导入 GPG key，并直接在 `/etc/pacman.conf` 文件末尾添加以下内容：

<tmpl z-lang="ini" z-path="/etc/pacman.conf" z-append>
[arch4edu]
SigLevel = Never
Server = {{endpoint}}/$arch
</tmpl>
