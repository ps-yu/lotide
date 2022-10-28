//Function implementation
const assertEqual = function(actual, expected){
  if (actual === expected){
    return `\u2705\u2705\u2705 Assertion passed : ${actual} === ${expected}`;
  }else {
    return `Assertion Failed : ${actual} !=== ${expected}`;
  }
}
//HEAD function
const head = (array) => {
  return array[0];
}
assertEqual((head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
