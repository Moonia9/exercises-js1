/*
  Logical Operators
  ---------------------------------
  Using logical operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

// Do not change these two statement
var htmlLevel = 8;
var cssLevel = 4;

function HtmlVsCssLevel(htmlLevel, cssLevel){
  if (htmlLevel > cssLevel){
    return true;
  } else {
    return false;
  }
}
console.log(HtmlVsCssLevel(8,4)); //returns true

// Finish the statement to check whether HTML, CSS knowledge are above 5
// (hint: use the comparison operator from before)
var htmlLevelAbove5;
var cssLevelAbove5;

function htmlLevelAbove5Checker(htmlLevelAbove5){
  if (htmlLevelAbove5 > 5){
    return true;
  } else {
    return false;
  }
}
console.log(htmlLevelAbove5Checker(8)); //returns true as 8>5

function cssLevelAbove5Checker (cssAndHtmlAbove5){
  if (cssLevelAbove5 > 5){
    return true;
  } else {
    return false;
  }
}
console.log(cssLevelAbove5Checker(4)); //returns false as 4<5

// Finish the next two statement
// Use the previous variables and logical operators
// Do not "hardcode" the answers
var cssAndHtmlAbove5;
var cssOrHtmlAbove5;

function levelCheckerHtmlAndCss (htmlLevelAbove5, cssLevelAbove5){
  if (htmlLevelAbove5 >5 && cssLevelAbove5 >5){
    return true;
  } else {
    return false;
  }
}
console.log(levelCheckerHtmlAndCss(8,4)); //returns false as 8>5 but 4<5 --> false as one does not fulfill the condition 
console.log(levelCheckerHtmlAndCss(8,6)); //returns true as 8>5 && 6>5

function levelCheckerHtmlOrCss (htmlLevelAbove5, cssLevelAbove5){
  if (htmlLevelAbove5 > 5 || cssOrHtmlAbove5 > 5){
    return true;
  } else {
    return false;
  }
}
console.log(levelCheckerHtmlOrCss(8,4)); //returns true as 8>5 even if 4<5 because of the || operator --> true || false returns true

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is Html knowledge above 5?", htmlLevelAbove5);
console.log("Is CSS knowledge above 5?", cssLevelAbove5);
console.log("Is Html And CSS knowledge above 5?", cssAndHtmlAbove5);
console.log(
  "Is either Html or CSS knowledge above 5?",
  cssOrHtmlAbove5
);

/* 
  EXPECTED RESULT
  ---------------
  Is Html knowledge above 5? true
  Is CSS knowledge above 5? false
  Is Html And CSS knowledge above 5? false
  Is either Html or CSS knowledge above 5? true
*/
