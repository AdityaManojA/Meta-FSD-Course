function letterFinder(arr,word){
    for(let i=0;i<arr.length;i++){
        if (arr[i]==word){
            console.log('Found word at index: ',i);
        }
    }
}

diet=['chicken','rice','fish','veggies','salads']
letterFinder(diet,"fish");