import winston, { format } from 'winston';
import config from '../config';

const level = config.get('env') === 'DEV' ? 'debug' : 'error';

export default winston.createLogger({
  transports: [
    new winston.transports.Console({
      level,
      format: format.combine(
        format.colorize(),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(
          info => `${info.timestamp} [${info.level}]: ${info.message}`
        )
      ),
      colorize: true,
      timestamp: () => new Date().toISOString()
    })
  ]
});
