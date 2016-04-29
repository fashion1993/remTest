var webpack = require('webpack')
var path = require('path')
var node_modules_dir = path.join(__dirname,'node_modules')



module.exports = {
 entry:'./entry.js',
 resolve:{
  alias:{
    'react',pathToReact
  }
 },
 output:{
  path:__dirname,
  filename:'bundle.js'
 },
 module:{
  loaders:[{
     test:/\.css$/,
     loader:'style!css'
   },{
     test:/\.jsx?$/,
     loader:'babel'
  },{
     test:/\.scss$/,
     loader:'style!css!sass'
 },{
     test:/\.(png|jpg)$/,
     loader:'url?limit=25000'
  },{
     test:/\.woff$/,
     loader:'url?limit=100000'
 }],
  noParse:[pathToReact]
 },
 plugins:[
  new webpack.BannerPlugin("this file is create by ibcLee")
 ]
}
