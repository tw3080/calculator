const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const displayText = document.querySelector('#display-text');
let displayValue = 0;
let operatorValue = '';

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

const getNumber = function(button) {
    displayValue = button.value;
    displayText.textContent += displayValue;
}

const getOperator = function(button) {
    operatorValue = button.value;
    displayText.textContent += operatorValue;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        getNumber(button);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        getOperator(button);
    });
});

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         displayValue = button.value;
//         displayText.textContent += displayValue;
//         console.log(displayValue);
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener('click', function(e) {
//         console.log(e);
//     });
// });