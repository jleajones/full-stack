import express from 'express';
import { errLog, outLog } from "./middleware/logger";
import logger from './utils/logger';
import config from './config'
import apiRoutes from './api/routes/'

const ENV = config.get('env');
const API_PORT = config.get('port');
const app = express();

app.use(errLog);
app.use(outLog);

app.get('/', (req, res) => res.send('hello world!'));
app.use('/api', apiRoutes);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(API_PORT, () => logger.info(`🌐 API Server Config: Running in ${ENV} mode; Listening on PORT ${API_PORT}`));