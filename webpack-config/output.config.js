const dirVars = require('./base/dir-vars.config.js')

module.exports = {
    path: dirVars.buildDir,
    filename: '[name]/entry.[chunkhash].js',
    chunkFilename: '[id].[chunkhash].bund.js',
    publicPath: '/build/'//这个配置是为了将打包后的整个build文件夹放入nodelesson服务器 能走通路径
}