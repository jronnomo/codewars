//give the max and min of the numbers string. numbers is formatted like '1, 2, 45, 765, -21'
//learned Spread (...) syntax! Allows a list parameter to be iterated through and used like a single object. Here it allows Math.max/min to iterate through the list
//and choose the max and min. Without the ... it returns NaN as it can't take on an Array object

function highAndLow(numbers){
    numbers = numbers.split(' ')
    let max = Math.max(...numbers)
    let min = Math.min(...numbers)
    return `${max} ${min}`
  }