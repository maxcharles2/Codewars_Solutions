//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
    //PREP, edge case, base case, complexity
    //parameter (what's given to you): arr (array of numbers)
    //return (what data type is being returned): returning a number
    //example [1, -4, 7, 12] => 1 + 7 + 12 = 20
    //edge case (what happens if you're given an incorrect data type)
    //base case (what is the minimum thing for the code to run): if no positive numbers return 0
    //pseudocode: declare a variable called sum = 0
      // (loop through the array)
      // (if the index > 0, add the index to the sum)
      // return sum 
    //time complexity: O(n)
    //space complexity: O(1)
    if(arr.length === 0) return 0;
    
    let sum = 0;
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        sum += arr[i];
        console.log("sum before getting added", sum, "arr before loop", arr)
      }
    }
    return sum;
  }