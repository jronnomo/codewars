function validParentheses(parens) {
    const parensArray = Array.from(parens.split(''))
    if(parens=="" || parens.length == 2){
      return true
    }
    if(parensArray.length>2 && parens.length<=100 && parens.charAt(0)=="(" && parens.charAt(parens.length-1)==")"){
      return countParens(parensArray)
      } 
      else{
        return false;
      }
  }
  function countParens(anArray){
      let numLefts = 0
      let numRights = 0
      let isValid = false
        for(i=0; i<anArray.length; i++){
          if (numRights > numLefts){
            break;
          }
          if(anArray[i]=="("){
            numLefts += 1
            }
          else{
            numRights += 1
          }
        }
        return numLefts===numRights
  }