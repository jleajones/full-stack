import 'ignore-styles';
import express from 'express';
import Loadable from 'react-loadable';
import logger from '../../utils/logger'
import { errLog, outLog } from '../../middleware/logger';
import serverRenderer from './middleware/serverRenderer';

const PORT = 3000;
const path = require('path');

// initialize the application and create the routes
const app = express();
app.use(errLog);
app.use(outLog);

const router = express.Router();

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// tell the app to use the above rules
app.use(router);

// start the app
Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
        if (error) {
            return logger.error('something bad happened', error);
        }

        logger.info(`UI Server: LISTENING ON PORT ${PORT}`);
    });
});