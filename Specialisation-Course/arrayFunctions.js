var train1=["wheat","barley","haybale","milk"]
train1[4]="mango"
train1.push("apple","banana")

for (let i=0;i<train1.length;i++){
    console.log(train1[i]);
}
console.log("\n")

train1.pop()
console.log("After POP \n ")
for (let i=0;i<train1.length;i++){
    console.log(train1[i]);
}
