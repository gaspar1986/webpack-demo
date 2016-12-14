var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    devServer:{
    	contentBase:'build',
    	inline:true,
    	port:8080,
    	status:{
    		colors:true
    	}
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
     }) 
    ]
}