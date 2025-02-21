const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    let curreText = display.value;
    display.value = curreText.slice (0, curreText.length - 1);
}

function calculateResult() {
    if (display.value !== '') {
        try {
            let expression = display.value
              .replace(/(\d+(\.\d+)?)%/g, '$1/100') 
              .replace(/:/g, '/') 
              .replace(/x/g, '*'); 
            display.value = eval(expression);
        } catch (e) {
            display.value = 'erorr!';
        }
    } else {
        display.value = 'empty!';
        setTimeout (() => { 
            display.value = '';
        }, 2000)
    }
}

function appendToDisplay(value) {
    if (value === '*') {
        display.value += 'x';
    } else if (value === '/') {
        display.value += ':'
    } else {
        display.value += value;
    }
}

buttons.forEach ((button) => {
    button.onclick = () => {
        if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'backspace') { 
            deleteLastCharacter();
        } else if (button.id === 'equal') {
            calculateResult();
        } else {
            appendToDisplay(button.id);
        }
    }
})