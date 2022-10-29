// Commented out code is the old method. This is the new working code with fewer lines
const raisinAlarm = function (cookie) {
  // const raisin = cookie.includes("🍇",)
   let array = [];
  // if (raisin === true){
  //   array.push('Raisin Alert');
  // }else {
  //   array.push('All Good!');
    cookie.includes("🍇") ? array.push("Raisin Alert") : array.push("All Good!")
  return array;    
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
// Stretch work 
const raisinAlarmArray = function (cookies) {
  let array = [];
  // for (let i in cookies){
    // const raisin = cookies[i].includes("🍇",)
    // if (raisin === true){
    //   array.push("Raisin Alert");
    // }else{
    //   array.push("All Good!");
    for (let i of cookies){
    i.includes("🍇") ? array.push("Raisin Alert") : array.push("All Good");
  }
  return array;
};
console.log(raisinAlarmArray([
  ["🍫", "🍫", "🍇", "🍫"],
  ["🍫", "🍇", "🍫", "🍫", "🍇"],
  ["🍫", "🍫", "🍫"],
]))