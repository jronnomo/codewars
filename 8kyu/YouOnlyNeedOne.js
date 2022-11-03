// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
    if(a.includes(x)){
      return true
    }
    else{
      return false
    }
  }


//Got the simple answer but why doesn't this work?


//function check(a, x) {
//   console.log(`array is ${a}`)
//   console.log(`search for ${x}`)
//   const theValue = a.filter(item => item==x)
//   if(theValue[0] !== x){
//      console.log(`it has it at ${theValue[0]}`)
//      console.log(`${theValue}`)
//      return true
//   }
//   else{
//     console.log(`it doesn't have ${typeof(theValue[0])} ${theValue[0]}`)
//     console.log(`${typeof(x)} ${x}`)
//     return false
//   }