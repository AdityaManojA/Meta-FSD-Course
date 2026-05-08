var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}

for (let i=0;i<arrOfKeys.length;i++){
    console.log(drone[arrOfKeys[i]]);
}