## 第三方源列表

您可以遵循上述配置文件中的格式添加第三方源（推荐），或者通过以下命令添加第三方源

<tmpl z-lang="bash" z-input="channel">
conda config --set custom_channels.{{channel}} {{endpoint}}/cloud/
</tmpl>

### TUNA 等站

* auto
* biobakery
* bioconda
* c4aarch64
* caffe2
* conda-forge
* deepmodeling
* dglteam
* fastai
* fermi
* idaholab
* matsci
* menpo
* MindSpore
* mordred-descriptor
* numba
* ohmeta
* omnia
* Paddle
* peterjc123
* plotly
* psi4
* pytorch
* pytorch3d
* pytorch-lts
* pytorch-test
* pyviz
* qiime2
* rapidsai
* rdkit
* simpleitk
* stackless
* ursky

### SJTUG

* atztogo
* bioconda
* conda-forge
* dglteam
* matsci
* menpo
* pytorch
* pytorch-lts
* pytorch-test
* soumith
* viscid-hub

### SUSTech anaconda-extra

SUSTech 在 anaconda-extra 中还提供了 nvidia channel，参考 [Anaconda Extra 帮助](../anaconda-extra/)。
