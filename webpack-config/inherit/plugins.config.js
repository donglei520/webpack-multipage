const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dirVars = require('../base/dir-vars.config.js')
const pageArr = require('../base/page-entries.config.js')
const cleanWebpackPlugin = require('clean-webpack-plugin')

// var HashOutput = require('webpack-plugin-hash-output');


const configPlugins = [
    new cleanWebpackPlugin(path.resolve(dirVars.rootDir,  '../nodeLesson/five-littleserver/page/build'), {
        root: dirVars.rootDir,//这个root配置项不能缺少，否则会出现如下提示，并且clean操作被跳过
        verbose: true// 否则会出现 ...\build is outside of the project root. Skipping...
    }),
    /* 抽取出webpack的runtime代码()，避免稍微修改一下入口文件就会改动commonChunk，导致原本有效的浏览器缓存失效 */
//     const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// module.exports = {
// 	...
// 	plugins: [
// 		...
// 		new BundleAnalyzerPlugin()
// 	]
// }

    // new HashOutput({
    //     manifestFiles: 'webpack-runtime', // 指定包含 manifest 在内的 chunk
    //   }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.SplitChunksPlugin({//我日tm的根本就没有这个插件 写在这里根本没用 要写在optimization{}对象里的
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
            // vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
            //     chunks: 'initial',
            //     test: /node_modules\//,
            //     name: 'commons/vendor',
            //     filename: '[name]/vendor.[chunkhash].js',
            //     priority: 9,
            //     enforce: true
            // },
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
        // splitChunks: {
        //     chunks: 'all',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
        //     minSize: 30000,//合并前模块文件的体积
        //     minChunks: 2,//最少被引用次数
        //     maxAsyncRequests: 5,
        //     maxInitialRequests: 3,
        //     automaticNameDelimiter: '~',//自动命名连接符
        //     name:true,
        //     cacheGroups: {
        //       vendors: {
        //         chunks: 'all', 
        //         // test: /polyfill/,
        //         test: /[\\/]node_modules[\\/]/,
        //         minChunks:2,//敲黑板
        //         priority: 100,//优先级更高,
        //         name: 'commons/commons',
        //         filename: '[name]/vendors.[chunkhash].js',
        //       },
        //       default: {
        //         chunks: 'initial', 
        //         // test: /[\\/]src[\\/]js[\\/]/,
        //         // test: /@babel\/polyfill/,
        //         minChunks: 2,//一般为非第三方公共模块
        //         priority: 90,
        //         reuseExistingChunk: true
        //       }
        //     },
        //   },
          // runtimeChunk:{
          //     name:'manifest'
          // }

        //   cacheGroups: {
        //     default: {
        //         minChunks: 2,
        //         priority: -20,
        //         reuseExistingChunk: true,
        //     },
        //     //打包重复出现的代码  一个模块只要被引用两次及以上就会被打包进vendor  页面引用此公共模块库 （有缓存）
        //     vendor: {
        //         chunks: 'initial',
        //         minChunks: 2,//模块最小被引用数  如果是1则全部js模块都会被打包进vendor 所以最小设为2（被引用最少2次）
        //         maxInitialRequests: 5, // The default limit is too small to showcase the effect
        //         minSize: 0, // This is example is too small to create commons chunks
        //         name: 'vendor-ha'
        //     },
        //     //打包第三方类库
        //     commons: {
        //         name: "commons",
        //         chunks: "initial",
        //         minChunks: Infinity
        //     }
        // }

        
    // }),
    //入口js文件import '@babel/polyfill' 以解决es6的解析而出现的在打包后浏览器报错：global未定义
    // new webpack.DefinePlugin({
    //     // 'process.env.NODE_ENV': '"development"',
    //     'process.env.NODE_ENV': '"production"',
    //     'global': {}, // bizarre lodash(?) webpack workaround
    //     'global.GENTLY': false // superagent client fix
    // })
]

pageArr.forEach(page => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}/page.html`,
        template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
        chunks: [ page, 'commons/commons', 'manifest'],
        // hash: true,
        // xhtml: true,
        chunksSortMode: 'dependency',

    })
    configPlugins.push(htmlPlugin)
})


module.exports = configPlugins
// console.log(configPlugins)