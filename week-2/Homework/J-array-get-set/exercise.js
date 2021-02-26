/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  if (arr === numbers){
    return numbers[0];
  }
}
console.log(first([1,2,3])); //returns 1

function last(arr) {
  if (arr === names){
    return names[3];
  }
}
console.log(last(["Irina", "Ashleigh", "Mozafar", "Joe"])); //returns Joe

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
