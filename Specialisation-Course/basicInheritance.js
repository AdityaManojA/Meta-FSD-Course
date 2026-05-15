var bird={
    hasWings: true,
    canFly:true,
    hasFeathers:true
}

var eagle=Object.create(bird);
console.log("eagle:",eagle)
console.log("Eagle has wings:",eagle.hasWings)

var penguin=Object.create(bird);
console.log("Penguin has wings:",penguin.hasWings)
penguin.hasWings=false;
console.log("Penguin has wings:",penguin.hasWings)