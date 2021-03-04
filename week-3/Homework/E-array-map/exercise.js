// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let numbersMultipliedByOneHundred = numbers.map(function oneHundredTimes(number){
    return number * 100;
});

console.log(numbersMultipliedByOneHundred);

//OR
let numbersByOneHundred = numbers.map(number => {
    return number * 100;
});

//OR
let numbersMultiplied = numbers.map(number => number * 100);