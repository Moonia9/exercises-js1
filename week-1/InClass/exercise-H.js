//Saturday exercises
function concatenateStrings(firstString, secondString) {
     const concatStrings = firstString + secondString;
     //const concatStrings = `${firstString} + ${secondString}`;
     return concatStrings;
}

   console.log(concatenateStrings("first","second"));


    //helloAge("Enia",1995); //-> Hello Enia, you are 25 years old

    function helloAgeExercise(greeting, ageNumber){
        //const greeting = "Hello Enia,";
        //const ageNumber = "you are 25 years old.";
        const concatAnswers = greeting + ageNumber;
        return concatAnswers;
    }
    console.log(helloAgeExercise("Hello Enia,", "you are 25 years old."));



    function helloAge(name, birthYear) {
        const age = 2021 - birthYear;
        let output = `Hello ${name}, you are ${age} years old`;
        return output;
    }
    let salute = helloAge ("Maria", 1989);
    let salute2 = helloAge("Manuel" , 2000);
    console.log(salute);
    console.log(salute2);
