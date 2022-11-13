const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

console.log(assertArraysEqual(middle([12,3,4,5,4,5]),[4,5]));