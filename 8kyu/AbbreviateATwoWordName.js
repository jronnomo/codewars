// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let lastNameIndex = name.search(' ') + 1
    return `${name.charAt(0).toUpperCase()}.${name.charAt(lastNameIndex).toUpperCase()}`
  }