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
const characterLength = document.querySelector("#characterLengthValue");
const level1 = document.querySelector("#level1");
const level2 = document.querySelector("#level2");
const level3 = document.querySelector("#level3");
const level4 = document.querySelector("#level4");
const strengthLevelLabel = document.querySelector("#strengthLevelLabel");
const copyButton = document.querySelector("#copyButton");
const passwordCopied =document.querySelector("#passwordCopied");

let passwordGenerated = false;

const optionsArray = [uppercaseLettersCheckbox, lowercaseLettersCheckbox, numbersCheckbox, symbolsCheckbox];


function getRandomIndex(array) {

    const min = 0;
    const max = array.length - 1;

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function strengthLevel() {
    let filtered = optionsArray.filter(option => option.checked);

    level1.style.setProperty('background-color', 'transparent');
    level2.style.setProperty('background-color', 'transparent');
    level3.style.setProperty('background-color', 'transparent');
    level4.style.setProperty('background-color', 'transparent');

    strengthLevelLabel.textContent = "";

    

    switch (filtered.length) {
        case 1:
            level1.style.setProperty('background-color', 'var(--red-500)');

            strengthLevelLabel.textContent = "WEAK";
            break;
        case 2:
            level1.style.setProperty('background-color', 'var(--orange-400)');
            level2.style.setProperty('background-color', 'var(--orange-400)');

            strengthLevelLabel.textContent = "FAIR";
            break;
        case 3:
            level1.style.setProperty('background-color', 'var(--yellow-300)');
            level2.style.setProperty('background-color', 'var(--yellow-300)');
            level3.style.setProperty('background-color', 'var(--yellow-300)');

            strengthLevelLabel.textContent = "MEDIUM";
            break;
        case 4:
            level1.style.setProperty('background-color', 'var(--green-200)');
            level2.style.setProperty('background-color', 'var(--green-200)');
            level3.style.setProperty('background-color', 'var(--green-200)');
            level4.style.setProperty('background-color', 'var(--green-200)');

            strengthLevelLabel.textContent = "STRONG";
            break;
    }
}

function updateRangeInput() {
    const rangeMaxValue = Number(characterLengthValue.max);
    const rangeMinValue = Number(characterLengthValue.min);
    const rangeValue = Number(characterLengthValue.value);

    characterLength.textContent = rangeValue;

    let percentage = ((rangeValue - rangeMinValue) / (rangeMaxValue - rangeMinValue) * 100);
    
    characterLengthValue.style.setProperty("--range-value", percentage);
}

function copyPassword() {
    if(passwordGenerated) {
        navigator.clipboard.writeText(passwordText.textContent);

        passwordCopied.classList.remove('hidden');
    }
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

    passwordGenerated = true;
    passwordCopied.classList.add('hidden');

    passwordText.textContent = password;
    passwordText.style.color = "#E6E5EA";
}

characterLengthValue.addEventListener("input", updateRangeInput);
generatePasswordButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);

optionsArray.forEach(option => {
    option.addEventListener("change", strengthLevel);
})

updateRangeInput();