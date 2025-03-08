### pmbootstrap

通过`pmbootstrap config`更新镜像配置。

<tmpl z-lang="bash">
pmbootstrap config mirrors.alpine {{endpoint}}/alpine/
pmbootstrap config mirrors.pmaports {{endpoint}}/postmarketOS/
pmbootstrap config mirrors.systemd {{endpoint}}/postmarketOS/extra-repos/systemd/
</tmpl>

其中 `mirror-alpine` 部分需要前往 [Alpine 帮助](../alpine/)构造。

### 移除镜像配置

<tmpl z-lang="bash">
pmbootstrap config -r mirrors.alpine
pmbootstrap config -r mirrors.pmaports
pmbootstrap config -r mirrors.systemd
</tmpl>

