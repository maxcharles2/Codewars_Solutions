//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {
    //prep
    //parameter (array)
    //return (number data type)
    //example [2, 1, 10]  -->  9
    //pseudocode
      //insert array, change into descending order, subtract differences, sum differences,
      //return sum of differences in array
    
    let descendingOrder = arr.sort((a, b) => {
        return b - a;
    })
    
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++){
        sum += arr[i] - arr[i + 1];
    }
    
    return sum;
}