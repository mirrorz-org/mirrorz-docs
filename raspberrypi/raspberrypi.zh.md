主要参考 [Raspbian 帮助](../raspbian/)

编辑 `/etc/apt/sources.list.d/raspi.list` 文件。

```{ztmpl input="release" path="/etc/apt/sources.list.d/raspi.list"}
deb {{endpoint}}/ {{release}} main
```
