const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isEnvDevelopment = env && env.dev;
  return {
    entry: [...(isEnvDevelopment ? ['react-dev-utils/webpackHotDevClient'] : []), './src/index.js'],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    devtool: 'cheap-module-eavl-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  };
};
