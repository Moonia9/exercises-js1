let namesInEnglishClass = ["Kimberly", "Adrian", "Keti", "Manpreet", "Manuel", "Simon"];
let namesInSpanishClass = ["Marco", "Carlos", "Roger", "Lavinia", "Maria"];
console.log(namesInEnglishClass.concat(namesInSpanishClass));

let arrayCombined = namesInEnglishClass.concat(namesInSpanishClass);
arrayCombined.sort();
console.log(arrayCombined.sort());

function nameChecker(nameOfStudent, arrayOfNames){

        if(arrayOfNames.includes(nameOfStudent)){
            return `${nameOfStudent} is at the class with ${arrayOfNames.join(", ")}`;
        } else {
            return `${nameOfStudent} is not at the class with ${arrayOfNames.join(", ")}`;
        }

}
console.log(nameChecker("Lavinia", arrayCombined));
console.log(nameChecker("Mariana", arrayCombined));