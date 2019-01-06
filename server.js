import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { errLog, outLog } from './middleware/logger';
import logger from './utils/logger';
import config from './config'
import apiRoutes from './api/routes/'

const ENV = config.get('env');
const PORT = config.get('port');
const app = express();

app.use(errLog);
app.use(outLog);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => res.send('hello world!'));
app.use('/api', apiRoutes);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(PORT, (error) => {
    if(error) {
        return logger.error('something bad happened', error);
    }

    logger.info(`🌐 API Server Config: Running in ${ENV} mode; Listening on PORT ${PORT}`)
});