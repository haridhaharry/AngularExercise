/*c=[9079,5,769]
a=[87,80,442,24,245,646,...c]
console.log(a)*/
c=[9079,5,769]
a=[87,80,442,24,245,646,[...c]]
console.log(a)
b=[...a[5]] // b=[...a]
a[1]=777  // only a will impact , no impact on b
c[3]=9090
b[6][2]=700
console.log(a)
console.log(b)
/*a=[87,80,442,24,245,646,c]
b=a
console.log(a)
console.log(b)*/

/*
b=[...a]    // copies the value of the array , not refernce (spread operator)
b[5]=[...a[6]] 
// es2015 and later it was introduced 

c[3]=300         // this changes impact in 4 line but not in 5 line 
console.log(a)
console.log(b)
b[8]=9090
console.log(a)
console.log(b)*/
