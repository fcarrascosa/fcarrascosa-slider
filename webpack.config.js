const path = require('path');
const createDefaultConfigs = require('@open-wc/building-webpack/modern-and-legacy-config');

module.exports = createDefaultConfigs({
  input: path.resolve(__dirname, './build/index.html'),
  output: {
    path: path.resolve(__dirname, 'build/dist'),
  },
});
