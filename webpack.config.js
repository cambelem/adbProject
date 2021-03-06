var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'babel-polyfill',
      './src/index.jsx'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: './dist/bundle.js',
    },
    module: {
      loaders: [{
	test: /.jsx?$/,
        exclude: /node_modules/,
	loader: 'babel-loader',
	query: {
	  plugins: ['transform-runtime'],
	  presets: ['es2015', 'stage-0', 'react'],
	}
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        loader: "eslint",
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
      ]
    },
    eslint: {
        configFile: path.join(__dirname, '.eslintrc.js'),
        useEslintrc: false
    }, 
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
};
