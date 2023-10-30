新建 `/etc/apt/sources.list.d/ros-latest.list`，内容为：

<tmpl z-input="release" z-path="/etc/apt/sources.list.d/ros-latest.list">
deb {{endpoint}}/ubuntu/ {{release}} main
</tmpl>

然后再输入如下命令，信任 ROS 的 GPG Key，并更新索引：

<tmpl z-lang="bash">
{{sudo}}apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
{{sudo}}apt update
</tmpl>

### rosdep

参考 [ROS Distro 帮助](../rosdistro/)
