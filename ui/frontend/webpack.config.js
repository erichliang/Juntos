/* eslint-disable */

const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');

Encore.setOutputPath('build/')
  .setPublicPath('/')
  .addEntry('app', './src/index.jsx')
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())
  .configureCssLoader(config => {
    config.modules = true;
    if (Encore.isProduction()) {
      config.localIdentName = '[sha1:hash:hex:4]';
    } else {
      config.localIdentName = '[name]__[local]--[sha1:hash:hex:4]';
    }
  })
  .enableReactPreset()
  .enableSassLoader()
  .enablePostCssLoader();


const config = Encore.getWebpackConfig();

config.plugins.push(
  new HtmlWebpackPlugin({
    // Also generate a test.html
    template: 'src/app.html',
    title: 'Juntos - Face Generator',
    favicon: 'static/favicon.ico',
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    env: process.env,
  }),
);

if (!Encore.isProduction()) {
  config.devServer.historyApiFallback = {
    disableDotRule: true,
  };
}

module.exports = config;
