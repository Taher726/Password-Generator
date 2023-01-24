const pw = document.getElementById("pw");
const pwLength = document.getElementById("length");
const pwUpper = document.getElementById("upper");
const pwLower = document.getElementById("lower");
const pwNumbers = document.getElementById("num");
const pwSym = document.getElementById("sym");
const pwButton = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers="0123456789";
let symbols="~!@#$%^&*()_+=|";

function getLowerCase(){
    /*To get random letter from lower string*/
    return lower[Math.floor(Math.random() * lower.length)];
}
function getUpperCase(){
    /*To get random letter from upper string*/
    return upper[Math.floor(Math.random() * upper.length)];
}
function getNumber(){
    /*To get a random number from numbers string*/
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols(){
    /*To get a random symbol from symbols string*/
    return symbols[Math.floor(Math.random() * symbols.length)];
}

/*Function to generate the password*/
function generatePassword(){
    /*Get password length from input*/
    let len=pwLength.value;
    let password="";
    for(let i=0;i<len;i++){
        let letter=generateLetter();
        password+=letter;
    }
    pw.innerText=password;
}

/*Function return one letter to add it to password*/
function generateLetter(){
    let letter=[];
    if(pwUpper.checked){
        letter.push(getUpperCase());
    }
    if(pwLower.checked){
        letter.push(getLowerCase());
    }
    if(pwNumbers.checked){
        letter.push(getNumber());
    }
    if(pwSym.checked){
        letter.push(getSymbols());
    }
    if(letter.length==0) return"";
    /*Choose one letter from the list*/
    return letter[Math.floor(Math.random() * letter.length)];
}

/*When user clicks the generate button we will call generatePassword function*/
pwButton.addEventListener("click",generatePassword);
/*To copy the password*/
copyBtn.addEventListener("click",()=>{
    const password = pw.innerText;
    /*Add password to clipboard*/
    navigator.clipboard.writeText(password);
    alert("Password copied!!");
})