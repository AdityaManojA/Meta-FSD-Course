const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit,index,arr) => {
    console.log(`index ${index}: ${fruit},[${arr}]`)
});


fruits.forEach(((a,b,c)=>console.log(`index ${a}: ${b},[${c}]`)))
const nums=[1,2,3,4,5];


nums.forEach(num=>console.log(num*2))

nums.forEach((number2)=>{
    console.log(`${number2*2}`);
});

const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach((value2,index)=>console.log(`${value2}`))