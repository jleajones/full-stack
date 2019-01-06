import convict from 'convict';

const config = convict({
    env: {
        doc: 'The Application Environment',
        format: ['PROD', 'DEV', 'TEST'],
        default: 'dev',
        env: 'NODE_ENV'
    },
    port: {
        doc: 'The Application Port',
        format: 'port',
        default: 3000,
        env: 'PORT'
    }
});

const env = config.get('env');
config.loadFile(`./config/${env}.json`);
config.validate({ allowed: 'strict' });

export default config;