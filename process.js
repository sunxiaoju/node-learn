// 当进程退出方法
process.on('exit',code => {

// 以下代码不会执行
setTimeout(()=>{
console.log('该代码不会执行')
},0)
console.log('退出码为:',code)
})

//输出到终端
process.stdout.write('hello world!' + '\n');

//通过参数读取
process.argv.forEach((val, index,arr)=>{
console.log(index + ':' + val);
})

//获取执行路径
console.log(process.execPath);
//平台信息
console.log(process.platform);

// 输入当前目录
console.log('当前目录：'+ process.cwd());
//当前node版本
console.log('当前node版本：' + process.version);
//输出内存使用情况
console.log('内存使用：' + JSON.stringify(process.memoryUsage()));

console.log('程序执行结束')
