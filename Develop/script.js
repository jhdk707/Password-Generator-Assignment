// Assignment Code
var generateBtn = document.querySelector("#generate");

// define generatePassword
function generatePassword(){
console.log("Button Click")
// Prompt for password length 
var passwordLength = prompt("Please select a password length between 8 and 128");
console.log(passwordLength); {
if (passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be between 8 to 128 characters, please enter a different number");
}};

// Prompt for Upper Case 
var incUpperCase = prompt("Please enter 'YES' or 'NO' if you want to include UPPERCASE characters");
console.log(incUpperCase);

// Prompt for Numbers 
var incNumbers = prompt("Please enter 'YES' or 'NO' if you want to include NUMBERS characters");
console.log(incNumbers);

// Prompt for Special
var incSpecial = prompt("Please enter 'YES' or 'NO' if you want to include SPECIAL characters");
console.log(incSpecial);

//Display Answer 
return "Generated Password will go here!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}