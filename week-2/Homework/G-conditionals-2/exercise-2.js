/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the grade is less than 50 then return "failed"
  - if 50 or higher then return "passed"

*/

function studentPassed(grade) {
if (grade < 50){
  return `${grade}: failed`;
} 
if (grade >= 50){
  return `${grade}: passed`;
}
}
console.log(studentPassed(49)); //49: failed
console.log(studentPassed(50)); //50: passed
console.log(studentPassed(89)); //89: passed

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 50;
var grade3 = 100;

console.log("'" + grade1 + "': " + studentPassed(grade1))
console.log("'" + grade2 + "': " + studentPassed(grade2))
console.log("'" + grade3 + "': " + studentPassed(grade3))

/* 
EXPECTED RESULT
---------------
'49': failed
'50': passed
'100': passed
*/
