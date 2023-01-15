/*Function that takes in an array and returns all the elements except for the first element*/
const tail = array => {
  if(array.length === 0){
    return [];
  }
  return array.slice(1);
}
module.exports = tail;