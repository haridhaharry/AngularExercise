a=[790,87,6,54]

a[8]=87                   //    for this for loop this line will create unnecessary loop (har)
//not useful if you have properties[string index or object] to be 
//iterated
//not good if elements are placed in random indexes
/*for(let x=0;x<a.length;x++)           // use if array is continuously placing (har)
 console.log(a[x])*/

/*for(let x in a)
  console.log(x)*/
a[-23]="hari"
b={sno:1,name:"harry"}
a[JSON.stringify(b)]="java"
/*for(let x in a)
  console.log(x,a[x])*/   // is will give the index 

  for(let x of a)
  console.log(x)


