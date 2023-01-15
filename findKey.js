/*Function that takes in an object and returns the first key that meets the criteria*/
const findKey = function(object, callback){
  for (let i in object){
    if (callback(object[i]))
      return i;
  }
}

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 4 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 4 }
}, x => x.stars === 4) // => "noma"

module.exports = findKey;