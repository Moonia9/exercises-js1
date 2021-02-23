//Array basics
//Example
let arr = [5,3,10];
arr[0];
arr[1];
arr[2];
arr[3] = 4;
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]);

arr.shift(); //remove an elment from the FRONT of the array
console.log(arr);

arr.pop(); //remove an element from the BACK of the array
console.log(arr);

//Removing/adding or both with .splice()
let arrExample = ["a", "b", "c", "d"];
arrExample.splice(1,2,"x", "y", "z"); //["b", "c"]
console.log(arrExample);

/*    */
//Exercises
//1.
let favouriteFoods = ["mango", "pasta", "strawberry"];
//2.
favouriteFoods[1];
console.log(favouriteFoods[1]);
//3.
favouriteFoods.pop();
console.log(favouriteFoods);
favouriteFoods[2] = "Carrot Cake";
console.log(favouriteFoods);
//4.

//5.
favouriteFoods[3] = "Pistachios";
console.log(favouriteFoods);
//6.
favouriteFoods.unshift("Watermelon"); //adds to the beginning of the array
console.log(favouriteFoods);

//7.
let example = [2, 3, 4, 5];
example.splice(1,1);
console.log(example);

/* */

let secondExample = ["alpha", "gamma", "delta"];
secondExample.splice(1,0,"beta");
console.log(secondExample);

 /* */
let thirdExample = [10, -10, -5, -3, 2, 1];
thirdExample.splice(1,3,9,8,7,6,5,4,3);
console.log(thirdExample);

/*Array Iteration
FOR Loops */
/* for (initializer; condition; counter){} */
//Examples
for (let i=0; i<5; i++) {
    console.log(i);
}

for (let i=0; i<10; i++){
    console.log(i);
}

for (let i=0; i<8; i+=3) { //returns multiples of 3 
    console.log(i);
}

//Example
let decimals = [1.1, 1.6, 2.8, 0.4, 3.5, 1.6];
for (let i=0; i<decimals.length; i++) { //i<decimals.lenght tells the loop to continue until i equals the length of the array
    decimals[i] = Math.round(decimals[i]);
}
console.log(decimals); //returns [ 1, 2, 3, 0, 4, 2 ]

/*  */
//Iteration: WHILE loops
let i=0;
while(i<5){
    console.log(i);
    i++;
}

//Iteration: DO WHILE loops
//let i=0;
do {
    console.log(i);
    i++;
} while(i<5);

//Example
let j=0;
do {
    console.log(j);
    j++;
} while(j<0); //0 gets logged

//Exiting out of loops --> using the keyword BREAK
for (let i=0; i<5; i++) {
    if(Math.random()> 0.5){
        console.log("Breaking out of the loop when i is " + i);
        break;
    } else {
        console.log(i);
    }
}
/*Also we can skip the current iteration and continue the loop at the next step
in the iteration by using the keyword CONTINUE */
for (let i=0; i<5; i++) {
    if(Math.random()>0.5){
        console.log("Skipping the console.log when i is " +i);
        continue;
    }
    console.log(i);
}

//FOR...OF loop\
let names = ["Elie", "Matt", "Tim"];
for (let name of names) {
    console.log(name);
}

let numbers = [2,4,6,8];
for(let num of numbers){
    console.log(num);
}

//Strings revisited
//Looping over strings
/*Since strings have a .LENGTH property, we always know at what point
to stop looping */
let nameExample = "Elie";
for(i=0; i< nameExample.length; i++){
    console.log(nameExample[i]);
}
//or using FOR..OF to loop characters in string
let nameAnotherExample = "Kayla";
for(let character of nameAnotherExample){
    console.log(character);
}
//Using SPLIT to turn a string into an array
let string = "hello world";
string.split("");
string.split(" ");
console.log(string.split(""), string.split(" "));

let dashedString = "lots-of-dashes-in-here";
let removedDashes = dashedString.split("-");
console.log(removedDashes);