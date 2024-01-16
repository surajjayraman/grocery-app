require("core-js/actual/array/group-by");

const people = [
    { name: "kyle", age: 28 },
    { name: "Sally", age: 45 },
    { name: "John", age: 49 },
    { name: "Sally", age: 28 }
]

const groupedNames = people.groupBy(person => {
    return person.name
})

console.log(groupedNames);