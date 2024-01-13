const textInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', toRoman);


function toRoman() {
    let textInput = document.getElementById('number').value;
    const textOutput = document.getElementById('output');

    const romanArabicTable = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
    
    let romanNum = '';
    if (textInput === '') {
        textOutput.innerHTML = `Please enter a valid number`;
    } else if (textInput < 0) {
        textOutput.innerHTML = `Please enter a number greater than or equal to 1`;
    } else if (textInput > 3999) {
        textOutput.innerHTML = `Please enter a number less than or equal to 3999`;
    } else {
        for (const key in romanArabicTable) {
            const arabicValue = romanArabicTable[key];

            while (arabicValue <= textInput) {
                textInput -= arabicValue;
                romanNum += key;
            }
        }
        textOutput.innerHTML = `${romanNum}`;
    }
}