const path = require('path');
const merge = require('webpack-merge');
const createDefaultConfigs = require('@open-wc/building-webpack/modern-and-legacy-config');

const configs = [createDefaultConfigs({
  input: path.resolve(__dirname, './build/index.html'),
})];

module.exports = configs.map(config => merge(config, {
  output: {
    path: path.resolve(__dirname, 'build/dist'),
  },
}));
