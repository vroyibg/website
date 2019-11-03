const path = require('path');

module.exports = (env) => {
  console.log(env);
  const isEnvDevelopment = env.dev;
  return {
    entry: [isEnvDevelopment && 'react-dev-utils/webpackHotDevClient', './src/index.js'],
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
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    devtool: 'cheap-module-eavl-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
  };
};
