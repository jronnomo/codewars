// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    let valueLength
    A = A.sort((first, next) => first < next ? -1 : 1)
    for(let value = 0; value<A.length; value++){
      valueLength = A.lastIndexOf(A[value]) - A.indexOf(A[value]) + 1
      if(valueLength % 2 !== 0){
        return A[value]
      }
      else{
        A.splice(A.indexOf(A[value]), valueLength)
        value = 0
      }
    }
    return A[0]
  }

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);