const num=[1,2,3,4,5,6,7,8,9,10];

const numSorted=num.map(value=>value*2)
console.log(numSorted)


const users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'Moderator' }
];

const newUsers=users.map(user=>user.name)
console.log(newUsers)

const newUsers1=users.map(user=>user.role==="Admin")
console.log(newUsers1)

const Admins=users.filter(user=>user.role==='Admin')
console.log(Admins)