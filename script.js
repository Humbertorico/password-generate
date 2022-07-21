var charachterslength = 8;
var choiceArr = [];

var specialcharA = ["!", "@", "#", "$", "%", "^", "&", "*", "(","(","[","]","?","/","<",">"];
var lowercaseA = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberA = ['1','2',"3","4","5","6","7","8","9","0",];

// Assignment Code
var generateBtn = document.querySelector('#generate');


generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var correctprompts = getpromtps();
  var passwordText = document.querySelector('#password');

  if (correctprompts) {
      var newpassword = generatePassword();
      passwordText.value = newpassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  
  var password = "";
  for(var i = 0; i < charachterslength; i++) {
      var randomeindex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomeindex];
    }
  
  // TODO: add code to generate the password here

  return password;
}
// Add event listener to generate button

function getpromtps(){

  choiceArr = [];

  charachterslength = parseInt(prompt("how many characters do you want your password to be?(8 - 128 characters"));
  if(isNaN(charachterslength)|| charachterslength < 8 || charachterslength > 128) {
    alert("characters length has to be a number , 8 - 128. please try again.");
    return false;
  } 
   if (confirm("would you like lowercase letter in your password?")) {
    choiceArr = choiceArr.concat(lowercaseA);
   }
   if (confirm("would you like Uppercase letter in your password?")) {
    choiceArr = choiceArr.concat(uppercaseA);
    } 
   if (confirm("would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(specialcharA);
   }   
   if (confirm("would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberA)
   }
   return true;
}
