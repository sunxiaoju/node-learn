
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer((req, res) => {
	res.writeHead(200, {'content-Type': 'text/plain;charset=UTF8'});
	var params = url.parse(req.url, true).query;
	console.log(params);
	res.write('网站名：' + params.name + '\n');
	res.write('url:' + params.url + '\n');
	res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);





