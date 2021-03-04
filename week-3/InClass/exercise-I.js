function formatName(name) {
    return name.split("")[0].toUpperCase() + name.slice(1);
  }
  
  function log(name, index) {
    console.log(index + ": " + name);
  }
  


const name = ["daniel","irina", "enola"];
console.log(name.map(formatName)); //Uppercases them

const namesFormatted = name.map(formatName);
namesFormatted.forEach(log);


function isLongName(name){
    return name.length > 6;
}
name.filter(isLongName);
name.map(formatName).forEach(log);
