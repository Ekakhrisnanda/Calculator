// basic math functions
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// get elements
const display = document.querySelector('#display-container');
const buttons = document.querySelectorAll('button');

// variables to store the value
let firstNum = null;
let operator = null;
let secondNum = null;


const calculation = buttons.forEach(button => button.addEventListener('click', function() {
    let buttonValue = this.innerHTML;

    if (!isNaN(buttonValue)) {
        display.innerHTML += buttonValue;
    } else if (buttonValue === '+') {
        firstNum = parseFloat(display.innerHTML);
        operator = buttonValue;
        display.innerHTML = '';
    } else if (buttonValue === '-') {
        firstNum = parseFloat(display.innerHTML);
        operator = buttonValue;
        display.innerHTML = '';
    } else if (buttonValue === 'x') {
        firstNum = parseFloat(display.innerHTML);
        operator = buttonValue;
        display.innerHTML = '';
    } else if (buttonValue === ':') {
        firstNum = parseFloat(display.innerHTML);
        operator = buttonValue;
        display.innerHTML = '';
    } else if (buttonValue === '=') {
        secondNum = parseFloat(display.innerHTML);
        let result = operate(firstNum, secondNum);
        display.innerHTML = result;
    }
}));

const operate = function(firstNum, secondNum) {
    switch(operator) {
        case '+':
            return add(firstNum, secondNum);
            break;
        case '-':
            return substract(firstNum, secondNum);
            break;
        case 'x':
            return multiply(firstNum, secondNum);
            break;
        case ':':
            return divide(firstNum, secondNum);
    }
}