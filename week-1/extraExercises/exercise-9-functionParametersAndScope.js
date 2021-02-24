//Function Parameters
function add(number1, number2){
    return number1 + number2;
}
console.log(add(7,62528));

//Function Scope
/* 1. all variables that are defined outside of functions (and inside of functions without the let keyword) are declared in the global scope
and
   2. all variables defined inside of functions can only be accessed by those functions (and any inner functions).
 */

 //Example

let globalVariable = "I live in the global scope";
function makeNewScope(){
    let functionScopeVariable = "I live in the scope of the makeNewScopeFunction";
}
console.log(globalVariable);
console.log(makeNewScope());
//Exercises
//1.
function add1(a, b){
    return a+b;
}
console.log(add1(2,2));

function substract(x, y){
    return x-y;
}
console.log(substract(2,2));

function multiply(a,b){
    return a*b;
}
console.log(multiply(2,2));

function divide(a,b){
    return a/b;
}
console.log(divide(2,2));

//2.
let myFirstName = "Enia";
function sayHello(string){
    if(string === myFirstName){
        return "Hello there";
    }
    return "Hello" + " " + `${string}`;

}
console.log(sayHello("Enia"));
console.log(sayHello("Maria"));

//3.
function average(array){
    let total = 0;
    for(let i=0; i<array.length; i++){
        total += array[i];
    } return total / array.length; //this is the "average"
}
console.log(average([1,2,3,4,5,6]));

//4.
function createStudent(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
};

console.log(createStudent("Enia", "Munteanu"));

//5.
let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoop");
let students = [tim, matt, elie];

function findStudentByFirstName(name){
    let lowerCasedName = name.toLowerCase();
    for(let i=0; i< students.length; i++){
        if(students[i].firstName.toLowerCase() === lowerCasedName){
            return true;
        }
    } 
    return false;
}
console.log(findStudentByFirstName());