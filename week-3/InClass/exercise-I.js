//Syllabus Exercise
function formatName(name) {
    return name.split("")[0].toUpperCase() + name.slice(1);
  }
  
  function log(name, index) {
    console.log(index + ": " + name);
  }
  
const name = ["daniel","irina", "enola"];
console.log(name.map(formatName)); //Uppercases the first letter

const namesFormatted = name.map(formatName);
namesFormatted.forEach(log);
console.log(namesFormatted);


function isLongName(name){
    return name.length > 6;
}
name.filter(isLongName);
name.map(formatName).forEach(log);

//Exercise I
const array = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

//Using Chaining
let findSting = (arr) => {
	return arr
		.filter((element) => typeof element === 'string')
		.map((element) => element.toUpperCase())
		.map((element) => `${element}!`);
};

console.log(findSting(array));

//Using a FOR loop

let string = (arr) => {
  var arrStrings = [];
  for(let i=0; i < arr.length; i++){
    if(typeof arr[i] === "string"){
      arrStrings.push(arr[i].toUpperCase() + "!");
    }
  }
}
console.log(arrStrings);
string(array);

