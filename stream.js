
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF-8');

readerStream.on('data', (d)=>{
data += d;
})

readerStream.on('end',(d)=>{
console.log(d);
console.log(data);
})

readerStream.on('error', (err)=>{
console.log(err.stack);
})

console.log('--------end');



// 写入数据流
var data1 = '明天是星期六';

var ws = fs.createWriteStream('output.txt');

//ws.write(data1,'UTF-8');
//ws.end();

ws.on('finish', ()=>{
console.log('写入完成');
})

ws.on('error',()=>{
console.log(err.stack);
})
console.log('writw-----end');

//将input读出的内容写入output

readerStream.pipe(ws);
console.log('input.txt 写入output.txt');



var zlib = require('zlib');

readerStream.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成');


setImmediate(()=>{
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('outputzip.txt'));
})

console.log('文件解压完成');


