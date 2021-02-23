let firstObj = {
    firstName: "Tim",
    lastName: "Garcia",
    isInstructor: true
};
//Accesing Object Values
//First way
console.log(firstObj.firstName, firstObj.lastName, firstObj.isInstructor);
//Another way to do so
console.log(firstObj["firstName"], firstObj["lastName"], firstObj["isInstructor"]);

//Bracket Notation vs Dot Notation
let obj = {
    firstName: "Elie",
    lastName: "Schoop",
    favoriteColor: "pink",
    job: "instructor",
    isDeveloper: true
};
console.log(obj.firstName, obj["lastName"],obj["favoriteColor"]);

//Another example
let obj1 = {};
let person = "Tom";
obj1[person] = "This is a person";
obj1[1+1+1] = "Three";
console.log(obj1);
console.log(obj1[3], obj1["Tom"]);
/*In short, use the bracket notation when you need to evaluate some expression
 or pass in a variable to get the name of the key, but when you know the name of 
 the key and it is not a variable or expression, always use the dot notation. */

 //Keys are always Strings in JavaScript
 let idToName = {
     754: "Tim",
     843: "Matt",
     921: "Janey",
     192: "Elie"
 };
 console.log(idToName["754"]); //returns Tim

 //Adding to objects
 let obj2 = {
     nickname: "Jon Snow",
     watchMember: true
 };
 obj2.gameOfThrones = "Awesome";
 console.log(obj2);

 //Removing from Objects --> using DELETE keyboard
 let obj3 = {
     nameInstructor: "Elie",
     job: "Instructor",
 };
 delete obj3.job; //returns true
 console.log(obj3);

 //Exercise

 let objExercise = {
     myName: "Enia",
     myLastName: "Munteanu",
     occupation: "techie"
 };
 delete objExercise.occupation;


 console.log(objExercise.myName, objExercise.myLastName, objExercise.occupation);
 console.log(objExercise["myName"], objExercise["myLastName"], objExercise["occupation"]);
 
 objExercise.hobby = "drawing";
 console.log(objExercise);