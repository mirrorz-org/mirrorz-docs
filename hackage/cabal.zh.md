## 在 cabal 中初次使用

先执行 `cabal update`

待生成 `~/.cabal/config` 配置文件之后 `Ctrl+C` , 然后进行下一步。（注：在 Windows 平台上的配置文件是 `%APPDATA%\cabal\config` ）

### Cabal 1.2.4 (GHC 8.0)

修改 `~/.cabal/config` ，加入

```{ztmpl path="~/.cabal/config" append="true"}
repository mirror
  url: {{endpoint}}
  secure: True
```

为了访问速度，可以选择把官方仓库注释掉：

```{ztmpl}
repository hackage.haskell.org
  url: http://hackage.haskell.org/
  -- secure: False
  -- root-keys:
  -- key-threshold:
```

### Cabal 小于 1.2.4

修改`~/.cabal/config`, 将此行

```{ztmpl}
remote-repo: hackage.haskell.org:http://hackage.haskell.org/packages/archive
```

注释掉，改为

```{ztmpl}
remote-repo: mirror:{{endpoint}}
-- remote-repo: hackage.haskell.org:http://hackage.haskell.org/packages/archive
```

注意，此处的注释是两条短线 `--` .

再执行 `cabal update` , 即可使用 `cabal` 安装包了。
