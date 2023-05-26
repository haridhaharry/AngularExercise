person={sno:1,name:"hari",city:"chennai"}

candidate = person  // pass by reference 

candidate.skills=["java","c#","php"]

member={...person,city:"mumbai",
interests:["singing","gaming","harry"]}

console.log(person)
console.log(candidate)
