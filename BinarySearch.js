function binarySearch(arr, n){
    var p= 0
    var q= arr.length - 1;
    var mid = Math.floor((p + q)/2);
    while(arr[mid] !== n && p<=q){
        if(arr[mid] > n ){
          q= mid -1;
        }else{
          p= mid +1;
        }
        mid =  Math.floor((p + q)/2);
      }
      if(arr[mid] === n){
        return mid;
      }else{
        return -1
      }      
  }