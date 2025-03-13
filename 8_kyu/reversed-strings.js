//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str){
    //new empty string to concat new letters
    let newStr = '';
    //reverse loop that adds a new letter from the last index first and finishes with the first
    //index of the string
    for (let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    //returns the new reversed string value
    return newStr;
}