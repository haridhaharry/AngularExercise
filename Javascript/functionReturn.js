function a(){}

function b(){return "hello"}

c=function(){return "hi"}   // here varibale name becomes a function 
console.log(a())
console.log(b())
console.log(c())

b.store={x:987,y:978,z:979}

console.log(typeof(a))
console.log(typeof(a), "harry")
console.log(b)
console.log(b.store)
console.log(a)

// note: functions return undefined if it doesnot encounter 
//return statement

