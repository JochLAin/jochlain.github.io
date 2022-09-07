require('@babel/register')({ configFile: `${process.cwd()}/.babelrc` });

import fs from 'fs';
import path from 'path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import sass from 'sass';

const COMPONENT_PATH = path.resolve(process.cwd(), 'lib/assets/components');
const STYLESHEET_PATH = path.resolve(process.cwd(), 'lib/assets/stylesheets');

let html = '';
let css = '';

const generate = () => {
  if (!html || !css) return;

  const content = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>CV Jocelyn Faihy</title>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Abel&family=Heebo:wght@500;700&display=swap" rel="stylesheet" />
    <link href="../../public/bundles/fontawesome-pro-6.1.2-web/css/all.css" rel="stylesheet" />
    <style>${css}</style>
  </head>
  <body>
    ${html}
  </body>
</html>`;

  fs.writeFileSync(
    path.resolve(process.cwd(), 'lib/public/cv.html'),
    content
  );
}

const generateHTML = () => {
  const component = createElement(require(COMPONENT_PATH).default);
  html = renderToString(component);
  generate();
};

const generateCSS = () => {
  const result = sass.compile(
    path.resolve(process.cwd(), 'lib/assets/stylesheets/index.scss'),
    { style: 'compressed', sourceMap: false }
  );
  css = result.css;
  generate();
}

console.log('Generate HTML');
generateHTML();
console.log('Generate CSS');
generateCSS();

console.log('Start watching HTML');
const html_watcher = fs.watch(COMPONENT_PATH, (eventType, filename) => {
  if ('change' === eventType && !filename.includes('~')) {
    console.log('Changed HTML');
    delete require.cache[path.resolve(COMPONENT_PATH, filename)];
    generateHTML();
  }
});

console.log('Start watching CSS');
const css_watcher = fs.watch(STYLESHEET_PATH, (eventType, filename) => {
  if ('change' === eventType && !filename.includes('~')) {
    console.log('Changed CSS');
    delete require.cache[path.resolve(STYLESHEET_PATH, filename)];
    generateCSS();
  }
});

const kill = () => {
  html_watcher.close();
  css_watcher.close();
};

// process.on('SIGKILL', kill);
process.on('SIGTERM', kill);
process.on('exit', kill);
