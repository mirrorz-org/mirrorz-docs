#!/use/bin/env python3

import sys
import json
import base64
import random
import string

import bs4


def process(html: str, _config: dict, project: str, *_) -> str:
    doc = bs4.BeautifulSoup(html, 'html.parser')
    config = json.loads(base64.b64decode(doc.find(id="z-config").string))  # type: ignore
    random.seed(project)
    random_id = lambda: ''.join(random.choices(string.ascii_letters, k=8))

    for tmpl in doc.find_all('tmpl'):
        # prepare attrs
        inputs = tmpl.get('z-input', '').split()
        inline = 'z-inline' in tmpl.attrs
        global_ = 'z-global' in tmpl.attrs
        # setup wrapper
        wrapper = doc.new_tag('span' if inline else 'div', **{'class': 'z-wrap'})
        tmpl.insert_before(wrapper)
        # setup form
        if not inline:
            form = doc.new_tag('form', **{'class': 'z-form'})
            if 'z-global' in tmpl.attrs:
                form['class'].append('z-global')  # type: ignore
                tmpl.decompose()
            form['onchange'] = 'form_update(event)'
            form['onsubmit'] = 'return false'
            wrapper.append(form)
        # prepare code
        if not global_:
            code = doc.new_tag('code' if inline else 'pre', **{'class': 'z-code'})
            wrapper.append(code)
        # wrap up
        if inline or not inputs:
            continue
        # construct form
        for x in inputs:
            var_conf = config.get('input', {}).get(x)
            if not var_conf:
                raise ValueError(f'unknown input {x}')
            var_type = (
                'select' if 'option' in var_conf else
                'switch' if 'true' in var_conf or 'false' in var_conf else
                'text'
            )
            var_wrapper = doc.new_tag('div')
            form.append(var_wrapper)
            label = doc.new_tag('label')
            input = doc.new_tag('select' if var_type == 'select' else 'input')
            input['name'] = x
            label['for'] = input['id'] = random_id()
            label['title'] = input['title'] = var_conf.get('note')
            label.string = var_conf.get('_', x)
            if var_type == 'select':
                var_wrapper.append(label)
                var_wrapper.append(input)
                for item, opt_conf in var_conf.get('option', {}).items():
                    option = doc.new_tag('option')
                    input.append(option)
                    option['value'] = item
                    option.string = (opt_conf or {}).get('_', item)
                default = input.find('option', value=var_conf.get('default'))
                if default:
                    default['selected'] = 'selected'  # type: ignore
            elif var_type == 'switch':
                var_wrapper.append(input)
                var_wrapper.append(label)
                input['type'] = 'checkbox'
                if var_conf.get('default') is True:
                    input['checked'] = 'checked'
            elif var_type == 'text':
                var_wrapper.append(label)
                var_wrapper.append(input)
                input['type'] = 'text'
                input['value'] = var_conf.get('default')
            else:
                raise ValueError(f'unknown type {var_conf.get("type")}')


    return str(doc)


if __name__ == '__main__':
    if not sys.argv[1:]:
        print('no input file specified')
        exit(1)
    for file in sys.argv[1:]:
        print(file)
        with open(file, 'r', encoding='utf-8') as f:
            html = f.read()
        html = process(html)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(html)
