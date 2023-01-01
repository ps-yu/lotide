/*A function that takes in a string and returns all indices of letter positions in the string*/
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  //logic to update the results here
  for (let i = 0; i < sentence.length; i++){
    if (results.hasOwnProperty(sentence[i])){
      results[sentence[i]].push(i)    
    }
    else{
      if(sentence[i] !== " "){
        results[sentence[i]] = [i];
      }
    }
  } 
  return results
}
module.exports = letterPositions;
