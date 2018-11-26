
function Hello () {
var name;
this.setName = tName=>{
name = tName;
}
this.sayHello = ()=>{
console.log('hello' + name);
}
}

module.exports = Hello;
