/*Function that takes in a sentence and returns a count of each letter in the sentence*/
const countLetters = inputString => {
  reqObject = {};
  for (i of inputString){   
    if (reqObject.hasOwnProperty(i)){
      reqObject[i] += 1;
    }else{
        if(i !== " "){
          reqObject[i] = 1;
        }
    }
  }
  return reqObject;
}

module.exports = countLetters;