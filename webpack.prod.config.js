


module.exports = {
    mode: 'production',
    entry: require('./webpack-config/entry.config.js'),

    output: require('./webpack-config/output.config.js'),

    plugins: require('./webpack-config/inherit/plugins.config.js'),

    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=1700&name=[name].[ext]']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(woff|wff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    }
}