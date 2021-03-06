/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');

const merge = require('deepmerge');

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
      esm: {
        nodeResolve: true,
      },
      plugins: ['karma-junit-reporter'],
      reporters: ['junit'],
      frameworks: ['mocha', 'sinon-chai'],
      junitReporter: {
        outputFile: 'test-results.xml',
        outputDir: 'coverage',
        useBrowserName: false,
      },
      coverageIstanbulReporter: {
        reports: ['html', 'lcovonly', 'text-summary', 'cobertura'],
        dir: 'coverage',
        combineBrowserReports: true,
        skipFilesWithNoCoverage: false,
        thresholds: {
          global: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80,
          },
        },
      },
      // your custom config
    }),
  );
  return config;
};
