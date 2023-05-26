//global, function scope and local scope
//console.log(a)
var a=60

function printer(){
    var c=30    // function scope
    console.log(a)
    console.log("a:",a-c)
    console.log("c:::",c)
    b=10
    //var a=70
}

printer()
//a=80
//console.log("c:",c)
console.log("global a::",a+b)
