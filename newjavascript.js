let resultField = document.getElementById('result');
let currentInput = '';
let previousInput = '';
let operation = '';

function appendToResult(value) {
    currentInput += value;
    resultField.value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let total;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            total = prev + current;
            break;
        case '-':
            total = prev - current;
            break;
        case '*':
            total = prev * current;
            break;
        case '/':
            total = prev / current;
            break;
        default:
            return;
    }
    
    currentInput = total;
    operation = '';
    previousInput = '';
    resultField.value = currentInput;
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operation = '';
    resultField.value = '';
}
