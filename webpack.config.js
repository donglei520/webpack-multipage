require('./npm-script/before-build.script')

module.exports = {
    target: 'node',
    mode: 'production',
    
    entry: require('./webpack-config/entry.config.js'),

    output: require('./webpack-config/output.config.js'),

    plugins: require('./webpack-config/plugins.prod.config.js'),

    resolve: require('./webpack-config/resolve.config'),

    module: require('./webpack-config/module.prod.config'),
}