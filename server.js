import express from 'express';
import morgan from 'morgan';

const API_PORT = 3001;
const app = express();

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

app.get('/', (req, res) => res.send('hello world!'));

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));