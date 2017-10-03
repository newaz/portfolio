const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const port = process.env.envPORT || 3000;

const TARGET_ENV = process.env.npm_lifecycle_event === 'build' ? 'production' : 'development';

if(TARGET_ENV === 'development') {
	console.log('Serving locally ...');
}

const VENDOR_LIBS = [
	'react', 'react-dom', 'react-router-dom', 'prop-types'
];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash:8].js'
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-1', 'stage-2', 'jest', 'react']
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader']
				})),
			},
			{
				test: /\.(jpg|png|gif|svg|ico)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					},
				]
			},
			{
				test: /\.(jpg|png|gif|svg|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[hash].[ext]',
						},
					},
					'image-webpack-loader'
				]
			},
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'src/index.html',
			favicon: 'src/images/favicon.ico',
			inject: true
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),
		new ExtractTextPlugin({
			filename: 'style[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			DEV: true
		}),
		new webpack.DefinePlugin({
			'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET),
			'process.env.COSMIC_READ_KEY': JSON.stringify(process.env.COSMIC_READ_KEY),
			'process.env.COSMIC_WRITE_KEY':
			JSON.stringify(process.env.COSMIC_WRITE_KEY)
		})
	],
	devtool: 'eval-source-map',
	devServer: {
		// means that  a script will be inserted in your bundle to take care of live reloading, and build messages will appear in the browser console.
		inline: true,
		stats: 'minimal',
		open: true, // open default browser while launching
		contentBase: './src/',
		historyApiFallback: true, // means the index.html page will likely have to be served in place of any 404 responses. Fallback for SPAs.
		port: port
	},
};
