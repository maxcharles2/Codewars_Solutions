//https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

function litres(time) {
    //prep
    //parameter (time)
    //return (number data type)
    //example time = 3 ----> litres = 1
    //pseudocode
      //time is given (0.5 liters of water per hour of cycling)
      //time is halved
      //round down decimal
    return Math.floor(time / 2);
}