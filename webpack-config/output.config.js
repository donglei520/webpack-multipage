const dirVars = require('./base/dir-vars.config.js')
const path = require('path')

module.exports = {
    // path: dirVars.buildDir,
    path: path.resolve(dirVars.buildDir, '../../nodeLesson/five-littleserver/page/build'),
    filename: '[name]/entry.[chunkhash].js',
    // chunkFilename: '[id].[chunkhash].bund.js',
    publicPath: '/build/'//这个配置是为了将打包后的整个build文件夹放入nodelesson服务器 能走通路径
}