const users = [
    {id:1, name:'Alice',age:19},
    {id:2, name:'Bob', age:20},
    {id:2, name:'Bob', age:25}
]

const result = [...users, {name:'Kitty', age:20},];
console.log(result);

[1,2,3,4].filter(n => true)
[1,2,3,4].filter(n => false)
[1,2,3,4].filter(n => n!=2)

console.log(result.map(user=>user.name))
console.log(users.map(user=>user.age >= 20))
console.log(users.filter(user=>user.age >= 20).map(user=>user.name))