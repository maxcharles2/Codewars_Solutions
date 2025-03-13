//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
    //create for loop, iterate through the array until element equals string output 
    //return string index
    for(let i = 0; i < haystack.length; i++){
    if (haystack[i] === 'needle'){
        return `found the needle at position ${i}`; 
        }
    }  
    // your code here
}