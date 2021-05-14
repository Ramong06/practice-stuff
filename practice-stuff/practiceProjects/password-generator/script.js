// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i',  'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// must prompt user for password choices
const getPasswordOptions = () => {
  var length = parseInt(prompt('How many characters?'));


// conditional statement to check password length is a number. prompts end if false.
if (isNaN(length) === true) {
  alert('You did not choose correctly');
  return;
};

// conditional to check if length chosen is less than 8
if (length < 8) {
  alert('Your password needs to contain more than 8 characters');
};

// conditional to check if length is not more than 32
if (length > 32) {
  alert('Your password needs to contain less than 32 characters.');
};

// variable to see if the user chooses special characters
  var hasSpecialCharacters = confirm('Would you like to use Special Characters?');
  var hasNumericCharacters = confirm('Would you like to use Numbers?');
  var hasUpperCasedCharacters = confirm('Would you like to use Upper Cased Characters?');
  var hasLowerCasedCharacters = confirm('Would you like to use Lower Cased Characters?');

  // conditional statement to check if user does not choose any types of characters.
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasLowerCasedCharacters === false
  ) {
    alert('You must choose at least 1 character type');
    }
  
  // Create an object to store user Input.
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters
  };

  return passwordOptions;

};

// This function will grab random elements from an array of characters
const getRandom = (arr) => {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
const generatePassword = () => {
  var options = getPasswordOptions();
  //Variable to store password as it's being concatenated.
  var result = [];
  //Array to contain one of each type of chosen character to ensure each will be used
  var possibleCharacters = [];
  //Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  //conditional that adds array of special characters into array of possible characters based on user input
  // push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  return result.join('');

};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// creates variable for generate button
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

