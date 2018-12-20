const content = require('./content.ejs')
const layout = require('layout')
const pageTitle = 'this is alert page'

module.exports = layout.init({ pageTitle })
.run(content( { pageTitle}))