const jestConfig = require('@boilerz/jest-config');

module.exports = {
  ...jestConfig,
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  resetMocks: false,
};
