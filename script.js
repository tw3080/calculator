const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
let num1;
let num2;
let operatorChoice;
let result;
let isOperator;
let displayValue = display.textContent;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '.' && displayValue.includes('.')) {
            return;
        }
        
        if (/[0-9\.]/.test(button.value)) {
            updateDisplay(button.value);
            isOperator = false;
        }

        if (
            button.value === 'add' ||
            button.value === 'subtract' ||
            button.value === 'multiply' ||
            button.value === 'divide'
        ) {
            isOperator = true;

            if (!num1 || !operatorChoice) {
                num1 = +displayValue;
            } else {
                evaluate();

                num1 = result;
            }

            operatorChoice = button.value;
        }

        if (button.value === 'equals') {
            isOperator = true;

            if (!num1 || !operatorChoice) {
                return;
            } else {
                evaluate();

                operatorChoice = '';
            }
        }

        if (button.value === 'clear') {
            clear();
        }
    });
});

const evaluate = function() {
    if (operatorChoice === 'divide' && displayValue === '0') {
        updateDisplay(`Oops, you can't divide by 0!`);
        return;
    }

    num2 = +displayValue;
    result = operate(operatorChoice, num1, num2);

    updateDisplay(result);
}

const updateDisplay = function(value) {
    if (displayValue === '0' || isOperator) {
        displayValue = value;
    } else {
        displayValue += value;
    }

    display.textContent = displayValue;
}

const clear = function() {
    num1 = '';
    num2 = '';
    operatorChoice = '';
    result = '';
    display.textContent = '0';
}

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