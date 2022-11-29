// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    let strIndex = 0
    let letter = 97
    string = string.toLowerCase()
    while(letter<123 && strIndex<string.length){
      if(!(letter === string.charCodeAt(strIndex))){
        strIndex++
        if(strIndex===string.length){
          return false
        }
      }
      else{
        letter++
        strIndex = 0
        if(letter>=123){
          return true
        }
      }
    }    
  }

//   function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
//   }