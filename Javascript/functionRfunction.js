function add(a,b){return a+b}
function sub(a,b){return a-b}
console.log(sample()(20,10))
function sample(option)
{
    if (option==1)
     return add
    else
     return sub
}

//console.log(sample(1)(10,10))

/*function sample(option){
    console.log("sample logic")
    if (option==1)
        return function(a,b) {
        return a+b;
        }
    else 
       return function(a,b){
       return a-b;
    }
} // function return function 

//console.log(sample())
console.log(sample()(15,12))
//console.log(sample(1)(15,12))
*/
