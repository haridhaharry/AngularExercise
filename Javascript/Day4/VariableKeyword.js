//global, function scope and local scope

a=60

function printer(){
    c=30
    console.log("a:",a-c)
    b=10
}

printer()
a=80
console.log("global a::",a+b)
