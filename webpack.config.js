const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode:'development',
    entry:'./src/js/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'main.js',
    },
    module:{
        rules:[
            {
            test:/\.css$/,
            use:['style-loader','css-loader'],
            },
            {
                test:/\.(jpg|jpeg|svg|png|bmg|gif|img)$/,
                use:'file-loader',
            }
        ]
    },
   plugins:[
       new htmlWebpackPlugin({
           template:path.join(__dirname,'./src/index.html'),
           filename:'index.html'
       })
   ]
}