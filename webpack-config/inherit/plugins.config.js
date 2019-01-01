const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dirVars = require('../base/dir-vars.config.js')
const pageArr = require('../base/page-entries.config.js')

// var HashOutput = require('webpack-plugin-hash-output');


const configPlugins = [
    /* 抽取出webpack的runtime代码()，避免稍微修改一下入口文件就会改动commonChunk，导致原本有效的浏览器缓存失效 */
    
    // new HashOutput({
    //     manifestFiles: 'webpack-runtime', // 指定包含 manifest 在内的 chunk
    //   }),
    new webpack.optimize.SplitChunksPlugin({
        // cacheGroups: {
        //     // default: {
        //     //     minChunks: 2,
        //     //     priority: -20,
        //     //     reuseExistingChunk: true,
        //     // },
        //     //打包重复出现的代码  一个模块只要被引用两次及以上就会被打包进vendor  页面引用此公共模块库 （有缓存）
            // commons: {
            //     chunks: 'initial',
            //     minChunks: 2,//模块最小被引用数  如果是1则全部js模块都会被打包进vendor 所以最小设为2（被引用最少2次）
            //     maxInitialRequests: 5, // The default limit is too small to showcase the effect
            //     minSize: 0, // This is example is too small to create commons chunks
            //     name: 'commons/commons',
            //     filename: '[name]/bundle.[chunkhash].js',
            //     priority: 10
            // },
        //     vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
        //         chunks: 'initial',
        //         test: /node_modules\//,
        //         name: 'commons/vendor',
        //         filename: '[name]/vendor.[chunkhash].js',
        //         priority: 9,
        //         enforce: true
        //     },
        //     // runtimeChunk: {
        //     //     name: 'commons/manifest'
        //     // },
        //     // webpackRuntime: {
        //     //     chunks: 'all',
        //     //     // minChunks: 2,//模块最小被引用数  如果是1则全部js模块都会被打包进vendor 所以最小设为2（被引用最少2次）
        //     //     // maxInitialRequests: 5, // The default limit is too small to showcase the effect
        //     //     // minSize: 0, // This is example is too small to create commons chunks
        //     //     name: 'webpack-runtime',
        //     //     filename: 'commons/commons/webpack-runtime.[hash].js',
        //     // },
            
        // }
        // ------------------------------------
        splitChunks: {
            chunks: 'all',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
            minSize: 30000,//合并前模块文件的体积
            // minChunks: 1,//最少被引用次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',//自动命名连接符
            name:true,
            cacheGroups: {
              vendors: {
                chunks: 'all', 
                test: /@babel\/polyfill/,
                // test: /[\\/]node_modules[\\/]/,
                // minChunks:1,//敲黑板
                priority: 100,//优先级更高,
                name: 'vendor'
              },
            //   default: {
            //     chunks: 'initial', 
            //     // test: /[\\/]src[\\/]js[\\/]/,
            //     // test: /@babel\/polyfill/,
            //     minChunks: 2,//一般为非第三方公共模块
            //     priority: 90,
            //     reuseExistingChunk: true
            //   }
            },
            // runtimeChunk:{
            //     name:'manifest'
            // }
          }
        
    }),
    //入口js文件import '@babel/polyfill' 以解决es6的解析而出现的在打包后浏览器报错：global未定义
    new webpack.DefinePlugin({
        // 'process.env.NODE_ENV': '"development"',
        'process.env.NODE_ENV': '"production"',
        'global': {}, // bizarre lodash(?) webpack workaround
        'global.GENTLY': false // superagent client fix
    })
]

pageArr.forEach(page => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}/page.html`,
        template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
        chunks: [ page, 'commons/commons'],
        hash: true,
        xhtml: true,
    })
    configPlugins.push(htmlPlugin)
})


module.exports = configPlugins
// console.log(configPlugins)