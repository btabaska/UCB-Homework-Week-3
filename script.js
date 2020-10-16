// Assignment Code
//Creates a variable that stores the html for the Generate Password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Creates a variable password and assigns it the return value of generatePassword
  var password = generatePassword();

  //added to validate that the returned data of the function call doesnt write undefined to the screen
  if (password != undefined) {
    //Creates a variable that stores the html for the password readonly text area
    var passwordText = document.querySelector("#password");

    //assigns the value of that html to the password variable
    passwordText.value = password;
  }
}

// Add event listener to generate button
//listens for when the generateBtn variable we created is clicked and then runs the writePassword function
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //Calls a function to gather input from user
  var gatheredInformation = gatherUserInput();
  //Create the password variable as an empty object
  var password = "";
  //Create i for my while loop
  i = 0;
  //check my returned array is not undefined
  if (gatheredInformation != undefined) {
    //while i is less than the user defined password length
    while (i < gatheredInformation[4]) {
      randomCharacter();

      //this function creates a switch statement based off a random number 0-4
      function randomCharacter() {
        switch (getRandomInt(4)) {
          //each of these maps to a complexity option, it appends a random character of that complexity group, then increments it
          //TODO: This is not the fastest way of doing this. Each time the case is not true, the loop runs again which lowers efficency.
          case 0:
            if (gatheredInformation[0]) {
              password += getRandomLetter().toLowerCase();
              i++;
            }
          case 1:
            if (gatheredInformation[1]) {
              password += getRandomLetter().toUpperCase();
              i++;
            }
          case 2:
            if (gatheredInformation[2]) {
              password += getRandomInt(10);
              i++;
            }
          case 3:
            if (gatheredInformation[3]) {
              password += getRandomSpecial();
              i++;
            }
        }
      }
    }
    //returns the finished password object
    return password;
  }
}

//This is used to gather the user input through a series of prompts
function gatherUserInput() {
  var passwordLength = parseInt(
    prompt(
      "Please enter a length for the password. \n[Between 8 and 128 characters] "
    )
  );
  var passwordLower = confirm(
    "Would you like your password to require a lower case character?"
  );
  var passwordUpper = confirm(
    "Would you like your password to require an upper case character?"
  );
  var passwordNumeric = confirm(
    "Would you like your password to require a numeric character?"
  );
  var passwordSpecial = confirm(
    "Would you like your password to require a special character?"
  );
  //If all are true it returns all of the choices in an array
  if (
    checkComplexity(
      passwordLower,
      passwordUpper,
      passwordNumeric,
      passwordSpecial
    ) == true
  ) {
    return [
      passwordLower,
      passwordUpper,
      passwordNumeric,
      passwordSpecial,
      passwordLength,
    ];
  }
  //This function validates that not all complexity choices are false, then runs the checklength function to validate that.

  function checkComplexity(a, b, c, d) {
    if (a == false && b == false && c == false && d == false) {
      alert(
        "You must select at least one option to enhance the complexity of your password."
      );
      return false;
    } else if (checkLength(passwordLength) == false) {
      return false;
    } else {
      return true;
    }
  }
  //This checks that the password length is correct, that it is a number and that it is a whole number
  function checkLength(passwordLength) {
    if (typeof passwordLength != "number") {
      alert(
        "The entry you provided could not be converted to a number. Please contact the site administrator"
      );
      return false;
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert(
        "Your password length is outside the acceptable range [Between 8 and 128 characters"
      );
      return false;
    } else if (passwordLength % 1 != 0) {
      alert(
        "What you have entered is not a number in the supported range. Please try again with a whole number between 8 and 128 "
      );
      return false;
    } else {
      return true;
    }
  }
}

//Random Integer generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//Random Letter generator
function getRandomLetter() {
  letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[getRandomInt(25)];
}
//random special generator
function getRandomSpecial() {
  special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return special[getRandomInt(30)];
}
