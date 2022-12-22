// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
prompt("Please select a password length between 8 and 128");
prompt("Please enter 'YES' or 'NO' if you want to include UPPERCASE characters");
prompt("Please enter 'YES' or 'NO' if you want to include NUMBERS characters");
prompt("Please enter 'YES' or 'NO' if you want to include SPECIAL characters")
}
