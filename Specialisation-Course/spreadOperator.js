const Itenary = ['Japan', 'Oman', 'China', 'Vietnam', 'Dubai'];


function showItenary(...places) {
    console.log("--- My Travel Itinerary ---");
    
  
    places.forEach((place, index) => {
        console.log(`${index + 1}. Destination: ${place}`);
    });
}


showItenary(...Itenary);