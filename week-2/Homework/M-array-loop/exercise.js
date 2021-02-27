/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

//With FOR loop
function startWithT (arr) {
  for (let i = 0; i < arr.length; i++){
    let day = arr[i];
    if(day[0] === "T"){
      console.log(arr[i]);
    }
  }
}
startWithT(daysOfWeek);


//With WHILE loop
function printWordsWhichStartWithT (wordsArray) {
  let i = 0;
  while(i < wordsArray.length){
    if (wordsArray[i][0] === "T") {
      console.log(wordsArray[i]);
    }
    i++;
  }
}
//printWordsWhichStartWithT(daysOfWeek);


// FOR loop
function printWordWithT (words){
  for (let i=0; i <words.length; i++){
    if (words[i][0] === "T"){
      console.log(words[i]);
    }
  }
}


 //CALLBACK function
 function tStarter (wordsArray){
   wordsArray.forEach(
     function(element, index) {
    if(element[0] === "T"){
      console.log(index, element);
    }
   } );
 }

 tStarter(daysOfWeek);