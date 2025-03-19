// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
    //prep
    //parameter (str)
    //return (string data type)
    //example ("This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".)
    //pseudocode
      //put in string as an argument into the function
      //turn string into array
      //string filters out vowels a, e, i, o, u
      //join array back with newly filtered string
    let strArray = str.split("");
    let filteredArr = strArray.filter(letter => {
        return !"aeiouAEIOU".includes(letter);
    })
    let joinedStr = filteredArr.join("");
    return joinedStr;
}