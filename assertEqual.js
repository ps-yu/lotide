/* A function that take in two values and returns true if they are equal and false otherwise*/
//Function implementation
const assertEqual = function(actual, expected){
  if (actual === expected){
    return `\u2705\u2705\u2705 Assertion passed : ${actual} === ${expected}`;
  }else {
    return `\u274C\u274C\u274C Assertion Failed : ${actual} !=== ${expected}`;
  }
}
//Exporting the funciton
module.exports = assertEqual;
