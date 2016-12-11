var htmlWebpackPlugin = require('html-webpack-plugin');
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