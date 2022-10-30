const without = (source, itemsToRemove) => {
  let modifiedArray = source;
  for (i of itemsToRemove){
    index = source.indexOf(i);
    modifiedArray.splice(index,1);
  }return modifiedArray;
}
console.log(without(["1","2","3"],[1,2,"3"]));