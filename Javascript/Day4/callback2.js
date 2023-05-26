function sendmewhatIwant(arr,fun){
    let items=["nothing","A","so","one","four","trust","simple","poverty","activity"]

    for(let x of arr){
        var len = [arr[x]].length
        if(len>=0 && len <=4)
        fun(items[arr[x]])
        else
        fun("invalid")
    
    }
}

sendmewhatIwant([3,5,7],function(data){
    console.log("Got ----",data)
})