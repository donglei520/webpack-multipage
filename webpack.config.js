require('./npm-script/before-build.script')

module.exports = {
    target: 'node',
    mode: 'production',
    
    entry: require('./webpack-config/entry.config.js'),

    output: require('./webpack-config/output.config.js'),

    plugins: require('./webpack-config/plugins.prod.config.js'),

    resolve: require('./webpack-config/resolve.config'),

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
            },
            ...require('./webpack-config/inherit/module.config')
        ]
    }
}