# MirrorZ-Docs

This repository contains documentations for common mirroring projects, which are meant to be ported to different mirroring providers.

## Structure

```
|-- <project>/                  Project Directory
|   |-- <lang>.yaml             Config Files
|   |-- <block>.<lang>.md       Content Files
|-- compile.py                  Compiler
|-- dom.py                      Form Generator
```

Each directory in this repository is considered a mirroring project, while its name should be a canonical name assigned by MirrorZ Project, like `debian` or `linux.git`.

Each project can contain several YAML config files, named by any language code from ISO 639-1.

Each config of a specific language should refer to some Markdown content blocks. The name is user-defined but better consistent with other projects, e.g. `usage.zh.md` or `intro.en.md`.

The compiler will discover projects, build each language config into a whole Markdown/HTML document, but leave the `<tmpl>`s untouched.

The form generator is a postprocessor for compiled HTML document, which could be invoked by passing `-C dom` to the compiler. It generates form controls and rendering containers for the `<tmpl>`s.

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

## Template Format

[Mustache](https://mustache.github.io/) syntax is used within `<tmpl>` blocks in pure Markdown.

The variables available for rendering should include:
- Any variables set by inputs specified in `z-input` attribute
- Any variables in global inputs denoted by `z-global` attribute
- `scheme`: currently `http` or `https`
- `host`: the domain name of the mirror used, like `mirrors.jlu.edu.cn`
- `path`: part after host for current project w/o trailing slash, like `/archlinux`
- `endpoint`: shorthand for `{{scheme}}://{{host}}{{path}}`
- `sudo`: choosed by user to use sudo or not, `sudo ` or empty

The following `z-*` attributes on `<tmpl>` are supported:

- `z-global`: must be used with and only with `z-input`, creates a global form here effective through the whole document
- `z-inline`: renders to an inline code element instead of a block one by default, will ignores `z-input` and `z-path`
- `z-lang="c"`: specify the language of the content, preferably one from [highlight.js](https://highlightjs.readthedocs.io/en/latest/supported-languages.html)
- `z-input="release ver"`: a space-separated list of inputs defined in the YAML config, should render in order above this code block
- `z-path="/etc/..."`: file path that the content should be write to, enables visual prompt or quick config feature
- `z-append`: content should append to the `z-path`, not overwrite

## Build

```bash
pip install markdown pyyaml
pip install beautifulsoup4   # for using dom.py
git clone git@github.com:mirrorz-org/mirrorz-docs.git global
mkdir local/ dist/           # global + local => dist
global/compile.py -C dom -v
```

## Contribute

Pull Requests are super welcomed! By opening a pull request, you agree to contribute your content under the following licenses.

## License

The contents of the documentations, in human- or machine-readable format, are licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](./LICENSE-CC), visit [Creative Commons Website](https://creativecommons.org/licenses/by-nc-sa/4.0/) for explanation.

The code for compiling these documents is licensed under [MIT License](./LICENSE-MIT).
