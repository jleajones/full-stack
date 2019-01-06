import morgan from 'morgan';

export const errLog = morgan('dev', {
  skip: (req, res) => res.statusCode < 400,
  stream: process.stderr
});

export const outLog = morgan('dev', {
  skip: (req, res) => res.statusCode >= 400,
  stream: process.stdout
});
