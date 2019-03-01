const path = require('path');
const merge = require('webpack-merge');
const defaultConfig = require('@open-wc/building-webpack/default-config');

module.exports = merge(defaultConfig({
  indexHTML: path.resolve(__dirname, './build/index.html'),
  indexJS: path.resolve(__dirname, './build/index.js'),
}), {
  output: {
    path: path.resolve(process.cwd(), path.join('build', 'dist')),
  },
});
