var events = require('events');
var eventEmitter = new events.EventEmitter();
 
eventEmitter.on('connection', ()=>{
        console.log('连接成功');
        eventEmitter.emit('received');
})
eventEmitter.on('received',()=>{
	console.log('数据接收成功');
})

eventEmitter.emit('connection');

console.log('程序执行完毕');
