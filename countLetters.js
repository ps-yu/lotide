//Declaration of the countLetters function
const countLetters = inputString => {
//Declaratrion of an empty object that will store the letters and occurance
  reqObject = {};
//For loop to iterate through all the letters
  for (i of inputString){
//To check if the property exists and incrementing it's value   
    if (reqObject.hasOwnProperty(i)){
      reqObject[i] += 1;
//To create the letter property, checkimg if it's empty space and
//setting it's value to 1
    }else{
        if(i !== " "){
          reqObject[i] = 1;
        }
    }
  }
  return reqObject;
}
console.log(countLetters("lighthouse in the house"))