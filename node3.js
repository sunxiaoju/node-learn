var fs = require('fs');
fs.readFile('inputs.txt', (err,data)=>{
	if(err) return console.error(err);
	console.log(data.toString());
})

console.log('进程结束');

