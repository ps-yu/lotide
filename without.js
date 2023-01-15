/*Function that takes in a source array and and itemsToRemove array and returns only the items from the source array that are not in itemsToRemove array*/
const assertArraysEqual = require('./assertArraysEqual');

const without = function (array1, array2) {
  
  let itemsToRemove = [];
  
  for (let x = 0; x < array1.length; x++) {
    let flag = false;

    for (let y = 0; y < array2.length; y++) {
      if (array1[x] === array2[y]) {
        flag = true;
      }
    } 
    if (flag === false) {
      itemsToRemove.push(array1[x]);
    }
  }
  return itemsToRemove;
}
console.log(without(["1", "1", "1", "2", "3", "1" , "1"],["1", 2, "3"]))
module.exports = without;