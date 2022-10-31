//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

// function findAverage(array) {
//     let total = 0
//     if(array.length>0){
//       array.forEach(num => total += num)
//       return total/array.length
//     }
//     else{
//        return 0; 
//     }
//   }

function findAverage(array){
    array.length === 0 ? 0 : array.reduce((callBack, initialValue) => callBack + initialValue, 0)/array.length
}