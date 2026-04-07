const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [ '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '{', '}' ];

const characterLengthValue = document.querySelector("#characterLength");
const uppercaseLettersCheckbox = document.querySelector("#uppercaseLetters");
const lowercaseLettersCheckbox = document.querySelector("#lowercaseLetters");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");

const generatePasswordButton = document.querySelector("#generatePassword");

function generatePassword() {
    let pool = [];

    if(uppercaseLettersCheckbox.checked) {
        pool = [...pool, ...uppercaseLetters];
    }

    if(lowercaseLettersCheckbox.checked){
        pool = [...pool, ...lowercaseLetters];
    }

    if(numbersCheckbox.checked) {
        pool = [...pool, ...numbers];
    }

    if(symbolsCheckbox.checked) {
        pool = [...pool, ...symbols];
    }

    console.log(pool);
}


generatePasswordButton.addEventListener("click", generatePassword);