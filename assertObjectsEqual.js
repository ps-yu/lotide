/* A function that takes in 2 ojects and returns true if they are equal and false oherwise*/
const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (
        Array.isArray(object1[key]) && Array.isArray(object2[key]) && eqArrays(object1[key], object2[key])
      ) {
        continue;
      } else if (object1[key] === object2[key]) {
        continue;
      } else {
        return `🔴🔴🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
      }
    }
    return `🟢🟢🟢 Assertion Passed: ${inspect(object1)} === $${inspect(object2)}`;
  }
  return `🔴🔴🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
};

module.exports = assertObjectsEqual;