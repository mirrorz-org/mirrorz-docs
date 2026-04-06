## 思源黑体 (Source Han Sans) {#source-han-sans}

思源黑体是一款泛中日韩无衬线黑体，支持多种字重，于 2014 年首次发布，近年仍在积极维护。

**名称**：思源黑体的文件嵌入了多种本地化名称，安装后可能显示为 Source Han Sans、思源黑体、思源黑體、源ノ角ゴシック、본고딕。此外，字体名称还可能后缀地区或语言代码（例：CN/SC）以及其它代号，具体取决于发行版本。

<details>
  <summary>地区和语言代码</summary>

  地区：

  - 中国大陆 | Chinese mainland (CN)
  - 臺灣 | Taiwan (TW)
  - 香港 | Hong Kong (HK)
  - 日本 | Japan (JP)
  - 한국 | Korea (KR)

  语言：

  - 简体中文 | Simplified Chinese (SC)
  - 繁體中文—臺灣 | Traditional Chinese — Taiwan (TC)
  - 繁體中文—香港 | Traditional Chinese — Hong Kong (HC)
  - 日本語 | Japanese (J)
  - 한국어 | Korean (K)

</details>

### 下载链接 {#source-han-sans-download}

以下工具可生成「思源黑体」下载链接。默认选项保证大部分人使用都没问题；您也可参考后文调整选项，切换到更适合您的发行版本。

```{ztmpl input="stroke_width kind locale ascii_glyph"}
{{!
  为让逻辑清晰，同时避免多余空白，以下用 mustache 的注释缩进
  如果 input 组合不合适，那么用 🚫 报错，然后用 👉 给出建议
  如果 input 组合合适，但不对应单独文件，导致某些 input 无实际作用，那么不报错，但要在注释中解释
}}
{{#kind=SuperOTC}}
{{!  }}{{#stroke_width=static}}
{{!    }}# 📦 SuperOTC 打包了所有语言、字重，故只有单个文件{{#HW}}
{{!    }}# 由于将比例和半宽字体一起打包，没有单独的半宽字体可下载{{/HW}}
{{!    }}{{endpoint}}/source-han-sans/{{kind}}/SourceHanSans.ttc.zip
{{!  }}{{/stroke_width=static}}
{{!  }}{{^stroke_width=static}}
{{!    }}🚫 SuperOTC 只有静态版本，因为可变字体字重可调，没有相应概念
{{!    }}👉 建议将「字重范围」从「可变」改为「静态」，或将「字形覆盖范围」从「SuperOTC」改为「OTC」
{{!  }}{{/stroke_width=static}}
{{/kind=SuperOTC}}
{{#kind=OTC}}
{{!  }}{{#stroke_width=static}}
{{!    }}# 🗃️ 静态 OTC 每种字重一个文件，只下载最常用的 Regular 和 Bold 亦可使用
{{!    }}# 每种字重都包含多种字体，每种字体是针对特定语言的 OTF{{#HW}}
{{!    }}# 由于将比例和半宽字体一起打包，没有单独的半宽字体可下载{{/HW}}
{{!    }}{{#weights}}
{{!      }}# {{.}}
{{!      }}{{endpoint}}/source-han-sans/{{kind}}/SourceHanSans-{{.}}.ttc
{{!    }}{{/weights}}
{{!  }}{{/stroke_width=static}}
{{!  }}{{^stroke_width=static}}
{{!    }}# 🎚️ 可变 OTC 字重连续可调，包含多种字体，每种字体是针对特定语言的 OTF{{#HW}}
{{!    }}# 由于将比例和半宽字体一起打包，没有单独的半宽字体可下载{{/HW}}
{{!    }}{{endpoint}}/source-han-sans/Variable/{{kind}}/SourceHanSans{{HW}}-VF.otf.ttc
{{!  }}{{/stroke_width=static}}
{{/kind=OTC}}
{{#kind=OTF}}
{{!  }}{{#stroke_width=static}}
{{!    }}# 🗃️ 静态 OTF 每种字重一个文件，{{#HW}}半宽版本只提供 Regular 和 Bold{{/HW}}{{^HW}}只下载最常用的 Regular 和 Bold 亦可使用{{/HW}}
{{!    }}# 每种字重都包含所有语言的字形，并设置「{{lang_human}}」的字形为默认
{{!    }}{{#weights}}
{{!      }}# {{.}}
{{!      }}{{endpoint}}/source-han-sans/{{kind}}/{{lang_long}}{{HW}}/SourceHanSans{{HW}}{{lang_compact}}-{{.}}.otf
{{!    }}{{/weights}}
{{!  }}{{/stroke_width=static}}
{{!  }}{{^stroke_width=static}}
{{!    }}# 🎚️ 可变 OTF 字重连续可调，包含所有语言的字形，并设置「{{lang_human}}」的字形为默认
{{!    }}{{endpoint}}/source-han-sans/Variable/{{kind}}/{{#HW}}HW/{{/HW}}SourceHanSans{{HW}}{{lang_compact}}-VF.otf
{{!  }}{{/stroke_width=static}}
{{/kind=OTF}}
{{#kind=SubsetOTF}}
{{!  }}{{#HW}}
{{!    }}🚫 SubsetOTF 不提供半宽版本
{{!    }}👉 建议将「ASCII 字符默认宽度」从「半宽」改为「比例」
{{!    }}    然后用 OpenType hwid 特性实现半宽
{{!  }}{{/HW}}
{{!  }}{{^HW}}
{{!    }}{{#stroke_width=static}}
{{!      }}# 🗃️ 静态 SubsetOTF 每种字重一个文件，只下载最常用的 Regular 和 Bold 亦可使用
{{!      }}# 每种字重都只包含「{{lang_human}}」的字形
{{!      }}{{#weights}}
{{!        }}# {{.}}
{{!        }}{{endpoint}}/source-han-sans/{{kind}}/{{region}}/SourceHanSans{{region}}-{{.}}.otf
{{!      }}{{/weights}}
{{!    }}{{/stroke_width=static}}
{{!    }}{{^stroke_width=static}}
{{!      }}# 🎚️ 可变 SubsetOTF 字重连续可调，只包含「{{lang_human}}」的字形
{{!      }}{{endpoint}}/source-han-sans/Variable/OTF/Subset/SourceHanSans{{region}}-VF.otf
{{!    }}{{/stroke_width=static}}
{{!  }}{{/HW}}
{{/kind=SubsetOTF}}
```

### 发行版本 {#source-han-sans-versions}

为了适配各地语言文字习惯并兼容各种平台，思源黑体实际发行部署的版本非常多，总共有上百份文件。

您可从以下三个维度考虑，只下载需要的那几份文件。

1. **字重范围**

   - **可变**——笔画可从粗到细任意连续调节
   - **静态**——最多只有七种字重可选

   可变（variable）版本更灵活，文件总体积也更小（例如 OTF SC 版覆盖七种字重，可变版本只需单个 ~50 MB 文件，而静态版本需要七个 ~20 MB 文件）；但它依赖 2016 年发布的 OpenType 可变字体技术，某些平台尚不兼容（例如[很多办公软件和视频编辑软件不完全支持](https://v-fonts.com/support/)，TeX 引擎中[只有 LuaTeX 支持](https://github.com/latex3/fontspec/blob/70970a5/fontspec-doc-featset.tex#L686)而 [XeTeX 尚不支持](https://sourceforge.net/p/xetex/feature-requests/28/)，[Typst 导出 SVG 时目前只能加载最细字重](https://github.com/typst/typst/issues/185)）。

   静态版本的字重包括 ExtraLight—0, Light—160, Normal—320, Regular—420, Medium—560, Bold—780, Heavy—1000，其中最常用的是 Regular 和 Bold。每种字重可以单独下载，只下载部分字重亦可使用。

2. **字形覆盖范围**

   - 仅含部分字形
     - 特定地区的子集 **SubsetOTF**——只包含单一地区的字形
   - 包含全部字形
     - 特定语言的 **OTF**——包含所有语言的字形，设置其中一种语言的字形为默认
     - 包含所有语言 OTF 的 **OTC**——单个文件包含多种字体，每种字体是针对特定语言的 OTF
     - 包含所有字重 OTC 的 **SuperOTC**——单个文件包含全部字体、字重

   各地汉字字形略有不同。例如「雨」字四点，简体均向右下，繁体则似「氺」状，但两种字形在 Unicode 是相同字符。

   如果您只用单一语言，不需要其它地区的字符及字形，那推荐选 SubsetOTF（选其它亦可，只不过文件更大）。例如中国大陆用户若不需要「가ᇰ」「𰻞」字符和「氺」字形的「雨」，那么选择 SubsetOTF 的 CN 版即可。

   如果您需要多种语言，请选 OTF/OTC/SuperOTC，默认用主要语言的字形，必要时利用 OpenType `locl` (Localized Forms) 特性切换其它字形。OTC 与 OTF 相比，无需多份文件就支持通过切换字体来切换默认字形，而且文件体积仅略大于单个 OTF 文件；但它依赖 2011 年提出的 OpenType Collection 技术，某些平台尚不完全兼容（例如 [matplotlib 目前只能使用 OTC 中的第一个字体，即日本語 J](https://github.com/matplotlib/matplotlib/issues/3135#issuecomment-1169518870)）。SuperOTC 与 OTC 相比，只是把所有字重打包为单个文件，管理更方便。SuperOTC 只有静态版本，因为可变字体字重可调，没有相应概念。

3. **ASCII 字符默认宽度**

   - **比例**（常用）——各字符默认宽度不尽相同
   - **半宽**——各字符默认宽度统一为半个汉字宽度

   比例（proportional）字体的 M 比 i 宽，而半宽（half-width, HW）字体的 M 和 i 宽度相同，并且等于汉字宽度的一半。

   思源黑体各类版本都有比例字体，但不都有半宽字体。只有静态 OTF、可变 OTF、可变 OTC 三类版本提供可单独直接下载的半宽字体；静态 OTC、SuperOTC 将比例和半宽字体一起打包，因此没有单独的半宽字体可下载；其余版本没有专门的半宽字体。

   思源黑体的比例版本更常用。无论哪种版本，都支持用 OpenType `pwid` (Proportional Widths) 和 `hwid` (Half Widths) 特性切换，只是默认宽度有所区别。

另外，对于可变版本，官方还提供了多种**文件格式**：

- `*.otf`, `*.otf.ttc`（常用）
- `*.otf.woff2`
- `*.ttf`, `*.ttf.ttc`, `*.ttf.woff2`

一般使用推荐`*.otf`或其打包成的`*.otf.ttc`，网页使用推荐`*.otf.woff2`（但不推荐将镜像站直接用于网页）。至于`*.ttf*`，官方提供该版本[只是为了规避早年 Windows 系统的缺陷](https://github.com/adobe-fonts/source-han-sans/issues/558#issuecomment-3363129394)，现在基本不需要了。因此，本页的下载链接生成器只支持第一种。

### 补充信息 {#source-han-sans-see-also}

**相近字体：**

- <details id="compare-noto-cjk">
    <summary>Noto Sans CJK</summary>

    思源黑体由 Adobe 和 Google 合作开发。两家公司分别按自己品牌包装为 Source Han Sans 和 Noto Sans CJK，不过实际字体几乎完全相同，只有名称、版权等存在差异。名称的主要差异如下表，其中<u>划线</u>处两家公司不同。

    另外，Adobe 于 2025 年 6 月发布了黑体 2.005，但 [Google 自 2022 年 1 月发布黑体 2.004 后未再发布新版黑体](https://github.com/notofonts/noto-cjk/issues/314)。

    <table>
      <caption>Adobe 与 Google 包装的思源字体的名称区别</caption>
      <thead>
        <tr>
          <td colspan="2"></td>
          <th scope="col">Adobe</th>
          <th scope="col">Google</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="rowgroup" rowspan="2">本地化字体名</th>
          <th scope="row">黑体</th>
          <td><u>Source Han</u> Sans、<u>思源黑体</u>、<u>源ノ角ゴシック</u>等</td>
          <td>提供数据表，但全部为 <u>Noto</u> Sans <u>CJK</u></td>
        </tr>
        <tr>
          <th scope="row">宋体</th>
          <td><u>Source Han</u> Serif、<u>思源宋体</u>、<u>源ノ明朝</u>等</td>
          <td>提供数据表，但全部为 <u>Noto</u> Serif <u>CJK</u></td>
        </tr>
        <tr>
          <th scope="rowgroup" rowspan="2">字重名称</th>
          <th scope="row">黑体</th>
          <td><u>ExtraLight</u>, Light, <u>Normal</u>, Regular, Medium, Bold, <u>Heavy</u></td>
          <td><u>Thin</u>, Light, <u>DemiLight</u>, Regular, Medium, Bold, <u>Black</u></td>
        </tr>
        <tr>
          <th scope="row">宋体</th>
          <td>ExtraLight, Light, Regular, Medium, SemiBold, Bold, <u>Heavy</u></td>
          <td>ExtraLight, Light, Regular, Medium, SemiBold, Bold, <u>Black</u></td>
        </tr>
        <tr>
          <th scope="rowgroup" rowspan="2">地区特定子集<br/>SubsetOTF</th>
          <th scope="row">文件名后缀</th>
          <td><u>CN</u>/<u>TW</u>/HK/JP/KR</td>
          <td><u>SC</u>/<u>TC</u>/HK/JP/KR</td>
        </tr>
        <tr>
          <th scope="row">英文字体名</th>
          <td><u>Source Han</u> Sans + 文件名后缀</td>
          <td><u>Noto</u> Sans + 文件名后缀</td>
        </tr>
        <tr>
          <th scope="rowgroup" rowspan="2">语言特定<br/>OTF</th>
          <th scope="row">文件名后缀</th>
          <td>SC/TC/<u>HC</u>/J/<u>K</u><br/>（其中 J 会被<u>省略</u>）</td>
          <td>同 SubsetOTF<br/>（但改为<u>小写</u>）</td>
        </tr>
        <tr>
          <th scope="row">英文字体名</th>
          <td><u>Source Han</u> Sans + 文件名后缀</td>
          <td><u>Noto</u> Sans <u>CJK</u> + 文件名后缀（大写）</td>
        </tr>
        <tr>
          <th scope="row" colspan="2">半宽代号<br/>（文件名、字体名通用）</th>
          <td><u>HW</u></td>
          <td><u>Mono</u></td>
        </tr>
      </tbody>
    </table>
  </details>

- <details>
    <summary>Source Sans 及 Source Code Pro</summary>

    思源黑体的西文部分源于 [Source Sans](https://github.com/adobe-fonts/source-sans)，半宽版本则源于 [Source Code Pro](https://github.com/adobe-fonts/source-code-pro)，但都专门适配过汉字。

    - Source Han Sans 与 Source Sans 尽管名称和设计相近，西文部分的粗细、大小并不一致。
    - Source Han Sans 的半宽版本与 Source Code Pro 尽管都是无衬线等宽字体，但西文部分的粗细、宽度、字形并不一致。具体而言，Source Code Pro 并非严格“半”宽（其实是 60% 宽），而且对源代码易混字符（如数字 0 与字母 O）有特殊处理。

  </details>

**更多信息：**

- 镜像站资源
  - [Source Han Sans ReadMe (PDF)](https://mirrors.cernet.edu.cn/adobe-fonts/source-han-sans/SourceHanSansReadMe.pdf) (2025-06-18)
  - [Source Han Sans Design Guide (PDF)](https://mirrors.cernet.edu.cn/adobe-fonts/source-han-sans/SourceHanSansDesignGuide.pdf) (2018-10-25)
- 外部资源
  - [思源黑体 CN | Adobe Fonts](https://fonts.adobe.com/fonts/source-han-sans-simplified-chinese#about-section) 以及「关于」部分的[使用指导 PDF](https://assets.fonts.adobe.com/y5zrhgibxrs7b5asqprzqd05rhm4 "How to choose a Source Han Sans font") (2025-12-11)
  - [查找有关 Adobe Type 和 Adobe 字体技术的信息 | Adobe 帮助中心](https://helpx.adobe.com/cn/fonts/using/adobe-type-resources-faq.html) (2023-06-23)
  - [Collections… …of the OpenType/CFF Variety | Adobe CJK Type Blog](https://ccjktype.fonts.adobe.com/2015/03/collections.html) (2015-03-11)
