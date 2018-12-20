const commonPlugins = require('./inherit/plugins.config.js')
const webpack = require('webpack')
const uglifyjs = require('uglifyjs-webpack-plugin')

const uglifyjsPlugin = new uglifyjs()





module.exports = [
        uglifyjsPlugin,
    ...commonPlugins
]



