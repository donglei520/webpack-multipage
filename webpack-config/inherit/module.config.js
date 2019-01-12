const dirVars = require('../base/dir-vars.config.js')


module.exports = {
    rules: [
        
        // rules: [
            {
                test: /\.ejs$/,
                include: dirVars.srcRootDir,
                loader: 'ejs-loader',
                
            },
        // ]
            // {
            //     test: /\.js$/,
            //     // include: dirVars.srcRootDir,
            //     exclude: /(node_modules)/,
            //     loader: 'babel-loader',
                
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }, 
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=1700&name=[name].[ext]']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(woff|wff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },



             // {//代码检测
            //     test: /\.js$/,
            //     enforce: 'pre',
            //     loader: 'eslint-loader',
            //     include: dirVars.srcRootDir,
            //     exclude: /bootstrap/,
            //     options: {
            //       formatter: eslintFormatter,
            //       fix: true,
            //     },
            //   },
    ]
}
    
    