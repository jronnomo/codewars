// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    str = str.toLowerCase()
    const x = Array.from(str).reduce((acc, char) => {
      if(char == 'x'){
        acc++
      }
      return acc
    }, 0)
    const o = Array.from(str).reduce((acc, char) => {
      if(char == 'o'){
        acc++
      }
      return acc
    }, 0)
    return x==o ? true : false
  }

//clever use of split here! you bafoon!
// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }