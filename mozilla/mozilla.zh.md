此仓库为基于 Debian 的发行版提供了官方打包的 FireFox 浏览器，支持 amd64、arm64 架构。

目前，Debian 稳定版只包含了长期支持版本 `firefox-esr`，而 Ubuntu 的 FireFox 切换到了 Snap 包。有需要的用户可使用本仓库提供的 APT 源。

## 使用方法

下面的内容修改自 [Install Firefox on Linux](https://support.mozilla.org/en-US/kb/install-firefox-linux#w_install-firefox-deb-package-for-debian-based-distributions)。

首先导入和检查 keyring：

```bash
sudo install -d -m 0755 /etc/apt/keyrings
wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | sudo tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null
gpg -n -q --import --import-options import-show /etc/apt/keyrings/packages.mozilla.org.asc | awk '/pub/{getline; gsub(/^ +| +$/,""); if($0 == "35BAA0B33E9EB396F59CA838C0BA5CE6DC6315A3") print "\nThe key fingerprint matches ("$0").\n"; else print "\nVerification failed: the fingerprint ("$0") does not match the expected one.\n"}'
```

然后添加 APT 源：

<tmpl z-input="arch" z-path="/etc/apt/sources.list.d/mozilla.list">
deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main
</tmpl>

如有需要，配置 APT 优先级：

<tmpl z-path="/etc/apt/preferences.d/mozilla">
Package: *
Pin: origin packages.mozilla.org
Pin-Priority: 1000
</tmpl>

更新 APT 缓存并安装：

```bash
sudo apt update && sudo apt install firefox
sudo apt install firefox-l10n-zh-cn # 可选：中文语言包
```
