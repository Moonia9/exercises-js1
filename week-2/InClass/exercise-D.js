function moodChecker(mood){
    if(mood === "happy"){
        return "Good job, you're doing great!";
    } else if (mood === "sad"){
        return "Every cloud has a silver lining";
    } else if (typeof mood === "number"){
        return "Beep beep boop";
    } else {
        return "I'm sorry.I'm still learning about feelings!";
    }
}
console.log(moodChecker("happy"));

function myMoodyFunction(moody){
    if(moody === "superhappy"){
        return "Me too! I am glad to hear this";
    } else if(moody === "supersad"){
        return "Oh..I am sorry to hear that..";
    } else if (typeof moody === "number"){
        return "I see you are moody today..";
    } else {
        return "I am sorry.I hope your day gets better";
    }
}
console.log(myMoodyFunction("sup"));