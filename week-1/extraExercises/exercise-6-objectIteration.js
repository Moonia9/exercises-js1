//Looping over Objects
//To iterate over objects we use FOR..IN loop
let instructor = {
    nameOfTheInstructor: "Matt",
    mathWizard: true,
    dogOwner: true
};
for(let singleKey in instructor){
    console.log(instructor[singleKey]);
}
/* In the code example, singleKey is a variable 
that will be assigned to each key in the instructor object.
 To access the key's value, we must use the bracket notation.*/

 //IF..IN :Determining if a Key exists in an Object
 let obj = {
     favoriteNumber: 33,
     favoriteColor: "blue"
 }
 if("favoriteNumber" in obj){
     console.log("The favoriteNumber key exists!");
 }
 if("nothing" in obj){
     console.log("The nothing key exists!");
 }

 /*or...of is a great way to loop over strings and arrays
  it does not work on objects (you will get an error). 
  If you need to iterate over an object, always use for...in. */

  //Exercises
  let namesAndHobbies ={
      elie: "JavaScript",
      matt: "Jogging",
      janey: "table building",
      tim: "sailing"
  };
  console.log(namesAndHobbies);

  let namesAndHobbiesUpdated = {
    elie: "JavaScript",
    matt: "Jogging",
    janey: "table building",
    tim: "sailing"
}
for(let key in namesAndHobbiesUpdated){
    console.log(`${namesAndHobbiesUpdated[key]} => ${key}`)
}
namesAndHobbiesUpdated.enia = "painting"
if("enia" in namesAndHobbiesUpdated){
    console.log("Enia", namesAndHobbiesUpdated.enia)
}