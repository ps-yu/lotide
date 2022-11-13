const assertEqual = require('./assertEqual')

const tail = array => {
  if(array.length === 0){
    return undefined;
  }
  return array[array.length-1];
}
//exporting the head function
module.exports = tail;