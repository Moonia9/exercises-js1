//Declaring functions
/*function anyNameYouWantForTheFunction(parameter1, parameter2...){

}  */

function firstFunction(){
    console.log("I have wrote my first function");
}
console.log(firstFunction("I have wrote my first function"));


//Returning values from functions --> using the RETURN keyword
function secondFunction(){
    return "I have wrote another function";
}
console.log(secondFunction());
//Letting a variable returning the function
let returnValue = secondFunction();
console.log(returnValue);
//Note: RETURN can Only be executed once

/*   */

//Conditional Logic with return statements

function isOverPointFive(){
    if (Math.random()> .5){
        return true;
    } else {
        return false;
    }
}
console.log(isOverPointFive());

//Writing the same function using a ternary operator

function isOverPointFive1(){
    return Math.random() > .5 ? true : false;
}
console.log(isOverPointFive1());

//OR..even more simplified
function isOverPointFive2(){
    return Math.random() > .5;
}
console.log(isOverPointFive2());


//Exercises
//1.
function myName(nickname, familyName){
    return nickname +" " +  familyName;
}
console.log(myName("Moonia", "Munteanu"));
//2.
let favoriteFoods = ["mango", "white chocolate"];
function randomFood(){
    /* // lets find a random number between 0 and 1 and multiply it by the length of the array. 
    This will give us a number between 0 and 2. If we always round down, we will get either 0 or 1, so we can use Math.floor to round down.
    let randomIndex = Math.floor(Math.random() * favoriteFoods.length);
    console.log(favoriteFoods[randomIndex]);*/
    let randomIndex = Math.floor(Math.random() * favoriteFoods.length) ;
    console.log(favoriteFoods[randomIndex]);
}
//console.log(randomFood(favoriteFoods));

//3.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function displayOddNumbers(){
    for (let i=0; i< numbers.length; i++){
        // if the value we are at in the array is not divisible by 2 (it's an odd number)
        if (numbers[i] % 2 !== 0){
             // print out that value!
            console.log(numbers[i]);
        }
    }
}
console.log(displayOddNumbers());

//4.
function returnFirstOddNumber(){
    for(i=0; i<numbers.length; i++){
        if(numbers[i] %2 !== 0){
            // print out that value, using return gets us out of the function!
            return numbers[i];
        }
    }
}
console.log(returnFirstOddNumber());

//5.
function returnFirstEvenNumber(){
    for (i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0){
            return numbers[i];
        }
    }
}
console.log(returnFirstEvenNumber());

//6.
function returnFirstHalf(){
    return numbers.slice(0,numbers.length /2);
}
console.log(returnFirstHalf());

//7.
function returnSecondHalf(){
    return numbers.slice(5,10); 
    /*OR 
    return numbers.slice(numbers.length /2); */
}
console.log(returnSecondHalf());