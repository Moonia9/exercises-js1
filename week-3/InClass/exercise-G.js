const scores = [99, 100, 55, 81, 30, 82];

function isHighScore(score){
    if(score >= 80){
        return true;
    } else {
        return false;
    }
}

const isHighScores = scores.filter(isHighScore);
console.log(isHighScores);

let birthYears = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];


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
const fileteredBirthYears = birthYears.filter(legalAgeForDriving);
console.log(`These are the birth years of people who can drive: ${fileteredBirthYears.join(", ")}`);
