require('./npm-script/before-build.script')

module.exports = {
    // target: 'node',
    mode: 'production',
    
    entry: require('./webpack-config/entry.config.js'),

    output: require('./webpack-config/output.config.js'),

    plugins: require('./webpack-config/plugins.prod.config.js'),

    resolve: require('./webpack-config/resolve.config'),

    module: require('./webpack-config/module.prod.config'),

    optimization: {
        splitChunks: {
            chunks: 'all',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
            minSize: 30000,//合并前模块文件的体积
            minChunks: 1,//最少被引用次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',//自动命名连接符
            name:true,
            cacheGroups: {
              vendors: {
                chunks: 'all', 
                // test: /@babel\/polyfill/,
                // test: /[\\/]node_modules[\\/]/,
                minChunks: 1,//敲黑板
                minSize: 0,
                priority: 100,//优先级更高,
                name: 'commons/commons',
                filename: '[name]/vendors.[chunkhash].js',
              },
            //     commons: {
            //         chunks: 'initial',
            //         minChunks: 2,//模块最小被引用数  如果是1则全部js模块都会被打包进vendor 所以最小设为2（被引用最少2次）
            //         // maxInitialRequests: 5, // The default limit is too small to showcase the effect
            //         // minSize: 0, // This is example is too small to create commons chunks
            //         name: 'commons/commons',
            //         filename: '[name]/bundle.[chunkhash].js',
            //         priority: 80
            // },
            //   default: {
            //     chunks: 'initial', 
            //     // test: /[\\/]src[\\/]js[\\/]/,
            //     // test: /@babel\/polyfill/,
            //     minChunks: 2,//一般为非第三方公共模块
            //     priority: 90,
            //     reuseExistingChunk: true
            //   },
            
            },
           
        },
           runtimeChunk:{
                name:'manifest'
            }
    }
}