module.exports = {
	entry: './src/js/app.jsx',
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
			{test: /\.(js|jsx)?$/, exclude: /(node_modules|bower_components)/, loader: 'babel'},
			{test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
	      	{test: /\.ttf$/,    loader: "file-loader" },
	      	{test: /\.eot$/,    loader: "file-loader" },
	      	{test: /\.svg$/,    loader: "file-loader" },
			{test: /\.css$/,    loader: "style-loader!css-loader" }],
		resolve: {
			extensions: ['', '.js', '.jsx'],
		}
	}
};
