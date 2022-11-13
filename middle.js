const middle = (inputArray) => {
  let numberOfItems = inputArray.length;
  if (numberOfItems === 1 || numberOfItems === 2){
    return [];
  }else if (numberOfItems % 2 === 0){
    outputNumber = numberOfItems / 2;
    return [inputArray[outputNumber-1],inputArray[outputNumber]];
  }else {
    outputNumber = Math.floor(numberOfItems / 2);
    return [inputArray[outputNumber]];
  }
}
module.exports = middle;
console.log(Array.isArray(middle([12,3,4])))