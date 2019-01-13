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
    public_key: {
      doc: 'The Stripe Public Key',
      format: String,
      default: ''
    },
    secret_key: {
      doc: 'The Stripe Secret Key',
      format: String,
      default: '',
      sensitive: true
    }
  }
});

const env = config.get('env');
config.loadFile(`./.config/${env}.json`);
config.validate({ allowed: 'strict' });

export default config;
