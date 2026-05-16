const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
console.log(droneKeys)

function appendkey(key){
    result.push(key,drone[key])
}
droneKeys.forEach(appendkey)

console.log(result)