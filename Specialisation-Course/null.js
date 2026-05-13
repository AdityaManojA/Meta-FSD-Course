var result=null;
console.log(result)

var x;
console.log(x===null);
console.log(x===undefined);

throw new Error();
console.log("hello")


  try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

var str = "Hello";
console.log(str.match("jello"))


try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}

