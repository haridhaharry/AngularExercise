function Sample(){
    //console.log(this)  //this refers to the object
    //with which the current function is called 
    console.log(this.Sample.store)
}


a=30
alert()
Sample.store = {sno:1,name:"ratan"}
Sample()  //window.Sample in case of browser
          //global.sample in case of node js
