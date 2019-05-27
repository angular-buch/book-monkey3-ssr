require('zone.js/dist/zone-node');
const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
const { renderModuleFactory } = require('@angular/platform-server');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');
const DIST_FOLDER = path.join(process.cwd(), 'dist/browser');

async function renderRoute(document, route) {
  const generatedHtml = await renderModuleFactory(
    AppServerModuleNgFactory,
    {
      document,
      url: route,
      extraProviders: [
        provideModuleMap(LAZY_MODULE_MAP)
      ]
    }
  );

  const folder = path.join(DIST_FOLDER, route);
  mkdirp.sync(folder);
  fs.writeFileSync(path.join(folder, 'index.html'), generatedHtml);
}

const routes = [
  '/home',
  '/books',
  '/books/9783864906466'
];

const indexHtml = fs.readFileSync(path.join(DIST_FOLDER, 'index.html')).toString();
routes.forEach(route => renderRoute(indexHtml, route));
