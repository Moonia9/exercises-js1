function calculateTheAge(birthYear){
    return 2021 - birthYear;
}

function legalAgeForDriving(birthYear){
    const age = calculateTheAge(birthYear);
    if(age >= 17){
        return `Born in ${birthYear} can drive`;
    } else {
        return `Born in ${birthYear}, can drive in ${17-age}`;
    }
}

birthYears = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
let canDrive = birthYears.forEach(legalAgeForDriving);
console.log(canDrive);