function ar(str){
    var obj={}
    for (let char in str){
        obj[char]=(obj[char]|| 0)+1
    }
    console.log(obj);
}

//this is get an object representing frequency of each character in string 