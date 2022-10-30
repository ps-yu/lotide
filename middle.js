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
console.log(middle([1,2,3,4,5,6,7,8,9]));