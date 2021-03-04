let mentors = ["Daniel", "Irina", "Gordon", "asleigh"];

//Inline declaration
const formattedMentors = mentors.map(function tidy(name){
    return name.trim().toLowerCase();
});

console.log(formattedMentors);



//Arrow function
function tidy(name){
    return name.trim().toLowerCase();
}

const tidyNames = (name) => {
    return name.trim().toLowerCase();
};
console.log(formattedMentors);



//Syntactic sugar
const tidyNamesAgain = (name) => name.trim().toLowerCase();
console.log(formattedMentors);

//Exercise-C
function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }

  const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];


const abracaFunctionMutated = abracaArray.map(function toUpper(letters){
    return letters.toUpperCase();
});
console.log(abracaFunctionMutated);

//OR

const result = abracaFunction(function (array){
  return array.map(function (string){
    return string.toUpperCase();
  });
});
console.log(result);
