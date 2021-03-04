let names = ["Manpreet", "Adrian", "Keti", "Guido", "Kris", "Giorgio","Kimberly"];

console.log(names.length);
names[0] = "Simon";
console.log(names);
names.push("Ali");
console.log(names);
names.unshift("Maria");

for (let i=0; i<names.length; i++){
    console.log(names[i]);
}

