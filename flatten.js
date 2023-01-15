/*Function that takes in an array that contains nested array and returns a flattened version of the array*/
const flatten = (inputArray) => {
  flattenedArray = [];
  for (items of inputArray){
    if(Array.isArray(items)){
      for (eachItem of items){
        flattenedArray.push(eachItem);
      }
    }else {
      flattenedArray.push(items);
    }
  }return flattenedArray;
}

module.exports = flatten;