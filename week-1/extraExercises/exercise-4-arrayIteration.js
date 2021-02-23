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

//FOR...OF loop
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

//Exercise README.md
let people = ["Greg", "Mary", "Devon", "James"];
//1.
for(i=0; i<people.length; i++){
    console.log(people[i]);
}

//2.
console.log(people.shift());

//3.
console.log(people.pop());

//4.
console.log(people.unshift("Matt"));

//5.
console.log(people.push("Enia")); //add to the end of the array

//6.
for(i=0; i<people.length ; i++){
if(i>1){
    break;
}
console.log(people[i]);
}

//7.
console.log(people.slice(2));

//8.
console.log(people.indexOf("Mary"));

//9.
console.log(people.indexOf("Foo"));

//10.
people = ["Greg", "Mary", "Devon", "James"];
console.log(people.splice(2,1, "Elizabeth", "Artie"));

//11.
let withBob = people.concat("Bob");
console.log(withBob);