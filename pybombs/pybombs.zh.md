[PyBOMBS](http://gnuradio.org/redmine/projects/pybombs/wiki) (Python Build Overlay Managed Bundle System) 是 [GNU Radio](http://gnuradio.org/) 的包管理系统。

本镜像使用 http://github.com/scateu/pybombs-mirror 脚本进行构建。

### 使用示例

<tmpl z-lang="bash">
{{sudo}}pip3 install pybombs
rm -rf ~/.pybombs
pybombs recipes add gr-recipes git+{{endpoint}}/recipes/gr-recipes.git
pybombs recipes add gr-etcetera git+{{endpoint}}/recipes/gr-etcetera.git
mkdir gnuradio-prefix
cd gnuradio-prefix
pybombs prefix init
pybombs install gnuradio
. ./setup_env.sh
gnuradio-companion

pybombs install rtl-sdr hackrf bladeRF gr-osmosdr gr-bluetooth gr-ieee-80211
</tmpl>

### 更新

由于 PyBOMBS 的 recipes 只能通过 git 仓库进行发布。而我们暂时不想维护一个复杂的 git 分支合并历史。所以更新时，需要将 recipe 仓库删除，然后再重新添加回来。(见[讨论](http://lists.gnu.org/archive/html/discuss-gnuradio/2016-06/msg00170.html))

<tmpl z-lang="bash">
pybombs recipes remove gr-recipes
pybombs recipes remove gr-etcetera
pybombs recipes add gr-recipes git+{{endpoint}}/recipes/gr-recipes.git
pybombs recipes add gr-etcetera git+{{endpoint}}/recipes/gr-etcetera.git
</tmpl>

