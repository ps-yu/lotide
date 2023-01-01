/*Function that takes in an array and returns all the elements except for the first element*/
const assertEqual = require('./assertEqual')

const tail = array => {
  if(array.length === 0){
    return undefined;
  }
  return array.slice(1);
}
module.exports = tail;