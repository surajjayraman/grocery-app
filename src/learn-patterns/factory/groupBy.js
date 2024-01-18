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

// regular array sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

// use of Map
const userMap = new Map([
    [1, { name: 'kyle' }],
    [2, { name: 'Sally' }]
])

console.log(userMap)
userMap.set(3, { name: 'John' })
console.log(userMap)

// functions are just variables

function test() {

}
const test2 = test
console.log(test2 === test)
console.log(test)
console.dir(test)

// Big O

function sum_char_codes(n){
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

console.log(sum_char_codes('suraj'))