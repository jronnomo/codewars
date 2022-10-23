//take 2 inputs and sum them. output the binary of the sum

function addBinary(input1,input2) {
    let sum = input1 + input2
    let binaryString = ''
    while(sum!==1){
      if(sum%2==0){
        sum /= 2
        binaryString += '0'
      }
      else if((sum-1)/2===1){
        sum -= 2
        binaryString += '1'
      }
      else{
        sum = (sum-1)/2
        binaryString += '1'
      }
    }
    binaryString += '1'
     return binaryString.split("").reverse().join("");
  }

  //learned afterwards that a simple "const addBinary = (a, b) => (a + b).toString(2);" works the same