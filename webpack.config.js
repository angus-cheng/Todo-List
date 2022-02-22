const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
      ],
  },
};

module.exports = () => {
  config.mode = "development";
  return config;
}