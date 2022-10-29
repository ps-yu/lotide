//Assert function
const assertEqual = function(actual, expected){
  if (actual === expected){
    return `\u2705\u2705\u2705 Assertion passed : ${actual} === ${expected}`;
  }else {
    return `\u274C\u274C\u274C Assertion Failed : ${actual} !=== ${expected}`;
  }
}
//TEST CODE
console.log(assertEqual("Light","house"));
console.log(assertEqual(1,1));