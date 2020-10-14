const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: path.resolve(__dirname, "./src/index.js"),
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "[contenthash].[name].js",
		chunkFilename: "[name].chunk.js",
		publicPath: "/",
	},

	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},

	devServer: {
		port: 3000,
		compress: true,
		historyApiFallback: true,
		overlay: true,
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: "babel-loader",
				},
			},

			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					"style-loader",
					cssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
		],
	},

	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/index.html"),
		}),
		new cssExtractPlugin({
			template: path.resolve(__dirname, "./src/styles.css"),
		}),
		new Dotenv(),
	],
};
