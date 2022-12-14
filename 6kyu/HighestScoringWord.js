// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let tmpCount = 0
    let bigWord = ''
    x = x.split(' ')
    let phrase = x.map(word => {
      let count = 0
      for(let letter = 0; letter < word.length; letter++){
        count += (word.charCodeAt(letter) - 96)
        }
      return count
    })
    return x[phrase.indexOf(Math.max(...phrase))]
  }


// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }