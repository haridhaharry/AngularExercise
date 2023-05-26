// Javascript allows creating function within function
// The function which is defined with in a function 
// is generally meant to be accessed only within the outer function 
// not globally
// if fun a needs function b and it does want anything outside
// the function to use it we can declare b as in inner function 

function outer(b){
   state =1
   //b="harry"
   function inner (){
    console.log(state," is outer state")
    console.log(b,"inner function")
    b="harry"
    innerstate=1
    console.log(innerstate," is inner state") 
    state++;
    innerstate++;
   }
   console.log(state,"accessed within outer")
   //console.log(b,"inner function") ---- working
   //inner()                          ----- working
   //console.log(b,"inner function") ---- working
   //console.log(innerstate," accessed within outer")   // not possible
   return inner
}
result=outer("king")
console.log(result)
result()
result()
result()
//console.log("hello")