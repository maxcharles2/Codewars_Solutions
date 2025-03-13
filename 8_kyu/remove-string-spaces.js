//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

//Attempt 1
function noSpace(x){
    const splitArray = x.split("");
    const filteredArray = splitArray.filter(char => {
        return char !== ' ';
    })
    const strWithCommas = filteredArray.toString();
    const strNoCommas = strWithCommas.replace(/,/g, "");
    
    return strNoCommas;
}

//Attempt 2
function noSpace(x){
    return x.split(" ").join("");
}