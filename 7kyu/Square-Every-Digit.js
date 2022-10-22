function squareDigits(num){
    let numString = String(num)
    let chars = numString.length-1
    let square = 0
    let saveSquare = 0
    let finalNum = ''
    for(i=0; i<=chars; i++){
      square = Number(numString.charAt(i))
      square *= square
      saveSquare = String(square)
      finalNum += saveSquare
    }
    return Number(finalNum)
  }