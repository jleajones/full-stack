import convict from 'convict';

const config = convict({
  env: {
    doc: 'The Server Application Environment',
    format: ['prod', 'dev', 'test'],
    default: 'dev',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The Server Application Port',
    format: 'port',
    default: 3001,
    env: 'PORT'
  },
  stripe: {
    secret_key: {
      doc: 'The Stripe Secret Port',
      format: String,
      default: '',
      sensitive: true
    },
    public_key: {
      doc: 'The Stripe public Port',
      format: String,
      default: ''
    }
  }
});

const env = config.get('env');
config.loadFile(`./.config/${env}.json`);
config.validate({ allowed: 'strict' });

export default config;
