const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const dotenv = require('dotenv');
<<<<<<< HEAD
const TerserPlugin = require('compression-webpack-plugin');

dotenv.config();

const isProd = (process.env.NODE_ENV === 'production');
=======
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

dotenv.config();
const isProd = process.env.NODE_ENV === 'production';
>>>>>>> hotfix4

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-source-map',
  entry: './src/frontend/index.js',
  mode: process.env.NODE_ENV,
  output: {
<<<<<<< HEAD
    path: isProd ? 
      path.join(process.cwd(),'./src/server/public'):'/',
=======
    path: isProd ? path.join(process.cwd(), 'src/server/public') : '/',
>>>>>>> hotfix4
    filename: isProd ? 'assets/app-[hash].js' : 'assets/app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
<<<<<<< HEAD
    minimizer: isProd ? [
      new TerserPlugin(),
    ]:[],
=======
    minimizer: isProd ? [new TerserPlugin()] : [],
>>>>>>> hotfix4
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isProd ? 'assets/vendors-[hash].js' : 'assets/vendors.js',
          enforce: true,
          test(module, chunks){
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunks) => chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
          }
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'assets/[hash].[ext]'}
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
          { loader: 'sass-loader' }
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    isProd ? new CompressionPlugin({ test: /\.js$|\.css$/, filename: '[path].gz' }) : () => {},
    isProd ? new ManifestPlugin() : () => {},
  ],
};