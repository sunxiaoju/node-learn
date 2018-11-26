var express = require('express');
var app = express();
app.get('/',(request, response)=> {
	response.send('hello world');
})

var server = app.listen(8081, ()=>{
var host = server.address().address;
var port = server.address().port;
console.log('访问地址：%s:%s',host,port);
})
