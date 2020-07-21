
const path =require('path');
moudule.exports={
entry:{
  entry:'./src/app.js'
},
output:{
  filename:'app.js',
  path:path.resolve(__dirname,'dist')

},
module:{
},
plugins:[

],
devServer:{
contentBase:'./',
host:'localhost',
port:1717,
compress:true,

}

}
