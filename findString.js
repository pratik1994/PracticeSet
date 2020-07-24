function findString(longStr, pattern){
    var count = 0
    for(let i=0; i< longStr.length; i++){
        for (let j=0; j<pattern.length; j++){
           if(pattern[j] !== longStr[i+j]) break;
           if(j=== pattern.length-1) count++;
        }
    }
    return count
}