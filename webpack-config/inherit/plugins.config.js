const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dirVars = require('../base/dir-vars.config.js')
const pageArr = require('../base/page-entries.config.js')



const configPlugins = [

    new webpack.optimize.SplitChunksPlugin({
        cacheGroups: {
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
            },
            //打包重复出现的代码  一个模块只要被引用两次及以上就会被打包进vendor  页面引用此公共模块库 （有缓存）
            commons: {
                chunks: 'initial',
                minChunks: 2,//模块最小被引用数  如果是1则全部js模块都会被打包进vendor 所以最小设为2（被引用最少2次）
                maxInitialRequests: 5, // The default limit is too small to showcase the effect
                minSize: 0, // This is example is too small to create commons chunks
                name: 'commons',
            },
        }
    })
]

pageArr.forEach(page => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}/page.html`,
        template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
        chunks: [page],
        hash: true,
        xhtml: true,
    })
    configPlugins.push(htmlPlugin)
})


module.exports = configPlugins
// console.log(configPlugins)