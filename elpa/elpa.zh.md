## 使用方法

根据你的需求，设置 package-archives，比如用 GNU ELPA 和 MELPA：

<tmpl>
(setq package-archives '(("gnu"    . "{{endpoint}}/gnu/")
                         ("nongnu" . "{{endpoint}}/nongnu/")
                         ("melpa"  . "{{endpoint}}/melpa/")))
(package-initialize) ;; You might already have this line
</tmpl>

Spacemacs 用户
--------------

### master 分支

添加下面的代码到`.spacemacs`的`dotspacemacs/user-init()`

<tmpl>
(setq configuration-layer--elpa-archives
    '(("melpa-cn" . "{{endpoint}}/melpa/")
      ("org-cn"   . "{{endpoint}}/org/")
      ("gnu-cn"   . "{{endpoint}}/gnu/")))
</tmpl>

### develop 分支

使用 `configuration-layer-elpa-archives` 代替原来的 `configuration-layer--elpa-archives` （ `--` 换成 `-` ）

<tmpl>
(setq configuration-layer-elpa-archives
    '(("melpa-cn" . "{{endpoint}}/melpa/")
      ("org-cn"   . "{{endpoint}}/org/")
      ("gnu-cn"   . "{{endpoint}}/gnu/")))
</tmpl>

Cask 用户
---------

[Cask](https://github.com/cask/cask) 是一个 Emacs Lisp 的项目管理工具。这里还是以 GNU ELPA 和 MELPA 为例，在添加下面的代码到 Cask

<tmpl>
(source "gnu"   "{{endpoint}}/gnu/")
(source "melpa" "{{endpoint}}/melpa/")
</tmpl>

关于 ELPA 的选择
----------------

(来自 [@xuchunyang](https://github.com/xuchunyang) )

假如不清楚需要用哪些 ELPA 的话

- `gnu` 一般是必备的，其它的 elpa 中的包会依赖 `gnu` 中的包
- `nongnu` 建议启用，类似于 `melpa` 但是 Emacs 官方维护的
- `melpa` 滚动升级，收录了的包的数量最大
- `stable-melpa` 依据源码的 Tag（Git）升级，数量比 `melpa` 少，因为很多包作者根本不打 Tag
- `org` 仅仅为了 `org-plus-contrib` 这一个包，org 重度用户使用
- `gnu-devel` 收录 `gnu` 中的包的开发中版本，一般不必启用（与 `gnu` 的关系类似于 `melpa` 与 `stable-melpa` 的关系）
- `nongnu-devel` 收录 `nongnu` 中的包的开发中版本，一般不必启用

上游
====

本文档参考了 http://elpa.emacs-china.org/ 提供的帮助。

URL Bug
=======

各个仓库的 URL 末尾一定要加`/`，否则会无法拉取，提示`Failed to download melpa archive`。

事实上，末尾没有`/`的话，emacs 会去尝试取以下链接：

<tmpl>
{{endpoint}}/melpaarchive-contents
</tmpl>

而正常的链接应该是

<tmpl>
{{endpoint}}/melpa/archive-contents
</tmpl>

这个是 emacs 自己的 bug。在 https://github.com/melpa/melpa/issues/2139 中有描述。
