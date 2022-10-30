const eqArrays = (firstArray,secondArray) => {
  if(firstArray.length !== secondArray.length){
    return false;
  }
  for (let i = 0; i < firstArray.length; i++){
    if (firstArray[i] !== secondArray[i]){
      return false;
    }
  }return true;
}
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
//  Assert function to check the ouput
// const assertEqual = function(actual, expected){
//   if (actual === expected){
//     return `\u2705\u2705\u2705 Assertion passed : ${actual} === ${expected}`;
//   }else {
//     return `\u274C\u274C\u274CAssertion Failed : ${actual} !=== ${expected}`;
//   }
// }
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));