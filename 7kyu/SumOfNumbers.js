//I've seen we're able to reduce this O(N) to O(1) using Math.min/Math.max
//This is my original solution

function getSum(a,b){
    let result = 0
     if(a>b){
       while(a>=b){
         result += b
         b++
       }
     }
    else if(a<b){
      while(a<=b){
        result += a
        a++
      }
    }
    else{
      result = a
    }
    return result
  }