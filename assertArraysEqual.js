/*Function that takes in two arrays and returns true if they are equal and false otherwise*/
const eqArrays = require('./eqArrays')
const assertArraysEqual = (actual,expected) => {
  if (eqArrays(actual,expected)){
    return `\u2705\u2705\u2705Assertion passed : ${actual} === ${expected}`
  }else {
    return `\u274C\u274C\u274CAssertion failed : ${actual} !== ${expected}`
  }
}
module.exports = assertArraysEqual;