const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
myEmitter.on('event',function(a,b){
	console.log(a,b,this,this === myEmitter);
})
myEmitter.emit('event','122','345');

myEmitter.on('event1',(a, b) => {
console.log(a,b,this)
})

myEmitter.emit('event1','a','b');



myEmitter.on('e2', (a,b)=> {
setImmediate(()=>{
console.log('异步进行');
})
console.log('111111111');
})

myEmitter.emit('e2','a','b');


//事件只处理一次
myEmitter.once('e3',(a)=>{
console.log(a)
})
myEmitter.emit('e3','1');
myEmitter.emit('e3','2');



let callback = (a,b)=>{
	console.log(a+b)
}
myEmitter.on('e4', callback)

myEmitter.emit('e4',12,3);
myEmitter.removeListener('e4',callback);
myEmitter.emit('e4',1234, 3444);

myEmitter.removeAllListeners();
myEmitter.emit('event1','移除之后');
