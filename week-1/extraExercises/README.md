Exercises
In exercise-1.js

1. Create the following variables
 - name, which is a string set to your current name
 - dayOfBirth, which is a number set to the day of your birth month
2. See what happens when you have multiple variables of the same name. Which one takes precedence?
3. Write some JavaScript that prompt's the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.
4. Create a string that contains both single quotes and double quotes.
5. What is the difference between null and undefined?


BOOLEAN LOGIC
in exercise-2-booleanLogic.js 
Part2.
1. What should the above code console.log?

2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?

Part 2.1
1. What should the above code console.log? Why?
2. What is the value of firstvariable when it is initialized?
3. Is the value of firstvariable a "truthy" value? Why?
4. Is the value of secondvariable a "truthy" value? Why?
5. Is the value of thirdvariable a "truthy" value? Why?


ARRAY BASICS
Part3.
1. Research Math.random and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".

In exercise-3-arrayBasics.js
1. Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements.
2. Access the second element in favoriteFoods.
3. Change the last element in favoriteFoods to some other food.
4. Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.
5. Add a favorite food to the back of the favoriteFoods array.
6. Add a favorite food to the front of the favoriteFoods array.

7. In the examples below, use splice to convert the first array to the second array:
[2, 3, 4, 5] -> [2, 4, 5]
["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
[10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]



ARRAY ITERATION
In exercise-4-arrayIteration.js
1. Using a loop, iterate through this array and console.log all of the people.
2. Write the command to remove "Greg" from the array.
3. Write the command to remove "James" from the array.
4. Write the command to add "Matt" to the front of the array.
5. Write the command to add your name to the end of the array.
6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
8. Write the command that gives the indexOf where "Mary" is located.
9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".



OBJECT BASICS
In exercise-5-objectBasics.js
//Exercise
1. Create an object that has your firstName, lastName, and occupation as keys.
2. Access each value from your object using both dot notation and bracket notation.
3. Add a key for hobby to your object. Remove the key and value for occupation.


OBJECT ITERATION
In exercise-6-objectIteration.js
1. Given the following object below, write code to print the value then the key to the console separated by '=>'
2. Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.

3. Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.


OBJECT EXERCISES
In exercise-7-objectExercises.js
1. Write the command to add the language "Go" to the end of the languages array.
2. Change the difficulty to the value of 7.
3. Using the delete keyword, write the command to remove the jokes key from the programming object.
4. Write the command to add a new key called isFun and a value of true to the programming object.
5. Using a loop, iterate through the languages array and console.log all of the languages.
6. Using a loop, console.log all of the keys in the programming object.
7. Using a loop, console.log all of the values in the programming object.

FUNCTION BASICS
In exercise-8-functionBasics.js
//Exercises
1. Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console
2. Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".

Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream, depending on what you get back from Math.random.
3. Create a variable called numbers which is an array that contains the numbers 1 through 10.

Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd.
4. Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even. 
Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds
5. Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds
6. Create a function called returnFirstHalf which returns the first half of the numbers array
7. Create a function called returnSecondHalf which returns the second half of the numbers array

FUNCTION PARAMETERS AND SCOPE
In exercise-9-functionParametersAndScope.js
1. Make a function for add, subtract, multiply, and divide. Each of these functions should accept two parameters and return the sum, difference, product and quotient.
2. Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter.
3. Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)
4. Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName
5. Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students
6. Write a function called findStudentByFirstName, which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization