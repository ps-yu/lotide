//Assert equal function
const assertEqual = function(actual, expected){
  if (actual === expected){
    return `\u2705\u2705\u2705 Assertion passed : ${actual} === ${expected}`;
  }else {
    return `\u274C\u274C\u274CAssertion Failed : ${actual} !=== ${expected}`;
  }
}
//Returns true if both objects have identical keys with identical values.
//Otherwise you get back a big fat false!
const eqObjects = function(object1, object2){
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let i in object1){
    for (let j in object2){
      if ( i !== j ){
        return false;
      }
      if (object1[i] !== object2[j]){
        return false;
      }
    }
  }
}
const cd = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc),true));
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2),true));