// Assignment Code
var generateBtn = document.querySelector("#generate");
var password=document.getElementById("password");
var passwordLength = [];
var password = "";

const keys= {
lowerCase: "abcdefghijklmnopqrstuvwxyz",
upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
symbol:    "!@#$%^&*()/\|}{][+=:;<>",
number:    "0123456789",
}

/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


for (var i = 0; i <=passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}

document.getElementById("password").value = password;  */

const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)]
  }
]


function createPassword () {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked; 
  if (upper + lower + number + symbol === 0) {
    alert('Please check atleast one box!');
    return; 
  }
  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.lentgh)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordBox.innerhtml = password; 
}