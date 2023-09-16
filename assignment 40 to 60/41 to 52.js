// Chapter 41, 42 (while loops, do…while 
// loops)

// (All Questions must be done with both loops)

// 1. Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0.
// answer
// Using a while loop

// let i = 0;
// let count = 0;
// while (count < 2) {
  // Your code here (nothing in this case)
//   count++;
// }

// Using a do...while loop

// let i = 0;
// let count = 0;
// do {
  // Your code here (nothing in this case)
//   count++;
// } while (count < 2);


// 2. Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter. Break out of the loop when it's found.
// var animals=["horse", "ox", "cow", "pig", "duck"];
// answer
// Using a while loop
// let animals = ["horse", "ox", "cow", "pig", "duck"];
// let i = 0;
// while (i < animals.length) {
//   if (animals[i] === "pig") {
//     alert("Found it!");
//     break;
//   }
//   i++;
// }

// Using a do...while loop
// let animals = ["horse", "ox", "cow", "pig", "duck"];
// let i = 0;
// do {
//   if (animals[i] === "pig") {
//     alert("Found it!");
//     break;
//   }
//   i++;
// } while (i < animals.length);


// 3. Code to use a while & do while loop to print the numbers from 1 to 10.
// answer
// Using a while loop
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Using a do...while loop
// let j = 1;
// do {
//   console.log(j);
//   j++;
// } while (j <= 10);


// 4. To use a while loop to ask the user for a number and then print that number back to them.
// answer
// let userInput;
// while (true) {
//   userInput = prompt("Please enter a number:");
  
  // Check if the user clicked the cancel button or entered an empty string
//   if (userInput === null || userInput === "") {
//     alert("Invalid input. Please enter a valid number.");
//   } else {
    // Parse the user input to ensure it's a number
//     const number = parseFloat(userInput);
    
    // Check if the parsed input is a valid number
//     if (!isNaN(number)) {
//       console.log("You entered: " + number);
//     } else {
//       alert("Invalid input. Please enter a valid number.");
//     }
//   }
// }


// 5. To use a while loop to check if a number is even or odd.
// answer

// let userInput;
// let isNumber = false;

// while (!isNumber) {
//   userInput = prompt("Please enter a number:");
  
  // Check if the user clicked the cancel button
//   if (userInput === null) {
//     alert("Input canceled. Exiting loop.");
//     break; // Exit the loop if the user cancels
//   }
  
  // Attempt to parse the user input into a number
//   const number = parseFloat(userInput);
  
  // Check if the parsed input is a valid number
//   if (!isNaN(number)) {
//     if (number % 2 === 0) {
//       alert(number + " is even.");
//     } else {
//       alert(number + " is odd.");
//     }
//     isNumber = true; // Set the flag to exit the loop
//   } else {
//     alert("Invalid input. Please enter a valid number.");
//   }
// }


// 6. Create a guessing game where the user has to guess a number between 1 and 100. 
// answer
// const minNumber = 1;
// const maxNumber = 100;
// const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// let attempts = 0;
// let isGuessCorrect = false;

// while (!isGuessCorrect) {
//   const userInput = prompt(`Guess the number between ${minNumber} and ${maxNumber}:`);
//   attempts++;

//   if (userInput === null) {
//     alert("Game canceled.");
//     break;
//   }

//   const userGuess = parseInt(userInput);

//   if (!isNaN(userGuess)) {
//     if (userGuess < minNumber || userGuess > maxNumber) {
//       alert("Please enter a number within the specified range.");
//     } else if (userGuess < secretNumber) {
//       alert("Too low. Try again.");
//     } else if (userGuess > secretNumber) {
//       alert("Too high. Try again.");
//     } else {
//       alert(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
//       isGuessCorrect = true;
//     }
//   } else {
//     alert("Invalid input. Please enter a valid number.");
//   }
// }


// 7. Use a while & do-while loop to create a countdown timer?
// answer
// Using a while loop:
// let countdown = 10;

// while (countdown >= 0) {
//   console.log("Countdown: " + countdown);
//   countdown--;
// }


// Using a do-while loop:

// let countdown2 = 10;

// do {
//   console.log("Countdown: " + countdown2);
//   countdown2--;
// } while (countdown2 >= 0);

// Chapter 46, 48 (Events)
// 1. Create a simple event that prints a message when the user clicks on an element.
// answers

// function showMessage() {
//       alert("Element clicked!");
//     }


// 2. Create an event that hides an element when the user clicks on a different element
// answers

//  function hideElement() {
//       document.getElementById("elementToHide").classList.add("hidden");
//     }




// 3. Create a link that changes color when the user hovers over it and then back to its original color when the user moves the mouse away.
// answers

//     const link = document.getElementById("myLink");

    // Function to change the link color on hover
//     function changeColorOnHover() {
//       link.style.color = "red";
//     }

    // Function to change the link color back to the original color
//     function changeColorOnMouseOut() {
//       link.style.color = "blue";
//     }

    // Attach event listeners
//     link.addEventListener("mouseover", changeColorOnHover);
//     link.addEventListener("mouseout", changeColorOnMouseOut);




// 4. Create an event that scrolls to the top of the page when the user clicks on a link.
// answers

 // Function to scroll to the top of the page
//     function scrollToTop() {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth" // Add smooth scrolling animation
//       });
//     }




// 5. Create a link that plays a sound when the user clicks on it.
// answers

 // Function to play the sound
//     function playSound() {
//       const audio = new Audio('sound.mp3'); // Replace 'sound.mp3' with your audio file
//       audio.play();
//     }




// 6. Create a simple link that opens a new window when clicked.
// answers


// Function to open a new window
//     function openNewWindow() {
//       window.open('https://www.youtube.com', '_blank'); // Replace the URL with the desired website
//     }

// 7. Create a simple button that alert a message when clicked.
// answers

// Function to display an alert message
//     function showAlert() {
//       alert("Button clicked! This is your message.");
//     }





// 8. Create a button that changes color when the user hovers over it.
// answers
// Function to change the button's color on hover
//     function changeColorOnHover() {
//       const button = document.getElementById("myButton");
//       button.style.backgroundColor = "red";
//     }

    // Function to change the button's color back to the default
//     function changeColorOnMouseOut() {
//       const button = document.getElementById("myButton");
//       button.style.backgroundColor = "blue";
//     }





// 9. Create a button that plays a sound when the user clicks on it.
// answers
// repeat question no #05
//  same answer 05





// 10. Create an event that alert a message when the user moves the mouse over an element.
// answers
// Function to display an alert message on mouseover
//     function showAlertOnMouseOver() {
//       alert("Mouse over the element!");
//     }





// 11. Create an event that hides an element when the user moves the mouse out of it.
// answers

// Function to hide the element on mouseout
//     function hideElementOnMouseOut() {
//       const element = document.getElementById("elementToHide");
//       element.style.display = "none";
//     }




// 12. Create a link that opens a new window when the user clicks on it and then closes the window when the user clicks on a close button in the new window. The size of the new window should be determined by the user's mouse position.
// answers


// let newWindow;

    // Function to open a new window
//     function openNewWindow() {
      // Calculate the window size based on the mouse position
//       const mouseX = event.clientX;
//       const mouseY = event.clientY;
//       const windowWidth = Math.min(window.innerWidth - mouseX - 10, 400);
//       const windowHeight = Math.min(window.innerHeight - mouseY - 10, 300);

      // Open the new window with calculated size and a simple HTML content
//       newWindow = window.open('', '_blank', `width=${windowWidth},height=${windowHeight}`);

      // Write the content of the new window
//       newWindow.document.write(`
//         <html>
//         <head>
//           <title>New Window</title>
//         </head>
//         <body>
//           <h1>New Window Content</h1>
//           <button onclick="closeWindow()">Close</button>
//         </body>
//         </html>
//       `);
//     }

    // Function to close the new window
//     function closeWindow() {
//       if (newWindow) {
//         newWindow.close();
//       }
//     }


// Chapter 49, 50 (Reading and Setting 
// field values)


// 1. Read the value of a user Input and print it to the console.
//answer
// Read user input and print it
// var userInput = prompt("Enter something:");
// console.log("You entered: " + userInput);

// 2. Read the value of a checkbox and print it to the console
//answer
// function printCheckboxValue() {
  // Select the checkbox element by its ID
//   var checkbox = document.querySelector('#myCheckbox');

  // Check if the checkbox is checked
//   if (checkbox.checked) {
//     console.log("Checkbox is checked");
//   } else {
//     console.log("Checkbox is not checked");
//   }
// }



// 3. Read the value of a select box and print it to the console.

// function printSelectedValue() {
  // Select the <select> element by its ID
//   var selectElement = document.querySelector('#mySelect');
  
  // Get the selected value from the <select> element
//   var selectedValue = selectElement.value;

  // Print the selected value to the console
//   console.log("Selected value: " + selectedValue);
// }


// 4. Place some text in a field. Make up an id for the field.
//answer
// function addDynamicField() {
  // Create a new input element
//   var inputField = document.createElement("input");

  // Generate a unique ID for the field (for example, a timestamp)
//   var uniqueID = "field_" + Date.now();

  // Set the ID for the input field
//   inputField.setAttribute("id", uniqueID);

  // Set some text as the initial value
//   inputField.value = "This is some text";

  // Append the input field to the body or any other desired location in the DOM
//   document.body.appendChild(inputField);
// }


// 5. Ask the user about Martial Status. If the variable married is false,place the value "available" in the field with the id "status"

// function updateStatus() {
//   // Get the user's marital status from the select element
//   var maritalStatusSelect = document.getElementById("maritalStatus");
//   var maritalStatus = maritalStatusSelect.value;

//   // Check if the user is not married (maritalStatus is "no")
//   if (maritalStatus === "no") {
//     // Set the "status" input field to "available"
//     var statusField = document.getElementById("status");
//     statusField.value = "available";
//   }
// }


// 6. If a input is empty, fill it with a string
//answer
// Function to fill the input field
// function fillInput() {
//   var inputElement = document.getElementById("myInput");
  
//   // Check if the input value is empty
//   if (inputElement.value.trim() === "") {
//     inputElement.value = "Default Value";
//   }
// }

// // Add an event listener to automatically fill the input field
// document.getElementById("myInput").addEventListener("blur", fillInput);

// 7. Create a Registeration Form with Validation
//answer
//  function validateForm() {
//             // Reset error messages
//             document.getElementById("firstNameError").textContent = "";
//             document.getElementById("lastNameError").textContent = "";
//             document.getElementById("emailError").textContent = "";
//             document.getElementById("passwordError").textContent = "";

//             // Get form values
//             var firstName = document.getElementById("firstName").value;
//             var lastName = document.getElementById("lastName").value;
//             var email = document.getElementById("email").value;
//             var password = document.getElementById("password").value;

//             // Validation rules
//             var nameRegex = /^[A-Za-z]+$/;
//             var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//             // Validate first name
//             if (!firstName.match(nameRegex)) {
//                 document.getElementById("firstNameError").textContent = "Invalid first name";
//                 return false;
//             }

//             // Validate last name
//             if (!lastName.match(nameRegex)) {
//                 document.getElementById("lastNameError").textContent = "Invalid last name";
//                 return false;
//             }

//             // Validate email
//             if (!email.match(emailRegex)) {
//                 document.getElementById("emailError").textContent = "Invalid email address";
//                 return false;
//             }

//             // Validate password (minimum length 8 characters)
//             if (password.length < 8) {
//                 document.getElementById("passwordError").textContent = "Password must be at least 8 characters long";
//                 return false;
//             }

//             return true; // Form is valid
//         }



// Chapter 51 (Reading and Setting paragraph text)

// 1. How can I create a paragraph that expands when the user clicks on a Show More?
//annswer
// function toggleContent() {
//   var showMore = document.getElementById("showMore");
//   var showMoreButton = document.getElementById("showMoreButton");

//   if (showMore.style.display === "none") {
//     showMore.style.display = "inline";
//     showMoreButton.textContent = "Show Less";
//   } else {
//     showMore.style.display = "none";
//     showMoreButton.textContent = "Show More";
//   }
// }


// 2. Read the text of a paragraph and use it to search for a specific word or phrase.
//annswer
// function searchText() {
//             // Get the paragraph element by its ID
//             var paragraph = document.getElementById("paragraph");

//             // Get the user's search input
//             var searchInput = document.getElementById("searchInput").value;

//             // Convert paragraph text to lowercase for case-insensitive search
//             var paragraphText = paragraph.textContent.toLowerCase();

//             // Convert search input to lowercase for case-insensitive search
//             searchInput = searchInput.toLowerCase();

//             // Check if the paragraph text contains the search input
//             if (paragraphText.includes(searchInput)) {
//                 document.getElementById("result").textContent = "The word or phrase was found in the paragraph.";
//             } else {
//                 document.getElementById("result").textContent = "The word or phrase was not found in the paragraph.";
//             }
//         }


// 3. Read the text of a paragraph and use it to find the longest word.
//annswer


// 4. Set the text of a paragraph to the value of a text field, but only if the value is not empty.
//annswer


// 5. Set the text of a paragraph to the value of a text field, but only if the value is equal to a specific word or phrase.
//annswer
//  function setTextFromField() {
//             // Get the text field element by its ID
//             var textField = document.getElementById("textField");

//             // Get the value of the text field
//             var inputValue = textField.value;

//             // Get the paragraph element by its ID
//             var outputParagraph = document.getElementById("outputParagraph");

//             // Check if the input value is not empty
//             if (inputValue.trim() !== "") {
//                 // Set the text of the paragraph to the input value
//                 outputParagraph.textContent = inputValue;
//             } else {
//                 // Clear the paragraph text if the input value is empty
//                 outputParagraph.textContent = "";
//             }
//         }

// 6. Set the text of a paragraph to the value of a text field, but only if the value is less than a certain length.
//annswer

// function setTextFromField() {
//             // Get the text field element by its ID
//             var textField = document.getElementById("textField");

//             // Get the value of the text field
//             var inputValue = textField.value;

//             // Define the maximum allowed length
//             var maxLength = 10; // Change this to your desired length

//             // Get the paragraph element by its ID
//             var outputParagraph = document.getElementById("outputParagraph");

//             // Check if the input value is less than the maximum length
//             if (inputValue.length <= maxLength) {
//                 // Set the text of the paragraph to the input value
//                 outputParagraph.textContent = inputValue;
//             } else {
//                 // Clear the paragraph text if the input value exceeds the maximum length
//                 outputParagraph.textContent = "";
//             }
//         }



// Chapter 52 (Manipulating Images and 
// Text)



// 1. When the user clicks on the sentence, it turns bold.
// answer
//  function makeBold() {
//             var sentence = document.getElementById("sentence");
            
//             // Toggle the 'bold' class to make the text bold or normal
//             if (sentence.classList.contains("bold")) {
//                 sentence.classList.remove("bold");
//             } else {
//                 sentence.classList.add("bold");
//             }
//         }

// 2. How can I make an image disappear when the user hovers over it and show text instead? When the user hovers off the image, the original image should reappear.
// answer
// var imageContainer = document.getElementById("imageContainer");
//         var image = document.getElementById("image");
//         var imageText = document.getElementById("imageText");

//         imageContainer.addEventListener("mouseover", function() {
//             image.style.display = "none";
//             imageText.style.display = "block";
//         });

//         imageContainer.addEventListener("mouseout", function() {
//             image.style.display = "block";
//             imageText.style.display = "none";
//         });

// 3. When the user mouses over the heading, its background turns black, but it retains its original light gray color
// answer
//  function changeBackgroundColor(element) {
//             element.style.backgroundColor = "black";
//         }

//         function restoreBackgroundColor(element) {
//             element.style.backgroundColor = "lightgray";
//         }

// 4. When user hover to a paragraph, Add a underline style to text.
// answer

//  function addUnderline(element) {
//             element.style.textDecoration = "underline";
//         }

//         function removeUnderline(element) {
//             element.style.textDecoration = "none";
//         }

// Chapter 52 (Swapping Images)


// 1. Swap the images when the user clicks on a button.
//answer


// var image = document.getElementById("image");
//         var image1 = "image/1.jpg";
//         var image2 = "image/2.jpg";
//         var currentImage = image1;

//         function swapImage() {
//             if (currentImage === image1) {
//                 image.src = image2;
//                 currentImage = image2;
//             } else {
//                 image.src = image1;
//                 currentImage = image1;
//             }
//         }

