var passwordLength;
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = '123456780';
var symbols = '~!@#$%^&*()_+{}|][';
var uppercaseLetters = lowercaseLetters.toUpperCase(); // converts lowercase letters to uppercase
var lowercaseLettersArray = lowercaseLetters.split(''); // converts letters in a string to an array with those letters (e.g. ['a', 'b', 'c', ...])
var numbersArray = numbers.split('');
var symbolsArray = symbols.split('');
var uppercaseLettersArray = uppercaseLetters.split('');



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// define generatePassword
function generatePassword(){
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
    var randChar = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randChar];
  }
  return password;
}

function getPrompts () {

  choiceArr = [];
  // Prompt for password length 
  passwordLength = parseInt(prompt("Please select a password length between 8 and 128"));
  console.log(passwordLength); {
    if ( passwordLength  < 8 || passwordLength > 128) {
      return alert("Password length must be between 8 to 128 characters, please enter a different number");
    } 

    if (confirm("Do you want to include LOWERCASE characters")) {
      choiceArr = choiceArr.concat(lowercaseLettersArray);
      console.log(choiceArr);
    } 

    if (confirm("Do you want to include UPPERCASE characters")) {
    choiceArr = choiceArr.concat(uppercaseLettersArray);
    console.log(choiceArr);
    } 

    if (confirm("Do you want to include NUMBERS characters")) {
      choiceArr = choiceArr.concat(numbersArray);
    console.log(choiceArr);
    }

    if (confirm("Do you want to include SPECIAL characters")) {
      choiceArr = choiceArr.concat(symbolsArray);
    console.log(choiceArr);
    }
     return true;
  }; 
}


 