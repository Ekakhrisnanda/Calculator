const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const displayNumber = 0;

const display = function(x) {
    document.getElementById('display-container').innerHTML += x;
}

const operate = function(a, b, operator) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return substract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case ':':
            return divide(a, b);
    }
}