// const assertEqual = require('../assertEqual');
// const head = require('../head')
// //TEST CODE
// console.log(assertEqual(head([1,2,3]),1));

const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it("returns 1 for [1,3,5])", () => {
    assert.strictEqual(head([1,3,5]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});