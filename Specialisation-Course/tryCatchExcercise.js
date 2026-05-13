function letterFinder(word, match) {
    try{
    if (typeof(word)!="string"){
        throw new ReferenceError("Not a string")
    }
    else if (word.length<2){
        throw new ReferenceError("Word is smaller than 2 letters")
    }
    else if (typeof(match)!="string"){
        throw new ReferenceError("Not a string")
    }
    else if (match.length!==1){
        throw new ReferenceError("match key is larger than one letter")
    }
    else{
        for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
    }
}
catch(err){
    console.log(err)
}
}

var word1="Hello world"
letterFinder(word1,"w");