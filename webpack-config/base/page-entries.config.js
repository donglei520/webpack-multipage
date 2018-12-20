const glob = require('glob')
const dirVars = require('./dir-vars.config.js')

const options = {
    cwd: dirVars.pagesDir,//在pages目录里遍历寻找
    sync: true//同步
}
const globInstance = new glob.Glob('!(_)*/!(_)*', options)
module.exports = globInstance.found
// console.log(globInstance)