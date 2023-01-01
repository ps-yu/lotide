const head = array => {
  if(array.length === 0){
    return undefined;
  }
  return array[0];
}
//exporting the head function
module.exports = head;