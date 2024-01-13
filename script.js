const textInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', toRoman);


function toRoman(num) {
    let textInput = document.getElementById('number').value;
    const textOutput = document.getElementById('output');

    const arabicNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    let romanNum = '';

    if (textInput === '') {
        textOutput.innerHTML = `Please enter a valid number`;
    } else if (textInput < 0) {
        textOutput.innerHTML = `Please enter a number greater than or equal to 1`;
    } else if (textInput > 3999) {
        textOutput.innerHTML = `Please enter a number less than or equal to 3999`;
    } else {
        for (let i = 0; i < arabicNumeral.length; i++) {
            while (arabicNumeral[i] <= num) {
              romanNum += romanNumeral[i];
              num -= arabicNumeral[i]; 
            }
        } 
        return romanNum;
    }
}