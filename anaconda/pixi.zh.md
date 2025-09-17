## Pixi

Pixi 是一个高效跨平台的包管理器和环境管理工具，专为科研与数据科学工作流设计。[Github地址](https://github.com/prefix-dev/pixi)

它由 Mamba 背后的团队打造，构建于 `Conda` 和 `conda-forge` 生态之上，深度集成 `uv`，致力于提供：

* 可复现性：通过锁文件 `pixi.lock`，确保在任何设备上都能还原完全一致的运行环境；
* 协作友好：一条命令自动安装依赖、执行任务，让团队协作更轻松；
* 硬件兼容：原生支持 CUDA 等硬件加速，无需容器化；
* 多语言支持：不仅支持 Python 包，还支持 C/C++、Rust 等多种生态；
* 教学利器：帮助教师为不同系统的学生统一环境，只需一条命令即可部署。

除了 Anaconda 以外，Pixi 的 channel 还支持 conda-forge、nvidia、pytorch 等，也支持自定义 channel。

Pixi 也支持镜像配置，你可以参考 [此文档](https://pixi.sh/latest/reference/pixi_configuration/#mirrors) 将`tuna` 镜像源添加到你的配置文件里。

![Pixi logo](https://raw.githubusercontent.com/prefix-dev/pixi/refs/heads/main/docs/assets/pixi.webp)

<tmpl>
{{endpoint}}/pixi/
</tmpl>