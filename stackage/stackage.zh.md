本镜像推荐与[Hackage 镜像](../hackage/)配合使用。

### stack >= v2.5.1

修改`~/.stack/config.yaml`（在 Windows 下是 `%APPDATA%\stack\config.yaml`）, 加上：

<tmpl z-lang="yaml">
setup-info-locations: ["{{endpoint}}/stack-setup.yaml"]
urls:
  latest-snapshot: {{endpoint}}/snapshots.json

snapshot-location-base: {{endpoint}}/stackage-snapshots/
</tmpl>

此外，还需要手动下载 global-hints.yaml（参考 [GitHub RAW 帮助](../github-raw/) 中 stackage global-hints-cache.yaml 一节）到 `~/.stack/pantry/global-hints-cache.yaml`（在 Windows 下是 `%APPDATA%\stack\pantry\global-hints-cache.yaml`）。注意文件名不同。这是由于 `stack` 暂时不支持配置该文件的上游地址。该文件需要在每当第一次用到新版本的 GHC 时更新。

### stack >= v2.3.1

修改`~/.stack/config.yaml`（在 Windows 下是 `%APPDATA%\stack\config.yaml`）, 加上：

<tmpl z-lang="yaml">
setup-info-locations: ["{{endpoint}}/stack-setup.yaml"]
urls:
  latest-snapshot: {{endpoint}}/snapshots.json
</tmpl>

### stack >= v2.1.1

修改`~/.stack/config.yaml`（在 Windows 下是 `%APPDATA%\stack\config.yaml`）, 加上：

<tmpl z-lang="yaml">
setup-info: "{{endpoint}}/stack-setup.yaml"
urls:
  latest-snapshot: {{endpoint}}/snapshots.json
</tmpl>

### stack 小于 v2.1.1

修改`~/.stack/config.yaml`（在 Windows 下是 `%APPDATA%\stack\config.yaml`）, 加上：

<tmpl z-lang="yaml">
setup-info: "{{endpoint}}/stack-setup.yaml"
urls:
  latest-snapshot: {{endpoint}}/snapshots.json
  lts-build-plans: {{endpoint}}/lts-haskell/
  nightly-build-plans: {{endpoint}}/stackage-nightly/
</tmpl>
