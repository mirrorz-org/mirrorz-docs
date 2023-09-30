## 使用每月更新的初始化包

本节供 [AOSP 帮助](../AOSP/)使用。

由于首次同步需要下载约 60GB 数据，过程中任何网络故障都可能造成同步失败，我们强烈建议您使用初始化包进行初始化。

由于初始包较大，需要注意磁盘格式是否支持大文件。初始化包方法支持断点续传。

下载 `aosp-monthly/aosp-latest.tar` 并校验 checksum。

由于所有代码都是从隐藏的 `.repo` 目录中 checkout 出来的，所以我们只保留了 `.repo` 目录，下载后解压
再 `repo sync` 一遍即可得到完整的目录。

使用方法如下：

<tmpl z-lang="bash" z-input="checksum">
# 包含断点续传
curl -OC - {{endpoint}}/aosp-latest.tar # 下载初始化包
{{#checksum}}
md5sum aosp-latest.tar
curl -q {{endpoint}}/aosp-latest.tar.md5
{{/checksum}}
tar xf aosp-latest.tar
cd AOSP   # 解压得到的 AOSP 工程目录
# 这时 ls 的话什么也看不到，因为只有一个隐藏的 .repo 目录
repo sync # 正常同步一遍即可得到完整目录
# 或 repo sync -l 仅 checkout 代码
</tmpl>

此后，每次只需运行 `repo sync` 即可保持同步。

**我们强烈建议您保持每天同步，并尽量选择凌晨等低峰时间**
