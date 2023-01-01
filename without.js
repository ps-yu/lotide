/*Function that takes in a source array and and itemsToRemove array and returns only the items from the source array that are not in itemsToRemove array*/
const without = (source, itemsToRemove) => {
  let modifiedArray = source;
  for (i of itemsToRemove){
    for (j of modifiedArray){
      if (i === j){
        index = source.indexOf(i);
        modifiedArray.splice(index,1);
      }
    }
  }return modifiedArray;
}
module.exports = without;