person={sno:1,name:"harry",city:"chennai"}

console.log(person.name)

const{sno,name,city}=person

//destructuring with alias name

const{sno:id,name:fname,city:place}=person
console.log(name)
console.log(place)

