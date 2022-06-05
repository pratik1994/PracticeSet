function anagram(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    let obj={};
    
    for(char in str1){
        obj[char] = (obj[char]||0)+1
    }
    console.log(obj)
    for (char of str2){
        if(!obj[char]){
            return false
        }else{
            obj[char]= obj[char] - 1; 
        }
    }
    return true
}

//this is to check whether two string are anagram of each other or not
