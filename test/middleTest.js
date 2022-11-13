// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle')

// console.log(assertArraysEqual(middle([12,3,4,5,4,5]),[4,5]));

const assert = require('chai').assert;
const middle = require('../middle');

describe('#test', () => {
  it('returns 4 for [1,2,4,6,7', () => {
    assert.deepEqual(middle([1,2,4,6,7]),[4])
  })
})