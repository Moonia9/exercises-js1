//.forEach();
const names = ["Daniel", "mozafar", "irina"];
names.forEach(function (name,index){
    console.log(index + ": " + name);
});
/*returns 
0: Daniel
1: mozafar
2: irina */

function calculateTheAge(birthYear){
    return 2021 - birthYear;
}
console.log(calculateTheAge(1970)); //51

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const theirAge = birthYears.map(calculateTheAge);
console.log(theirAge);

