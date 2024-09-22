import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
  appName: process.env.APP_NAME || 'NestJs Auth',

  environment: process.env.NODE_ENV || 'development',

  baseUrl: process.env.APP_URL || 'http://localhost:3000',

  playgroundUrl:
    process.env.PLAYGROUND_URL ||
    process.env.APP_URL ||
    'http://localhost:3000',

  frontendUrl: process.env.FRONTEND_URL || 'XXXXXXXXXXXXXXXXXXXXX',

  port: process.env.PORT || 3000,

  secret: process.env.SECRET,

  rootDir: path.join(__dirname, '../../'),

  uploadDir: process.env.UPLOAD_DIR || path.join(__dirname, '../../uploads'),

  trustProxy: process.env.TRUST_PROXY?.toUpperCase() === 'TRUE' || false,
};
