// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//  We make a variable called name and set it equal to 'Dane' as a name.
// We check if name variable is equal to 'Mary' 
// If so we console.log 'Hi, Mary'
// Else console.log will give the response 'How do you do'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We set a variable called secret and another variable called code and set it equal to 123.
// We check if code is equal to 123.
// If so we set secret 'to super' and we set code equal to code * 2 and we console.log secret
// If code is greater than 250 we set secret to 'duper' and we console.log secret
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We set 3 variables, isStudent is true, age is equal to 34 and zip is equal to 55407
// We check if isStudent is equal to true and zip is greater than 80000, if so we console.log 'You're a student on the West Coast!'
// Otherwise check if isStudent is equal to false or age is less than 30, if so we console.log 'What are your hobbies?'
// Otherwise we check if isStudent is true, if so we console.log 'Welcome to Prime!'
// If all checks are not true we console.log 'How about the Weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne = 'red', but instructions say we set it to blue
let colorOne = 'red'; 

// FIX - colorTwo = 'blue', but instructions say we set it to red
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX - Only colorOne is equal to purple  but instructions say colorOne and colorTwo are equal to purple
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - Here we're checking if temp is greater than 39 or time is greater or equal to 4 but instructions say to check both are true
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - Here the instructions were flipped 
if(minAge <= age) {
// FIX - We're supposed to conole.log enter and not entry
  console.log('no entry');
} else {
 // FIX - This conole.log is in the wrong place.
  console.log('enter');
}
*/

