## 思源宋体 (Source Han Serif) {#source-han-serif}

思源宋体是一款泛中日韩衬线宋体，支持多种字重，于2017年首次发布，近年仍在积极维护。

**名称**：思源宋体的文件嵌入了多种本地化名称，安装后可能显示为 Source Han Serif、思源宋体、思源宋體、源ノ明朝、본명조。此外，字体名称还可能后缀地区或语言代码（例：CN/SC）以及其它代号，具体取决于发行版本。

地区和语言代码与[思源黑体](#source-han-sans)相同。

### 下载链接 {#source-han-serif-download}

以下工具可生成「思源宋体」下载链接。默认选项保证大部分人使用都没问题；您也可参考后文调整选项，切换到更适合您的发行版本。

```{ztmpl input="stroke_width kind locale"}
{{!
  为让逻辑清晰，同时避免多余空白，以下用 mustache 的注释缩进
  如果 input 组合不合适，那么用 🚫 报错，然后用 👉 给出建议
  如果 input 组合合适，但不对应单独文件，导致某些 input 无实际作用，那么不报错，但要在注释中解释
}}
{{#kind=SuperOTC}}
{{!  }}{{#stroke_width=static}}
{{!    }}🚫 上游只在 GitHub Releases 提供 SuperOTC，目前未做镜像
{{!    }}👉 可从上游自行下载
{{!    }}    https://github.com/adobe-fonts/source-han-serif/releases/download/2.003R/01_SourceHanSerif.ttc.zip
{{!  }}{{/stroke_width=static}}
{{!  }}{{^stroke_width=static}}
{{!    }}🚫 SuperOTC 只有静态版本，因为可变字体字重可调，没有相应概念
{{!    }}👉 建议将「字形覆盖范围」从「SuperOTC」改为「OTC」
{{!  }}{{/stroke_width=static}}
{{/kind=SuperOTC}}
{{#kind=OTC}}
{{!  }}{{#stroke_width=static}}
{{!    }}# 🗃️ 静态 OTC 每种字重一个文件，只下载最常用的 Regular 和 Bold 亦可使用
{{!    }}# 每种字重都包含多种字体，每种字体是针对特定语言的 OTF
{{!    }}{{#serif_weights}}
{{!      }}# {{.}}
{{!      }}{{endpoint}}/source-han-serif/{{kind}}/SourceHanSerif-{{.}}.ttc
{{!    }}{{/serif_weights}}
{{!  }}{{/stroke_width=static}}
{{!  }}{{^stroke_width=static}}
{{!    }}# 🎚️ 可变 OTC 字重连续可调，包含多种字体，每种字体是针对特定语言的 OTF
{{!    }}{{endpoint}}/source-han-serif/Variable/{{kind}}/SourceHanSerif-VF.otf.ttc
{{!  }}{{/stroke_width=static}}
{{/kind=OTC}}
{{#kind=OTF}}
{{!  }}{{#stroke_width=static}}
{{!    }}# 🗃️ 静态 OTF 每种字重一个文件，只下载最常用的 Regular 和 Bold 亦可使用
{{!    }}# 每种字重都包含所有语言的字形，并设置「{{lang_human}}」的字形为默认
{{!    }}{{#serif_weights}}
{{!      }}# {{.}}
{{!      }}{{endpoint}}/source-han-serif/{{kind}}/{{lang_long}}/SourceHanSerif{{lang_compact}}-{{.}}.otf
{{!    }}{{/serif_weights}}
{{!  }}{{/stroke_width=static}}
{{!  }}{{^stroke_width=static}}
{{!    }}# 🎚️ 可变 OTF 字重连续可调，包含所有语言的字形，并设置「{{lang_human}}」的字形为默认
{{!    }}{{endpoint}}/source-han-serif/Variable/{{kind}}/SourceHanSerif{{lang_compact}}-VF.otf
{{!  }}{{/stroke_width=static}}
{{/kind=OTF}}
{{#kind=SubsetOTF}}
{{!  }}{{#stroke_width=static}}
{{!    }}# 🗃️ 静态 SubsetOTF 每种字重一个文件，只下载最常用的 Regular 和 Bold 亦可使用
{{!    }}# 每种字重都只包含「{{lang_human}}」的字形
{{!    }}{{#serif_weights}}
{{!      }}# {{.}}
{{!      }}{{endpoint}}/source-han-serif/{{kind}}/{{region}}/SourceHanSerif{{region}}-{{.}}.otf
{{!    }}{{/serif_weights}}
{{!  }}{{/stroke_width=static}}
{{!  }}{{^stroke_width=static}}
{{!    }}# 🎚️ 可变 SubsetOTF 字重连续可调，只包含「{{lang_human}}」的字形
{{!    }}{{endpoint}}/source-han-serif/Variable/OTF/Subset/SourceHanSerif{{region}}-VF.otf
{{!  }}{{/stroke_width=static}}
{{/kind=SubsetOTF}}
```

### 发行版本 {#source-han-serif-versions}

思源宋体的发行方式与[思源黑体](#source-han-sans-versions)十分类似，但有如下区别。

- 静态版本的**字重范围**是 ExtraLight—0, Light—95, Regular—210, Medium—360, SemiBold—510, Bold—730, Heavy—1000，比思源黑体少 Normal、多 SemiBold，其余字重的数值也不与思源黑体对应。

- **SuperOTC** 版本只在 [GitHub Releases](https://github.com/adobe-fonts/source-han-serif/releases) 提供，而未存储于 git 仓库，所以目前未做镜像。

- 所有版本都没有专门的半宽字体，只提供**比例**字体。

### 补充信息 {#source-han-serif-see-also}

**相近字体：**

<ul>
  <li>
    <details>
      <summary>Noto Sans CJK</summary>
      <p>思源宋体由 Adobe 和 Google 合作开发。两家公司分别按自己品牌包装为 Source Han Serif 和 Noto Serif CJK，不过实际字体几乎完全相同，只有名称、版权等存在差异。具体差异见<a href="#compare-noto-cjk">之前黑体的比较</a>。</p>
    </details>
  </li>
  <li>
    <details>
      <summary>Source Serif</summary>
      <p>思源宋体的西文部分源于 <a href="https://github.com/adobe-fonts/source-serif">Source Serif</a>，但专门适配过汉字。因此 Source Han Serif 与 Source Serif 尽管名称和设计相近，西文部分的粗细、大小并不一致。</p>
    </details>
  </li>
</ul>

**更多信息：**

- 镜像站资源
  - [Source Han Serif ReadMe (PDF)](https://mirrors.cernet.edu.cn/adobe-fonts/source-han-serif/SourceHanSerifReadMe.pdf) (2024-07-30)
  - [Source Han Serif Design Guide (PDF)](https://mirrors.cernet.edu.cn/adobe-fonts/source-han-serif/SourceHanSerifDesignGuide.pdf) (2021-10-25)
  - [如何从 GitHub 下载 Pan-CJK 字体（PDF)](https://mirrors.cernet.edu.cn/adobe-fonts/source-han-serif/download-guide-source-han.pdf) (2017-04-10)
- 外部资源
  - [Source Han Serif - Pan-CJK Simplified Chinese | Adobe Fonts](https://fonts.adobe.com/fonts/source-han-serif-simplified-chinese#about-section) 以及「关于」部分的[使用指导 PDF](https://assets.fonts.adobe.com/ts6tz2sbyu9znj4zzzqu35wfzpvc "How to choose a Source Han Serif font") (2025-12-11)
  - [关于思源宋体的问答 | The Type](https://www.thetype.com/2017/04/11961/) (2017-04-21)
