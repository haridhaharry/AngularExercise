person = {
    sno: 1,
    name: "peter",
    city: "chennai"

}
person.skill=["Java","css","Javascript"]
list = [9,324,42]
list["sno"]=35
list["name"]="hari"
for(let x in person)
 console.log(x, "=>",person[x])


console.log(Object.keys(person))
console.log(Object.keys(list))
