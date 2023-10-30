#!/use/bin/env python3
# pylint: disable=logging-fstring-interpolation, invalid-name, C0114

import re
import sys
import json
import logging as log
import argparse
from html import escape, unescape
from base64 import b64encode
from pathlib import Path
from importlib import import_module

import yaml
import markdown


def get_langs(project: str) -> set[str]:
    """Find for YAML config files of languages in global & local project dirs"""
    global_langs = list((args.global_ / project).glob('*.yaml'))
    local_langs = list((args.local / project).glob('*.yaml'))
    if not global_langs and not local_langs:
        log.error(f'no config found for project {project}')
    # globally defined or local only lang config
    return {x.name.removesuffix('.yaml') for x in (global_langs + local_langs)}


def read_file(project: str, file: str) -> tuple[str | None, str | None]:
    """Read global & local versions of a specified file name"""
    global_path = args.global_ / project / file
    local_path = args.local / project / file
    try:
        with open(global_path, 'r', encoding='utf-8') as global_file:
            global_data = global_file.read()
    except FileNotFoundError:
        global_data = None
    try:
        with open(local_path, 'r', encoding='utf-8') as local_file:
            local_data = local_file.read()
    except FileNotFoundError:
        local_data = None
    return (global_data, local_data)

def read_conf(project: str, lang: str) -> dict:
    """Read and merge global & local config file of a specified language"""
    global_yaml, local_yaml = read_file(project, f'{lang}.yaml')
    global_conf = yaml.safe_load(global_yaml or '') or {}
    local_conf = yaml.safe_load(local_yaml or '') or {}
    # use global config for inputs not overridden in local config
    inputs = global_conf.get('input', {}) | local_conf.get('input', {})
    # remove inputs set by local to null
    inputs = {k: v for k, v in inputs.items() if v is not None}
    # shallow merge for other config
    conf = global_conf | local_conf
    conf['input'] = inputs
    conf['name'] = project
    return conf

def read_block(project: str, lang: str, block: str) -> str:
    """Read a content block, local version takes precedence"""
    global_block, local_block = read_file(project, f'{block}.{lang}.md')
    if local_block is not None:
        return local_block
    if global_block is not None:
        return global_block
    log.warning(f'block {block}.{lang} not found for project {project}')
    return ''


def produce_markdown(project: str, lang: str, conf: dict | None) -> str:
    """Concatenate content blocks in order specified by config file"""
    if conf is None:
        conf = read_conf(project, lang)
    md = f'# {conf.get("_", project)}\n\n'
    for block in conf.get('block', ['index']):  # search for index if not set
        md += read_block(project, lang, block) + '\n'
    return md

def compile_html(project: str, lang: str, conf: dict, md: str) -> str:
    """Convert Markdown content to HTML, with wrapper and customs"""
    md = re.subn(r'(<tmpl[^>]*>)([\s\S]*?)(</tmpl>)', lambda match: (
        match[1] + escape(unescape(match[2])) + match[3]
    ), md)[0]  # TODO: escape content of <tmpl> cleanly
    parser = markdown.Markdown(extensions=['admonition', 'nl2br', 'tables'])
    # preserve templates w/o altering
    parser.block_level_elements.append('tmpl')
    html = (
        args.head
        + '<div class="z-help">'
        + parser.convert(md)
        +'<script id="z-config" type="application/x-mirrorz-help">'
        + b64encode(json.dumps(conf).encode()).decode()
        + '</script>\n</div>\n'
        + args.foot
    )
    # apply custom hooks
    for hook in args.custom:
        html = hook(html, conf, project, lang)
    return html


def compile_project_lang(project: str, lang: str) -> None:
    """Compile a specific project.lang to JSON, Markdown and HTML"""
    def _distf(ext: str) -> Path:
        path = args.output / (
            args.pattern
            .replace('PROJ', project)
            .replace('LANG', lang)
            .replace('EXT', ext)
        )
        path.parent.mkdir(parents=True, exist_ok=True)
        return path
    log.debug(f'compiling {project}.{lang}')
    conf = read_conf(project, lang)
    log.debug(f'conf {conf}')
    if args.json:
        with open(_distf('json'), 'w', encoding='utf-8') as f:
            json.dump(conf, f)
    md = produce_markdown(project, lang, conf)
    log.debug(f'md {md}')
    if args.md:
        with open(_distf('md'), 'w', encoding='utf-8') as f:
            f.write(md)
    html = compile_html(project, lang, conf, md)
    log.debug(f'html {html}')
    if args.html:
        with open(_distf('html'), 'w', encoding='utf-8') as f:
            f.write(html)


def main(projects: list[str]) -> None:
    """Compile all projects for all languages"""
    for project in projects:
        langs = get_langs(project)
        langs &= args.lang if args.lang else langs
        log.info(f'compiling {project}: {" ".join(langs)}')
        for lang in langs:
            compile_project_lang(project, lang)


if __name__ == '__main__':
    argparser = argparse.ArgumentParser(
        description='Compiling mirrorz-docs documents to multiple formats.',
        usage='%(prog)s [options] [projects]',
        formatter_class=type('HelpFormatter', (  # type: ignore
            argparse.ArgumentDefaultsHelpFormatter,
            argparse.RawTextHelpFormatter,
        ), {})
    )
    argparser.add_argument(
        '-v', '--verbose', action='count', default=0,
        help='Use -v for more logging, -vv for debug',
    )
    output = argparser.add_argument_group('output')
    # argparse.BooleanOptionalAction for --no-option support
    output.add_argument(
        '--json', action=argparse.BooleanOptionalAction, default=True,
        help='Generate config output in JSON format',
    )
    output.add_argument(
        '--md', action=argparse.BooleanOptionalAction, default=True,
        help='Generate Markdown output',
    )
    output.add_argument(
        '--html', action=argparse.BooleanOptionalAction, default=True,
        help='Generate HTML output',
    )
    output.add_argument(
        '-H', '--head', type=open,
        help='Custom HTML header file', metavar='FILE',
    )
    output.add_argument(
        '-F', '--foot', type=open,
        help='Custom HTML footer file', metavar='FILE',
    )
    output.add_argument(
        '-C', '--custom', action='append', default=[], type=str,
        help='Python module with process(html, config) hook for postprocessing',
        metavar='MOD',
    )
    paths = argparser.add_argument_group('paths')
    paths.add_argument(
        '-d', '--dir', default='.', type=Path,
        help='Base directory for --global --local and --output\n'
             'Use absolute path in them can override this', metavar='DIR',
    )
    paths.add_argument(
        '-g', '--global', default='global', type=Path, dest='global_',
        help='Directory for global documents', metavar='DIR',
    )
    paths.add_argument(
        '-l', '--local', default='local', type=Path,
        help='Directory for local documents', metavar='DIR',
    )
    paths.add_argument(
        '-o', '--output', default='dist', type=Path,
        help='Directory for output files', metavar='DIR',
    )
    paths.add_argument(
        '--pattern', default='LANG/PROJ/index.EXT', type=str,
        help='Hierarchy of output files',
    )
    argparser.add_argument(
        '--lang', type=str, 
        help='Filter languages, comma-separated'
    )
    argparser.add_argument(
        'projects', nargs='*', type=str,
        help='Specify projects to process, defaults to auto discovery'
    )
    args = argparser.parse_args()
    log.basicConfig(level=log.WARNING-10*args.verbose)
    args.global_ = args.dir / args.global_
    args.local = args.dir / args.local
    args.output = args.dir / args.output
    args.head = (args.head and args.head.read()) or ''
    args.foot = (args.foot and args.foot.read()) or ''
    sys.path.insert(0, '.')
    args.custom = [import_module(mod).process for mod in args.custom]
    args.lang = set(args.lang.split(',')) if args.lang else None
    log.debug(f'args: {args}')

    if not args.projects:  # auto discovery for projects
        args.projects = set(
            x.name for x in filter(
                lambda x: (
                    x.is_dir()
                    and not x.name.startswith('.')
                    and not x.name.startswith('_')
                ),
                [*args.global_.iterdir(), *args.local.iterdir()]
            )
        )
    log.debug(f'projects: {args.projects}')

    main(args.projects)
