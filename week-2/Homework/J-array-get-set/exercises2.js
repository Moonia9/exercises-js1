/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/

var numbers = [1, 2, 3]; // Don't change this array literal declaration
numbers[3] = 4;
console.log(numbers);

/*numbers.splice(0,1,"theNewValue");
console.log(numbers); --> returns ['theNewValue', 2, 3, 4] */ 


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/
