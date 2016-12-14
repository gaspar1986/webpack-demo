var htmlWebpackPlugin = require('html-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },

    module:{
    	loaders:[
    		{
    			test:/\.js$/,
    			loader:'babel',
    			exclude:/node_modules/
    		},
            {
                test:/\.css$/,
                loader:'style!css',
                include:path.resolve(__dirname,'src')
            }
            ,
            {
                test:/\.less$/,
                loader:'style!css!less',
                include:path.resolve(__dirname,'src')
            }
    	]
    },

    plugins:[
     new htmlWebpackPlugin({
     	title:'搭建前端工作流',
     	template:'./src/index.html'
     }) ,
     new uglifyPlugin({
        compress:false;
     })
    ]
}