function calculateTheAge(birthYear){
    return 2021 - birthYear;
}

function canDrive(birthYear){
    const age = calculateTheAge(birthYear);
    if(age >= 17){
        console.log(`Born in ${birthYear} can drive`);
    } else {
        console.log(`Born in ${birthYear} can drive in ${17 - age} years`);
    }
}

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

birthYears.forEach(canDrive);