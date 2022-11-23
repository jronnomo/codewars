// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let numRev = num.toString().split('').reverse()
    let newArr = numRev.map((item, index) => {
      if(item !== '0')
          if(index < numRev.length-1){
           return `${item * Math.pow(10, index)} + `
           }
          else{
            return `${item * Math.pow(10, index)}`
          }
    })
    return newArr.join('').split(' ').reverse().map((item, index) => {
      if(item == "+"){
        return " + "
      }
      return item
    }).join('')
   }


// WAY MORE READABLE AND SIMPLE SOLUTION. KEY DIFFERENCES ARE FILTERING AND JOINING USING +
//    const expandedForm = n => n.toString()
//                               .split('')
//                               .reverse()
//                               .map((item, index) => item * Math.pow(10, index))
//                               .filter(item => item !== '0')
//                               .reverse()
//                               .join(' + ')

