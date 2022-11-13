const assertEqual = require('../assertEqual')
const tail = require('../tail')

console.log(assertEqual(tail([12,3,4,56,"LHL"]),'LHL'))