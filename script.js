function add (a, b) {
    return a+b;
}
function subtract (a, b) {
    return a-b;
}
function multiply (a, b) {
    return a*b;
}
function divide (a, b) {
    return a / b;
}

function operate (a, operator, b) {
    if (operator==='+') {
        return total = add(a, b);
    }
    else if (operator==='-') {
        return total = subtract(a, b);
    }
    else if (operator==='*') {
        return total = multiply (a, b);
    }
    else if (operator==='/') {
        return total = divide (a, b);
    }
}

const display = document.querySelector('.display');
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const btn6 = document.querySelector('#six');
const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');
const btn0 = document.querySelector('#zero');


btn1.addEventListener('click', () => {
    display.textContent += '1';
})

btn2.addEventListener('click', () => {
    display.textContent += '2';
})

btn3.addEventListener('click', () => {
    display.textContent += '3';
})

btn4.addEventListener('click', () => {
    display.textContent += '4';
})

btn5.addEventListener('click', () => {
    display.textContent += '5';
})

btn6.addEventListener('click', () => {
    display.textContent += '6';
})

btn7.addEventListener('click', () => {
    display.textContent += '7';
})

btn8.addEventListener('click', () => {
    display.textContent += '8';
})

btn9.addEventListener('click', () => {
    display.textContent += '9';
})

btn0.addEventListener('click', () => {
    display.textContent += '0';
})


