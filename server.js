import express from 'express';
import { errLog, outLog } from "./middleware/logger";
import logger from './utils/logger';

const API_PORT = 3001;
const app = express();

app.use(errLog);
app.use(outLog);

app.get('/', (req, res) => res.send('hello world!'));

app.listen(API_PORT, () => logger.info(`API Server: LISTENING ON PORT ${API_PORT}`));