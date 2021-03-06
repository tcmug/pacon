
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath    = "";
const distPath      = path.resolve(__dirname, 'dist') + "/client/";
const indexTemplate = path.resolve(__dirname, 'static') + "/index.html";
const assetsPath    = path.resolve(__dirname, 'assets') + "/";

const client = {
    devtool: 'source-map',
    entry: [
        './src/client/app',
    ],
    output: {
        path: distPath,
        publicPath: publicPath,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        proxy: {
            '/socket.io': {
                target: 'http://localhost:4040',
                ws: true
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            inject: true,
            template: indexTemplate
        }),
        //new SassPlugin('./src/client/style/main.sass')
        //new UglifyJSPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ['ts-loader']
            },
            // {
            //     test: require.resolve('snapsvg'),
            //     loader: 'imports-loader?this=>window,fix=>module.exports=0'
            // },
            {
                test: /\.sass$/,
                loaders: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "file-loader",
                include: assetsPath
            }
        ]
    }

};

module.exports = client;

