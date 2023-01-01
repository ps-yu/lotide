/*Function that takes in a an array and a callback and returns a new array as per the criteria of the function*/
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
module.exports = words;