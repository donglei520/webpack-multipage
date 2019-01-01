const path = require('path')
const dirVars = require('./base/dir-vars.config')
const pageArr = require('./base/page-entries.config')
const configEntry = {
    // 'commons/commons/babel': '@babel/polyfill'
}



pageArr.forEach(page => {
    // configEntry[page] = ['@babel/polyfill',path.resolve(dirVars.pagesDir, page , './page.js')]
    configEntry[page] = path.resolve(dirVars.pagesDir, page , './page.js')
    //resolve  相当于cd到每个参数路径走一遍 输出最后到达的位置绝对路径
    // F:\\wamp\\wampProjects\\webpack-multipage\\src\\pages\\,   user\\edit-password\\,   page.js
})

module.exports = configEntry
// console.log(configEntry,dirVars.pagesDir)