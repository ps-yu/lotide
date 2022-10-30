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
console.log(flatten([1,2,3,4,[5,67,8],[1]]))