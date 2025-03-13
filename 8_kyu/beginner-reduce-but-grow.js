//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x){
    //prep
    //parameter (x)
    //return (number data type)
    //example [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
    //pseudocode
      //input array
      //take initial accumulating value and multiply it with the next value
      //multiply the current accumulating value until the last index is reached
      //return the result of multiplying (inside reduce method)
      //return final result (inside the function)
    
    let combinedResult = x.reduce((acc, currentValue) => {
      return acc * currentValue;
    })
    return combinedResult;
}