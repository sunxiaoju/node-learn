var http = require('http');
var options = {
host: 'localhost',
port: '8080',
path: '/webServer.html'
};
var callback = response => {

   var body = '';
   response.on('data', data=> {
       body += data;
   });
   response.on('end', ()=>{
	console.log(body);
   })

}
var req = http.request(options,callback);
req.end();
