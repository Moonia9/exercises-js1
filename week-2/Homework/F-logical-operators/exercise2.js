/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(a) {
 if (a<0){
   console.log(`Is ${a} a negative number?`);
   return true;
 } else {
   return false;
 }
}
console.log(isNegative(-10)); //true


//Writing the function again for the number 5
function isNegativeChecker(b) {
  if (b<0){
    console.log(`Is ${b} a negative number?`);
    return true;
  } else {
    return false;
  }
 }
 console.log(isNegativeChecker(5)); //false
 
/* */
function isBetween5and10(number){
  if(number < 5 || number <= 10){
    console.log(`Is ${number} in the range 5-10?`);
    return true;
  } else{
    return false;
  }
}
console.log(isBetween5and10(10)); //true

function isShortName(name){
  if (name.length <=6){
    console.log(`Is ${name} a short name?`);
    return true;
  } else {
    return false;
  }
}
console.log(isShortName("Daniel")); //true

function startsWithD1(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(startsWithD("daniel")); //returns Daniel

function startsWithD(name){
  return name.charAt(0) === name.charAt(0).toUpperCase()
}
console.log(startsWithD("Daniel")); //returns true


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

/*console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel")); */

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/
