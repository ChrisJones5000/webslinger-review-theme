const path = require('path');

module.exports = {
	entry: './app/src/assets/scripts/App.js',
	mode: 'production',
	output: {
		filename: 'App-bundled.js',
		path: path.resolve(__dirname, './app/temp/scripts')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}				
				}
			}
		]
	}
}