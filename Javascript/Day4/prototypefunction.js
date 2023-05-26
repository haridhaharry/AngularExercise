function student(sno,name){
    this.sno=sno
    this.name=name
    console.log(this)
}

//students(1,harry) //window scope or global scope

new student(1,"harry")  // separate scope for student is created 

// student will behave like a class and student() willbehace
//like constructor