import { config } from 'dotenv';

function setEnvironmentConfig() {
  const env = process.env.NODE_ENV;
  switch (env) {
    case 'development':
      config({ path: '.env.dev' });
      break;
    case 'production':
      config();
      break;
    case 'test':
      config({ path: '.env.test' });
      break;
    default:
      throw new Error(`Unknown environment: ${env}`);
  }
}

export function start() {
  console.log('Hello World');
}

try {
  setEnvironmentConfig();
  start();
} catch (err) {
  console.error(err);
}
