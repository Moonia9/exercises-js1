/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

//studentAndMentorChecker
var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors = true; // finish this statement

function studentAndMentorChecker (studentCount, mentorCount){
  if (studentCount > mentorCount){
    return moreStudentsThanMentors;
  }
}
console.log(studentAndMentorChecker(16,9));


//roomCapacityChecker
var roomMaxCapacity = 25;
var enoughSpaceInRoom = true; // finish this statement

function roomCapacityChecker (roomMaxCapacity, enoughSpaceInRoom){
  if (roomMaxCapacity === 25){
    return enoughSpaceInRoom;
  }
}
console.log(roomCapacityChecker(25, true));


//nameChecker
var personA = "Daniel";
var personB = "Irina";
var sameName = false; // finish this statement

function nameChecker (personA, personB){
  if (personA === personB){
    return true;
  } else {
    return false;
  }
}
console.log(nameChecker("Daniel", "Irina"));

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/
