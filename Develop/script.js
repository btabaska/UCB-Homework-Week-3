// Assignment Code
//Creates a variable that stores the html for the Generate Password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Creates a variable password and assigns it the return value of generatePassword
  var password = generatePassword();
  //Creates a variable that stores the html for the password readonly text area
  var passwordText = document.querySelector("#password");

  //assigns the value of that html to the password variable
  passwordText.value = password;
}

// Add event listener to generate button
//listens for when the generateBtn variable we created is clicked and then runs the writePassword function
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var gatheredInformation = gatherUserInput();
  for (let i = 0; i < gatheredInformation[0]; i++) {
    console.log(i);
  }
}

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

  if (
    checkComplexity(
      passwordLower,
      passwordUpper,
      passwordNumeric,
      passwordSpecial
    ) == true
  ) {
    return [
      passwordLength,
      passwordLower,
      passwordUpper,
      passwordNumeric,
      passwordSpecial,
    ];
  }

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
        "You have entered a number that is not a whole number. Please try again with a whole number."
      );
      return false;
    } else {
      return true;
    }
  }
}
