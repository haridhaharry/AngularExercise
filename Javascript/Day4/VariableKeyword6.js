

function demovariable(){
    const a=30
    console.log("within the outer range a is:",a)
    {
        let a=50
        console.log("within the block range a is:",a)
        {a=100}
    }
    console.log("again within the outer range a is:",a)

}
demovariable()
