### Connection reset by peer

在 apt 2.1.9 及以后的版本中，apt 的 HTTP Pipelining 特性与 Nginx 服务器疑似存在一定的不兼容问题，可能导致高带宽从镜像站下载大量软件包
（例如系统升级）时出现偶发的 Connection reset by peer 错误
（详见 [Debian bug #973581](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=973581)）。

目前，用户可以通过关闭 HTTP Pipelining 特性解决此问题。
如果需要关闭，可以在使用 `apt` 命令时加上 `-o Acquire::http::Pipeline-Depth=0` 参数，
或使用以下命令将相关设置加入 apt 系统配置中：

<tmpl data-lang="bash">
echo "Acquire::http::Pipeline-Depth \"0\";" > /etc/apt/apt.conf.d/99nopipelining
</tmpl>
