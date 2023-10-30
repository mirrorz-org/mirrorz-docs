## 使用方法

以 leiningen 为例，在项目根目录的 `project.clj` 中自己添加关键字 `:mirrors`

然后以如下 map 格式添加源：

<tmpl z-lang="clojure">
:mirrors {"clojars" {:name "mirror"
                     :url "{{endpoint}}/"}}
</tmpl>


### 极简示例

<tmpl z-lang="clojure">
(defproject myapp "1.0.0"
   :description "My Application"
   :dependencies [[enlive "1.0.1"]
                  [cheshire "4.0.0"]
                  [org.markdownj/markdownj "0.3.0-1.0.2b4"]]
   :mirrors {"clojars" {:name "mirror"
                        :url "{{endpoint}}/"}}
   :main leiningen.web)
</tmpl>

配置好后，在项目的根目录下运行 `lein run`，从输出中可以看到一些包是从镜像站下载的。

### 注意事项

此镜像源替换的只是 clojars 这个仓库，一些 maven 的包依然会从 central maven 仓库下载。

上述方法只针对单个项目生效。如果要针对所有项目进行全局配置，需修改 leiningen 的 `profiles` 。

在 `~/.lein/projfiles.clj` 中添加：

<tmpl z-lang="clojure">
:user {:repositories [["clojars" {:url "{{endpoint}}/"}]]
       ;; other :user profile settings...
       }
</tmpl>

leiningen 会提示说 `:repositories` 写在了 `:user` 中，不过不影响使用。
