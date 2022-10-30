const eqArrays = (firstArray,secondArray) => {
  if(firstArray.length !== secondArray.length){
    return false;
  }
  for (let i = 0; i < firstArray.length; i++){
    if (firstArray[i] !== secondArray[i]){
      return false;
    }
  }return true;
}
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))