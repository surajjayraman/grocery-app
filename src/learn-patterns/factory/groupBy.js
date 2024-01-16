require("core-js/actual/array/group-by");

const people = [
    { name: "kyle", age: 28 },
    { name: "Sally", age: 45 },
    { name: "John", age: 49 },
    { name: "Sally", age: 28 }
]

// group users
const groupedNames = people.groupBy(person => {
    return person.name
})

console.log(groupedNames);

// sort users
const users = [
    { name: "kyle", age: 28 },
    { name: "Sally", age: 45 },
    { name: "John", age: 49 },
    { name: "Sally", age: 28 }
]
function sortByName(users) {
    return users.sort((userA, userB) => {
        if (userA.name.toLowerCase() < userB.name.toLowerCase()) return -1
        if (userA.name.toLowerCase() > userB.name.toLowerCase()) return 1
        return 0
    })
}

const sortedUsers = sortByName(users)
console.log(sortedUsers)


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);