const preciseAge = 30.612437;
console.log(preciseAge);
console.log(Math.round(preciseAge));


//Syllabus Exercise
let numberOfStudents = 15;
let numberOfMentors = 8;
let totalNumber = numberOfStudents + numberOfMentors;
let percentageOfStudents = (numberOfStudents / totalNumber) *100;
console.log(Math.round(percentageOfStudents.toFixed(3)));

let percentageOfMentors = numberOfMentors / totalNumber * 100;
console.log(Math.round(percentageOfMentors.toFixed(3)));
