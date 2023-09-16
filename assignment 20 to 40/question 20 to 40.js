// Chapter 21 (Changing Case)


// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.
// Answer

// var allLower = userInput.toLowerCase();

// 2. Convert the string represented by x to lower-case and assign the result to the same variable.
// Answer

// x = x.toLowerCase();

// 3. Convert the string represented by y to upper-case and assign the result to the same variable.
// Answer

// y = y.toUpperCase();


// 4. Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.
// Answer
// var secondVariable = yourVariable.toLowerCase();


// 5. Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.
// Answer
// var newVariable = yourArray[index].toLowerCase();


// 6. Display in an alert the upper-case version of the string represented by a variable.
// answer

// alert(yourVariable.toUpperCase());


// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.
// Answer

// var cityName = "kaRacHi";
// cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();


// Chapter 22 - 25 (Strings)


// 1. "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.
//Answer

// var sameWords = "captain";
// var slicedPart = sameWords.slice(1, 3); // This will give you "ap"

// console.log(slicedPart);

// 2. The number of characters in the string will be assigned to the variable.
//Answer

// var str = "example";
// var numberOfCharacters = str.length; // This will give you the number of characters in the string


// 3. The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.
//Answer
// var animal = "elephant";
// var seg = animal.slice(1, 5); // This will give you "leph"
// console.log(seg);

// 4. Find the number of characters in the string represented by a variable and assign the number to a second variable.
//Answer
// var myString = "example";
// var numberOfCharacters = myString.length; // This will give you the number of characters in the string


// 5. In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.
//Answer

// var myString = "example";
// var numberOfCharacters = myString.length; // This will give you the number of characters
// var slicedString = myString.slice(1, numberOfCharacters - 3); // This will slice the string accordingly


// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
//Answer

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// the value of indx is 3


// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.
//Answer
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);
// the value of indx is 16

// 8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
// Answer
// var text = "This is a go test. Let's go and go!";
// var lastIndex = text.lastIndexOf("go"); // Find the last index of "go"
// var indx = lastIndex; // Assign the index to 'indx'
// Now, 'indx' contains the index of the first character of the last instance of "go" in the 'text' string.



// 9. Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
// answer
// if (indexNum >= 0 && indexNum < yourString.length) {
    // The segment with indexNum exists in the string.
    // You can put your code here.
// } else {
    // The segment with indexNum does not exist in the string.
    // You can handle this case if needed.
// }


// 10. In this string "abcde", what character is at index 2? (Use charAt)
// answer

// var str = "abcde";
// var characterAtIndex2 = str.charAt(2);
// console.log(characterAtIndex2); // This will print 'c' to the console



// 11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
// answer
// var text = "This is a sample text.";
// var cha = text.charAt(9); // The 10th character is at index 9 (indexing starts from 0)





// 12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
// answer
// var str = "This is a sample string.";
// var x = str.charAt(str.length - 1);


// 13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
// answer
// var input = "This is an example input.";
// var cha = input.charAt(4); // The 5th character is at index 4 (indexing starts from 0)

// 14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.
// answer
// var yourString = "example"; // Replace "example" with your string
// var particularCharacter = 'c'; // Replace 'c' with the character you want to check

// if (yourString.charAt(2) === particularCharacter) {
    // Your code here
// }


// 15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.
// answer

// var yourString = "example"; // Replace "example" with your string
// var charArray = [];

// for (var i = 0; i < yourString.length; i++) {
//     charArray.push(yourString.charAt(i));
// }

// Now, 'charArray' contains each character of 'yourString' as separate elements in the array.

// var reply = "No, I can't do that. It's a no-go!";
// var revisedReply = reply.replace("no", "yes");

// Now, 'revisedReply' contains the string with the first "no" replaced by "yes."



// 16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
// answer
// var str = "A 1st example with 1 in it.";
// var newStr = str.replace("1", "one");



// 17. If you want all instances replaced, enter 3 characters that need to appear in this statement.var y = x.replace("a", "z");
// answer
// var y = x.replace(/a/g, "z");




// Chapter 26 (Rounding Numbers)


// 1. Form a statement that rounds a number to the nearest integer.
// answer

// var roundedNumber = Math.round(yourNumber);

// 2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
// answer

// var origNum = 7.3; // Replace with your number
// var roundNum = Math.ceil(origNum);


// 3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
// answer

// var origNum = 7.8; // Replace with your number
// var roundNum = Math.floor(origNum);


// 4. Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
// answer
// var yourNumber = 7.6; // Replace with your number
// var roundedNumber = Math.round(yourNumber);


// 5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.
// answer
// var value = 0.5;
// var roundedValue = Math.round(value);



// Chapter 27 (Random Numbers)

// 1. Convert a random number generated by JavaScript to a number in the range 1 to 50
// answer
// var randomNumber = Math.floor(Math.random() * 50) + 1;
// it randomNumber is 33

// 2. Generate a random number and assign it to a variable that hasn't been declared beforehand.
// answer
// var randomNumber = Math.random(); // Generates a random decimal number between 0 (inclusive) and 1 (exclusive)
// console.log(randomNumber);


// 3. You have to create a dice in JavaScript with the use of pseudo-random number.
// answer
// Simulate rolling a six-sided dice
// var diceRoll = Math.floor(Math.random() * 6) + 1;

// console.log("You rolled a " + diceRoll);



// 4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.
// answer

// Simulate a coin toss (50% chance of heads or tails)
// var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

// console.log("The coin landed on: " + coinToss);



// Chapter 28, 29 (Converting Strings)



// 1. How do you convert a string to an integer in JavaScript?
// answer
// var str = "42"; // Your string containing the number
// var intValue = parseInt(str, 10); // Converts the string to an integer in base 10
// it str conver into number = 42


// 2. Write a JavaScript function to convert the string "123" to an integer.
// answer
// function stringToInteger(str) {
//   return parseInt(str, 10);
// }

// var result = stringToInteger("123"); // Result will be the integer 123


// 3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?
// answer
// var str = "3.14";
// var floatValue = parseFloat(str); // Converts the string "3.14" to a floating-point number


// 4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?
// answer
// var str = "42";
// if (!isNaN(str)) {
  // The string can be successfully converted to a number
//   var numberValue = parseFloat(str); // Perform the conversion
// }
// Result will be the integer 42

// var str = "42";
// var numberValue = parseFloat(str);
// if (!isNaN(numberValue)) {
  // The string can be successfully converted to a number
// }
// Result will be the integer 42


// 5. How can you convert a number to a string in JavaScript?
// answer

// var num = 42;
// var str = num.toString(); // Converts the number 42 to the string "42"

// var num = 42;
// var str = num + ""; // Converts the number 42 to the string "42"



// 6. Write a JavaScript function to convert the number 42 to a string.
// answer

// function numberToString(num) {
//   return num.toString();
// }

// var result = numberToString(42); // Result will be the string "42"



// 7. Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?
// answer
// var str = "3.14";
// var intValue = parseInt(str, 10); // Converts "3.14" to the integer 3

// Chapter 30 (Controlling the length of 
// decimals)



// 1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
// answer
// var num = 3.14159265; // Replace with your number
// var newNum = num.toFixed(4).toString();
// console.log(newNum);
// it is fixed value is 3.1416


// 2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
// answer

// var yourNumber = 3.14159; // Replace with your number
// yourNumber = parseFloat(yourNumber.toFixed(2));
// console.log(yourNumber);
// it is yourNumber  is 3.14

// 3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.
// answer

// if (num.toFixed(2).toString().length > 4) {
  // Your code here
// }


// 4. Assign a number with many decimal places to a variable.Code an alert that displays the number rounded to 2 decimal places and converted to a string.
// answer

// var numberWithManyDecimals = 12.3456789; // Replace with your number
// var roundedString = numberWithManyDecimals.toFixed(2).toString();
// alert(roundedString);
// it is value 12.35



// Chapter 31 - 34 (Date & Time)




// 1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
// answer
// var dObj = new Date();
// Date Fri Sep 15 2023 14:23:16 GMT+0500 (Pakistan Standard Time)


// 2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
// answer

// var dStr = new Date().toString();
// console.log(dStr);
// Fri Sep 15 2023 14:24:00 GMT+0500 (Pakistan Standard Time)

// 3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.
// answer
// var d = new Date(); // Create a Date object (you can replace this with your Date object)
// var day = d.toLocaleDateString('en-US', { weekday: 'long' }); // Extract and assign the day of the week
//friday


// 4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
// answer
// var day = new Date().getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(dayNames[day]);



// 5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
// answer

// var now = new Date(); // Create a Date object for the current date and time

// var year = now.getFullYear(); // Get the year (e.g., 2023)
// var month = now.getMonth() + 1; // Get the month (0-11, so add 1 for January-December)
// var day = now.getDate(); // Get the day of the month (1-31)
// var hours = now.getHours(); // Get the hour (0-23)
// var minutes = now.getMinutes(); // Get the minutes (0-59)
// var seconds = now.getSeconds(); // Get the seconds (0-59)
// var milliseconds = now.getMilliseconds(); // Get the milliseconds (0-999)
// var dayOfWeek = now.getDay(); // Get the day of the week (0=Sunday, 1=Monday, ..., 6=Saturday)

// // Print or use these variables as needed
// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Day: " + day);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);
// console.log("Milliseconds: " + milliseconds);
// console.log("Day of the Week: " + dayOfWeek);



// 6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.
// answer

// var later = new Date(2020, 11, 31);
// Date Thu Dec 31 2020 00:00:00 GMT+0500 (Pakistan Standard Time)

// 7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
// answer

// var specificDate = new Date(1992, 1, 2);
// Date Sun Feb 02 1992 00:00:00 GMT+0500 (Pakistan Standard Time)


// 8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.
// answer

// var referenceDate = new Date(1970, 0, 1);
// var beginningOf1980 = new Date(1980, 0, 1);
// var millisecondsElapsed = beginningOf1980 - referenceDate;
// alert(millisecondsElapsed);




// 9. How do you change the year of a date in JavaScript?
// answer

// var myDate = new Date(); // Create a Date object

// // Change the year to 2022
// myDate.setFullYear(2022);

// console.log(myDate); // Check the updated date


// 10. Write a JavaScript function to change the month of a given date to January.
// answer

// function changeMonthToJanuary(date) {
//   date.setMonth(0); // January is represented by index 0
//   return date;
// }

// // Example usage:
// var myDate = new Date(); // Create a Date object
// changeMonthToJanuary(myDate); // Change the month to January
// console.log(myDate); // Check the updated date



// 11. What is the method to change the day of the week for a specific date in JavaScript?
// answer

// function changeDayOfWeek(date, newDay) {
//   var currentDay = date.getDay(); 
//   // Get the current day of the week (0=Sunday, 1=Monday, ..., 6=Saturday)
//   var dayDifference = newDay - currentDay; 
//   // Calculate the difference between the current day and the desired day

//   // Add or subtract days to change the day of the week
//   date.setDate(date.getDate() + dayDifference);
//   return date;
// }

// // Example usage:
// var myDate = new Date(); // Create a Date object
// changeDayOfWeek(myDate, 4); // Change to Thursday (0=Sunday, 1=Monday, ..., 6=Saturday)
// console.log(myDate); // Check the updated date


// 12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
// answer

// function changeMinutesToSpecificValue(time) {
//   var newMinutes = prompt("Enter the new minutes:");
//   if (newMinutes !== null) {
//     newMinutes = parseInt(newMinutes, 10); // Convert input to an integer
//     if (!isNaN(newMinutes) && newMinutes >= 0 && newMinutes < 60) {
//       time.setMinutes(newMinutes);
//       return time;
//     } else {
//       alert("Invalid input. Please enter a valid minute value (0-59).");
//     }
//   }
//   return null; // Return null if the user cancels or enters an invalid input
// }

// // Example usage:
// var myTime = new Date(); // Create a Date object representing the current time
// changeMinutesToSpecificValue(myTime); // Change the minutes to a specific value
// console.log(myTime); // Check the updated time



// 13. Write a JavaScript function to add a specific number of hours to a given time.
// answer

// function addHoursToTime(time, hoursToAdd) {
//   time.setHours(time.getHours() + hoursToAdd);
//   return time;
// }

// // Example usage:
// var myTime = new Date(); // Create a Date object representing the current time
// addHoursToTime(myTime, 2); // Add 2 hours
// console.log(myTime); // Check the updated time




// 14. You have to create a age calculator in JavaScript.
// answer

// function calculateAge(birthdate) {
//   var currentDate = new Date(); // Get the current date
//   var birthDate = new Date(birthdate); // Parse the birthdate

//   // Calculate the age
//   var age = currentDate.getFullYear() - birthDate.getFullYear();

//   // Check if the birthday hasn't occurred yet this year
//   if (
//     currentDate.getMonth() < birthDate.getMonth() ||
//     (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
//   ) {
//     age--; // Subtract 1 from age
//   }

//   return age;
// }

// // Example usage:

// var birthdate = "1990-01-15"; // Replace with the birthdate in "YYYY-MM-DD" format
// var age = calculateAge(birthdate);
// console.log("Age: " + age);


// Chapter 35 - 37 (Functions)



// 1. Code the first line of a function displayAlert.
// answer

// function displayAlert() {
//   // First line of the function
//   // Add your code here
// }



// 2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
// answer
// function askName() {
//   var userName = prompt("Enter name");
//   // You can use userName within this function
// }


// 3. Code a function that calls 2 other functions.
//answer
// function callTwoFunctions() {
//   // Call the first function
//   firstFunction();

//   // Call the second function
//   secondFunction();
// }


// 4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
// answer
// function promptAndAlertName() {
//   var name = prompt("Enter name");
//   alert("You entered: " + name);
// }

// // Call the function
// promptAndAlertName();


// 5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
//answer
// function concat(alpha1, alpha2, alpha3, variable, str, num) {
//   // First line of the function
//   // Add your code here
// }


// 6. Code a function that has 2 parameters. Concatenate them and  assign the result to a variable that hasn't been declared  beforehand.
//answer
// function concatenateStrings(str1, str2) {
//   var result = str1 + str2;
//   return result;
// }

// 7. Code a function that has three parameters. Multiply them and  assign them to a variable that hasn't been declared yet.
//answer
// function multiplyThreeNumbers(num1, num2, num3) {
//   var result = num1 * num2 * num3;
//   return result;
// }

// 8. Write a JavaScript function that takes an array of numbers as  input and returns the average of those numbers.
//answer
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0; // Handle the case of an empty array
  }

  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

// Example usage:
var numbersArray = [10, 20, 30, 40, 50];
var average = calculateAverage(numbersArray);
console.log("Average: " + average);


// 9. Write a JavaScript function that takes two parameters and returns  their sum.
//answer
// function addNumbers(a, b) {
//   return a + b;
// }



// 10. Write a JavaScript function that takes an array of numbers as  input and returns the average of those numbers.

// function calculateAverage(numbers) {
//   if (numbers.length === 0) {
//     return 0; // Return 0 for an empty array to avoid division by zero
//   }

//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum / numbers.length;
// }

// // Example usage:
// var numbersArray = [10, 20, 30, 40, 50];
// var average = calculateAverage(numbersArray);
// console.log("Average: " + average);

// 11. You have to capture the returned value from a function and  store it in a variable?
//answer
// Function that returns a value
// function addNumbers(a, b) {
//   return a + b;
// }

// Capture the returned value in a variable
// var result = addNumbers(5, 10);

// // Now, 'result' contains the returned value from the function
// console.log(result); // Output will be 15


// 12. Write a function which tells letter counts of (word).
//answer

// function countLetters(word) {
//   // Remove spaces and non-alphabetical characters from the word
//   word = word.replace(/[^a-zA-Z]/g, '');
  
//   // Return the length of the cleaned word, which represents the letter count
//   return word.length;
// }

// // Example usage:
// var word = "Hello, World!"; // Replace with your word
// var letterCount = countLetters(word);
// console.log("Letter Count: " + letterCount);


// 13. Write a function to set (year) in date object.
//answer
// function setYearInDate(date, year) {
//   date.setFullYear(year);
//   return date;
// }

// // Example usage:
// const currentDate = new Date(); // Create a new Date object with the current date and time
// const targetYear = 2022; // The year you want to set
// const modifiedDate = setYearInDate(currentDate, targetYear);

// console.log(modifiedDate); // The modified Date object with the year set to 2022



// 14. Write a function which tells the age of a person who Born on (dateOfBirth)
//answer
// function calculateAge(dateOfBirth) {
//   const dob = new Date(dateOfBirth);
//   const currentDate = new Date();
  
//   const yearsDiff = currentDate.getFullYear() - dob.getFullYear();
  
//   // Check if the birthday for this year has already occurred
//   if (
//     currentDate.getMonth() < dob.getMonth() ||
//     (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
//   ) {
//     return yearsDiff - 1; // Subtract 1 if the birthday hasn't occurred yet this year
//   } else {
//     return yearsDiff;
//   }
// }

// // Example usage:
// const dateOfBirth = "1990-05-15";
// const age = calculateAge(dateOfBirth);
// console.log(`The person is ${age} years old.`);


// 15. Write a function which tells the presense of (word) in an  array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false
//answer
// function isWordInArray(word, array) {
//   return array.includes(word);
// }

// const wordToCheck = "raza";
// const namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];

// const isPresent = isWordInArray(wordToCheck, namesArray);
// console.log(isPresent); // Will log 'true' if 'raza' is present, 'false' otherwise



// 16. Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)
//answer
// function repeatLetter(letter, times) {
//   if (times <= 0) {
//     return ''; // Return an empty string if times is non-positive
//   }
//   return letter.repeat(times);
// }

// const letterToRepeat = 'a';
// const repeatedString = repeatLetter(letterToRepeat, 10);
// console.log(repeatedString); // Output: 'aaaaaaaaaa'



// 17. write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse()
//answer
// function reverseArray(arr) {
//   return arr.reverse();
// }

// const originalArray = ['a', 'b', 'c', 'd', 'e'];
// const reversedArray = reverseArray(originalArray);

// console.log(reversedArray); // Output: ['e', 'd', 'c', 'b', 'a']



































































// Chapter 38 (Local vs. Global Variables)


// 1. Write a JavaScript function that demonstrates the usage of a local variable.

// function localVariableDemo() {
//   // Declare and initialize a local variable
//   var localVar = "I'm a local variable";
  
//   // Use the local variable
//   console.log(localVar);
  
//   // You can perform operations with the local variable
//   var squaredValue = localVar + localVar;
//   console.log(squaredValue);
// }

// // Call the function
// localVariableDemo();

// Attempting to access the local variable from outside the function will result in an error
// console.log(localVar); // This line will produce an error


// 2. How can you access a global variable inside a function in JavaScript?

// Global variable
// var globalVar = "I'm a global variable";

// function accessGlobalVariable() {
//   // Access the global variable inside the function
//   console.log(globalVar);
// }

// accessGlobalVariable(); // Call the function to access the global variable


// Chapter 39, 40 (Switch Statements)



// 1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.


// var fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("You selected apple.");
//     break;
//   case "banana":
//     console.log("You selected banana.");
//     break;
//   case "orange":
//     console.log("You selected orange.");
//     break;
//   default:
//     console.log("Sorry, we don't have that fruit.");
// }


// 2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.


// var cityName = prompt("Enter a city name:");

// switch (cityName) {
//   case "Karachi":
//     alert("You entered New York.");
//     break;
//   case "Islamabad":
//     alert("You entered Los Angeles.");
//     break;
//   case "Lahore":
//     alert("You entered Chicago.");
//     break;
//   default:
//     alert("The city you entered is not recognized.");
// }
