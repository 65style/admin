const CracoLessPlugin = require('craco-less')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 1024,
        minRatio: 0.8,
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true, //设置为true即是less
        },
      ],
    ],
  },
}
