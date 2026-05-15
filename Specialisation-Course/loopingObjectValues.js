var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const value of Object.values(clothingItem) ) {
    console.log(value)
}