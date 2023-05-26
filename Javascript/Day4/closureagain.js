function outer(){
    a=30

    function inner(){
        //a=50
        console.log("outer a value in inner",a)
        a++
    }
    a=a+1
    console.log("outer next",a)
    return inner
}

fun=outer()
fun2=outer()
fun() //30
fun() //31
outer()
