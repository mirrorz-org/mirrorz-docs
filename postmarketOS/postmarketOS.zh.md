### pmbootstrap

通过 `pmbootstrap config` 更新镜像配置。

<tmpl z-lang="bash">
pmbootstrap config mirrors.alpine {{scheme}}://{{host}}/alpine/
pmbootstrap config mirrors.pmaports {{endpoint}}/
pmbootstrap config mirrors.systemd {{endpoint}}/extra-repos/systemd/
</tmpl>

其中 `mirrors.alpine` 部分也可前往 [Alpine 帮助](../alpine/) 选择其他的镜像站。

### 移除镜像配置

<tmpl z-lang="bash">
pmbootstrap config -r mirrors.alpine
pmbootstrap config -r mirrors.pmaports
pmbootstrap config -r mirrors.systemd
</tmpl>

