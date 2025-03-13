//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
    if (num === 0) {
        return "";
    }
    
    let result = "";
    
    for (let i = 1; i <= num; i++){
        result += `${i} sheep...`;
    }
    
    return result;
    //your code here
}