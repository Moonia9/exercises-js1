/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(a) {
  console.log(`Is ${a} a negative number?`);
   return a<0;
}

/* */
function isBetween5and10(number){
  console.log(`Is ${number} in the range 5-10?`);
  return number >= 5 && number <= 10;
}

function isShortName(name){
  console.log(`Is ${name} a short name?`);
   return name.length <=6;
}

function startsWithD1(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(startsWithD("daniel")); //returns Daniel


function startsWithD(name){
  return name.charAt(0) === "D";
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
