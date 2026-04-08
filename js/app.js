const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [ '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '{', '}', '|' ];

const characterLengthValue = document.querySelector("#characterLength");
const uppercaseLettersCheckbox = document.querySelector("#uppercaseLetters");
const lowercaseLettersCheckbox = document.querySelector("#lowercaseLetters");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");

const passwordText = document.querySelector("#password-text");

const generatePasswordButton = document.querySelector("#generatePassword");

function getRandomIndex(array) {

    const min = 0;
    const max = array.length - 1;

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePassword() {
    let pool = [];
    let password = "";
    const iteration = Number(characterLengthValue.value);

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

    if(pool.length === 0) {
        return;
    }

    if(iteration === 0) {
        return;
    }

    for(let i = 0; i < iteration; i++) {
        let randomIndex = getRandomIndex(pool);

        password += pool[randomIndex];
    }

    passwordText.textContent = password;
    passwordText.style.color = "#E6E5EA";
}


generatePasswordButton.addEventListener("click", generatePassword);