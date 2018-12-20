const dirVars = require('../base/dir-vars.config.js')


module.exports = [
    // rules: [
        {
            test: /\.ejs$/,
            include: dirVars.srcRootDir,
            loader: 'ejs-loader'
        },
    // ]
        {
            test: /\.js$/,
            include: dirVars.srcRootDir,
            loader: 'babel-loader',
            
        }
    ]