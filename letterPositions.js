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
console.log(letterPositions("lighthouse in the house"));

// To push a number to an array in a object 
// const object = {
//   name : "pankaj",
//   number : [1,2,3,4,5],
// object.number.push(9);
// console.log(object["number"]);