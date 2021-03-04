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
