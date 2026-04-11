#!/usr/bin/env node
// Script for Cloudflare Pages

const fs = require("fs/promises");
const path = require("path");

async function listProjectLangs(projectDir) {
  const entries = await fs.readdir(projectDir, { withFileTypes: true });
  const langs = entries
    .filter((entry) => entry.isFile() && /\.ya?ml$/i.test(entry.name))
    .map((entry) => entry.name.replace(/\.ya?ml$/i, ""))
    .filter((lang) => /^[a-z][a-z0-9-]*$/i.test(lang));
  return Array.from(new Set(langs)).sort((a, b) => a.localeCompare(b));
}

async function main() {
  const repoRoot = path.resolve(__dirname, "..");
  const previewDir = path.resolve(repoRoot, ".preview");

  const rootEntries = await fs.readdir(repoRoot, { withFileTypes: true });
  const projectDirs = rootEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith("."))
    .filter((name) => name !== "preview")
    .sort((a, b) => a.localeCompare(b));

  const projects = [];
  const langsByProject = {};

  for (const project of projectDirs) {
    const fullDir = path.resolve(repoRoot, project);
    const langs = await listProjectLangs(fullDir);
    if (!langs.length) continue;
    projects.push(project);
    langsByProject[project] = langs;
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    projects,
    langsByProject,
  };

  await fs.writeFile(
    path.resolve(previewDir, "projects.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );

  const redirectHtml = [
    "<!doctype html>",
    '<html lang="en">',
    "  <head>",
    '    <meta charset="utf-8">',
    '    <meta http-equiv="refresh" content="0; url=./.preview/">',
    "    <title>MirrorZ Docs</title>",
    "  </head>",
    "  <body>",
    '    <p>Redirecting to <a href="./.preview/">MirrorZ Preview</a>...</p>',
    "  </body>",
    "</html>",
    "",
  ].join("\n");

  await fs.writeFile(
    path.resolve(repoRoot, "index.html"),
    redirectHtml,
    "utf8",
  );

  process.stdout.write(
    `Generated .preview/projects.json with ${projects.length} projects and repo index redirect.\n`,
  );
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});
