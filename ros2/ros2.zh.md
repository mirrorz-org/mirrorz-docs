输入如下命令，下载 ROS 的 GPG Key：

```{ztmpl lang="bash"}
{{sudo}}apt install curl gnupg2
curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key | {{sudo}}gpg --dearmor -o /usr/share/keyrings/ros-archive-keyring.gpg
```

```{ztmpl lang="bash" input="release"}
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] {{endpoint}}/ubuntu {{release}} main" | {{sudo}}tee /etc/apt/sources.list.d/ros2.list > /dev/null

{{sudo}}apt update
```

Reference: https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debians.html

### rosdep

参考 [ROS Distro 帮助](../rosdistro/)
