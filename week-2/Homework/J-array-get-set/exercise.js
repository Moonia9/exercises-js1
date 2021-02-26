/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

var firstValue = numbers[0];
var lastItemOfNumbers = numbers[numbers.length-1];
var lastItemOfNames = names[names.length-1];

function first(arr) {
  return firstValue;
}
console.log(first(numbers));

function lastNumbers(arr){
  return lastItemOfNumbers;
}
console.log(lastNumbers(numbers));

function last(arr) {
  return lastItemOfNames;
}
console.log(last(names));


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
