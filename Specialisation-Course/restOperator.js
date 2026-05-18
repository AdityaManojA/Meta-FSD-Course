function trackScores(teamName, ...scores) {
  console.log(`Team: ${teamName}`);
  console.log(`Scores:`, scores);
}

trackScores('madrid','2-0','1-1')


  let obj = {
        key: 1,
        value: 4
    };

    let output = { ...obj };
    output.value -= obj.key;

    console.log(output.value);


    
    function count(...basket) {
        console.log(basket.length)
    }

    count(10, 9, 8, 7, 6);