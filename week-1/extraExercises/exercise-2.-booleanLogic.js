//Boolean logic

let instructor = "Elie"; // = is called assignment
if (instructor === "Elie") { // === is called comparison (does not allow the type of coercion of the values)
    console.log("Yes!");
}
else {
    console.log("No");
}

let number = 55;
if (number == "55"){ // == is also a comparison operator (allows the type coercion of the values)
    console.log("Yes");
}
else {
    console.log("No");
}
 


// If/else statements with other comparators
//Checking for inequality
let x=4;
if (x<=5){
    console.log("x is less than equal to five");
} else {
    console.log("x is not less than equal to five");
}

//Checking if a value is truthy or falsey using !!
console.log(!!false); //false
console.log(!!-1); //true
console.log(!!-0); //false

/* ! - the NOT operator which FLIPS the boolean value (!true === false). !! simply applies this operator twice, so !!true === true, and !!false === false.
   || - the OR operator which in a boolean context returns true if EITHER condition is true
   && - the AND operator  which in a boolean context returns true if BOTH conditions are true*/


//EXERCISES
//Part 1.

console.log(2 == "2"); //true
console.log(2 === 2); //true
console.log(10 % 3);  //1
console.log(10 % 3 === 1); //true --> as 1 === 1;
console.log(true && false); //false --> as one condition is false 
console.log(false || true); //true --> as one condition is true
console.log(true || false); //true --> as one condition is true

//Part 2
//1.
let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning");
} //--> "Keep it up"

/*    */
//Part 2.1
let firstVariable; //falsey
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shhh";

if(firstVariable){
    console.log("first");
} else if (firstVariable || secondVariable){
    console.log("second");
} else if (firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
} 
/* See README.md
1. The code should console.log "Third" because the thirdVariable is truthy.
 Even though the firstVariable is falsey, the or statement is only looking for one truthy statement. --> ||

 2.The value of firstVariable is undefined.
  Variables that are not assigned to any value are assigned to the value undefined

 3. No, undefined is a falsey value
 4. No, empty strings are falsey values as well
 5. Yes, all numbers except for 0 are truthy */


 /*  */
//Part 3.
//1.
if (Math.random() > .5) {
    console.log("Over 0.5");
} else {
    console.log("Under 0.5");
}


