const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['javascript'] // Puedes agregar más lenguajes según necesites
    })
  ]
};