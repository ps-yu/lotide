/*Function that takes in an array and returns the slice of the array based on the critera*/
const takeUntil = function(array, callback){
  const result = [];
  for (let i of array){
    if(callback(i) === true){
      break;
    }else{
      result.push(i);
    }
  }return result;
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
module.exports = takeUntil;