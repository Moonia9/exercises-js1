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
//Exercise README.md
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

