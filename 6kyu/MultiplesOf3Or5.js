function solution(num){
    let sumCountThrees = []
    let sumCountFives = []
    let threeCounter = 3
    let fiveCounter = 5
    while(num>threeCounter){
      sumCountThrees.push(threeCounter)
      threeCounter += 3
      }
    while(num>fiveCounter){
      if(fiveCounter%3==false){
        fiveCounter += 5
      }
      else{
      sumCountFives.push(fiveCounter)
      fiveCounter += 5
      }
    }
    let totalSum = sumCountThrees.concat(sumCountFives)
    totalSum = totalSum.reduce((partialSum, a) => partialSum + a, 0)
    return totalSum
}


//Can been simplified to something like below

// function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }