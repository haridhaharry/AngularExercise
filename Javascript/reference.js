a=[45,98,9897]

console.log(a)

b=a // pass y reference 
console.log(b)
b[4]=900
console.log(a)

c=[]                   // works internally 
for(let x in a)
  c[x]=a[x]
 console.log(c)
 c[7]=900
 console.log(a)
 console.log(c)

