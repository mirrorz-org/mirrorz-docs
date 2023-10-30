## 在 cabal 中初次使用

先执行 `cabal update`

待生成 `~/.cabal/config` 配置文件之后 `Ctrl+C` , 然后进行下一步。（注：在 Windows 平台上的配置文件是 `%APPDATA%\cabal\config` ）

### Cabal 1.2.4 (GHC 8.0)

修改 `~/.cabal/config` ，加入

<tmpl z-path="~/.cabal/config" z-append>
repository mirror
  url: {{endpoint}}
  secure: True
</tmpl>

为了访问速度，可以选择把官方仓库注释掉：

<tmpl>
repository hackage.haskell.org
  url: http://hackage.haskell.org/
  -- secure: False
  -- root-keys:
  -- key-threshold:
</tmpl>

### Cabal 小于 1.2.4

修改`~/.cabal/config`, 将此行

<tmpl>
remote-repo: hackage.haskell.org:http://hackage.haskell.org/packages/archive
</tmpl>

注释掉，改为

<tmpl>
remote-repo: mirror:{{endpoint}}
-- remote-repo: hackage.haskell.org:http://hackage.haskell.org/packages/archive
</tmpl>

注意，此处的注释是两条短线 `--` .

再执行 `cabal update` , 即可使用 `cabal` 安装包了。
