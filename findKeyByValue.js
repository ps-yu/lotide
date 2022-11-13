const assertEqual = function(actual, expected){
  if (actual === expected){
    return `\u2705\u2705\u2705 Assertion passed : ${actual} === ${expected}`;
  }else {
    return `\u274C\u274C\u274CAssertion Failed : ${actual} !=== ${expected}`;
  }
}
//Defining the findKeyByValue function 
const findKeyByValue = (object, value) => {
  for (i in object){
    if (object[i] === value){
      return i;
    }
  }
}

// const object1 = {
//   name : "pankaj",
//   class : "sharma"
// }
// // for (i in object1){
// //   console.log(object1[i]);
// // }
// // console.log(findKeyByValue(object1,"pankaj"));
// for (i of Object.keys(object1)){
//   console.log(i)
// }
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  karate: "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
