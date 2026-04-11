const state = {
  projects: [],
  langsByProject: {},
  yaml: null,
  mergedMarkdown: "",
  selectedProject: "",
  selectedLang: "zh",
  inputValues: {},
};

const markedRuntime = {
  vars: {},
  configInput: {},
};

let markedExtensionsReady = false;

const el = {
  project: document.getElementById("project"),
  lang: document.getElementById("lang"),
  scheme: document.getElementById("scheme"),
  host: document.getElementById("host"),
  path: document.getElementById("path"),
  sudo: document.getElementById("sudo"),
  reload: document.getElementById("reload"),
  rendered: document.getElementById("rendered"),
  source: document.getElementById("source"),
  sourceText: document.getElementById("sourceText"),
  status: document.getElementById("status"),
  vars: document.getElementById("vars"),
  yamlDump: document.getElementById("yamlDump"),
  showRendered: document.getElementById("showRendered"),
  showSource: document.getElementById("showSource"),
};

function setStatus(message) {
  el.status.textContent = message;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseDirListing(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const links = Array.from(doc.querySelectorAll("a"));
  return links.map((a) => a.getAttribute("href") || "").filter(Boolean);
}

async function fetchTextOrNull(url) {
  const response = await fetch(url);
  if (!response.ok) return null;
  return await response.text();
}

function normalizeDirName(href) {
  if (!href.endsWith("/")) return "";
  if (href.startsWith(".")) return "";
  if (href.startsWith("../")) return "";
  const name = href.slice(0, -1);
  if (!name || name === "preview" || name === ".preview") return "";
  return name;
}

function loadProjectsFromManifest(text) {
  const data = JSON.parse(text);
  if (!data || typeof data !== "object") return false;
  const projects = Array.isArray(data.projects) ? data.projects : [];
  const langsByProject =
    data.langsByProject && typeof data.langsByProject === "object"
      ? data.langsByProject
      : {};
  if (!projects.length) return false;
  state.projects = projects;
  state.langsByProject = langsByProject;
  return true;
}

async function loadProjects() {
  setStatus("Discovering projects...");

  const manifest = await fetchTextOrNull("./projects.json");
  if (manifest) {
    try {
      if (loadProjectsFromManifest(manifest)) {
        return;
      }
    } catch (_error) {
      // Fall back to directory listing when manifest is invalid.
    }
  }

  const root = await fetchTextOrNull("../");
  if (!root) throw new Error("Cannot read repo root directory listing.");

  const dirs = parseDirListing(root)
    .map(normalizeDirName)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  const available = [];
  const langsByProject = {};

  for (const dir of dirs) {
    const listing = await fetchTextOrNull(`../${dir}/`);
    if (!listing) continue;
    const files = parseDirListing(listing).filter((name) =>
      /\.ya?ml$/i.test(name),
    );
    const langs = files
      .map((name) => name.replace(/\.ya?ml$/i, ""))
      .filter((lang) => /^[a-z][a-z0-9-]*$/i.test(lang));
    if (!langs.length) continue;
    available.push(dir);
    langsByProject[dir] = Array.from(new Set(langs)).sort((a, b) =>
      a.localeCompare(b),
    );
  }

  state.projects = available;
  state.langsByProject = langsByProject;
}

function fillSelect(select, values) {
  select.innerHTML = "";
  values.forEach((v) => {
    const op = document.createElement("option");
    op.value = v;
    op.textContent = v;
    select.appendChild(op);
  });
}

function parseAttrString(attrText) {
  const attrs = {};
  const regex = /([\w-]+)="([^"]*)"/g;
  let match;
  while ((match = regex.exec(attrText)) !== null) {
    attrs[match[1]] = match[2];
  }
  return attrs;
}

function normalizeProjectPath(rawPath) {
  let path = (rawPath || "").trim();
  if (!path) path = `/${state.selectedProject}`;
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.length > 1) path = path.replace(/\/+$/, "");
  return path;
}

function currentBaseVars() {
  const forcedScheme =
    state.yaml &&
    state.yaml.filter &&
    typeof state.yaml.filter.scheme === "string"
      ? state.yaml.filter.scheme
      : "";
  const selectedScheme = el.scheme.value || "https";
  const scheme = /^(https?|HTTPS?)$/.test(forcedScheme)
    ? forcedScheme.toLowerCase()
    : selectedScheme;
  const host = el.host.value || "mirrors.example.com";
  const projectPath = normalizeProjectPath(el.path.value || "");
  return {
    scheme,
    host,
    path: projectPath,
    endpoint: `${scheme}://${host}${projectPath}`,
    sudo: el.sudo.value || "",
  };
}

function collectInputVars(configInput) {
  const values = {};
  const extra = {};

  for (const [name, spec] of Object.entries(configInput || {})) {
    const selected = state.inputValues[name];

    if (Object.prototype.hasOwnProperty.call(spec || {}, "option")) {
      const optionValues = Object.keys(spec.option || {});
      const choice =
        selected && optionValues.includes(selected)
          ? selected
          : spec.default && optionValues.includes(spec.default)
            ? spec.default
            : optionValues[0];
      values[name] = choice || "";
      const optionObject = choice ? (spec.option || {})[choice] || {} : {};
      for (const [k, v] of Object.entries(optionObject)) {
        if (k === "_") continue;
        extra[k] = v;
      }
      continue;
    }

    const hasBool =
      Object.prototype.hasOwnProperty.call(spec || {}, "true") ||
      Object.prototype.hasOwnProperty.call(spec || {}, "false");

    if (hasBool) {
      const boolSelected =
        selected === true || selected === false
          ? selected
          : typeof spec.default === "boolean"
            ? spec.default
            : false;
      values[name] = boolSelected;
      if (
        Object.prototype.hasOwnProperty.call(spec || {}, String(boolSelected))
      ) {
        const val = spec[String(boolSelected)];
        if (val && typeof val === "object") {
          for (const [k, v] of Object.entries(val)) extra[k] = v;
        } else {
          extra[name] = val;
        }
      }
      continue;
    }

    values[name] = typeof selected === "string" ? selected : "";
  }

  return { values, extra };
}

function renderInputControls(inputNames, configInput) {
  if (!inputNames.length) return "";
  const rows = [];

  for (const name of inputNames) {
    const spec = (configInput || {})[name] || {};
    const label = spec._ || name;

    if (Object.prototype.hasOwnProperty.call(spec, "option")) {
      const options = Object.entries(spec.option || {})
        .map(([value, obj]) => {
          const text = obj && typeof obj === "object" && obj._ ? obj._ : value;
          const selected = state.inputValues[name] === value ? " selected" : "";
          return `<option value="${escapeHtml(value)}"${selected}>${escapeHtml(text)}</option>`;
        })
        .join("");
      rows.push(
        `<label>${escapeHtml(label)}<select data-input-name="${escapeHtml(name)}">${options}</select></label>`,
      );
      continue;
    }

    const hasBool =
      Object.prototype.hasOwnProperty.call(spec, "true") ||
      Object.prototype.hasOwnProperty.call(spec, "false");
    if (hasBool) {
      const checked = state.inputValues[name] === true ? " checked" : "";
      rows.push(
        `<label>${escapeHtml(label)}<input type="checkbox" data-input-name="${escapeHtml(name)}"${checked}></label>`,
      );
      continue;
    }

    const value = state.inputValues[name] || "";
    rows.push(
      `<label>${escapeHtml(label)}<input data-input-name="${escapeHtml(name)}" value="${escapeHtml(value)}"></label>`,
    );
  }

  return [
    '<div class="ztmpl-inputs">',
    '<div class="ztmpl-inputs-title">Inputs used by this block</div>',
    '<div class="ztmpl-inputs-grid">',
    rows.join(""),
    "</div>",
    "</div>",
  ].join("");
}

function renderMustacheRaw(template, vars) {
  const originalEscape = Mustache.escape;
  Mustache.escape = (value) => String(value);
  try {
    return Mustache.render(template, vars);
  } finally {
    Mustache.escape = originalEscape;
  }
}

function renderZtmplBlock(attrs, template, vars, configInput) {
  const inputNames = (attrs.input || "").split(/\s+/).filter(Boolean);
  const inputsHtml = renderInputControls(inputNames, configInput);

  if (attrs.global === "true") {
    return `<div class="ztmpl">${inputsHtml}<div class="ztmpl-meta">global=true, template content ignored</div></div>`;
  }

  const rendered = renderMustacheRaw(template, vars);
  const lang = attrs.lang || "text";
  const pathMeta = attrs.path ? `path=${attrs.path}` : "";
  const appendMeta = attrs.append === "true" ? "append=true" : "";
  const meta = [pathMeta, appendMeta].filter(Boolean).join("; ");

  return [
    '<div class="ztmpl">',
    inputsHtml,
    meta ? `<div class="ztmpl-meta">${escapeHtml(meta)}</div>` : "",
    `<pre><code class="language-${escapeHtml(lang)}">${escapeHtml(rendered)}</code></pre>`,
    "</div>",
  ].join("");
}

function renderInlineZtmpl(attrs, template, vars) {
  const rendered = renderMustacheRaw(template, vars);
  const langClass = attrs.lang
    ? ` class="language-${escapeHtml(attrs.lang)}"`
    : "";
  return `<code${langClass}>${escapeHtml(rendered)}</code>`;
}

function ensureMarkedExtensions() {
  if (markedExtensionsReady) return;

  marked.use({
    gfm: true,
    breaks: true,
    extensions: [
      {
        name: "headingWithId",
        level: "block",
        start(src) {
          return src.match(/^ {0,3}#{1,6}\s/m)?.index;
        },
        tokenizer(src) {
          const match =
            /^ {0,3}(#{1,6})[ \t]+(.+?)\s+\{#([^\s}]+)\}[ \t]*(?:\r?\n|$)/.exec(
              src,
            );
          if (!match) return false;
          const depth = match[1].length;
          const text = match[2];
          const id = match[3];
          return {
            type: "headingWithId",
            raw: match[0],
            depth,
            text,
            id,
            tokens: this.lexer.inlineTokens(text),
          };
        },
        renderer(token) {
          const text = marked.parseInline(token.text || "");
          return `<h${token.depth} id="${escapeHtml(token.id)}">${text}</h${token.depth}>\n`;
        },
      },
      {
        name: "ztmplBlock",
        level: "block",
        start(src) {
          return src.match(/```\{ztmpl/)?.index;
        },
        tokenizer(src) {
          const match =
            /^ {0,3}```\{ztmpl([^}]*)\}[ \t]*\r?\n([\s\S]*?)\r?\n {0,3}```(?:\r?\n|$)/.exec(
              src,
            );
          if (!match) return false;
          return {
            type: "ztmplBlock",
            raw: match[0],
            attrText: match[1] || "",
            template: match[2] || "",
          };
        },
        renderer(token) {
          const attrs = parseAttrString(token.attrText || "");
          return renderZtmplBlock(
            attrs,
            token.template,
            markedRuntime.vars,
            markedRuntime.configInput,
          );
        },
      },
      {
        name: "ztmplInline",
        level: "inline",
        start(src) {
          return src.match(/\{ztmpl/)?.index;
        },
        tokenizer(src) {
          const match = /^\{ztmpl([^}]*)\}`([^`]+)`/.exec(src);
          if (!match) return false;
          return {
            type: "ztmplInline",
            raw: match[0],
            attrText: match[1] || "",
            template: match[2] || "",
          };
        },
        renderer(token) {
          const attrs = parseAttrString(token.attrText || "");
          return renderInlineZtmpl(attrs, token.template, markedRuntime.vars);
        },
      },
    ],
  });

  markedExtensionsReady = true;
}

function renderMarkdownWithZtmpl(markdown, vars, configInput) {
  ensureMarkedExtensions();
  markedRuntime.vars = vars;
  markedRuntime.configInput = configInput;
  const tokens = marked.lexer(markdown);
  return marked.parser(tokens);
}

function rewritePreviewLinks(container) {
  const anchors = container.querySelectorAll("a[href]");
  for (const a of anchors) {
    const rawHref = a.getAttribute("href") || "";
    const match = /^\.\.\/([^/?#]+)\/?(?:#([^\s]+))?$/.exec(rawHref);
    if (!match) continue;

    const project = match[1];
    if (!state.projects.includes(project)) continue;

    const hash = match[2] ? `#${match[2]}` : "";
    const query = new URLSearchParams();
    query.set("project", project);
    query.set("lang", state.selectedLang);
    a.setAttribute("href", `${location.pathname}?${query.toString()}${hash}`);
  }
}

function applyCodeHighlight(container) {
  if (!window.hljs) return;
  const ensureRegistered = [
    ["markdown", "markdown"],
    ["ini", "ini"],
    ["properties", "properties"],
    ["bash", "bash"],
    ["yaml", "yaml"],
    ["lisp", "lisp"],
    ["julia", "julia"],
    ["nix", "nix"],
    ["xml", "xml"],
    ["r", "r"],
    ["powershell", "powershell"],
    ["clojure", "clojure"],
    ["dos", "dos"],
    ["perl", "perl"],
    ["json", "json"],
    ["scheme", "scheme"],
  ];
  for (const [lang, globalName] of ensureRegistered) {
    const moduleFactory = window[`hljsGrammar_${globalName}`];
    if (!window.hljs.getLanguage(lang) && typeof moduleFactory === "function") {
      window.hljs.registerLanguage(lang, moduleFactory);
    }
  }

  if (window.hljs.registerAliases) {
    window.hljs.registerAliases(["mdown", "mkdn", "mdwn", "ron"], {
      languageName: "markdown",
    });
    window.hljs.registerAliases(["toml", "conf"], {
      languageName: "ini",
    });
    window.hljs.registerAliases(["sh", "zsh", "fish", "shell", "console"], {
      languageName: "bash",
    });
    window.hljs.registerAliases(["yml"], { languageName: "yaml" });
  }

  const langAlias = {
    mdown: "markdown",
    mkdn: "markdown",
    mdwn: "markdown",
    ron: "markdown",
    toml: "ini",
    conf: "ini",
    sh: "bash",
    zsh: "bash",
    fish: "bash",
    shell: "bash",
    console: "bash",
    yml: "yaml",
    text: "plaintext",
  };
  const blocks = container.querySelectorAll("pre code");
  for (const block of blocks) {
    try {
      const match = /\blanguage-([\w-]+)\b/.exec(block.className || "");
      const rawLang = (match ? match[1] : "").toLowerCase();
      const mappedLang = langAlias[rawLang] || rawLang;
      const knownLang = window.hljs.getLanguage(mappedLang)
        ? mappedLang
        : window.hljs.getLanguage("text")
          ? "text"
          : "";

      if (match) {
        block.classList.remove(`language-${match[1]}`);
      }
      if (knownLang) {
        block.classList.add(`language-${knownLang}`);
        window.hljs.highlightElement(block);
      }
    } catch (_error) {
      // Keep raw code rendering if language is unknown.
      console.warn(_error);
    }
  }
}

function bindBlockInputs(container) {
  const controls = container.querySelectorAll("[data-input-name]");
  for (const node of controls) {
    node.addEventListener("change", () => {
      const name = node.getAttribute("data-input-name");
      if (!name) return;
      if (node.type === "checkbox") {
        state.inputValues[name] = node.checked;
      } else {
        state.inputValues[name] = node.value;
      }
      render();
    });
  }
}

async function loadConfigAndBlocks() {
  const project = state.selectedProject;
  const lang = state.selectedLang;
  setStatus(`Loading ${project}/${lang}.yaml ...`);

  const yamlText = await fetchTextOrNull(`../${project}/${lang}.yaml`);
  if (!yamlText) throw new Error(`Missing file: ${project}/${lang}.yaml`);
  const cfg = jsyaml.load(yamlText);

  const blocks = Array.isArray(cfg.block) ? cfg.block : [];
  const blockTexts = [];
  for (const block of blocks) {
    const content = await fetchTextOrNull(`../${project}/${block}.${lang}.md`);
    if (content == null) {
      blockTexts.push(`> [Missing block file] ${block}.${lang}.md`);
    } else {
      blockTexts.push(content);
    }
  }

  state.yaml = cfg;
  state.mergedMarkdown = blockTexts.join("\n\n");

  const inputs = cfg.input || {};
  for (const [name, spec] of Object.entries(inputs)) {
    if (Object.prototype.hasOwnProperty.call(spec, "option")) {
      const opts = Object.keys(spec.option || {});
      if (!opts.length) continue;
      if (!state.inputValues[name] || !opts.includes(state.inputValues[name])) {
        state.inputValues[name] = opts.includes(spec.default)
          ? spec.default
          : opts[0];
      }
    } else if (
      Object.prototype.hasOwnProperty.call(spec, "true") ||
      Object.prototype.hasOwnProperty.call(spec, "false")
    ) {
      if (typeof state.inputValues[name] !== "boolean") {
        state.inputValues[name] =
          typeof spec.default === "boolean" ? spec.default : false;
      }
    } else {
      if (typeof state.inputValues[name] !== "string") {
        state.inputValues[name] = "";
      }
    }
  }
}

function render() {
  const configInput = (state.yaml && state.yaml.input) || {};
  const baseVars = currentBaseVars();
  const inputVars = collectInputVars(configInput);
  const vars = { ...baseVars, ...inputVars.values, ...inputVars.extra };

  const html = renderMarkdownWithZtmpl(state.mergedMarkdown, vars, configInput);
  el.rendered.innerHTML = html;
  rewritePreviewLinks(el.rendered);
  applyCodeHighlight(el.rendered);
  bindBlockInputs(el.rendered);

  el.sourceText.textContent = state.mergedMarkdown;
  el.vars.textContent = JSON.stringify(vars, null, 2);
  el.yamlDump.value = JSON.stringify(state.yaml, null, 2);
  setStatus(`Loaded ${state.selectedProject} (${state.selectedLang})`);
}

async function refresh() {
  try {
    await loadConfigAndBlocks();
    render();
  } catch (error) {
    el.rendered.innerHTML = `<p><strong>Error:</strong> ${escapeHtml(error.message)}</p>`;
    setStatus("Failed to render preview");
  }
}

function syncQuery() {
  const query = new URLSearchParams();
  query.set("project", state.selectedProject);
  query.set("lang", state.selectedLang);
  const next = `${location.pathname}?${query.toString()}`;
  history.replaceState({}, "", next);
}

function activateView(mode) {
  const rendered = mode === "rendered";
  el.rendered.hidden = !rendered;
  el.source.hidden = rendered;
  el.showRendered.classList.toggle("active", rendered);
  el.showSource.classList.toggle("active", !rendered);
}

async function bootstrap() {
  try {
    await loadProjects();
    if (!state.projects.length) {
      throw new Error("No projects found. Start a static server at repo root.");
    }

    const query = new URLSearchParams(location.search);
    const defaultProject = query.get("project");
    state.selectedProject = state.projects.includes(defaultProject)
      ? defaultProject
      : state.projects[0];

    fillSelect(el.project, state.projects);
    el.project.value = state.selectedProject;

    const langs = state.langsByProject[state.selectedProject] || ["zh"];
    const defaultLang = query.get("lang");
    state.selectedLang = langs.includes(defaultLang)
      ? defaultLang
      : langs.includes("zh")
        ? "zh"
        : langs[0];

    fillSelect(el.lang, langs);
    el.lang.value = state.selectedLang;

    el.project.addEventListener("change", async () => {
      state.selectedProject = el.project.value;
      const nextLangs = state.langsByProject[state.selectedProject] || ["zh"];
      fillSelect(el.lang, nextLangs);
      state.selectedLang = nextLangs.includes("zh") ? "zh" : nextLangs[0];
      el.lang.value = state.selectedLang;
      syncQuery();
      await refresh();
    });

    el.lang.addEventListener("change", async () => {
      state.selectedLang = el.lang.value;
      syncQuery();
      await refresh();
    });

    [el.scheme, el.host, el.path, el.sudo].forEach((node) => {
      node.addEventListener("input", () => render());
    });

    el.reload.addEventListener("click", async () => refresh());
    el.showRendered.addEventListener("click", () => activateView("rendered"));
    el.showSource.addEventListener("click", () => activateView("source"));

    syncQuery();
    await refresh();
  } catch (error) {
    el.rendered.innerHTML = `<p><strong>Bootstrap error:</strong> ${escapeHtml(error.message)}</p>`;
    setStatus("Initialization failed");
  }
}

bootstrap();
