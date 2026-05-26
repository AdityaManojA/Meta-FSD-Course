var x = 23.2;
console.log(typeof(x))

var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
}

console.log(result);

try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}
