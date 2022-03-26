
var characterLength = 8 - 128;

var choiceArr = [];

var specialCharArr = [',.!@#$%^&();'];
var lowerCaseArr = ['abcdefghijklmnopqrstuvwxyz'];
var upperCaseArr = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numberArr = ['1234567890'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

if (correctPrompts) {
    var newPassword = generatePassword ();
    var passwordText = document.querySelector("password");
    
    passwordText.value = newPassword;
}
function generatePassword (){

var password = "";
for (var i = 0; i <characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr [randomIndex];
}
    return password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

}

if(characterLength < 8 || characterLength > 128);





















