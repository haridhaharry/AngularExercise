

function demovariable(){
    let a=30
    console.log("within the outer range a is:",a)
    {
        //var a=50   // error local scope is already declared 
        console.log("within the block range a is:",a)
        //{a=100}
    }
    console.log("again within the outer range a is:",a)

}
demovariable()
