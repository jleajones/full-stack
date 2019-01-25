import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router';
import { Frontload, frontloadServerRender } from 'react-frontload';

import logger from '../../../utils/logger';

import manifest from '../../build/asset-manifest.json';
import App from '../../src/App';

const path = require('path');
const fs = require('fs');

const extractAssets = (assets, chunks) =>
  Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

const injectHTML = (data, { html, title, meta, body, scripts, state }) => {
  let finalHtml = data.replace('<html>', `<html ${html}>`);
  finalHtml = finalHtml.replace(/<title>.*?<\/title>/g, title);
  finalHtml = finalHtml.replace('</head>', `${meta}</head>`);
  finalHtml = finalHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
  );
  finalHtml = finalHtml.replace('</body>', scripts.join('') + '</body>');
  return finalHtml;
};

export default (req, res) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      logger.error('err', err);
      return res.status(404).end();
    }

    const context = {};
    const modules = [];

    frontloadServerRender(() =>
      ReactDOMServer.renderToString(
        <Loadable.Capture report={m => modules.push(m)}>
          <StaticRouter location={req.url} context={context}>
            <Frontload isServer>
              <App />
            </Frontload>
          </StaticRouter>
        </Loadable.Capture>
      )
    ).then(routeMarkup => {
      // find chunks
      const extraChunks = extractAssets(manifest, modules).map(
        c => `<script type="text/javascript" src="${c}"></script>`
      );

      const helmet = Helmet.renderStatic();

      // inject the rendered app into our html and send it
      const html = injectHTML(htmlData, {
        html: helmet.htmlAttributes.toString(),
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        body: routeMarkup,
        scripts: extraChunks
      });

      return res.send(html);
    });
  });
};
