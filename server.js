import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { errLog, outLog } from './middleware/logger';
import logger from './utils/logger';
import config from './config';
import ApiService from './routes/api';
import AuthService from './routes/auth';

const ENV = config.get('env');
const PORT = config.get('port');
const app = express();

app.use(errLog);
app.use(outLog);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) =>
  res.json({
    api: 1
  })
);
app.use(AuthService);
app.use(ApiService);
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (ENV === 'dev') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(PORT, error => {
  if (error) {
    logger.error('something bad happened', error);
  }

  logger.info(
    `🌐 API Server Config: Running in ${ENV} mode; Listening on PORT ${PORT}`
  );
});
