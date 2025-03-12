// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s){
    0 <= h <= 23;
    0 <= m <= 59;
    0 <= s <= 59;
    return (h * 3600000) + (m * 60000) + (s * 1000);
    //#Happy Coding! ^_^
}