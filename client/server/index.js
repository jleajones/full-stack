import 'ignore-styles';
import express from 'express';
import Loadable from 'react-loadable';
import fs from 'fs';
import path from 'path';
import https from 'https';

import config from '../config';
import logger from '../../utils/logger';
import { errLog, outLog } from '../../middleware/logger';
import serverRenderer from './middleware/serverRenderer';

// Grab configs
const ENV = config.get('env');
const PORT = config.get('port');

// Read Cert files
const certOptions = {
  key: fs.readFileSync(path.resolve('../server.key')),
  cert: fs.readFileSync(path.resolve('../server.crt'))
};

// Create App, initialize logging
const app = express();
app.use(errLog);
app.use(outLog);

// Create Router
const router = express.Router();
// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

// other routes fall back to renderer
router.use(serverRenderer);

// tell the app to use the above rules
app.use(router);

// create https server
const httpsServer = https.createServer(certOptions, app);

// start the app
Loadable.preloadAll().then(() => {
  httpsServer.listen(PORT, error => {
    if (error) {
      logger.error('❌ something bad happened', error);
    }

    logger.info(
      `🖥️ UI Server Config: Running in ${ENV} mode; Listening on PORT ${PORT}`
    );
  });
});
