function countUniqueValues (arr){
    var pt1 = 0;
    var pt2= pt1+1;
    var count =0;
   
    while(pt2<arr.length){
        console.log(pt2)
        if(arr[pt1] !== arr[pt2]){
           ++count;
           ++pt1;
        }
    }
    return count;
   }

//this is to count unique values in array