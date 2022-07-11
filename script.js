function add (a, b) {
    return +a + +b;
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

function operate ([a, operator, b]) {
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
        if (b==='0') {
            return 'Impossible'
        }
        else {
        return total = divide (a, b);
    }}
}

const nums = document.querySelectorAll('.num');
const symbols = document.querySelectorAll('.symbol');
const display = document.querySelector('.display');
const btnequals = document.querySelector('#equals');
const btnclear = document.querySelector('#clear');

let memory = '';
let formula = [];

nums.forEach(item => {
    item.addEventListener('click', () => {
    if (formula.length === 2 && memory !== 'digit'|| memory === 'reset') {
        display.textContent = '';
    }
    display.textContent += item.textContent;
    memory = 'digit';
    
    })
})

symbols.forEach(item => {
    item.addEventListener('click', () => {
    memory = display.textContent
    display.textContent = item.textContent;
    formula.push(memory);
    if (formula.length === 3) {
        formula.join();
        display.textContent = operate(formula);
        memory = display.textContent;
        formula = [display.textContent, item.textContent];
    }
    else {
        formula.push(item.textContent)
        memory = ''
    }
    })
})

btnequals.addEventListener('click', () => {
    formula.push(display.textContent);
    formula.join();
    display.textContent = operate(formula);
    if (display.textContent > 9999999999) {
        display.textcontent = 'too long!'
    }
    memory = 'reset';
    formula = [];
});

btnclear.addEventListener('click', () => {
    display.textContent = '';
    memory = 'reset';
    formula = [];
})

