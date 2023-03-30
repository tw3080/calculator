const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
let displayValue = display.textContent;
let operand1;
let operand2;
let operatorChoice;
let isOperator;


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
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

const updateDisplay = function(value) {
    if (displayValue === '0' || isOperator) {
        displayValue = value;
    } else {
        displayValue += value;
    }

    display.textContent = displayValue;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (/[0-9]/.test(button.value)) {
            updateDisplay(button.value);
            isOperator = false;
        }

        if (
            button.value === 'add' ||
            button.value === 'subtract' ||
            button.value === 'multiply' ||
            button.value === 'divide'
        ) {
            operand1 = displayValue;
            operatorChoice = button.value;
            isOperator = true;

            console.log(`Operand 1: ${operand1}`);
            console.log(`Operator: ${operatorChoice}`);
        }

        if (button.value === 'equals') {
            operand2 = displayValue;
            display.textContent = operate(operatorChoice, operand1, operand2);

            console.log(`Operand 2: ${operand2}`);
            console.log(`Result: ${operate(operatorChoice, operand1, operand2)}`);
        }
    });
});