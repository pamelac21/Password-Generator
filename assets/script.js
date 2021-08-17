// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyx";
var number = "0123456789";
var symbol = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

// Get references to the #generate element
  var generateBtn = document.querySelector("#generate"); 
  
  var PasswordLength;
  var confirmLowerCase;
  var confirmUpperCase;
  var confirmNumber;
  var confirmSymbol;
  var userChoices;
  
  
//code to make sure a character is selected

  
  
  // Write password to the #password input
  function writePassword(passwordLength, confirmLowerCase, confirmUpperCase, confirmNumber, confirmSymbol) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  function generatePassword() {
//person->program storage of answers using var

    var passwordLength = window.prompt("Password length: choose between 8 and 128 characters.");
    console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required Value");
  } else if (passwordLength <8 || passwordLength >128) {
    passwordLength = window.prompt("You must choose between 8 and 128");
    
  } else {

    var confirmLowerCase = window.confirm("Would you like to include lower case letters?");
    console.log("Lower case " + confirmLowerCase);

    var confirmUpperCase = window.confirm("Would you like to include upper case letters?")
    console.log("Upper case " + confirmUpperCase);

    var confirmNumber = window.confirm("Would you like to include numbers?");
    console.log("Number " + confirmNumber);

    var confirmSymbol = window.confirm("Would you like to include special characters?");
    console.log("Symbol " + confirmSymbol);
  ;

  // No answer then
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSymbol) {
    userChoices = alert("You must select one!");
    
  }}
  let password = '';
  let userChoices = [];
  if (confirmLowerCase) password += lowerCase;
    
  if (confirmUpperCase) password += upperCase;
    
  if (confirmNumber) password += number;
  
  if (confirmSymbol) password += symbol;
  
  const allChoices = []
  let returnPassword = '';
  for (var i = 0; i < passwordLength; i++) {
    returnPassword = returnPassword+password[Math.floor(Math.random() * password.length)]

  }
  
  return returnPassword;

}

