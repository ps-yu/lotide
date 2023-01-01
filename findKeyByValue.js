/*Function that takes in an object and return the first key that correspons to that value*/
const assertEqual = require ('./assertEqual') 

const findKeyByValue = (object, value) => {
  for (i in object){
    if (object[i] === value){
      return i;
    }
  }
}


 module.exports = findKeyByValue;