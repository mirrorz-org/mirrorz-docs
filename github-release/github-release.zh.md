本目录中提供了若干常用 GitHub 项目发布的 Release 文件镜像（注：通常为二进制文件，而没有源码）。

各镜像站的内容很可能不同，并存在两种目录格式：

1. `<owner>/<project>/<release_name>/`，每个版本有独立文件夹，并由 `LatestRelease` 指向最新的版本。适用于每个版本发布文件较多的软件。
1. `<owner>/<project>/`，所有发布文件被展平于一个目录中。适用于发布较为简单的软件（如每个版本只发布一个 `vX.Y.Z.zip`）。

## 特别提示

`llvm/llvm-project` 项目（如本站提供此镜像）的 Release 中仅包含源代码，请使用 [`llvm-apt`](../llvm-apt/) 镜像获取二进制文件。
