// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a,b,c)
{
  if(a == 0 || b == 0 || c == 0){
    return false
  }
  else{
    let arr = [a, b, c]
    arr = arr.sort((firstItem, lastItem) => firstItem > lastItem ? -1 : 1)
    console.log(arr)
    return arr[0]<arr[1]+arr[2]     
  }
}

// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }
