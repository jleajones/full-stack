import winston, { format } from 'winston';

const level = process.env.LOG_LEVEL || 'debug';

export default winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: level,
            format: format.combine(
                format.colorize(),
                format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
            ),
            colorize: true,
            timestamp: function () {
                return (new Date()).toISOString();
            }
        })
    ]
});