var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (const value of Object.entries(clothingItem)) {   
    for (let k = 0; k < value.length; k++) {
        console.log(value[k]); 
    }
}


for (const [key, val] of Object.entries(clothingItem)) {
    console.log(`${key}: ${val}`);
}