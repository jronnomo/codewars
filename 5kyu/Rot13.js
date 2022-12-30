// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let messageArray = message.split('')
    for(i=0; i<message.length; i++){
      if(message.charCodeAt(i) <= 122 && message.charCodeAt(i) >= 97){
        if(message.charCodeAt(i)+13 > 122){
          messageArray[i] = String.fromCharCode(message.charCodeAt(i)-13)
        }
        else{
          messageArray[i] = String.fromCharCode(message.charCodeAt(i)+13)
        }
      }
      if(message.charCodeAt(i) <= 90 && message.charCodeAt(i) >= 65){
        if(message.charCodeAt(i)+13 > 90){
          messageArray[i] = String.fromCharCode(message.charCodeAt(i)-13)
        }
        else{
          messageArray[i] = String.fromCharCode(message.charCodeAt(i)+13)
        }
      }
    }
    return messageArray.join('')
  }
  
// var codeA = 'A'.charCodeAt(0),
//     codeZ = 'Z'.charCodeAt(0),
//     codea = 'a'.charCodeAt(0),
//     codez = 'z'.charCodeAt(0);
// function rot13(message){
//   return message.split('').map(function(char) { 
//     var code = char.charCodeAt(0);
//     if(codeA <= code && code <= codeZ){
//       return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
//     } else if(codea <= code && code <= codez){
//       return String.fromCharCode(((code - codea) + 13) % 26 + codea);
//     }
//     return char;
//   }).join('');
// }