// Assignment code here https://www.net-comber.com/charset.html <meta charset="ISO-8859-1">
//var passwordLength = ">= 8 && <= 128";
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


if (confirmLowerCase === true) {
    userChoices += lowerCase;
}
  
if (confirmUpperCase === true) {
    userChoices += upperCase;
}
  
if (confirmNumber === true) {
    userChoices += number;
}
  
if (confirmSymbol === true) {
    userChoices += symbol;
}
  
  
  // Write password to the #password input
  function writePassword() {
    var userChoices = '';
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
    for (var i = 0; i < passwordLength; i++) {
        var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
        generatePassword(allChoices);
  }
    
    return allChoices;}

   // document.getElementById("textarea").value = generatePassword(password);


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  function generatePassword() {
    passwordLength = prompt("Password length: choose between 8 and 128 characters.");
    console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required Value");
  } else if (passwordLength <8 || passwordLength >128) {
    passwordLength = prompt("You must choose between 8 and 128");
    //console.log("Password length " + passwordLength);
  } else {

    confirmLowerCase = confirm("Would you like to include lower case letters?");
    console.log("Lower case " + confirmLowerCase);

    confirmUpperCase = confirm("Would you like to include upper case letters?")
    console.log("Upper case " + confirmUpperCase);

    confirmNumber = confirm("Would you like to include numbers?");
    console.log("Number " + confirmNumber);

    confirmSymbol = confirm("Would you like to include special characters?");
    console.log("Symbol " + confirmSymbol);

  ;
  
  
  // No answer then
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSymbol) {
    userChoices = alert("You must select one!");
  }}}