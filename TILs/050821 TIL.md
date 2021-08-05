## What I learned Today

## Destructing assignment

let user = { name: 'Mike', age: 30}
let { name, age } = user
>>> the same as these
      let name = user.name
      let age = user.age

console.log(name) // 'Mike'
console.log(age) // 30

### Object destructing

let user = { name: 'Mike', age: 30 }
let { name: userName, age: userAge } = user

console.log(userName) // 'Mike'
console.log(userAge) // 30

