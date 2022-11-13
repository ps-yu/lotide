const eqArrays = require('./eqArrays')
const assertArraysEqual = (actual,expected) => {
  if (eqArrays(actual,expected)){
    console.log(`\u2705\u2705\u2705Assertion passed : ${actual} === ${expected}`)
  }else {
    console.log(`\u274C\u274C\u274CAssertion failed : ${actual} !== ${expected}`)
  }
}
module.exports = assertArraysEqual;