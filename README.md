# MirrorZ-Docs

This repository contains documentations for common mirroring projects, which are meant to be ported to different mirroring providers.

## Structure

```
|-- <project>/                  Project Directory
|   |-- <lang>.yaml             Config Files
|   |-- <block>.<lang>.md       Content Files
```

Each directory in this repository is considered a mirroring project, while its name should be a canonical name assigned by MirrorZ Project, like `debian` or `linux.git`.

Each project can contain several YAML config files, named by any language code from ISO 639-1.

Each config of a specific language should refer to some Markdown content blocks. The name is user-defined but better consistent with other projects, e.g. `usage.zh.md` or `intro.en.md`.

The consumers of this project will discover necessary projects, build selected language config(s) into a whole Markdown/HTML document,
with necessary postprocessing like generating form controls and dynamically rendering the templates with user input.

## Config Format

```yaml
_: Debian GNU/Linux       # display name & title for this project
block:                    # markdown contents will concatenated in order
- intro
- cover
- usage
- links
filter:
  scheme: https           # optional enforcement on protocol used
input:
  release:                # form input name & template variable name
    _: Version            # label for this input
    note: sid for ROLLING # sidenote
    default: bullseye     # should be one of the options
    option:               # options for select menu
      bookworm:           # values for this variable
        _: Debian 12 (bookworm)  # label for this option
        security: -security      # other variables applied for this option
        nonfree: ' non-free non-free-firmware'
      bullseye:
        _: Debian 11 (bullseye)
        security: -security
        nonfree: ' non-free'
      sid:
        sid: true                # it's okay to have non-symmetric variables
        nonfree: ' non-free non-free-firmware'
  src:
    _: Enable Source
    note: for build and debug
    true: ''                     # `true` or `false` makes this a switch
    false: '# '                  # set variable value for either choice
  nf:                            # or contains supplementary variables as well
    _: Use nonfree Repo
    default: true                # specifie default for switches using bool
    true:                        # make this a switch, but define nothing
  test_input:
    _: This Will be a Text Box
```

## Markdown Format

The consumers of this project needs to support following extensions of standard Markdown:

### Template

[Mustache](https://mustache.github.io/) syntax is used within `` ```{ztmpl} `` blocks in pure Markdown.
The selected syntax for defining the properties of the templates is [MyST Directives](https://mystmd.org/guide/syntax-overview#syntax-directives)
and [MyST Roles](https://mystmd.org/guide/syntax-overview#roles). Please note that
only the syntax itself is adopted, but all the specific directives and roles that MyST
provides are not supported, and only the ones described in this section are supported.

For simplicity, to define a code block with template content, use the following syntax:

````markdown
```{ztmpl attr1="val1" attr2="val2" ...}
template content with {{mustache}} syntax here
```
````

To define an inline template, use the following syntax:

````markdown
{ztmpl attr1="val1" attr2="val2" ...}`template content with {{mustache}} syntax here`
````

The variables available for rendering should include:
- Any variables set by inputs specified in `input` attribute
- Any variables in global inputs denoted by `global` attribute
- `scheme`: currently `http` or `https`
- `host`: the domain name of the mirror used, like `mirrors.jlu.edu.cn`
- `path`: part after host for current project w/o trailing slash, like `/archlinux`
- `endpoint`: shorthand for `{{scheme}}://{{host}}{{path}}`
- `sudo`: chosen by user to use sudo or not, `sudo ` or empty

The following attributes are supported by the template blocks:

- `global="true"`: must be used with and only with `input`.
                   Creates a global form here effective through the whole document.
                   The content of this block will be ignored.
- `lang="c"`: specify the language of the content, preferably one from [highlight.js](https://highlightjs.readthedocs.io/en/latest/supported-languages.html)
- `input="release ver"`: a space-separated list of inputs defined in the YAML config, should render in order above this code block
- `path="/etc/..."`: file path that the content should be write to, enables visual prompt or quick config feature
- `append="true"`: content should append to the `path`, not overwrite

The following attributes are supported by the inline template:
- `lang="c"`: the same as above, but for inline code

### Custom Heading ID

The format looks like this:

```markdown
### heading {#id}
```

When building into HTML document, `{#id}` sets the `id` attribute of the heading element:

```html
<h3 id="id">heading</h3>
```

Consumers can choose to implement this, or ignore and just strip ` #{id}` part from the heading in output.

## Writing Style

Please refer to [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines) for recommended writing style.

Also note that we use [autocorrect](https://github.com/huacnlee/autocorrect) for automatic checking. Failed PRs **would not be merged**.

## Contribute

Pull Requests are super welcomed! By opening a pull request, you agree to contribute your content under the following licenses.

## License

The contents of the documentations, in human- or machine-readable format, are licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](./LICENSE-CC), visit [Creative Commons Website](https://creativecommons.org/licenses/by-nc-sa/4.0/) for explanation.

The code for compiling these documents is licensed under [MIT License](./LICENSE-MIT).
