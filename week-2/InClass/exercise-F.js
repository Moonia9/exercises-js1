function userRequirements(username,userType){
    if(username.length>=5 && username.length<=10){
        return "Username valid (1)";
    } else if (!(username.length >=5 && username.length<=10)){
        return "Username invalid";
    } else {
        (userType === "admin" || userType === "manager")
        return "Username valid(2)";
    }
}

console.log(userRequirements("heroooo", "manager"));