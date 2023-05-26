function libfun(fun){

        var dataitems = [ "python program","java program","c# program"]
    
        fun(dataitems[Math.round(Math.random()*2)])
    
    }
    
    
     
    
    class dataholder {
    
        constructor (data) {
    
            this.data=data
    
        }
    
    
     
    
        show(){
    
            console.log("data-->",this.data)
    
        }
    
    
     
    
        changedata(){
    
             /*libfun(function(value){
    
                this.data=value
    
             }.bind(this))*/
    
       
    
             libfun((value)=>{
    
                this.data=value
    
             })
    
        }
    
    }
    
    obj=new dataholder("javascript program")
    
    obj.show()
    
    obj.changedata()
    
    obj.show()