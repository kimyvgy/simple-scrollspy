const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'src/index.ts'),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },

  output: {
    path: resolve(__dirname, 'demo/dist'),
    filename: 'simple-scrollspy.min.js',
    chunkFilename: '[name].simple-scrollspy.min.js',
    library: {
      name: 'scrollSpy',
      type: 'umd',
      export: 'default',
    }
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}
