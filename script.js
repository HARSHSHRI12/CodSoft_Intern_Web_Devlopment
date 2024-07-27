let display = document.getElementById('display');

function appendNumber(number) {
    display.innerText += number;
}

function appendOperator(operator) {
    switch (operator) {
        case '1/x':
            display.innerText = `1/(${display.innerText})`;
            break;
        case 'x²':
            display.innerText = `(${display.innerText})**2`;
            break;
        case '2√x':
            display.innerText = `Math.sqrt(${display.innerText})`;
            break;
        case '+/-':
            display.innerText = `-${display.innerText}`;
            break;
        default:
            display.innerText += ` ${operator} `;
    }
}

function clearDisplay(type) {
    if (type === 'CE') {
        // Clear the current entry (last number)
        let currentText = display.innerText.trim();
        let lastSpace = currentText.lastIndexOf(' ');
        if (lastSpace !== -1) {
            display.innerText = currentText.substring(0, lastSpace).trim();
        } else {
            display.innerText = '';
        }
    } else if (type === 'C') {
        // for all clear
        display.innerText = '';
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('x', '*'));
    } catch (e) {
        display.innerText = 'Error';
    }
}
