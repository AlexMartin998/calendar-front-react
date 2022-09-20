// If working with environment variables
require('dotenv').config({
  path: '.env.test',
});

jest.mock('./src/helpers/getEnvVariables', () => ({
  getEnvironments: () => ({ ...process.env }),
}));
