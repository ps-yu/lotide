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
console.log(without(["1","2","3"],[1,2,"3","pankaj"]));