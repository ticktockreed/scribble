const path = require('path');

module.exports = {
  entry: './src/main.js',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
  },
  module: {
    rules: [
            {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
                ]
            }
        ]
    }
};