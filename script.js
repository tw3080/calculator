const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
// const decimalButton
const equalsButton = document.querySelector('#equals');
const displayText = document.querySelector('#display-text');
let firstNumber = '';
let secondNumber = '';
let operatorValue = '';
let displayValue = '';

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, a, b) {
    return operator(a, b);
}

// const getNumber = function(button) {
//     firstNumber += button.value;
//     console.log(`First number: ${firstNumber}`);

//     return firstNumber;
// }

// const getOperator = function(button) {

// }

// const getOperator = function(button) {
//     operatorValue = button.value;
//     displayText.textContent = operatorValue;
// }

const updateDisplay = function(value) {
    displayValue += value;
    displayText.textContent = displayValue;
    console.log(`Display value: ${displayValue}`);
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.value);
        // const number = getNumber(button);
        // updateDisplay(number);

        // updateDisplay(getNumber(button));
    });
});

// operatorButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         firstNumber = displayValue;
//         console.log(`First number: ${firstNumber}`);
//         operatorValue = button.value;
//         updateDisplay(button.innerText);
//     });
// });