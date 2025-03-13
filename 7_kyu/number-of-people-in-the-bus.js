// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function(busStops){
    //prep, edge case, base case, complexity
    //parameter (data type: array of array numbers)
    //return number
    //example ([[10,0],[3,5],[5,8]] => 5)
    //pseudocode (turn array into number)
      //reduce array or combine indexes of given elements of nested arrays
    

      let inflow = 0; //O(1)
      let outflow = 0; //O(1)
      for (let i = 0; i < busStops.length; i++){ //O(n) for the for loop overall
        inflow += busStops[i][0];  //O(1)
        outflow += busStops[i][1]; //O(1)
    }
    return inflow - outflow; //O(1)
    //O(3 + n) => O(n) time complexity, space complexity O(n)

  //   Alt solution #1
  //   return busStops.reduce((a, [i, o]) => a + i - o, 0);
  //   What is the time complexity of what's above?
    
  //   Alt solution #2  
  //   busStops = busStops.flat(1) 
  //   for(let i = 1; i < busStops.length; i+=2){
  //     busStops[i] = -busStops[i];
  //   }
  //   return busStops.reduce((a, b) => a + b);

    // Good Luck!
}