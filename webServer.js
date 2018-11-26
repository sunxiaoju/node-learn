var http = require('http');
var fs = require('fs');
var url = require('url');
// 创建服务器
http.createServer((request,response)=>{
	//解析请求，包括文件名
	var pathname = url.parse(request.url).pathname;
	//输出请求的文件名
	console.log('request for ' + pathname + 'received');
	fs.readFile(pathname.substr(1), (err, data) => {
		if(err){
			console.log(err);
			response.writeHead(404, {'Content-Type': 'text/html;charset=UTF				8'})
		}else{
			response.writeHead(200, {'Content-Type': 'text/html;charset=UTF				8'})
			response.write(data.toString());
		}
		response.end()
	})
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');


