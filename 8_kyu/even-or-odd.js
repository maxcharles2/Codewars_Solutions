//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function evenOrOdd(number) {
    //prep
    //parameter (number)
    //return (string data type)
    //example if 2 return even if 7 return odd
    //pseudocode
      //enter in a number
      //see if it's divisble by an even or odd number (least common denominator for each)
      //return a string saying it's even or odd
    
    if(number % 2 === 0){
        return 'Even';
    } else if (number % 1 === 0) {
        return 'Odd';
    }
  }