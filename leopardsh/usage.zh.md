## 使用方法

```{ztmpl global="true" input="os"}
```

由于 Mac OS X 10.4 / 10.5 自带的旧版 `curl` 不支持现代 TLS，首次引导安装时建议使用 HTTP 下载脚本（或在现代设备上下载后拷贝至目标机器）：

```{ztmpl lang="bash"}
curl -O http://{{host}}{{path}}/{{subdir}}/{{script}}
chmod +x ./{{script}}
./{{script}}
```

安装完成后脚本位于 {ztmpl}`/usr/local/bin/{{script}}`。在 `~/.bashrc`（或 `~/.bash_profile`）中设置镜像环境变量（或直接修改脚本中的对应变量）：

```{ztmpl lang="bash"}
export {{env_prefix}}_MIRROR={{endpoint}}
```

注：若镜像站仅支持 HTTPS 或不支持 `HEAD` 请求，可在完成新版 `curl` 引导后额外设置 {ztmpl}`{{env_prefix}}_MIRROR_NO_HTTP=1` 与 {ztmpl}`{{env_prefix}}_MIRROR_NO_HEAD=1`。
