const path = require('path')
const dirVars = require('./base/dir-vars.config')

module.exports = {
    //配置模块别名  使用方便 一般都要配置  这里的别名是require('别名')或者('别名/config/xxx')用的  不用写一大串路径
    //而引入dir-vars.config.js用法：要么xxx:dirVars.configDir  要么拼接用resolve.(dirVars.configDir, 'xxx')
    //require(dirVars.configDir + 'xxx')报错不好使

    alias: {
        /* 各个目录 */
        // dirVarss: path.resolve(dirVars.rootDir, './webpack-config/base/dir-vars.config.js'),
        iconfontDir: path.resolve(dirVars.publicDir, './iconfont/'),
        configDir: dirVars.configDir,
        vendorDir: dirVars.vendorDir,
        /* libs */
        withoutJqueryModule: path.resolve(dirVars.libsDir, 'without-jquery.module'),

        /* components */

        /* layout */
        layout: path.resolve(dirVars.layoutDir, 'layout/html' ),
        'layout-without-nav': path.resolve(dirVars.layoutDir, 'layout-without-nav/html'),

        /* logic 业务逻辑代码  入口js文件*/
        cm: path.resolve(dirVars.logicDir, 'common.module'),
        cp: path.resolve(dirVars.logicDir, 'common.page'),

        /* config */
        configModule: path.resolve(dirVars.configDir, 'common.config.js'),
    },
    extensions: ['.js', '.css', '.less'],
}

