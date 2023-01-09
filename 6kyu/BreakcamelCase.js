// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    string = string.split('')
    for(i=0; i<string.length; i++){
      if(string[i] === string[i].toUpperCase()){
        string.splice(i, 0, ' ')
        i++
      }
    }
    return string.join('')
  }


//   function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }