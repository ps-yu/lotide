// const assertEqual = require('../assertEqual')
// const tail = require('../tail')

const head = require('../head');

// console.log(assertEqual(tail([12,3,4,56,"LHL"]),'LHL'))
 const assert = require('chai').assert;
 const tail = require('../tail')

 describe('#test', ()=> {
  it('returns 4 for [12,3,4]', () => {
    assert.strictEqual(tail([12,3,4]),4)
  })
 })