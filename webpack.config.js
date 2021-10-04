const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),

  output: {
    path: resolve(__dirname, 'demo/dist'),
    filename: 'simple-scrollspy.min.js',
    chunkFilename: '[name].simple-scrollspy.min.js',
    library: 'scrollSpy',
    libraryTarget: 'umd'
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}
