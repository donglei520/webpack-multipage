const path = require('path')
const dirVars = require('./base/dir-vars.config')
const pageArr = require('./base/page-entries.config')
const configEntry = {}


pageArr.forEach(page => {
    configEntry[page] = path.resolve(dirVars.pagesDir, page + '/page.js')
})

module.exports = configEntry
console.log(configEntry,dirVars.pagesDir)