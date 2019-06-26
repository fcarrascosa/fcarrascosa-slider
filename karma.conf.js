/* eslint-disable import/no-extraneous-dependencies */
const createDefaultConfig = require('@open-wc/testing-karma/default-config.js');

const merge = require('webpack-merge');

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // allows running single tests with the --grep flag
        {
          pattern: config.grep ? config.grep : 'test/**/*.test.js',
          type: 'module',
        },
      ],
      frameworks: ['mocha', 'sinon-chai'],
      // your custom config
      browserDisconnectTimeout: 10000,
      browserDisconnectTolerance: 3,
      browserNoActivityTimeout: 60000,
      customLaunchers: {
        ChromeHeadlessNoSandbox: {
          base: 'Chrome',
          flags: ['--no-sandbox', '--headless', '--disable-gpu'],
        },
      },
    }),
  );
  return config;
};
