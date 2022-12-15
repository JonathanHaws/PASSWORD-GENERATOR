
var generateBtn = document.querySelector("#generate"); // Get references to the #generate element

function generatePassword(lowercase, uppercase, numbers, special, passwordlength){
  var bank=""; // Creates empty bank of characters and adds to it based on paremeters
  if(lowercase){bank+="abcdefghijklmnopqrstuvwxyz";}
  if(uppercase){bank+="ABCDEFGHIJKLMNOPQRTSTUVWXYZ";}
  if(numbers){bank+="0123456789";}
  if(special){bank+="!@#$%^&*";}

  password=""; //loops through entire thing 
  for(var i=0;i<passwordlength;i++){
    password+=(bank.charAt(Math.floor(Math.random()*bank.length)));            
  }

  return(password);
}

function writePassword() { // Write password to the #password input
  var lowercase=document.querySelector("#lowercase");lowercase = lowercase.checked;// Get Checked Value Of Lowercase
  var uppercase=document.querySelector("#uppercase");uppercase = uppercase.checked;// Get Checked Value Of Uppercase
  var numbers=document.querySelector("#numbers");numbers = numbers.checked;// Get Checked Value Of Numbers
  var special=document.querySelector("#special");special = special.checked;// Get Checked Value Of Special
  var passwordlength=document.querySelector("#passwordlength");passwordlength = passwordlength.value;// Get Length Value

  var password = generatePassword(lowercase,uppercase,numbers,special,passwordlength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function tick(){
  var passwordlength=document.querySelector("#passwordlength");passwordlength = passwordlength.value;// Get Length Value
  var passwordlengthnumber=document.querySelector("#passwordlengthnumber");// Get Slider Reporter and update ot
  passwordlengthnumber.innerHTML = passwordlength;
}

setInterval(tick,30);

generateBtn.addEventListener("click", writePassword); // Add event listener to generate button




